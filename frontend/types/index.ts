// Tipe data bersama (kontrak frontend <-> backend).
// Sepakati & ubah bareng di Fase 0 sebelum nulis fitur.

export type Gender = "male" | "female" | "unknown";

export type VerificationLevel = 0 | 1 | 2 | 3;

export interface User {
  id: string;
  nama: string;
  nim: string;
  email: string;
  jurusan?: string;
  semester?: number;
  gender: Gender;
  fotoUrl?: string;
  verificationLevel: VerificationLevel;
  isSubscriber: boolean; // Unpam Space+
  createdAt: string;
}

export type ListingType = "marketplace" | "kos";

export interface Listing {
  id: string;
  type: ListingType;
  ownerId: string;
  judul: string;
  deskripsi: string;
  harga: number;
  fotoUrls: string[];
  kategori?: string;
  isVerified: boolean;
  isBoosted: boolean;
  createdAt: string;
}

export interface Event {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  lokasi: string;
  posterUrl?: string;
  penyelenggara: string;
  kategori: "akademik" | "organisasi" | "lomba" | "sosial";
}

export type PostKategori =
  | "cari-teman"
  | "mabar"
  | "pkm"
  | "project"
  | "mata-kuliah"
  | "cyber-security"
  | "cisco-network"
  | "umum";

export interface Post {
  id: string;
  authorId: string;
  judul: string;
  isi: string;
  kategori: PostKategori;
  tags: string[];
  upvotes: number;
  authorIsSubscriber: boolean; // untuk badge + warna post khusus
  createdAt: string;
}

// Format response API standar
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
