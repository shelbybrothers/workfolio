"use client";

import React, { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { X } from "lucide-react";

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuth();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      login(email, mode === "register" ? name : undefined);
      setLoading(false);
      setEmail("");
      setName("");
    }, 420);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={closeAuthModal}>
      <div
        className="modal-content w-full max-w-md bg-white rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 pt-6 pb-2">
          <div className="font-semibold text-xl tracking-tight">
            {mode === "login" ? "Masuk ke Workfolio" : "Daftar Akun Baru"}
          </div>
          <button onClick={closeAuthModal} className="p-1 text-slate-400 hover:text-slate-600">
            <X size={22} />
          </button>
        </div>

        <div className="px-6 pb-6">
          <div className="flex rounded-full bg-slate-100 p-1 text-sm font-medium mb-6">
            <button
              className={`flex-1 py-2 rounded-full transition-all ${mode === "login" ? "bg-white shadow" : "text-slate-500"}`}
              onClick={() => setMode("login")}
            >
              Masuk
            </button>
            <button
              className={`flex-1 py-2 rounded-full transition-all ${mode === "register" ? "bg-white shadow" : "text-slate-500"}`}
              onClick={() => setMode("register")}
            >
              Daftar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="text-xs font-medium text-slate-600 block mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full border border-slate-300 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#15803d]"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-slate-600 block mb-1.5">Alamat Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#15803d]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 rounded-2xl text-base font-semibold disabled:opacity-70 mt-2"
            >
              {loading ? "Memproses..." : mode === "login" ? "Masuk" : "Daftar Sekarang"}
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-500 mt-6">
            Dengan melanjutkan, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi Workfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
