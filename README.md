# Workfolio — Professional Fiverr-style Freelance Marketplace

Website profesional marketplace jasa freelance dengan desain modern mirip Fiverr, dibuat menggunakan **Next.js 15 + Tailwind CSS + TypeScript**.

## Status Proyek
✅ **Phase 0 + Phase 1 selesai** (Landing page lengkap + Navbar + Auth + beberapa halaman pendukung)

## Cara Menjalankan (di komputer Anda)

1. **Pastikan Node.js 18+ sudah terinstall**
2. Buka terminal dan jalankan perintah berikut:

```bash
cd workfolio

# Install dependencies
npm install
# atau
pnpm install

# Jalankan development server
npm run dev
# atau
pnpm dev
```

3. Buka **http://localhost:3000** di browser.

## Fitur yang Sudah Berfungsi

- Hero section + search bar yang mengarah ke `/browse`
- 8 kategori interaktif
- 10 gig cards di Home (klik akan mengarahkan)
- Navbar lengkap dengan mobile menu + login state
- Login/Register modal (fake auth, tersimpan di localStorage)
- Halaman: Browse (placeholder), How It Works, For Freelancers (dengan form), Pricing, Contact
- Desain fully responsive (mobile-friendly)
- Logo resmi "wf." sudah terpasang

## Langkah Selanjutnya (akan dikerjakan bertahap)

- [ ] Browse page dengan filter lengkap (kategori, harga, rating, sort)
- [ ] Gig Detail Modal yang kaya (3 paket harga, reviews, order flow)
- [ ] Interaksi penuh "Pesan Sekarang"
- [ ] Lebih banyak polish & animasi

## Catatan Penting

- Semua data bersifat **mock** (dummy)
- Untuk production, Anda bisa mengganti gambar gig dengan aset asli
- Warna utama menggunakan `#15803d` sesuai permintaan

## Struktur Folder Penting

```
app/                  # Halaman (Next App Router)
components/
  shared/             # Navbar, Footer, dll
  modals/             # AuthModal, dll
lib/
  mock-data.ts        # Semua data gigs & kategori
  types.ts
```

---

**Dibuat dengan ❤️ untuk kebutuhan demo profesional.**

Hubungi saya jika ingin melanjutkan ke fase berikutnya.
