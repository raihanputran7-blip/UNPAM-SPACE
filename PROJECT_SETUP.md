# Unpam Space

Platform digital terpadu untuk mahasiswa Universitas Pamulang.

Monorepo:
- `frontend/` — Next.js (App Router) + TypeScript + Tailwind + Framer Motion
- `backend/` — Express + Supabase (PostgreSQL & Storage) + JWT

## Menjalankan (Development)

### Backend
```bash
cd backend
cp .env.example .env   # isi kredensial Supabase & JWT_SECRET
npm install
npm run dev            # http://localhost:4000
```

### Frontend
```bash
cd frontend
cp .env.example .env   # set NEXT_PUBLIC_API_URL
npm install
npm run dev            # http://localhost:3000
```

## Status
Fase 0 (setup) selesai. Lihat `UnpamSpace_Implementation_Plan.md` untuk tahapan & pembagian tugas.
