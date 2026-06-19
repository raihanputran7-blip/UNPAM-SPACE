# Product Requirements Document (PRD)
# Unpam Space — Platform Digital Mahasiswa Universitas Pamulang

**Versi:** 1.2  
**Tanggal:** Juni 2026 (revisi: perombakan logic UI — landing page eksperiensial, main page berbasis grid fitur (bukan dashboard sidebar), karakter asset random per-gender, dan transformasi fitur Cari Teman menjadi Forum/Community ala Discord)  
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

**Unpam Space** adalah platform digital terpadu yang dirancang khusus untuk mahasiswa Universitas Pamulang (Unpam). Platform ini menjadi satu-satunya ruang digital yang menghubungkan seluruh ekosistem kehidupan mahasiswa — dari informasi event kampus, pencarian kos, jual beli barang, penemuan barang hilang, forum komunitas, hingga denah kampus interaktif — dalam satu aplikasi web yang terintegrasi dan terverifikasi.

> **Tagline:** *"Semua yang kamu butuhkan, dalam satu platform UNPAM SPACE"*

**Masalah Inti:** Informasi dan kebutuhan sehari-hari mahasiswa Unpam tersebar di berbagai platform yang tidak terhubung — grup WhatsApp, Instagram, papan pengumuman fisik, dan platform umum seperti OLX atau Mamikos yang tidak spesifik untuk ekosistem Unpam.

**Solusi:** Platform hyperlocal terverifikasi yang hanya bisa diakses oleh civitas akademika Unpam, dengan sistem kepercayaan bertingkat yang menjamin keamanan setiap transaksi dan interaksi.

**Pengalaman (Experience):** Unpam Space dirancang agar terasa hidup dan personal — dimulai dari **landing page yang imersif** (judul "UNPAM SPACE" di tengah layar, background animasi yang mengikuti kursor, dan scroll animation), berlanjut ke **main page berbasis grid fitur** yang menyapa pengguna secara personal dengan animasi teks dan karakter maskot yang berganti-ganti acak setiap kunjungan.

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

Di sisi lain, banyak pemilik kos di sekitar Unpam yang masih memasarkan kosnya secara manual (spanduk, mulut ke mulut, atau titip info ke mahasiswa penghuni) karena tidak familiar dengan platform digital atau merasa platform nasional seperti Mamikos kurang menjangkau mahasiswa Unpam secara spesifik. Kebutuhan pemilik kos untuk terlihat oleh mahasiswa Unpam ini menjadi salah satu pendorong di balik desain fitur Pencarian Kos, meski secara teknis pemilik kos bukan pengguna langsung platform — listing tetap diinput dan dikelola oleh mahasiswa (lihat detail di Fitur Pencarian Kos, bagian 5.7).

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

#### Masalah 5 — Tidak Ada Ruang Komunitas yang Terstruktur
Diskusi, ajakan kolaborasi, dan pembentukan komunitas minat (mabar, PKM, project, komunitas IT/cybersecurity, networking Cisco, dsb.) tersebar di grup WhatsApp/Discord yang tidak terverifikasi dan tidak terindeks. Mahasiswa kesulitan menemukan teman dengan minat yang sama, dan thread diskusi cepat tenggelam tanpa kategori atau topik yang jelas.

### 2.3 Validasi Data

Survei terhadap mahasiswa Unpam menunjukkan:
- **X%** pernah kesulitan mencari informasi kos dekat kampus
- **X%** pernah bertransaksi jual beli melalui grup WhatsApp dan merasa tidak nyaman
- **X%** pernah ketinggalan event kampus karena tidak tahu infonya ada di mana
- **X%** kesulitan menemukan teman/komunitas dengan minat yang sama (mabar, project, PKM, komunitas IT)
- **X%** menyatakan akan menggunakan platform terpadu jika tersedia

*\*Data survei diisi setelah pengumpulan data primer dilakukan*

---

## 3. Tujuan Produk

### 3.1 Tujuan Utama
1. Menyediakan satu platform terpadu untuk seluruh kebutuhan digital mahasiswa Unpam
2. Membangun ekosistem berbasis kepercayaan melalui verifikasi identitas mahasiswa
3. Mengatasi fragmentasi informasi yang selama ini terjadi di berbagai platform terpisah
4. Menghadirkan pengalaman antarmuka yang imersif dan personal agar platform terasa menyenangkan untuk dipakai sehari-hari

### 3.2 Tujuan Bisnis (Go-to-Market)
1. Mencapai adopsi awal dari mahasiswa Unpam sebagai early adopters
2. Membangun komunitas aktif yang membuat platform ini memiliki nilai nyata
3. Membuka peluang monetisasi jangka panjang melalui dua sumber pendapatan: subscription **Unpam Space+** (eksklusivitas profil, badge & warna post di Community, serta status boost otomatis) dan **Boost Pay-per-Use** (penguatan visibilitas listing kos/marketplace per pembelian)

### 3.3 Tujuan Teknis
1. Membangun prototype web yang fungsional dan dapat didemonstrasikan
2. Mengimplementasikan sistem autentikasi berbasis identitas kampus
3. Merancang arsitektur yang skalabel untuk pengembangan fitur ke depan
4. Mengimplementasikan animasi modern (kursor, scroll, page transition) tanpa mengorbankan performa

---

## 4. Target Pengguna

### 4.1 Pengguna Utama

**Mahasiswa Aktif Unpam**
- Usia: 18–25 tahun
- Terbiasa menggunakan smartphone dan media sosial
- Membutuhkan informasi kampus secara cepat dan terpercaya
- Terlibat dalam aktivitas jual beli barang bekas, pencarian kos, dan komunitas minat

### 4.2 Pengguna Sekunder

**Organisasi Mahasiswa (BEM, UKM, Himpunan)**
- Membutuhkan saluran resmi untuk mempublikasikan event dan pengumuman

> **Catatan:** Pemilik kos sekitar Unpam disebut dalam Latar Belakang Masalah (bagian 2.2) sebagai konteks yang mendorong kebutuhan fitur Pencarian Kos, namun pemilik kos **tidak memiliki akun atau akses langsung** ke platform. Semua listing kos diinput dan dikelola oleh mahasiswa (baik mahasiswa penghuni kos yang membagikan informasinya, maupun mahasiswa lain yang mengetahui info kos kosong dari pemilik atau kenalan). Lihat detail mekanismenya di Fitur Pencarian Kos (bagian 5.7).

### 4.3 User Persona

**Persona 1 — Mahasiswa Baru**
> Dina, 18 tahun, semester 1, baru pindah dari luar kota. Butuh kos terjangkau dekat Unpam, belum kenal banyak orang, sering ketinggalan info event karena tidak tahu harus lihat di mana.

**Persona 2 — Mahasiswa Semester Menengah**
> Raihan, 20 tahun, semester 5, aktif di organisasi. Sering jual beli barang bekas, butuh teman kolaborasi untuk project kelompok, ikut komunitas cyber security, dan ingin tahu denah ruang lab sebelum jadwal praktikum.

**Persona 3 — Mahasiswa Tingkat Akhir**
> Sari, 22 tahun, semester 7. Ingin menjual buku dan laptop lamanya, mencari partner skripsi/PKM, dan aktif posting di Community untuk diskusi akademik.

---

## 5. Fitur & Persyaratan Fungsional

> **Catatan navigasi & desain:** Unpam Space **tidak** menggunakan pola dashboard dengan sidebar fitur di sebelah kiri. Setelah login, pengguna masuk ke **Main Page** yang menampilkan seluruh fitur sebagai **grid kartu menu**. Setiap kartu menuju **halaman fitur yang berdiri sendiri dan terpisah** (route tersendiri). Pola ini disengaja agar tiap fitur punya ruang penuh, fokus, dan pengalaman yang khas.

### 5.1 Fitur 1 — Landing Page (Halaman Pembuka)

**Deskripsi:** Halaman publik pertama yang dilihat siapa pun sebelum login. Berfungsi sebagai etalase produk yang imersif dan menjelaskan apa itu Unpam Space, sekaligus mengarahkan pengunjung untuk mulai (Get Started).

**Persyaratan Fungsional:**
- **Hero section:** teks besar **"UNPAM SPACE"** ditempatkan di **tengah** layar (center), disertai tagline *"Semua yang kamu butuhkan, dalam satu platform UNPAM SPACE"* dan sub-teks deskripsi singkat
- **Tombol utama "Mulai Sekarang" / "Get Started"** yang mengarahkan ke halaman Login/Registrasi
- **Background animasi yang mengikuti kursor** (cursor-follow / interactive cursor background) — elemen visual (partikel, glow, atau gradient) bergerak merespons posisi kursor pengguna
- **Scroll animation** — section-section di bawah hero muncul dengan efek reveal saat di-scroll (fade/slide-in, stagger)
- **Section informasi** di bawah hero yang memuat: penjelasan tentang Unpam Space, tagline, highlight fitur unggulan (Event, Map, Marketplace, Kos, Barang Temuan, Community), dan nilai/keunggulan platform (hyperlocal, terverifikasi, trust system)
- **Footer** di bagian paling bawah yang berisi:
  - Informasi & link media sosial Unpam Space (Instagram, TikTok, X/Twitter, dll.)
  - Informasi hak cipta (© Unpam Space, tahun berjalan)
  - Link **Kebijakan Privasi**
  - Link **Syarat & Ketentuan**
  - Link navigasi cepat (About, Kontak, FAQ)
- Tampilan responsif (mobile & desktop); animasi tetap halus dan tidak mengganggu keterbacaan

**Level Verifikasi yang Dibutuhkan:** Tidak ada — halaman publik, dapat diakses tanpa login.

**Acceptance Criteria:**
- [ ] Teks "UNPAM SPACE" tampil di tengah hero dengan tagline
- [ ] Tombol "Mulai Sekarang"/"Get Started" mengarahkan ke halaman Login/Registrasi
- [ ] Background bereaksi mengikuti pergerakan kursor
- [ ] Section di bawah hero muncul dengan scroll animation
- [ ] Footer menampilkan link sosmed, hak cipta, kebijakan privasi, dan syarat & ketentuan
- [ ] Tampilan responsif dan animasi tidak menurunkan performa secara signifikan

---

### 5.2 Fitur 2 — Autentikasi & Profil Mahasiswa

**Deskripsi:** Sistem login dan registrasi yang memverifikasi keaslian identitas mahasiswa Unpam sebelum dapat mengakses platform. Diakses setelah pengguna menekan "Mulai Sekarang" di Landing Page.

**Persyaratan Fungsional:**
- Halaman Login dan halaman Registrasi (dapat berpindah antar keduanya)
- Pengguna dapat mendaftar menggunakan NIM dan email
- Pengguna wajib mengupload bukti identitas (screenshot MyUnpam atau KTM)
- Sistem menampilkan status verifikasi akun (Belum Terverifikasi / Terverifikasi / Terverifikasi Penuh)
- Profil menampilkan: nama, NIM, jurusan, semester, foto, badge verifikasi, dan (jika berlangganan) badge premium
- Pengguna dapat mengatur privasi profil
- Setelah login berhasil, pengguna diarahkan ke **Main Page** (bukan dashboard sidebar)

**Acceptance Criteria:**
- [ ] Registrasi berhasil dengan NIM valid
- [ ] Upload dokumen verifikasi berhasil tersimpan
- [ ] Status verifikasi tampil di profil pengguna
- [ ] Login dan logout berjalan normal
- [ ] Setelah login, pengguna diarahkan ke Main Page

---

### 5.3 Fitur 3 — Main Page (Halaman Utama)

**Deskripsi:** Halaman utama setelah login. Berfungsi sebagai pusat navigasi berbasis **grid kartu fitur** (bukan dashboard dengan sidebar). Personal, menyapa pengguna, dan menampilkan maskot karakter yang berganti acak.

**Persyaratan Fungsional:**
- **Welcome animation (animasi teks):** menyapa pengguna secara personal, misal *"Hi, {nama}!"* dengan animasi teks (typing/fade/slide)
- **Teks informatif** yang menyambung, misal *"Ingin melakukan apa kamu hari ini?"* untuk mengajak pengguna memilih fitur
- **Grid menu fitur:** seluruh fitur ditampilkan sebagai **kartu dalam layout grid** (responsive grid). Setiap kartu mewakili satu fitur: Event Kampus, Campus Map, Marketplace, Pencarian Kos, Barang Temuan, Community/Forum, dan akses Unpam Space+
- **Navigasi terpisah per fitur:** klik kartu → membuka **halaman fitur tersendiri (route terpisah)**, BUKAN panel di dalam dashboard. Tidak ada sidebar fitur permanen di kiri layar
- **Karakter maskot user (character asset):**
  - Setiap kali pengguna membuka Main Page, **satu karakter maskot tampil secara acak** dan bergantian
  - Asset dibedakan **berdasarkan gender** (pria/wanita) — gender diambil dari data profil pengguna
  - Tersedia **10 asset total: 5 karakter pria + 5 karakter wanita**, masing-masing merepresentasikan **ekspresi yang berbeda** (misal: senang, semangat, santai, fokus, ramah)
  - Asset bersifat *placeholder-ready*: slot/struktur folder disiapkan agar tim dapat mengisi sendiri gambar karakter (dibuat dengan AI) tanpa mengubah kode. Penamaan file mengikuti konvensi gender + indeks ekspresi (lihat bagian 9.2)
  - Logika randomisasi memilih dari set sesuai gender pengguna; bila gender tidak diketahui, pakai set netral/default
- Animasi masuk halaman (page transition) yang halus dari/ke fitur lain

**Level Verifikasi yang Dibutuhkan:** Rendah — dapat diakses semua pengguna terdaftar yang sudah login.

**Acceptance Criteria:**
- [ ] Welcome animation menyapa pengguna dengan nama
- [ ] Teks informatif ("ingin melakukan apa kamu hari ini?") tampil
- [ ] Fitur ditampilkan sebagai grid kartu, BUKAN sidebar kiri
- [ ] Klik kartu membuka halaman fitur terpisah (route tersendiri)
- [ ] Karakter maskot tampil acak per kunjungan dan sesuai gender pengguna
- [ ] Struktur asset mendukung 5 pria + 5 wanita (5 ekspresi) dan mudah diisi manual

---

### 5.4 Fitur 4 — Info Event Kampus

**Deskripsi:** Halaman terpusat untuk seluruh informasi event, kegiatan, seminar, dan pengumuman kampus dari berbagai organisasi dan unit di Unpam.

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

### 5.5 Fitur 5 — Campus Map Interaktif

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

### 5.6 Fitur 6 — Marketplace COD Kampus

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

### 5.7 Fitur 7 — Pencarian Kos

**Deskripsi:** Direktori kos-kosan di sekitar kampus Unpam yang diinput oleh mahasiswa dan diverifikasi oleh platform, khusus untuk mahasiswa yang mencari tempat tinggal.

**Persyaratan Fungsional:**
- Mahasiswa dapat mendaftarkan listing kos dengan: nama kos, alamat, harga per bulan, foto kamar, fasilitas, jarak dari kampus, dan kontak — baik untuk kos yang dia tinggali sendiri, atau info kos kosong yang dia ketahui (misal dari pemilik atau kenalan)
- Mahasiswa yang menginput listing bertindak sebagai pelapor/penghubung dan menjadi pihak yang dapat dihubungi pencari kos melalui sistem; pemilik kos sendiri tidak memiliki akun di platform
- Filter pencarian: harga, jenis kos (putra/putri/campur), fasilitas (AC, WiFi, dapur), jarak
- Setiap listing menampilkan badge "Terverifikasi" jika sudah melewati proses verifikasi platform
- Pengguna dapat menyimpan kos favorit dan membandingkan maksimal 3 kos sekaligus
- Peta mini menampilkan lokasi kos relatif terhadap kampus
- Mahasiswa pemilik listing dapat membeli **Boost** agar listing kosnya tampil di posisi teratas hasil pencarian untuk durasi tertentu (lihat bagian 5.10)

**Level Verifikasi yang Dibutuhkan:** Tinggi — pendaftaran listing kos membutuhkan KTM + KTP + identitas mahasiswa pelapor + foto fisik kos, sebagai bentuk akuntabilitas atas informasi yang diinput (bukan verifikasi identitas pemilik kos)

**Acceptance Criteria:**
- [ ] Listing kos tampil dengan informasi lengkap
- [ ] Filter dan pencarian berfungsi
- [ ] Badge verifikasi tampil untuk kos terverifikasi
- [ ] Fitur simpan dan bandingkan berjalan
- [ ] Mahasiswa dapat membeli boost untuk listing kosnya dan posisi listing naik sesuai durasi yang dibeli

---

### 5.8 Fitur 8 — Penemuan Barang Hilang/Temuan

**Deskripsi:** Papan digital untuk melaporkan barang yang hilang atau ditemukan di area kampus, memudahkan proses pengembalian barang kepada pemiliknya.

**Persyaratan Fungsional:**
- Pengguna dapat membuat laporan "Barang Hilang" atau "Barang Ditemukan"
- Setiap laporan memuat: foto barang, deskripsi, lokasi penemuan/kehilangan, dan waktu
- Sistem mencocokkan laporan barang hilang dengan barang temuan berdasarkan deskripsi
- Pemilik barang dapat mengklaim barang temuan melalui sistem verifikasi sederhana
- Laporan otomatis ditutup setelah 14 hari atau setelah diklaim
- Pengguna dapat saling berkomunikasi didalam session chat untuk membantu proses klaim.

**Level Verifikasi yang Dibutuhkan:** Rendah — cukup KTM dan foto barang

**Acceptance Criteria:**
- [ ] Laporan barang hilang/temuan dapat dibuat
- [ ] Foto barang berhasil diupload
- [ ] Sistem klaim barang berjalan
- [ ] Laporan kadaluarsa otomatis

---

### 5.9 Fitur 9 — Community / Forum (Gaya Discord)

**Deskripsi:** Ruang komunitas berbasis post bergaya **Discord** — menggantikan dan memperluas fitur "Cari Teman Kolaborasi" sebelumnya. Pengguna dapat membuat dan menjelajahi post di mana setiap post mewakili **topik yang berbeda-beda** (channel/thread), mulai dari cari teman, mabar, hingga komunitas minat teknis. Inilah ruang sosial inti Unpam Space.

**Konsep tampilan:**
- Tampilan dan interaksi menyerupai Discord: daftar topik/channel di mana pengguna bisa masuk ke sebuah post/topik, membaca, dan ikut berkomentar/membalas
- Pengguna dapat **membuat post sendiri**, dan **setiap post berisi topik yang berbeda-beda**

**Contoh topik/kategori post:**
- **Cari Teman** (umum)
- **Cari Teman Mabar** (main bareng / gaming)
- **Teman PKM** (Program Kreativitas Mahasiswa)
- **Teman Project** (kolaborasi tugas/project)
- **Bahas Mata Kuliah** (diskusi per matkul)
- **Komunitas IT — Cyber Security**
- **Komunitas Network / IT Infrastructure (Cisco)**
- Dan kategori lain yang dapat berkembang seiring kebutuhan komunitas

**Persyaratan Fungsional:**
- Pengguna dapat membuat post dengan: judul, isi, kategori/topik, dan tag (contoh: `#mabar`, `#pkm`, `#cybersecurity`, `#cisco`, `#informatika`)
- Setiap post dapat dibalas/dikomentari dan di-upvote oleh pengguna lain (interaksi ala thread Discord)
- Pengguna dapat memfilter dan menjelajah post berdasarkan kategori/topik dan tag
- Pengguna dapat mengirim pesan langsung (DM) ke pembuat post
- Post "Cari Tim/Project/PKM" memiliki field tambahan opsional: nama project, keahlian yang dibutuhkan, deadline
- **Eksklusivitas subscriber (Unpam Space+):** profil dan post milik subscriber menampilkan **eksklusivitas yang terlihat jelas**, yaitu:
  - **Badge khusus** (badge premium) di samping nama pengguna
  - **Warna post khusus** (highlight/border/background post berbeda) sehingga post subscriber menonjol secara visual dari post biasa
  - Profil subscriber tampil lebih atas pada hasil pencarian teman/komunitas di dalam Community
  - (Detail benefit subscription ada di bagian 5.10)

**Level Verifikasi yang Dibutuhkan:** Rendah — semua pengguna terdaftar dapat membuat dan membalas post

**Acceptance Criteria:**
- [ ] Pengguna dapat membuat post dengan judul, isi, dan kategori/topik yang berbeda-beda
- [ ] Tampilan menyerupai Discord (jelajah topik, masuk ke post, balas/komentar)
- [ ] Komentar/balasan dan upvote berfungsi
- [ ] Filter berdasarkan kategori (mabar, PKM, project, matkul, cyber security, Cisco, dll.) dan tag berjalan
- [ ] DM ke pembuat post dapat dikirim
- [ ] Post & profil subscriber menampilkan badge khusus dan warna post khusus yang berbeda dari pengguna biasa

---

### 5.10 Fitur 10 — Unpam Space+ (Subscription)

**Deskripsi:** Tier berbayar berbasis langganan bulanan yang memberikan eksklusivitas tampilan dan status kepada mahasiswa, tanpa membatasi akses ke fitur-fitur inti platform. Semua fitur utama (Campus Map, Event, Community, Marketplace, Pencarian Kos, Barang Temuan) tetap dapat diakses penuh oleh pengguna gratis.

**Perbandingan Tier:**

| Fitur | Free 🆓 | Unpam Space+ ⭐ |
|---|---|---|
| Akses semua fitur utama (Campus Map, Event, Community, Marketplace, Kos, Temuan) | ✅ | ✅ |
| Badge profil eksklusif (premium) | ❌ | ✅ |
| Warna post khusus di Community/Forum | ❌ | ✅ |
| Profil tampil lebih atas di pencarian teman/komunitas (Community) | ❌ | ✅ |
| Analitik listing (jumlah dilihat, dll.) | ❌ | ✅ |
| Tema profil & kustomisasi tampilan | Default | Eksklusif |
| Status boost otomatis untuk listing kos & marketplace miliknya | ❌ | ✅ (aktif selama subscription berjalan) |

**Persyaratan Fungsional:**
- Pengguna dapat mengaktifkan subscription Unpam Space+ dengan harga **Rp13.000/bulan**
- Subscriber mendapat **badge premium** dan **warna post khusus** yang tampil di fitur Community/Forum (bagian 5.9), sehingga eksklusivitasnya terlihat jelas oleh pengguna lain
- Selama subscription aktif, seluruh listing kos dan marketplace milik pengguna otomatis berstatus "boosted" tanpa perlu pembelian boost terpisah; status ini bersifat kontinu (bukan kuota/token yang habis terpakai) dan otomatis nonaktif begitu subscription berakhir
- Peningkatan posisi pencarian dari subscription **hanya berlaku untuk profil pengguna di fitur Community/Forum** (bagian 5.9) — bukan untuk posisi listing kos/marketplace, yang diatur lewat mekanisme Boost terpisah (bagian 5.11)
- Badge eksklusif dari subscription ditampilkan **terpisah dan independen** dari badge verifikasi keamanan (lihat bagian 6.1); status subscription tidak memengaruhi atau menggantikan level verifikasi identitas pengguna
- Analitik listing menampilkan data dasar seperti jumlah views per listing
- Pengguna dapat berhenti subscription kapan saja; seluruh benefit (badge, warna post, posisi atas, analitik, tema, status boost otomatis) nonaktif begitu periode subscription berakhir

**Acceptance Criteria:**
- [ ] Pengguna dapat mengaktifkan dan menonaktifkan subscription
- [ ] Badge eksklusif & warna post khusus tampil di Community, terpisah dari badge verifikasi
- [ ] Profil subscriber tampil lebih atas di hasil pencarian Community/Forum
- [ ] Listing kos/marketplace milik subscriber otomatis berstatus boosted selama subscription aktif
- [ ] Dashboard analitik listing menampilkan jumlah views
- [ ] Benefit subscription otomatis nonaktif ketika subscription berakhir

---

### 5.11 Fitur 11 — Boost Pay-per-Use (Listing Kos & Marketplace)

**Deskripsi:** Mekanisme berbayar sekali pakai yang memungkinkan siapa saja (baik subscriber maupun pengguna gratis) menaikkan posisi listing kos atau marketplace tertentu ke posisi teratas hasil pencarian untuk durasi terbatas.

**Persyaratan Fungsional:**
- Pengguna dapat membeli boost untuk listing kos atau marketplace tertentu yang dimilikinya
- Boost berlaku per listing dan per durasi (bukan status akun secara keseluruhan), berbeda dengan status boost otomatis dari subscription Unpam Space+ (bagian 5.10) yang berlaku otomatis ke seluruh listing pengguna
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
| 0 | Tamu | — | Melihat landing page, melihat campus map, melihat event publik |
| 1 | Terverifikasi Dasar | KTM + NIM | Semua fitur baca, Community/Forum, Barang Temuan |
| 2 | Terverifikasi Menengah | KTM + KTP + Foto Barang | Marketplace COD, Jual Beli |
| 3 | Terverifikasi Penuh | KTM + KTP + Identitas Lengkap Mahasiswa Pelapor | Listing Kos, Posting Event Resmi |

> **Catatan Level 3:** Dokumen yang diverifikasi adalah identitas mahasiswa yang menginput/melaporkan listing kos, bukan identitas pemilik kos. Ini memastikan ada pihak yang dapat dimintai akuntabilitas atas informasi yang diinput, mengingat pemilik kos tidak memiliki akun di platform (lihat bagian 4.2 dan 5.7).

### 6.2 Badge Verifikasi vs Badge Subscription (Independen)

Platform menampilkan dua jenis badge yang terpisah dan tidak saling menggantikan:

- **Badge Verifikasi/Trust** — merepresentasikan level verifikasi identitas (0–3) sesuai tabel di atas. Diperoleh gratis melalui proses upload dokumen dan menunjukkan kredibilitas/keamanan akun.
- **Badge Premium/Eksklusif** — merepresentasikan status subscription Unpam Space+ (bagian 5.10). Diperoleh melalui pembayaran dan menunjukkan eksklusivitas tampilan (termasuk warna post khusus di Community), bukan tingkat kepercayaan.

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

### 7.1 Alur Masuk: Landing → Get Started → Login → Main Page

```
Landing Page ("/")
  ├─ Teks "UNPAM SPACE" di tengah + tagline
  ├─ Background animasi mengikuti kursor
  ├─ Scroll animation (section info)
  ├─ Footer (sosmed, hak cipta, kebijakan privasi, S&K)
  └─→ Tombol "Mulai Sekarang" / "Get Started"
       └─→ Halaman Login / Registrasi
            ├─ [Registrasi] Input NIM + Email + Password + Upload MyUnpam/KTM
            │     └─→ Verifikasi (proses 1x24 jam)
            └─ [Login] Email + Password
                 └─→ MAIN PAGE ✓
                      ├─ Welcome animasi teks ("Hi, {nama}!")
                      ├─ Teks informatif ("Ingin melakukan apa kamu hari ini?")
                      ├─ Karakter maskot random (per-gender, 5 ekspresi)
                      └─ Grid kartu fitur → klik kartu → halaman fitur terpisah
```

### 7.2 Alur Navigasi Fitur (dari Main Page)

```
Main Page (grid fitur — TANPA sidebar)
  ├─→ Kartu "Event"        → Halaman Event (route /event)
  ├─→ Kartu "Campus Map"   → Halaman Map (route /map)
  ├─→ Kartu "Marketplace"  → Halaman Marketplace (route /marketplace)
  ├─→ Kartu "Cari Kos"     → Halaman Kos (route /kos)
  ├─→ Kartu "Barang Temuan"→ Halaman Temuan (route /temuan)
  ├─→ Kartu "Community"    → Halaman Community/Forum (route /community)
  └─→ Kartu "Unpam Space+" → Halaman Subscription (route /plus)

Setiap halaman fitur berdiri sendiri (terpisah), bukan panel di dalam dashboard.
Tombol kembali / logo mengarahkan pengguna balik ke Main Page.
```

### 7.3 Alur Community / Forum (Gaya Discord)

```
Main Page → Community
  ├─→ Jelajah topik/kategori (Cari Teman, Mabar, PKM, Project, Bahas Matkul,
  │     Cyber Security, Cisco/Network, dll.)
  │     └─→ Buka Post → Baca → Balas/Komentar → Upvote → DM pembuat post
  │
  └─→ Tombol "Buat Post" → Pilih Topik + Judul + Isi + Tag → Publish
        └─→ Post tampil di kategori terkait
             └─ Jika pembuat = subscriber: badge premium + warna post khusus
```

### 7.4 Alur Jual Beli (Marketplace)

```
Main Page → Marketplace
    ├─→ [Sebagai Pembeli]
    │    └─→ Browse / Cari Barang → Filter → Detail Listing
    │         └─→ Hubungi Penjual → Sepakat COD → Transaksi Selesai → Beri Rating
    │
    └─→ [Sebagai Penjual]
         └─→ Tombol "Jual Barang" → Isi Form Listing → Upload Foto
              └─→ Cek Level Verifikasi → Listing Aktif → Terima Pesan Pembeli
```

### 7.5 Alur Pencarian Kos

```
Main Page → Cari Kos
    └─→ Input Preferensi (harga, fasilitas, jarak)
         └─→ Hasil Pencarian (dengan peta mini)
              └─→ Detail Kos → Simpan Favorit / Hubungi Pelapor
                   └─→ Bandingkan Kos (maks 3) → Pilih Kos
```

### 7.6 Alur Laporan Barang Temuan

```
Main Page → Barang Temuan
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
- Landing page dan Main Page harus termuat dalam < 3 detik pada koneksi 4G
- Animasi (kursor, scroll, page transition) harus berjalan halus (target ~60fps) dan tidak memblok interaksi
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
- Animasi berat (cursor-follow) menyesuaikan/menonaktif pada perangkat dengan preferensi `prefers-reduced-motion` atau performa rendah

### 8.5 Skalabilitas
- Arsitektur dirancang modular agar fitur baru dapat ditambahkan tanpa merombak sistem lama
- Database dirancang untuk menangani pertumbuhan pengguna hingga 10.000 akun

---

## 9. Arsitektur Teknologi

### 9.1 Tech Stack (Rekomendasi untuk Hackathon)

| Layer | Teknologi | Alasan |
|---|---|---|
| Frontend Framework | Next.js (React) | SSR/SSG bawaan, routing otomatis (tiap fitur jadi route terpisah), performa baik, scalable dari prototype ke production |
| Animasi | Framer Motion | Library animasi React paling populer, deklaratif, mudah untuk page transition, scroll animation, micro-interaction, dan efek cursor-follow |
| Styling | Tailwind CSS | Utility-first, cepat dikembangkan, konsisten, mudah dikombinasikan dengan Framer Motion |
| Icon | Lucide React / Heroicons | Ringan, konsisten dengan ekosistem Tailwind |
| Backend | Node.js + Express.js | Ringan, cepat, ekosistem npm yang luas |
| Database | Supabase (PostgreSQL) | Relasional, cocok untuk data terstruktur dan relasi antar listing/user/event/post; sekaligus menyediakan storage dan dashboard GUI dalam satu paket |
| Autentikasi | JWT (JSON Web Token) custom di Express | Stateless, aman, mudah diimplementasikan; tidak memakai Supabase Auth supaya kontrol penuh tetap di backend sendiri |
| Storage File | Supabase Storage | Upload foto profil, barang, kos, dokumen verifikasi, dan asset karakter maskot; satu ekosistem dengan database |
| Hosting | Vercel (Frontend) + Railway / Render (Backend) + Supabase (Database & Storage) | Gratis untuk prototype, deploy otomatis dari Git, cocok untuk Next.js |

**Catatan migrasi:** Next.js dipilih dibanding HTML statis karena setiap "halaman" (event, marketplace, kos, map, temuan, community) bisa jadi route terpisah dengan layout dan komponen yang reusable, sekaligus mendukung animasi transisi antar halaman lewat Framer Motion (`AnimatePresence`). Ini selaras dengan keputusan desain bahwa setiap fitur adalah halaman tersendiri, bukan panel dalam satu dashboard.

**Catatan arsitektur database:** Supabase digunakan sebagai database PostgreSQL + storage saja, bukan sebagai auto-API langsung ke frontend. Frontend Next.js tidak pernah terhubung langsung ke Supabase — semua request tetap melalui backend Express yang memvalidasi JWT custom terlebih dahulu. Row Level Security (RLS) dimatikan di sisi Supabase karena autentikasi sepenuhnya dikendalikan oleh backend sendiri, bukan oleh Supabase Auth. Pendekatan ini menjaga agar kredensial database (`service_role key`) tidak pernah terekspos ke browser pengguna.

### 9.2 Struktur Folder Project

```
unpam-space/
├── frontend/                          ← Next.js App
│   ├── app/
│   │   ├── layout.tsx                 ← Root layout (font, provider animasi)
│   │   ├── page.tsx                   ← Landing page ("/") — hero center, cursor bg, footer
│   │   ├── globals.css                ← Tailwind base + custom CSS
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── main/
│   │   │   └── page.tsx               ← Main Page (grid fitur + welcome + maskot)
│   │   ├── event/
│   │   │   ├── page.tsx               ← List event
│   │   │   └── [id]/page.tsx          ← Detail event
│   │   ├── marketplace/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── kos/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── map/
│   │   │   └── page.tsx
│   │   ├── temuan/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── community/                 ← Forum/Community gaya Discord (eks "Cari Teman")
│   │   │   ├── page.tsx               ← Jelajah topik/kategori + daftar post
│   │   │   └── [id]/page.tsx          ← Detail post + balasan/komentar
│   │   └── plus/
│   │       └── page.tsx               ← Halaman Unpam Space+ (subscription)
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
│   │   │   └── Footer.tsx             ← Footer landing (sosmed, hak cipta, privasi, S&K)
│   │   ├── animations/                ← Wrapper animasi Framer Motion
│   │   │   ├── CursorBackground.tsx   ← Background animasi mengikuti kursor (landing)
│   │   │   ├── PageTransition.tsx
│   │   │   ├── TypingText.tsx         ← Welcome animasi teks di Main Page
│   │   │   ├── FadeIn.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   └── ScrollReveal.tsx       ← Scroll animation landing page
│   │   └── features/                  ← Komponen spesifik per fitur
│   │       ├── main/
│   │       │   ├── FeatureGrid.tsx    ← Grid kartu fitur di Main Page
│   │       │   ├── FeatureCard.tsx
│   │       │   └── MascotRandom.tsx   ← Logika pilih karakter maskot acak per-gender
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
│   │       └── community/
│   │           ├── PostCard.tsx       ← Kartu post (badge & warna khusus jika subscriber)
│   │           ├── PostForm.tsx       ← Buat post + pilih topik/kategori
│   │           ├── TopicList.tsx      ← Daftar topik/kategori gaya Discord
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
│   │       └── mascots/               ← Slot asset karakter maskot (diisi manual via AI)
│   │           ├── male/              ← male-1.png ... male-5.png (5 ekspresi)
│   │           └── female/            ← female-1.png ... female-5.png (5 ekspresi)
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
│   │   ├── community.js             ← Forum/Community (post, komentar, kategori, upvote)
│   │   ├── subscription.js          ← Unpam Space+
│   │   └── boost.js                 ← Boost Pay-per-Use
│   ├── models/
│   │   ├── User.js
│   │   ├── Listing.js
│   │   ├── Event.js
│   │   ├── Post.js                  ← Post community + kategori/topik
│   │   └── Subscription.js
│   ├── lib/
│   │   └── supabase.js              ← Supabase client (service_role key)
│   └── middleware/
│       └── auth.middleware.js
│
└── README.md
```

**Catatan struktur:**
- Folder `app/` memakai Next.js App Router (Next.js 13+), tiap subfolder otomatis jadi route — sejalan dengan keputusan desain bahwa **setiap fitur adalah halaman terpisah**, bukan panel dalam dashboard sidebar.
- `app/main/page.tsx` adalah **Main Page** (grid fitur) — menggantikan konsep "dashboard". Tidak ada komponen `Sidebar` fitur permanen.
- `components/animations/CursorBackground.tsx`, `ScrollReveal.tsx`, dan `TypingText.tsx` mengimplementasikan tiga animasi inti yang diminta: background mengikuti kursor (landing), reveal saat scroll (landing), dan welcome animasi teks (main page).
- `components/features/main/MascotRandom.tsx` memilih karakter maskot acak dari `public/images/mascots/{gender}/` sesuai gender pengguna; file dinamai `male-1..5` dan `female-1..5` (5 ekspresi per gender) dan **diisi manual** dengan asset hasil AI tanpa perlu mengubah kode.
- `[id]` adalah dynamic route Next.js untuk halaman detail (misal `/event/3`, `/community/12`).
- `routes/community.js` menangani post forum bergaya Discord (eks "Cari Teman"); `routes/subscription.js` menangani Unpam Space+ termasuk badge & warna post khusus serta status boost otomatis; `routes/boost.js` menangani pembelian boost per listing.

### 9.3 Pembagian Kerja Tim

| Anggota | Role | Tanggung Jawab |
|---|---|---|
| Hacker 1 | Backend Dev | Server, API, autentikasi, database schema, community & subscription |
| Hacker 2 | Frontend Dev | Landing page, Main Page (grid + maskot), marketplace, kos, integrasi API |
| Hipster | UI/UX Designer | Desain visual, animasi (cursor/scroll/typing), wireframe, halaman event & map, asset maskot |
| Hustler | PM & Presenter | PPT, narasi demo, dokumentasi, pengumpulan data survei |

---

## 10. Prioritas Fitur MVP

### Fase Hackathon (Must Have — Demo Day)

| # | Fitur | PIC | Estimasi |
|---|---|---|---|
| 1 | Landing page (hero center, cursor bg, scroll animation, footer) | Hacker 2 + Hipster | 4 jam |
| 2 | Login/Register | Hacker 2 | 2 jam |
| 3 | Main Page (grid fitur + welcome animasi teks + maskot random) | Hacker 2 + Hipster | 4 jam |
| 4 | Halaman Event Kampus | Hipster + Hacker 1 | 3 jam |
| 5 | Marketplace COD (listing + detail) | Hacker 1 & 2 | 5 jam |
| 6 | Pencarian Kos | Hacker 1 | 4 jam |
| 7 | Campus Map (denah statis interaktif) | Hipster + Hacker 2 | 4 jam |
| 8 | Profil Pengguna + Badge Verifikasi | Hacker 1 | 2 jam |

### Fase Pasca-Hackathon (Should Have)

- Sistem notifikasi real-time
- Community/Forum gaya Discord (post, kategori topik, komentar, upvote, DM)
- Fitur Barang Temuan
- Rating & ulasan pengguna
- Verifikasi dokumen otomatis
- Unpam Space+ (Subscription) — badge & warna post khusus + boost otomatis
- Boost Pay-per-Use

### Jangka Panjang (Could Have)

- Mobile app (Android)
- Integrasi SSO dengan sistem akademik Unpam
- Dashboard admin kampus
- Sistem rekomendasi berbasis AI
- Sistem channel/komunitas Discord-like yang lebih dalam (role, moderasi, voice/chat real-time)

---

## 11. Metrik Keberhasilan

### Metrik Adopsi
- Jumlah akun terdaftar dalam 30 hari pertama: **Target 500 pengguna**
- Jumlah listing aktif di marketplace: **Target 100 listing**
- Jumlah kos terdaftar: **Target 30 kos**

### Metrik Keterlibatan
- Daily Active Users (DAU): **Target 30% dari total pengguna terdaftar**
- Rata-rata sesi per pengguna per hari: **Target > 5 menit**
- Jumlah post Community per minggu: **Target > 50 post**
- Jumlah komunitas/topik aktif (mabar, PKM, project, cyber security, Cisco, dll.): **Target > 10 topik aktif**

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
  ├─ Prototype web fungsional (landing + main page + halaman fitur terpisah)
  ├─ Sistem autentikasi dasar
  ├─ Demo marketplace, event, kos, campus map
  └─ Presentasi & pitch ke juri

Q4 2025 — Beta Launch
  ├─ Backend production-ready
  ├─ Semua fitur Must Have live
  ├─ Community/Forum gaya Discord live
  ├─ Onboarding 100 pengguna pertama (mahasiswa Unpam)
  └─ Pengumpulan feedback dan iterasi

Q1 2026 — Pengembangan Lanjutan
  ├─ Fitur Should Have selesai
  ├─ Sistem verifikasi otomatis
  ├─ Unpam Space+ & Boost
  ├─ Kemitraan dengan BEM dan organisasi kampus
  └─ Target 1.000 pengguna aktif

Q2 2026 — Skalasi
  ├─ Mobile app Android
  ├─ Ekspansi ke kampus lain di Pamulang
  └─ Eksplorasi model monetisasi lanjutan
```

---

## 13. Risiko & Mitigasi

| Risiko | Kemungkinan | Dampak | Mitigasi |
|---|---|---|---|
| Adopsi lambat — mahasiswa enggan migrasi dari WhatsApp/Discord | Tinggi | Tinggi | Kampanye onboarding masif, ajak BEM sebagai early adopter resmi, manfaatkan daya tarik Community |
| Konten palsu atau akun tidak terverifikasi | Sedang | Tinggi | Sistem verifikasi bertingkat, laporan konten oleh komunitas |
| Data pribadi bocor (KTM, KTP) | Rendah | Sangat Tinggi | Enkripsi data, hapus dokumen setelah verifikasi, patuhi UU PDP |
| Animasi berat (cursor/scroll) menurunkan performa di perangkat low-end | Sedang | Sedang | Optimasi animasi, hormati `prefers-reduced-motion`, fallback statis |
| Platform tidak aktif karena minim konten awal | Tinggi | Sedang | Pre-populate dengan data dummy untuk demo, ajak admin kampus & komunitas IT kolaborasi |
| Overscope — fitur terlalu banyak, prototype tidak selesai | Sedang | Tinggi | Disiplin MoSCoW framework, cut fitur Should Have jika waktu kurang |
| Persaingan dari platform yang sudah ada | Rendah | Sedang | Fokus pada keunggulan hyperlocal + trust system + Community terverifikasi yang tidak dimiliki kompetitor |

---

*Dokumen ini adalah living document yang akan diperbarui seiring perkembangan proyek.*

**Unpam Space** — *Semua yang kamu butuhkan, dalam satu platform UNPAM SPACE.*

---
*PRD v1.2 · Tim Unpam Space · Hackathon Universitas Pamulang 2025*
