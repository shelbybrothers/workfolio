import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { AuthModal } from "@/components/modals/AuthModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workfolio — Temukan Talenta Terbaik untuk Pekerjaanmu",
  description: "Platform freelance profesional. Temukan jasa desain, pengembangan web, video, penulisan, dan ratusan kategori lainnya dari talenta terbaik Indonesia dan dunia.",
  icons: {
    icon: "/images/logo-wf.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-950 antialiased">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AuthModal />
          <Toaster position="top-center" richColors closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
