# Cara Menjalankan Workfolio (Untuk Pemula - Windows)

## Masalah yang Anda Alami
Anda tidak menemukan perintah `npm install` karena **Node.js belum terinstall** di komputer Anda.

Node.js adalah program yang dibutuhkan untuk menjalankan website modern seperti Workfolio.

---

## Langkah 1: Install Node.js (Paling Penting)

Ikuti langkah berikut dengan teliti:

1. Buka browser (Chrome / Edge)
2. Kunjungi link resmi ini:  
   **https://nodejs.org**
3. Anda akan melihat dua tombol besar:
   - **LTS** (Recommended) ← **Klik yang ini** (versi hijau)
4. File installer akan otomatis terdownload (nama file kira-kira `node-v22.x.x-x64.msi`)
5. Setelah download selesai, **klik dua kali** file tersebut untuk menjalankan installer.
6. Ikuti wizard instalasi:
   - Klik **Next** terus
   - **Centang** pilihan "Automatically install the necessary tools" (opsional tapi bagus)
   - Klik **Install**
   - Tunggu sampai selesai
7. **Restart komputer Anda** (penting!)

---

## Langkah 2: Verifikasi Node.js Berhasil Terinstall

Setelah restart:

1. Tekan tombol **Windows** di keyboard
2. Ketik: `cmd` lalu tekan Enter (akan terbuka Command Prompt hitam)
3. Ketik perintah ini lalu tekan Enter:

```bash
node --version
```

Jika berhasil, akan muncul sesuatu seperti:
```
v22.14.0
```

Ketik juga:

```bash
npm --version
```

Jika keduanya muncul angkanya, berarti Node.js sudah terinstall dengan benar.

---

## Langkah 3: Jalankan Workfolio

1. Buka **File Explorer**
2. Pergi ke folder:  
   `C:\Users\ROG\workfolio`
3. Di dalam folder tersebut, klik kanan pada area kosong → pilih **"Open in Terminal"** atau **"Buka PowerShell di sini"**
4. Di terminal yang terbuka, ketik perintah berikut satu per satu:

```bash
npm install
```

Tunggu sampai selesai (bisa 1–3 menit, ada banyak tulisan).

Setelah selesai, jalankan:

```bash
npm run dev
```

5. Tunggu beberapa detik sampai muncul tulisan:
   ```
   Local: http://localhost:3000
   ```
6. Buka browser dan ketik alamat:  
   **http://localhost:3000**

Selesai! Website Workfolio sudah berjalan di komputer Anda.

---

## Troubleshooting

### "npm is not recognized"
→ Berarti Node.js belum terinstall atau belum restart komputer. Ulangi Langkah 1.

### Tidak ada folder "node_modules" setelah npm install
→ Itu normal. Folder `node_modules` baru muncul **setelah** Anda menjalankan `npm install`.

### Ingin menghentikan website?
Di terminal, tekan **Ctrl + C** dua kali.

---

## Pertanyaan?

Balas chat ini dengan:
- Screenshot error yang muncul (jika ada)
- Hasil dari perintah `node --version`

Saya akan bantu sampai website bisa dibuka.

---

**Catatan:**  
Setelah proyek selesai, Anda tidak perlu menjalankan ini setiap hari. 
Website bisa di-upload ke internet (Vercel) sehingga orang lain bisa langsung buka tanpa install apa-apa.
