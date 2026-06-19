# Implementasi Supabase untuk UNPAM Space

## 1. Setup Awal

1. Buat akun di https://supabase.com, buat project baru (pilih region Singapore untuk latensi terbaik dari Indonesia).
2. Setelah project jadi, simpan 3 hal dari **Project Settings > API**:
   - `Project URL`
   - `anon public key` (dipakai di frontend, aman untuk di-expose)
   - `service_role key` (HANYA dipakai di backend Express, jangan pernah taruh di frontend — ini bisa bypass semua security rule)
3. Buka **SQL Editor** di dashboard Supabase untuk jalankan schema di bawah.

---

## 2. Database Schema (SQL)

Jalankan di Supabase SQL Editor. Schema ini mencakup users, event, marketplace, kos, temuan, dan forum.

```sql
-- ============================
-- EXTENSION (untuk UUID & geo)
-- ============================
create extension if not exists "uuid-ossp";

-- ============================
-- USERS (custom, terpisah dari auth.users Supabase jika pakai JWT sendiri)
-- ============================
create table users (
  id uuid primary key default uuid_generate_v4(),
  nim varchar(20) unique not null,
  nama varchar(100) not null,
  email varchar(100) unique not null,
  password_hash varchar(255) not null,
  foto_profil text,
  prodi varchar(100),
  role varchar(20) default 'mahasiswa', -- mahasiswa, admin
  created_at timestamp default now()
);

-- ============================
-- EVENT
-- ============================
create table events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade, -- pembuat event
  judul varchar(150) not null,
  deskripsi text,
  lokasi varchar(200),
  tanggal_mulai timestamp not null,
  tanggal_selesai timestamp,
  poster_url text,
  kategori varchar(50),
  created_at timestamp default now()
);

create table event_peserta (
  id uuid primary key default uuid_generate_v4(),
  event_id uuid references events(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  status varchar(20) default 'terdaftar',
  created_at timestamp default now(),
  unique(event_id, user_id)
);

-- ============================
-- MARKETPLACE
-- ============================
create table marketplace_listings (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  judul varchar(150) not null,
  deskripsi text,
  harga numeric(12,2) not null,
  kategori varchar(50),
  kondisi varchar(20), -- baru, bekas
  foto_urls text[], -- array URL foto
  status varchar(20) default 'tersedia', -- tersedia, terjual
  created_at timestamp default now()
);

-- ============================
-- KOS
-- ============================
create table kos_listings (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade, -- pemilik/pengelola
  nama_kos varchar(150) not null,
  deskripsi text,
  alamat text not null,
  latitude double precision,
  longitude double precision,
  harga_bulanan numeric(12,2),
  fasilitas text[],
  foto_urls text[],
  kontak varchar(50),
  created_at timestamp default now()
);

-- ============================
-- TEMUAN (barang hilang/temuan)
-- ============================
create table temuan_barang (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  tipe varchar(20) not null, -- hilang, ditemukan
  nama_barang varchar(150) not null,
  deskripsi text,
  lokasi varchar(200),
  tanggal_kejadian date,
  foto_url text,
  status varchar(20) default 'belum_selesai', -- belum_selesai, selesai
  created_at timestamp default now()
);

-- ============================
-- FORUM
-- ============================
create table forum_threads (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  judul varchar(200) not null,
  konten text not null,
  kategori varchar(50),
  created_at timestamp default now()
);

create table forum_comments (
  id uuid primary key default uuid_generate_v4(),
  thread_id uuid references forum_threads(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  konten text not null,
  created_at timestamp default now()
);

-- ============================
-- INDEX untuk performa query
-- ============================
create index idx_events_tanggal on events(tanggal_mulai);
create index idx_marketplace_kategori on marketplace_listings(kategori);
create index idx_kos_lokasi on kos_listings(latitude, longitude);
create index idx_temuan_tipe on temuan_barang(tipe);
create index idx_forum_comments_thread on forum_comments(thread_id);
```

### Row Level Security (RLS)

Supabase mengaktifkan RLS secara default kalau tabel diakses lewat Supabase client di frontend. Karena auth kamu custom JWT (bukan Supabase Auth), opsi paling aman dan simpel untuk hackathon:

```sql
-- Matikan RLS dan akses Supabase HANYA lewat backend Express (service_role key)
-- Frontend tidak langsung connect ke Supabase, semua lewat API Express kamu
alter table users disable row level security;
alter table events disable row level security;
alter table event_peserta disable row level security;
alter table marketplace_listings disable row level security;
alter table kos_listings disable row level security;
alter table temuan_barang disable row level security;
alter table forum_threads disable row level security;
alter table forum_comments disable row level security;
```

Pendekatan ini berarti: **Supabase di sini dipakai sebagai database PostgreSQL + storage saja**, bukan auto-API langsung ke frontend. Ini paling cocok karena kamu sudah punya backend Express dengan JWT custom — lebih aman dan arsitekturnya tetap konsisten dengan rencana awal (frontend Next.js tidak pernah tahu kredensial database).

---

## 3. Implementasi di Backend (Express.js)

### Install dependency

```bash
cd backend
npm install @supabase/supabase-js dotenv
```

### `.env` (backend)

```
SUPABASE_URL=https://xxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key-here
JWT_SECRET=your-jwt-secret-here
```

### `backend/lib/supabase.js`

```javascript
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Pakai service_role key di backend — JANGAN pernah expose ke frontend
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = supabase;
```

### Contoh route: `backend/routes/event.js`

```javascript
const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');
const authMiddleware = require('../middleware/auth.middleware');

// GET semua event
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('events')
    .select('*, users(nama, foto_profil)')
    .order('tanggal_mulai', { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// GET detail event by id
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('events')
    .select('*, users(nama, foto_profil), event_peserta(count)')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).json({ error: 'Event tidak ditemukan' });
  res.json(data);
});

// POST buat event baru (perlu login)
router.post('/', authMiddleware, async (req, res) => {
  const { judul, deskripsi, lokasi, tanggal_mulai, tanggal_selesai, kategori } = req.body;

  const { data, error } = await supabase
    .from('events')
    .insert([{
      user_id: req.user.id, // dari JWT payload
      judul, deskripsi, lokasi, tanggal_mulai, tanggal_selesai, kategori
    }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

// POST daftar jadi peserta event
router.post('/:id/daftar', authMiddleware, async (req, res) => {
  const { data, error } = await supabase
    .from('event_peserta')
    .insert([{ event_id: req.params.id, user_id: req.user.id }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

module.exports = router;
```

### Upload foto pakai Supabase Storage (`backend/routes/marketplace.js`)

```javascript
const express = require('express');
const router = express.Router();
const multer = require('multer');
const supabase = require('../lib/supabase');
const authMiddleware = require('../middleware/auth.middleware');

const upload = multer({ storage: multer.memoryStorage() });

// POST buat listing dengan upload foto
router.post('/', authMiddleware, upload.array('foto', 5), async (req, res) => {
  const fotoUrls = [];

  // Upload tiap foto ke Supabase Storage bucket "marketplace"
  for (const file of req.files) {
    const fileName = `${Date.now()}-${file.originalname}`;
    const { error: uploadError } = await supabase.storage
      .from('marketplace')
      .upload(fileName, file.buffer, { contentType: file.mimetype });

    if (uploadError) return res.status(500).json({ error: uploadError.message });

    const { data: urlData } = supabase.storage
      .from('marketplace')
      .getPublicUrl(fileName);

    fotoUrls.push(urlData.publicUrl);
  }

  const { judul, deskripsi, harga, kategori, kondisi } = req.body;

  const { data, error } = await supabase
    .from('marketplace_listings')
    .insert([{
      user_id: req.user.id,
      judul, deskripsi, harga, kategori, kondisi,
      foto_urls: fotoUrls
    }])
    .select()
    .single();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
});

module.exports = router;
```

**Setup bucket storage**: di dashboard Supabase, buka **Storage**, buat bucket baru bernama `marketplace`, `kos`, `temuan`, dan `profil` (pisah per fitur), set ke **public** supaya foto bisa diakses langsung lewat URL tanpa auth tambahan.

---

## 4. Implementasi di Frontend (Next.js)

Frontend **tidak** connect langsung ke Supabase. Semua request tetap lewat backend Express (lebih aman, dan JWT custom kamu tetap jadi satu-satunya gerbang auth). Frontend cukup panggil API Express seperti biasa.

### `frontend/lib/api.ts`

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // contoh: http://localhost:5000/api
});

api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```

### Contoh fetch event di `app/event/page.tsx`

```typescript
import api from '@/lib/api';

async function getEvents() {
  const res = await api.get('/event');
  return res.data;
}

export default async function EventPage() {
  const events = await getEvents();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {events.map((event: any) => (
        <div key={event.id} className="border rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-lg">{event.judul}</h3>
          <p className="text-gray-500 text-sm">{event.lokasi}</p>
        </div>
      ))}
    </div>
  );
}
```

### Upload foto dari frontend (FormData ke Express, bukan ke Supabase langsung)

```typescript
import api from '@/lib/api';

async function createListing(formData: FormData) {
  const res = await api.post('/marketplace', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
}
```

---

## 5. Ringkasan Alur Data

```
Next.js (frontend)
   ↓  axios request + JWT token
Express.js (backend)
   ↓  validasi JWT, lalu query
Supabase (PostgreSQL + Storage)
```

Poin penting: hanya backend yang punya `service_role key` Supabase. Frontend hanya tahu URL API Express sendiri, jadi kredensial database tidak pernah bocor ke browser, dan kamu tetap bisa pakai JWT custom sesuai rencana awal tanpa konflik dengan sistem auth Supabase.
