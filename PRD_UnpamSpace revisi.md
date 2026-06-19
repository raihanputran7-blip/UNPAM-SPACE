# Product Requirements Document (PRD)
# Unpam Space — Platform Digital Mahasiswa Universitas Pamulang

**Versi:** 1.1  
**Tanggal:** Juni 2026 (revisi: penambahan model monetisasi Unpam Space+ & Boost, migrasi tech stack ke Next.js + Supabase)  
**Status:** Draft — Hackathon Submission  
**Tim:** Hacker (2), Hipster (1), Hustler (1)

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Latar Belakang & Permasalahan](#2-latar-belakang--permasalahan)
3. [Tujuan Produk](#3-tujuan-produk)
4. [Target Pengguna](#4-target-pengguna)
5. [Fitur & Persyaratan Fungsional](#5-fitur--persyaratan-fungsional)
6. [Sistem Verifikasi & Keamanan](#6-sistem-verifikasi--keamanan)
7. [Alur Pengguna (User Flow)](#7-alur-pengguna-user-flow)
8. [Persyaratan Non-Fungsional](#8-persyaratan-non-fungsional)
9. [Arsitektur Teknologi](#9-arsitektur-teknologi)
10. [Prioritas Fitur MVP](#10-prioritas-fitur-mvp)
11. [Metrik Keberhasilan](#11-metrik-keberhasilan)
12. [Roadmap Pengembangan](#12-roadmap-pengembangan)
13. [Risiko & Mitigasi](#13-risiko--mitigasi)

---

## 1. Ringkasan Eksekutif

**Unpam Space** adalah platform digital terpadu yang dirancang khusus untuk mahasiswa Universitas Pamulang (Unpam). Platform ini menjadi satu-satunya ruang digital yang menghubungkan seluruh ekosistem kehidupan mahasiswa — dari informasi event kampus, pencarian kos, jual beli barang, penemuan barang hilang, forum kolaborasi, hingga denah kampus interaktif — dalam satu aplikasi web yang terintegrasi dan terverifikasi.

> **Tagline:** *"Semua yang kamu butuhkan, dalam satu platform UNPAM SPACE"*

**Masalah Inti:** Informasi dan kebutuhan sehari-hari mahasiswa Unpam tersebar di berbagai platform yang tidak terhubung — grup WhatsApp, Instagram, papan pengumuman fisik, dan platform umum seperti OLX atau Mamikos yang tidak spesifik untuk ekosistem Unpam.

**Solusi:** Platform hyperlocal terverifikasi yang hanya bisa diakses oleh civitas akademika Unpam, dengan sistem kepercayaan bertingkat yang menjamin keamanan setiap transaksi dan interaksi.

---

## 2. Latar Belakang & Permasalahan

### 2.1 Konteks

Universitas Pamulang merupakan salah satu universitas terbesar di Indonesia dengan puluhan ribu mahasiswa aktif. Namun hingga saat ini, belum ada platform digital yang secara khusus melayani kebutuhan ekosistem kehidupan mahasiswa Unpam secara menyeluruh.

### 2.2 Masalah yang Ditemukan

#### Masalah 1 — Jual Beli Barang yang Tidak Efisien
Transaksi jual beli antar mahasiswa saat ini dilakukan melalui grup WhatsApp tidak resmi. Masalah yang timbul:
- Pesan dan listing barang tenggelam di antara ratusan pesan lain
- Tidak ada sistem pencarian atau filter barang
- Tidak ada verifikasi identitas penjual maupun pembeli
- Tidak ada riwayat transaksi yang tercatat
- Risiko penipuan sangat tinggi karena anonimitas pengguna

**Bukti:** Screenshot grup WhatsApp jual beli mahasiswa Unpam dengan ratusan anggota menunjukkan ketidakteraturan informasi.

#### Masalah 2 — Informasi Kos yang Minim dan Tersebar
Mahasiswa baru atau mahasiswa yang ingin pindah kos kesulitan menemukan informasi kos dekat Unpam. Platform nasional seperti Mamikos memiliki listing yang sangat terbatas untuk area Pamulang. Mahasiswa terpaksa:
- Bertanya manual kepada senior satu per satu
- Melakukan survei fisik di sekitar kampus
- Mengandalkan informasi mulut ke mulut yang tidak terverifikasi

Di sisi lain, banyak pemilik kos di sekitar Unpam yang masih memasarkan kosnya secara manual (spanduk, mulut ke mulut, atau titip info ke mahasiswa penghuni) karena tidak familiar dengan platform digital atau merasa platform nasional seperti Mamikos kurang menjangkau mahasiswa Unpam secara spesifik. Kebutuhan pemilik kos untuk terlihat oleh mahasiswa Unpam ini menjadi salah satu pendorong di balik desain fitur Pencarian Kos, meski secara teknis pemilik kos bukan pengguna langsung platform — listing tetap diinput dan dikelola oleh mahasiswa (lihat detail di Fitur 5, bagian 5.5).

**Bukti:** Hasil pencarian "kos dekat Unpam Pamulang" di Mamikos menunjukkan listing yang sangat minim dan tidak up-to-date.

#### Masalah 3 — Informasi Event Kampus Terpencar
Pengumuman event kampus, kegiatan BEM, seminar, dan deadline akademik tersebar di berbagai saluran:
- Instagram masing-masing organisasi
- Grup WhatsApp per jurusan (seringkali tidak konsisten)
- Papan pengumuman fisik di gedung kampus
- Website resmi kampus yang jarang diperbarui

Akibatnya, banyak mahasiswa ketinggalan event penting atau informasi akademik krusial.

#### Masalah 4 — Tidak Ada Denah Kampus Digital
Tidak ada denah digital interaktif Universitas Pamulang yang mencakup lokasi ruang kelas, laboratorium, gedung per lantai, area parkir, dan fasilitas kampus lainnya. Mahasiswa baru seringkali tersesat atau terlambat karena tidak mengetahui lokasi ruangan.

### 2.3 Validasi Data

Survei terhadap mahasiswa Unpam menunjukkan:
- **X%** pernah kesulitan mencari informasi kos dekat kampus
- **X%** pernah bertransaksi jual beli melalui grup WhatsApp dan merasa tidak nyaman
- **X%** pernah ketinggalan event kampus karena tidak tahu infonya ada di mana
- **X%** menyatakan akan menggunakan platform terpadu jika tersedia

*\*Data survei diisi setelah pengumpulan data primer dilakukan*

---

## 3. Tujuan Produk

### 3.1 Tujuan Utama
1. Menyediakan satu platform terpadu untuk seluruh kebutuhan digital mahasiswa Unpam
2. Membangun ekosistem berbasis kepercayaan melalui verifikasi identitas mahasiswa
3. Mengatasi fragmentasi informasi yang selama ini terjadi di berbagai platform terpisah

### 3.2 Tujuan Bisnis (Go-to-Market)
1. Mencapai adopsi awal dari mahasiswa Unpam sebagai early adopters
2. Membangun komunitas aktif yang membuat platform ini memiliki nilai nyata
3. Membuka peluang monetisasi jangka panjang melalui dua sumber pendapatan: subscription **Unpam Space+** (eksklusivitas profil dan status boost otomatis) dan **Boost Pay-per-Use** (penguatan visibilitas listing kos/marketplace per pembelian)

### 3.3 Tujuan Teknis
1. Membangun prototype web yang fungsional dan dapat didemonstrasikan
2. Mengimplementasikan sistem autentikasi berbasis identitas kampus
3. Merancang arsitektur yang skalabel untuk pengembangan fitur ke depan

---

## 4. Target Pengguna

### 4.1 Pengguna Utama

**Mahasiswa Aktif Unpam**
- Usia: 18–25 tahun
- Terbiasa menggunakan smartphone dan media sosial
- Membutuhkan informasi kampus secara cepat dan terpercaya
- Terlibat dalam aktivitas jual beli barang bekas dan pencarian kos

### 4.2 Pengguna Sekunder

**Organisasi Mahasiswa (BEM, UKM, Himpunan)**
- Membutuhkan saluran resmi untuk mempublikasikan event dan pengumuman

> **Catatan:** Pemilik kos sekitar Unpam disebut dalam Latar Belakang Masalah (bagian 2.2) sebagai konteks yang mendorong kebutuhan fitur Pencarian Kos, namun pemilik kos **tidak memiliki akun atau akses langsung** ke platform. Semua listing kos diinput dan dikelola oleh mahasiswa (baik mahasiswa penghuni kos yang membagikan informasinya, maupun mahasiswa lain yang mengetahui info kos kosong dari pemilik atau kenalan). Lihat detail mekanismenya di Fitur 5 (bagian 5.5).

### 4.3 User Persona

**Persona 1 — Mahasiswa Baru**
> Dina, 18 tahun, semester 1, baru pindah dari luar kota. Butuh kos terjangkau dekat Unpam, belum kenal banyak orang, sering ketinggalan info event karena tidak tahu harus lihat di mana.

**Persona 2 — Mahasiswa Semester Menengah**
> Raihan, 20 tahun, semester 5, aktif di organisasi. Sering jual beli barang bekas, butuh teman kolaborasi untuk project kelompok, dan ingin tahu denah ruang lab sebelum jadwal praktikum.

**Persona 3 — Mahasiswa Tingkat Akhir**
> Sari, 22 tahun, semester 7. Ingin menjual buku dan laptop lamanya, mencari partner skripsi, dan kadang posting di forum untuk diskusi akademik.

---

## 5. Fitur & Persyaratan Fungsional

### 5.1 Fitur 1 — Autentikasi & Profil Mahasiswa

**Deskripsi:** Sistem login dan registrasi yang memverifikasi keaslian identitas mahasiswa Unpam sebelum dapat mengakses platform.

**Persyaratan Fungsional:**
- Pengguna dapat mendaftar menggunakan NIM dan email
- Pengguna wajib mengupload bukti identitas (screenshot MyUnpam atau KTM)
- Sistem menampilkan status verifikasi akun (Belum Terverifikasi / Terverifikasi / Terverifikasi Penuh)
- Profil menampilkan: nama, NIM, jurusan, semester, foto, dan badge verifikasi
- Pengguna dapat mengatur privasi profil

**Acceptance Criteria:**
- [ ] Registrasi berhasil dengan NIM valid
- [ ] Upload dokumen verifikasi berhasil tersimpan
- [ ] Status verifikasi tampil di profil pengguna
- [ ] Login dan logout berjalan normal

---

### 5.2 Fitur 2 — Info Event Kampus

**Deskripsi:** Feed terpusat untuk seluruh informasi event, kegiatan, seminar, dan pengumuman kampus dari berbagai organisasi dan unit di Unpam.

**Persyaratan Fungsional:**
- Organizer event (HIMA, UKM, jurusan) dapat membuat posting event baru
- Setiap event memiliki: judul, deskripsi, tanggal/waktu, lokasi, poster, dan penyelenggara
- Pengguna dapat filter event berdasarkan kategori (akademik, organisasi, lomba, sosial)
- Pengguna dapat menyimpan event ke kalender pribadi dalam platform
- Sistem mengirim notifikasi H-1 dan H-0 untuk event yang disimpan
- Event dapat dibagikan (share link)

**Level Verifikasi yang Dibutuhkan:** Tinggi — pembuatan event hanya untuk akun terverifikasi dengan jabatan organisasi resmi (KTM + NIM + nama asli + jabatan di organisasi)

**Acceptance Criteria:**
- [ ] Organizer dapat membuat dan mengedit event
- [ ] Event tampil di feed dengan urutan kronologis
- [ ] Filter kategori berfungsi
- [ ] Notifikasi terkirim sesuai jadwal

---

### 5.3 Fitur 3 — Campus Map Interaktif

**Deskripsi:** Denah digital interaktif Universitas Pamulang yang mencakup seluruh gedung, ruangan, fasilitas, dan area kampus — data eksklusif yang tidak tersedia di Google Maps.

**Persyaratan Fungsional:**
- Peta menampilkan layout kampus Unpam secara keseluruhan
- Pengguna dapat klik gedung untuk melihat detail (nama gedung, jumlah lantai, fasilitas)
- Tersedia navigasi per lantai (Lantai 1, 2, 3, dst.) untuk Gedung A dan Gedung B
- Informasi fasilitas: ruang kelas, laboratorium komputer, toilet, kantin, area parkir
- Fitur pencarian ruangan (contoh: ketik "Lab Komputer 3" → peta mengarah ke lokasi)
- Tampilan responsif di mobile dan desktop

**Level Verifikasi yang Dibutuhkan:** Rendah — dapat diakses semua pengguna terdaftar

**Acceptance Criteria:**
- [ ] Peta kampus tampil dengan benar
- [ ] Klik gedung menampilkan informasi detail
- [ ] Navigasi lantai berfungsi
- [ ] Pencarian ruangan menghasilkan hasil yang relevan

---

### 5.4 Fitur 4 — Marketplace COD Kampus

**Deskripsi:** Platform jual beli barang antar mahasiswa dengan sistem COD (Cash on Delivery) di area kampus, dilengkapi verifikasi identitas untuk keamanan transaksi.

**Persyaratan Fungsional:**
- Penjual dapat membuat listing dengan: foto barang, nama, deskripsi, harga, kondisi (baru/bekas), dan kategori
- Kategori barang: Elektronik, Buku & Modul, Peralatan Kuliah, Fashion, Lainnya
- Pembeli dapat menghubungi penjual melalui sistem pesan internal atau redirect ke WhatsApp
- Tersedia fitur pencarian dan filter (kategori, harga, kondisi)
- Penjual dan pembeli memiliki rating dan ulasan setelah transaksi selesai
- Listing kadaluarsa otomatis setelah 30 hari jika tidak diperbarui

**Level Verifikasi yang Dibutuhkan:** Menengah — membutuhkan KTM + KTP + foto barang + (opsional) surat kepemilikan untuk barang bernilai tinggi

**Acceptance Criteria:**
- [ ] Penjual dapat membuat, mengedit, dan menghapus listing
- [ ] Pencarian dan filter berfungsi dengan baik
- [ ] Sistem pesan internal berjalan
- [ ] Rating dan ulasan dapat diberikan setelah transaksi

---

### 5.5 Fitur 5 — Pencarian Kos

**Deskripsi:** Direktori kos-kosan di sekitar kampus Unpam yang diinput oleh mahasiswa dan diverifikasi oleh platform, khusus untuk mahasiswa yang mencari tempat tinggal.

**Persyaratan Fungsional:**
- Mahasiswa dapat mendaftarkan listing kos dengan: nama kos, alamat, harga per bulan, foto kamar, fasilitas, jarak dari kampus, dan kontak — baik untuk kos yang dia tinggali sendiri, atau info kos kosong yang dia ketahui (misal dari pemilik atau kenalan)
- Mahasiswa yang menginput listing bertindak sebagai pelapor/penghubung dan menjadi pihak yang dapat dihubungi pencari kos melalui sistem; pemilik kos sendiri tidak memiliki akun di platform
- Filter pencarian: harga, jenis kos (putra/putri/campur), fasilitas (AC, WiFi, dapur), jarak
- Setiap listing menampilkan badge "Terverifikasi" jika sudah melewati proses verifikasi platform
- Pengguna dapat menyimpan kos favorit dan membandingkan maksimal 3 kos sekaligus
- Peta mini menampilkan lokasi kos relatif terhadap kampus
- Mahasiswa pemilik listing dapat membeli **Boost** agar listing kosnya tampil di posisi teratas hasil pencarian untuk durasi tertentu (lihat bagian 5.8)

**Level Verifikasi yang Dibutuhkan:** Tinggi — pendaftaran listing kos membutuhkan KTM + KTP + identitas mahasiswa pelapor + foto fisik kos, sebagai bentuk akuntabilitas atas informasi yang diinput (bukan verifikasi identitas pemilik kos)

**Acceptance Criteria:**
- [ ] Listing kos tampil dengan informasi lengkap
- [ ] Filter dan pencarian berfungsi
- [ ] Badge verifikasi tampil untuk kos terverifikasi
- [ ] Fitur simpan dan bandingkan berjalan
- [ ] Mahasiswa dapat membeli boost untuk listing kosnya dan posisi listing naik sesuai durasi yang dibeli

---

### 5.6 Fitur 6 — Penemuan Barang Hilang/Temuan

**Deskripsi:** Papan digital untuk melaporkan barang yang hilang atau ditemukan di area kampus, memudahkan proses pengembalian barang kepada pemiliknya.

**Persyaratan Fungsional:**
- Pengguna dapat membuat laporan "Barang Hilang" atau "Barang Ditemukan"
- Setiap laporan memuat: foto barang, deskripsi, lokasi penemuan/kehilangan, dan waktu
- Sistem mencocokkan laporan barang hilang dengan barang temuan berdasarkan deskripsi
- Pemilik barang dapat mengklaim barang temuan melalui sistem verifikasi sederhana
- Laporan otomatis ditutup setelah 14 hari atau setelah diklaim

**Level Verifikasi yang Dibutuhkan:** Rendah — cukup KTM dan foto barang

**Acceptance Criteria:**
- [ ] Laporan barang hilang/temuan dapat dibuat
- [ ] Foto barang berhasil diupload
- [ ] Sistem klaim barang berjalan
- [ ] Laporan kadaluarsa otomatis

---

### 5.7 Fitur 7 — Forum & Cari Teman Kolaborasi

**Deskripsi:** Ruang komunitas berbasis post di mana mahasiswa dapat berdiskusi, mencari teman kolaborasi untuk project/skripsi, atau membahas topik tertentu — mirip format Discord dengan judul dan isi pesan.

**Persyaratan Fungsional:**
- Pengguna dapat membuat post dengan judul dan isi pesan
- Kategori post: Cari Tim Project, Diskusi Akademik, Tanya Jawab, Umum
- Setiap post dapat dikomentari dan di-upvote oleh pengguna lain
- Fitur tag untuk memudahkan pencarian (contoh: #pemrograman, #skripsi, #informatika)
- Post "Cari Tim" memiliki field tambahan: nama project, keahlian yang dibutuhkan, deadline
- Pengguna dapat mengirim pesan langsung ke pembuat post

**Level Verifikasi yang Dibutuhkan:** Rendah — semua pengguna terdaftar dapat membuat post

**Acceptance Criteria:**
- [ ] Post dapat dibuat dengan judul dan isi
- [ ] Komentar dan upvote berfungsi
- [ ] Filter berdasarkan kategori dan tag berjalan
- [ ] Pesan langsung dapat dikirim

---

### 5.8 Fitur 8 — Unpam Space+ (Subscription)

**Deskripsi:** Tier berbayar berbasis langganan bulanan yang memberikan eksklusivitas tampilan dan status kepada mahasiswa, tanpa membatasi akses ke fitur-fitur inti platform. Semua fitur utama (Campus Map, Event, Forum, Marketplace, Pencarian Kos) tetap dapat diakses penuh oleh pengguna gratis.

**Perbandingan Tier:**

| Fitur | Free 🆓 | Unpam Space+ ⭐ |
|---|---|---|
| Akses semua fitur utama (Campus Map, Event, Forum, Marketplace, Kos) | ✅ | ✅ |
| Badge profil eksklusif | ❌ | ✅ |
| Profil tampil lebih atas di pencarian teman/kolaborasi (Forum) | ❌ | ✅ |
| Analitik listing (jumlah dilihat, dll.) | ❌ | ✅ |
| Tema profil & kustomisasi tampilan | Default | Eksklusif |
| Status boost otomatis untuk listing kos & marketplace miliknya | ❌ | ✅ (aktif selama subscription berjalan) |

**Persyaratan Fungsional:**
- Pengguna dapat mengaktifkan subscription Unpam Space+ dengan harga **Rp10.000–15.000/bulan**
- Selama subscription aktif, seluruh listing kos dan marketplace milik pengguna otomatis berstatus "boosted" tanpa perlu pembelian boost terpisah; status ini bersifat kontinu (bukan kuota/token yang habis terpakai) dan otomatis nonaktif begitu subscription berakhir
- Peningkatan posisi pencarian dari subscription **hanya berlaku untuk profil pengguna di fitur Forum & Cari Teman Kolaborasi** (bagian 5.7) — bukan untuk posisi listing kos/marketplace, yang diatur lewat mekanisme Boost terpisah (bagian 5.9)
- Badge eksklusif dari subscription ditampilkan **terpisah dan independen** dari badge verifikasi keamanan (lihat bagian 6.1); status subscription tidak memengaruhi atau menggantikan level verifikasi identitas pengguna
- Analitik listing menampilkan data dasar seperti jumlah views per listing
- Pengguna dapat berhenti subscription kapan saja; seluruh benefit (badge, posisi atas, analitik, tema, status boost otomatis) nonaktif begitu periode subscription berakhir

**Acceptance Criteria:**
- [ ] Pengguna dapat mengaktifkan dan menonaktifkan subscription
- [ ] Badge eksklusif tampil di profil subscriber, terpisah dari badge verifikasi
- [ ] Profil subscriber tampil lebih atas di hasil pencarian Forum & Cari Teman
- [ ] Listing kos/marketplace milik subscriber otomatis berstatus boosted selama subscription aktif
- [ ] Dashboard analitik listing menampilkan jumlah views
- [ ] Benefit subscription otomatis nonaktif ketika subscription berakhir

---

### 5.9 Fitur 9 — Boost Pay-per-Use (Listing Kos & Marketplace)

**Deskripsi:** Mekanisme berbayar sekali pakai yang memungkinkan siapa saja (baik subscriber maupun pengguna gratis) menaikkan posisi listing kos atau marketplace tertentu ke posisi teratas hasil pencarian untuk durasi terbatas.

**Persyaratan Fungsional:**
- Pengguna dapat membeli boost untuk listing kos atau marketplace tertentu yang dimilikinya
- Boost berlaku per listing dan per durasi (bukan status akun secara keseluruhan), berbeda dengan status boost otomatis dari subscription Unpam Space+ (bagian 5.8) yang berlaku otomatis ke seluruh listing pengguna
- Listing yang sedang di-boost ditandai dengan indikator visual (misal label atau border khusus) agar terlihat beda dari listing biasa
- Boost tetap dapat dibeli oleh subscriber Unpam Space+ untuk listing tambahan di luar yang sudah otomatis ter-boost, atau untuk menonjolkan listing tertentu lebih dari yang lain

**Acceptance Criteria:**
- [ ] Pengguna dapat membeli boost untuk listing tertentu
- [ ] Listing yang di-boost tampil di posisi teratas selama durasi berlaku
- [ ] Indikator visual boost tampil jelas pada listing
- [ ] Boost otomatis berakhir sesuai durasi yang dibeli

---

## 6. Sistem Verifikasi & Keamanan

### 6.1 Tingkatan Verifikasi

Unpam Space mengimplementasikan sistem verifikasi bertingkat berdasarkan risiko dan keperluan masing-masing fitur:

| Level | Nama | Dokumen yang Dibutuhkan | Fitur yang Dapat Diakses |
|---|---|---|---|
| 0 | Tamu | — | Melihat campus map, melihat event publik |
| 1 | Terverifikasi Dasar | KTM + NIM | Semua fitur baca, Forum, Barang Temuan |
| 2 | Terverifikasi Menengah | KTM + KTP + Foto Barang | Marketplace COD, Jual Beli |
| 3 | Terverifikasi Penuh | KTM + KTP + Identitas Lengkap Mahasiswa Pelapor | Listing Kos, Posting Event Resmi |

> **Catatan Level 3:** Dokumen yang diverifikasi adalah identitas mahasiswa yang menginput/melaporkan listing kos, bukan identitas pemilik kos. Ini memastikan ada pihak yang dapat dimintai akuntabilitas atas informasi yang diinput, mengingat pemilik kos tidak memiliki akun di platform (lihat bagian 4.2 dan 5.5).

### 6.2 Badge Verifikasi vs Badge Subscription (Independen)

Platform menampilkan dua jenis badge yang terpisah dan tidak saling menggantikan:

- **Badge Verifikasi/Trust** — merepresentasikan level verifikasi identitas (0–3) sesuai tabel di atas. Diperoleh gratis melalui proses upload dokumen dan menunjukkan kredibilitas/keamanan akun.
- **Badge Premium/Eksklusif** — merepresentasikan status subscription Unpam Space+ (bagian 5.8). Diperoleh melalui pembayaran dan menunjukkan eksklusivitas tampilan, bukan tingkat kepercayaan.

Kedua badge ini independen satu sama lain — seorang pengguna bisa saja sudah Terverifikasi Penuh namun tidak subscribe Unpam Space+ (sehingga tidak punya badge premium), atau sebaliknya subscribe Unpam Space+ namun levelnya masih Terverifikasi Dasar (sehingga belum punya badge trust tertinggi). Pemisahan ini disengaja agar status pembayaran tidak dapat "membeli" persepsi keamanan/kredibilitas di mata pengguna lain.

### 6.3 Alur Verifikasi

```
Registrasi → Upload Dokumen → Review Admin (Manual/Otomatis) → Persetujuan → Akses Fitur
```

### 6.4 Keamanan Data

- Seluruh dokumen identitas dienkripsi sebelum disimpan di server
- Data sensitif (KTP, KTM) tidak disimpan permanen setelah verifikasi selesai
- Platform mematuhi prinsip-prinsip Undang-Undang Perlindungan Data Pribadi (UU PDP) Indonesia
- Sesi login menggunakan token berbasis waktu (JWT) dengan expiry 24 jam

---

## 7. Alur Pengguna (User Flow)

### 7.1 Alur Registrasi & Login

```
Halaman Landings
    └─→ Tombol "Mulai Sekarang"
         └─→ Halaman Registrasi
              ├─ Input NIM
              ├─ Input Email
              ├─ Input Password
              └─ Upload Bukti MyUnpam / KTM
                   └─→ Verifikasi (proses 1x24 jam)
                        └─→ Dashboard Utama ✓
```

### 7.2 Alur Jual Beli (Marketplace)

```
Dashboard → Marketplace
    ├─→ [Sebagai Pembeli]
    │    └─→ Browse / Cari Barang → Filter → Detail Listing
    │         └─→ Hubungi Penjual → Sepakat COD → Transaksi Selesai → Beri Rating
    │
    └─→ [Sebagai Penjual]
         └─→ Tombol "Jual Barang" → Isi Form Listing → Upload Foto
              └─→ Cek Level Verifikasi → Listing Aktif → Terima Pesan Pembeli
```

### 7.3 Alur Pencarian Kos

```
Dashboard → Cari Kos
    └─→ Input Preferensi (harga, fasilitas, jarak)
         └─→ Hasil Pencarian (dengan peta mini)
              └─→ Detail Kos → Simpan Favorit / Hubungi Pemilik
                   └─→ Bandingkan Kos (maks 3) → Pilih Kos
```

### 7.4 Alur Laporan Barang Temuan

```
Dashboard → Barang Temuan
    ├─→ [Menemukan Barang]
    │    └─→ "Laporkan Temuan" → Foto + Deskripsi + Lokasi → Submit → Aktif 14 hari
    │
    └─→ [Kehilangan Barang]
         └─→ "Laporkan Hilang" → Deskripsi Detail → Submit
              └─→ Sistem Cocokkan → Notifikasi Jika Ada Kecocokan → Klaim Barang
```

---

## 8. Persyaratan Non-Fungsional

### 8.1 Performa
- Halaman utama (dashboard) harus termuat dalam < 3 detik pada koneksi 4G
- Pencarian barang dan kos menghasilkan respons dalam < 1 detik
- Platform harus mampu menangani minimal 500 pengguna konkuren

### 8.2 Ketersediaan
- Uptime target: 99% (maksimal downtime ~7 jam/bulan)
- Maintenance terjadwal dilakukan di luar jam aktif mahasiswa (00.00–05.00 WIB)

### 8.3 Keamanan
- Seluruh komunikasi menggunakan HTTPS (SSL/TLS)
- Password disimpan dalam bentuk hash (bcrypt)
- Input pengguna divalidasi untuk mencegah SQL injection dan XSS

### 8.4 Aksesibilitas & Responsivitas
- Platform dapat diakses melalui browser desktop dan mobile
- Desain responsif untuk layar 360px (mobile) hingga 1440px (desktop)
- Mendukung browser modern: Chrome, Firefox, Safari, Edge (versi 2 tahun terakhir)

### 8.5 Skalabilitas
- Arsitektur dirancang modular agar fitur baru dapat ditambahkan tanpa merombak sistem lama
- Database dirancang untuk menangani pertumbuhan pengguna hingga 10.000 akun

---

## 9. Arsitektur Teknologi

### 9.1 Tech Stack (Rekomendasi untuk Hackathon)

| Layer | Teknologi | Alasan |
|---|---|---|
| Frontend Framework | Next.js (React) | SSR/SSG bawaan, routing otomatis, performa baik, scalable dari prototype ke production |
| Animasi | Framer Motion | Library animasi React paling populer, deklaratif, mudah untuk page transition, scroll animation, micro-interaction |
| Styling | Tailwind CSS | Utility-first, cepat dikembangkan, konsisten, mudah dikombinasikan dengan Framer Motion |
| Icon | Lucide React / Heroicons | Ringan, konsisten dengan ekosistem Tailwind |
| Backend | Node.js + Express.js | Ringan, cepat, ekosistem npm yang luas |
| Database | Supabase (PostgreSQL) | Relasional, cocok untuk data terstruktur dan relasi antar listing/user/event; sekaligus menyediakan storage dan dashboard GUI dalam satu paket |
| Autentikasi | JWT (JSON Web Token) custom di Express | Stateless, aman, mudah diimplementasikan; tidak memakai Supabase Auth supaya kontrol penuh tetap di backend sendiri |
| Storage File | Supabase Storage | Upload foto profil, barang, kos, dan dokumen verifikasi; satu ekosistem dengan database, tidak perlu API key layanan pihak ketiga terpisah |
| Hosting | Vercel (Frontend) + Railway / Render (Backend) + Supabase (Database & Storage) | Gratis untuk prototype, deploy otomatis dari Git, cocok untuk Next.js |

**Catatan migrasi:** Next.js dipilih dibanding HTML statis karena setiap "halaman" (event, marketplace, kos, map, temuan, forum) bisa jadi route terpisah dengan layout dan komponen yang reusable, sekaligus mendukung animasi transisi antar halaman lewat Framer Motion (`AnimatePresence`).

**Catatan arsitektur database:** Supabase digunakan sebagai database PostgreSQL + storage saja, bukan sebagai auto-API langsung ke frontend. Frontend Next.js tidak pernah terhubung langsung ke Supabase — semua request tetap melalui backend Express yang memvalidasi JWT custom terlebih dahulu. Row Level Security (RLS) dimatikan di sisi Supabase karena autentikasi sepenuhnya dikendalikan oleh backend sendiri, bukan oleh Supabase Auth. Pendekatan ini menjaga agar kredensial database (`service_role key`) tidak pernah terekspos ke browser pengguna.

### 9.2 Struktur Folder Project

```
unpam-space/
├── frontend/                          ← Next.js App
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout (navbar, footer, font)
│   │   ├── page.tsx                   ← Landing page ("/")
│   │   ├── globals.css                ← Tailwind base + custom CSS
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx               ← Halaman utama setelah login
│   │   ├── event/
│   │   │   ├── page.tsx               ← List event
│   │   │   └── [id]/
│   │   │       └── page.tsx           ← Detail event
│   │   ├── marketplace/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── kos/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── map/
│   │   │   └── page.tsx
│   │   ├── temuan/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── forum/
│   │       ├── page.tsx
│   │       └── [id]/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/                        ← Komponen kecil reusable
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Loader.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── animations/                ← Wrapper animasi Framer Motion
│   │   │   ├── PageTransition.tsx
│   │   │   ├── FadeIn.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   └── ScrollReveal.tsx
│   │   └── features/                  ← Komponen spesifik per fitur
│   │       ├── event/
│   │       │   ├── EventCard.tsx
│   │       │   └── EventForm.tsx
│   │       ├── marketplace/
│   │       │   ├── ProductCard.tsx
│   │       │   └── ProductForm.tsx
│   │       ├── kos/
│   │       │   └── KosCard.tsx
│   │       ├── temuan/
│   │       │   └── TemuanCard.tsx
│   │       └── forum/
│   │           ├── ThreadCard.tsx
│   │           └── CommentBox.tsx
│   │
│   ├── lib/
│   │   ├── api.ts                     ← Axios/fetch instance ke backend
│   │   ├── auth.ts                    ← Helper JWT (simpan/cek token)
│   │   └── utils.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useFetch.ts
│   │
│   ├── types/
│   │   └── index.ts                   ← TypeScript types/interfaces
│   │
│   ├── public/
│   │   └── images/
│   │
│   ├── tailwind.config.ts
│   ├── next.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── event.js
│   │   ├── marketplace.js
│   │   ├── kos.js
│   │   ├── forum.js
│   │   ├── subscription.js          ← Fitur 8: Unpam Space+
│   │   └── boost.js                 ← Fitur 9: Boost Pay-per-Use
│   ├── models/
│   │   ├── User.js
│   │   ├── Listing.js
│   │   ├── Event.js
│   │   └── Subscription.js
│   ├── lib/
│   │   └── supabase.js              ← Supabase client (service_role key)
│   └── middleware/
│       └── auth.middleware.js
│
└── README.md
```

**Catatan struktur:**
- Folder `app/` memakai Next.js App Router (Next.js 13+), tiap subfolder otomatis jadi route.
- Folder `components/animations/` khusus membungkus pola animasi Framer Motion yang dipakai berulang (fade in saat scroll, transisi antar halaman, stagger untuk list card), supaya tidak menulis ulang animasi di setiap komponen.
- `[id]` adalah dynamic route Next.js untuk halaman detail (misal `/event/3`, `/kos/12`).
- `routes/subscription.js` menangani aktivasi/pembatalan Unpam Space+ dan logika status boost otomatis (Fitur 8); `routes/boost.js` menangani pembelian boost per listing (Fitur 9) — dua route terpisah karena mekanismenya berbeda (status kontinu vs pay-per-use per listing).


### 9.3 Pembagian Kerja Tim

| Anggota | Role | Tanggung Jawab |
|---|---|---|
| Hacker 1 | Backend Dev | Server, API, autentikasi, database schema |
| Hacker 2 | Frontend Dev | Halaman utama, marketplace, kos, integrasi API |
| Hipster | UI/UX Designer | Desain visual, wireframe, halaman event & map |
| Hustler | PM & Presenter | PPT, narasi demo, dokumentasi, pengumpulan data survei |

---

## 10. Prioritas Fitur MVP

### Fase Hackathon (Must Have — Demo Day)

| # | Fitur | PIC | Estimasi |
|---|---|---|---|
| 1 | Landing page + Login/Register | Hacker 2 | 3 jam |
| 2 | Dashboard utama (grid fitur) | Hacker 2 + Hipster | 4 jam |
| 3 | Halaman Event Kampus | Hipster + Hacker 1 | 3 jam |
| 4 | Marketplace COD (listing + detail) | Hacker 1 & 2 | 5 jam |
| 5 | Pencarian Kos | Hacker 1 | 4 jam |
| 6 | Campus Map (denah statis interaktif) | Hipster + Hacker 2 | 4 jam |
| 7 | Profil Pengguna + Badge Verifikasi | Hacker 1 | 2 jam |

### Fase Pasca-Hackathon (Should Have)

- Sistem notifikasi real-time
- Forum & Cari Teman
- Fitur Barang Temuan
- Rating & ulasan pengguna
- Verifikasi dokumen otomatis
- Unpam Space+ (Subscription) & Boost Pay-per-Use

### Jangka Panjang (Could Have)

- Mobile app (Android)
- Integrasi SSO dengan sistem akademik Unpam
- Dashboard admin kampus
- Sistem rekomendasi berbasis AI

---

## 11. Metrik Keberhasilan

### Metrik Adopsi
- Jumlah akun terdaftar dalam 30 hari pertama: **Target 500 pengguna**
- Jumlah listing aktif di marketplace: **Target 100 listing**
- Jumlah kos terdaftar: **Target 30 kos**

### Metrik Keterlibatan
- Daily Active Users (DAU): **Target 30% dari total pengguna terdaftar**
- Rata-rata sesi per pengguna per hari: **Target > 5 menit**
- Jumlah post forum per minggu: **Target > 50 post**

### Metrik Kepuasan
- Rating kepuasan pengguna (survei): **Target > 4.0 / 5.0**
- Net Promoter Score (NPS): **Target > 40**

### Metrik Monetisasi (Pasca Peluncuran Unpam Space+ & Boost)
- Jumlah subscriber Unpam Space+ aktif: **Target 5% dari total pengguna terdaftar**
- Conversion rate dari pengguna gratis ke subscriber: **Target > 3%**
- Churn rate subscription bulanan: **Target < 15%**
- Jumlah transaksi boost per bulan: **Target 50 transaksi**

*\*Target metrik monetisasi bersifat indikatif dan akan disesuaikan setelah fitur Unpam Space+ dan Boost dirilis pada fase pasca-hackathon.*

---

## 12. Roadmap Pengembangan

```
Q3 2025 — Hackathon MVP
  ├─ Prototype web fungsional (7 halaman utama)
  ├─ Sistem autentikasi dasar
  ├─ Demo marketplace, event, kos, campus map
  └─ Presentasi & pitch ke juri

Q4 2025 — Beta Launch
  ├─ Backend production-ready
  ├─ Semua fitur Must Have live
  ├─ Onboarding 100 pengguna pertama (mahasiswa Unpam)
  └─ Pengumpulan feedback dan iterasi

Q1 2026 — Pengembangan Lanjutan
  ├─ Fitur Should Have selesai
  ├─ Sistem verifikasi otomatis
  ├─ Kemitraan dengan BEM dan organisasi kampus
  └─ Target 1.000 pengguna aktif

Q2 2026 — Skalasi
  ├─ Mobile app Android
  ├─ Ekspansi ke kampus lain di Pamulang
  └─ Eksplorasi model monetisasi
```

---

## 13. Risiko & Mitigasi

| Risiko | Kemungkinan | Dampak | Mitigasi |
|---|---|---|---|
| Adopsi lambat — mahasiswa enggan migrasi dari WhatsApp | Tinggi | Tinggi | Kampanye onboarding masif, ajak BEM sebagai early adopter resmi |
| Konten palsu atau akun tidak terverifikasi | Sedang | Tinggi | Sistem verifikasi bertingkat, laporan konten oleh komunitas |
| Data pribadi bocor (KTM, KTP) | Rendah | Sangat Tinggi | Enkripsi data, hapus dokumen setelah verifikasi, patuhi UU PDP |
| Platform tidak aktif karena minim konten awal | Tinggi | Sedang | Pre-populate dengan data dummy untuk demo, ajak admin kampus kolaborasi |
| Overscope — fitur terlalu banyak, prototype tidak selesai | Sedang | Tinggi | Disiplin MoSCoW framework, cut fitur Should Have jika waktu kurang |
| Persaingan dari platform yang sudah ada | Rendah | Sedang | Fokus pada keunggulan hyperlocal + trust system yang tidak dimiliki kompetitor |

---

*Dokumen ini adalah living document yang akan diperbarui seiring perkembangan proyek.*

**Unpam Space** — *Semua yang kamu butuhkan, dalam satu platform UNPAM SPACE.*

---
*PRD v1.0 · Tim Unpam Space · Hackathon Universitas Pamulang 2025*
