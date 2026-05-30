# Troubleshooting - Masalah Saat Install Workfolio

## Masalah Umum & Solusinya

### 1. "npm is not recognized as an internal or external command"

**Penyebab:**
- Node.js belum terinstall, atau
- Komputer belum di-restart setelah install Node.js

**Solusi:**
1. Install Node.js dari https://nodejs.org (klik tombol LTS)
2. **Restart komputer Anda** (penting!)
3. Setelah restart, coba double-click lagi file `install.bat`

---

### 2. "bash: npm: command not found" atau muncul "bash"

**Penyebab:**
Anda sedang menggunakan **Git Bash** atau terminal "bash".

**Solusi yang Benar:**
- Jangan pakai Git Bash untuk saat ini.
- Gunakan cara paling mudah:

**Cara Termudah:**
1. Buka File Explorer
2. Masuk ke folder `C:\Users\ROG\workfolio`
3. **Double click** langsung file `install.bat` (ikonnya seperti aplikasi hitam)
4. Tunggu sampai selesai
5. Setelah itu double click `start.bat`

---

### 3. Perintah dijalankan tapi tidak ada reaksi / lama sekali

**Solusi:**
- Pastikan koneksi internet stabil (npm perlu download file dari internet)
- Jangan tutup jendela hitam yang muncul
- Tunggu minimal 2-3 menit

---

### 4. Muncul error "EACCES" atau "permission denied"

**Solusi:**
1. Klik kanan pada file `install.bat`
2. Pilih **"Run as administrator"**
3. Coba lagi

---

### 5. Setelah `npm install` selesai, tapi saat `npm run dev` error

**Solusi:**
Coba hapus folder `node_modules` lalu install ulang:

1. Hapus folder `node_modules` (jika ada)
2. Double click lagi file `install.bat`

---

## Cara Paling Mudah (Double Click)

Setelah Node.js terinstall dengan benar:

1. Buka folder `workfolio`
2. Double click file **`install.bat`** → tunggu sampai selesai
3. Double click file **`start.bat`**
4. Tunggu sampai muncul tulisan:
   ```
   Local:        http://localhost:3000
   ```
5. Buka browser → ketik alamat di atas

---

## Masih Error?

Balas chat ini dengan **menyalin teks error** yang muncul (bukan screenshot).

Contoh yang bagus untuk dikirim:
- "npm is not recognized as an internal or external command"
- "bash: npm: command not found"
- Atau teks error lengkap yang muncul di jendela hitam

Saya akan bantu sesuai error yang muncul.
