@echo off
title Workfolio - Development Server

echo ================================================
echo   WORKFOLIO - MENJALANKAN WEBSITE
echo ================================================
echo.

cd /d "%~dp0"

echo Memeriksa apakah dependencies sudah terinstall...
if not exist "node_modules" (
    echo [ERROR] Folder node_modules tidak ditemukan!
    echo.
    echo Silakan jalankan file "install.bat" terlebih dahulu.
    echo.
    pause
    exit /b 1
)

echo Menjalankan website...
echo.
echo Setelah muncul tulisan "Local: http://localhost:3000"
echo Silakan buka alamat tersebut di browser Anda.
echo.
echo Untuk menghentikan website, tekan tombol Ctrl + C
echo.

call npm run dev

echo.
echo Website sudah ditutup.
pause
