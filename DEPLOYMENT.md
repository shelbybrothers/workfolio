# Cara Menghubungkan Workfolio ke Domain (Online)

## Rekomendasi Terbaik: Vercel (Paling Mudah)

Untuk website Next.js seperti Workfolio, cara **paling mudah, cepat, dan gratis** adalah menggunakan **Vercel**.

Vercel adalah platform resmi yang dibuat oleh tim Next.js.

---

## Langkah 1: Persiapan

Sebelum deploy, kamu butuh:

1. **Akun GitHub** (gratis)
   - Kalau belum punya, daftar di: https://github.com

2. **Domain** (opsional dulu)
   - Kalau belum punya domain, kamu bisa deploy dulu dengan alamat gratis dari Vercel (contoh: workfolio.vercel.app)
   - Nanti bisa dihubungkan ke domain sendiri.

---

## Langkah 2: Deploy ke Vercel (Cara Termudah)

### Cara 1: Deploy Langsung dari Vercel (Paling Direkomendasikan)

1. Buka website: [https://vercel.com](https://vercel.com)
2. Klik **"Sign Up"** → pilih **"Continue with GitHub"**
3. Login dengan akun GitHub kamu
4. Setelah masuk, klik tombol **"Add New Project"**
5. Vercel akan meminta izin mengakses GitHub kamu. Klik **Authorize**
6. Sekarang kamu harus **upload proyek Workfolio ke GitHub** dulu (lihat panduan di bawah)

---

## Langkah 3: Upload Project ke GitHub (Wajib)

Karena proyek kita ada di komputer lokal, kita harus mengirimkannya ke GitHub.

### Panduan Singkat:

1. Buka https://github.com dan login
2. Klik tombol **"+"** di pojok kanan atas → **New repository**
3. Isi:
   - Repository name: `workfolio`
   - Visibility: **Public** (atau Private)
   - **JANGAN** centang "Add a README file"
4. Klik **Create repository**
5. Setelah dibuat, kamu akan melihat halaman dengan perintah git.

Sekarang di komputer kamu:

1. Buka **Command Prompt** atau **PowerShell**
2. Masuk ke folder workfolio:

```bash
cd C:\Users\ROG\workfolio
```

3. Jalankan perintah berikut satu per satu:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/workfolio.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu.

---

## Langkah 4: Deploy di Vercel

Setelah project di GitHub:

1. Kembali ke Vercel
2. Klik **"Import"** pada repository `workfolio`
3. Vercel akan otomatis mendeteksi bahwa ini Next.js
4. Klik **"Deploy"**
5. Tunggu 1-2 menit

Setelah selesai, Vercel akan memberikan link gratis, contoh:
`https://workfolio-abc123.vercel.app`

Website kamu sudah online!

---

## Langkah 5: Menghubungkan ke Domain Sendiri (Custom Domain)

Kalau kamu sudah punya domain (misalnya `workfolio.id` atau `mywork.id`):

### Di Vercel:

1. Buka project kamu di Vercel
2. Pergi ke tab **Settings** → **Domains**
3. Ketik domain kamu (contoh: `workfolio.id` atau `www.workfolio.id`)
4. Klik **Add**
5. Vercel akan memberikan instruksi DNS yang harus kamu atur di penyedia domainmu.

### Di Penyedia Domain (Namecheap, Cloudflare, Google, dll):

Kamu harus menambahkan **CNAME record**:

- Type: `CNAME`
- Name: `www` (atau `@` untuk root domain)
- Value: `cname.vercel-dns.com` (Vercel akan kasih nilai yang tepat)

Setelah diatur, tunggu 5 menit sampai 48 jam (biasanya cepat).

---

## Pertanyaan Penting untuk Kamu

Sebelum saya kasih panduan lebih detail, tolong jawab:

1. **Apakah kamu sudah punya domain?**
   - Belum punya
   - Sudah punya (sebutkan nama domainnya)

2. **Apakah kamu sudah punya akun GitHub?**

3. **Mau pakai domain gratis dari Vercel dulu, atau langsung pakai domain sendiri?**

---

## Opsi Lain (Tidak Direkomendasikan untuk Pemula)

- Netlify (bisa, tapi Vercel lebih bagus untuk Next.js)
- Hostinger / Niagahoster (kurang cocok untuk Next.js)
- VPS sendiri (rumit dan mahal)

**Kesimpulan**: Vercel adalah pilihan terbaik untuk proyek ini.

---

Mau saya buatkan panduan yang lebih detail langkah demi langkah sesuai jawaban kamu?
