@echo off
title Workfolio - Install Dependencies

echo ================================================
echo   WORKFOLIO - INSTALL DEPENDENCIES
echo ================================================
echo.

cd /d "%~dp0"

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js tidak ditemukan!
    echo.
    echo Silakan install Node.js terlebih dahulu dari:
    echo https://nodejs.org
    echo.
    echo Setelah install, RESTART komputer Anda, lalu jalankan file ini lagi.
    echo.
    pause
    exit /b 1
)

echo Node.js ditemukan.
echo.
echo Menjalankan "npm install"...
echo Ini bisa memakan waktu 1-3 menit. Mohon bersabar...
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Terjadi masalah saat npm install.
    echo Coba jalankan ulang file ini, atau hubungi saya dengan pesan error yang muncul.
    echo.
    pause
    exit /b 1
)

echo.
echo ================================================
echo   INSTALASI SELESAI!
echo ================================================
echo.
echo Sekarang Anda bisa menjalankan file "start.bat"
echo untuk membuka website Workfolio.
echo.
pause
