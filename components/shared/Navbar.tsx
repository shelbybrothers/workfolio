"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { Search, Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { user, isLoggedIn, logout, openAuthModal } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/browse?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navLinks = [
    { href: "/browse", label: "Browse Services" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/for-freelancers", label: "For Professionals" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img 
              src="/images/logo-wf.png" 
              alt="Workfolio" 
              className="h-9 w-9 rounded-lg object-contain" 
            />
            <span className="font-semibold text-2xl tracking-tight text-slate-900 group-hover:text-[#15803d] transition-colors">
              Workfolio
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. smart contracts, tokenomics...)"
                className="search-input w-full bg-slate-100 border border-slate-200 focus:border-[#15803d] rounded-full pl-11 pr-4 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none"
              />
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
            </div>
          </form>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Sell on Workfolio */}
            <Link
              href="/for-freelancers"
              className="text-sm font-semibold text-[#15803d] hover:text-[#166534] px-4 py-2 rounded-full hover:bg-[#f0fdf4] transition-colors"
            >
              Offer Services
            </Link>

            {/* Auth */}
            {!isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={openAuthModal}
                  className="px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                >
                  Log in
                </button>
                <button
                  onClick={openAuthModal}
                  className="btn-primary px-5 py-2 text-sm rounded-full"
                >
                  Join
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="h-8 w-8 rounded-full object-cover border border-slate-200"
                  />
                  <span className="text-sm font-medium text-slate-700 max-w-[110px] truncate">
                    {user?.name}
                  </span>
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 text-sm"
                    >
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="font-semibold text-slate-900">{user?.name}</p>
                        <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                      </div>
                      <Link href="/browse" className="block px-4 py-2.5 hover:bg-slate-50">Dashboard</Link>
                      <Link href="/browse" className="block px-4 py-2.5 hover:bg-slate-50">Pesanan Saya</Link>
                      <Link href="/for-freelancers" className="block px-4 py-2.5 hover:bg-slate-50">Jadi Penjual</Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-2.5 text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" /> Keluar
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white px-4 py-4 mobile-safe-bottom"
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full bg-slate-100 border border-slate-200 rounded-full pl-10 py-2.5 text-sm"
                />
                <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              </div>
            </form>

            <div className="flex flex-col gap-1 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2.5 px-3 rounded-xl hover:bg-slate-100 active:bg-slate-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/for-freelancers"
                className="py-2.5 px-3 text-[#15803d] font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Offer Services on Workfolio
              </Link>

              <div className="h-px bg-slate-100 my-2" />

              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openAuthModal();
                  }}
                  className="btn-primary w-full py-3 rounded-2xl mt-1"
                >
                  Log in / Join
                </button>
              ) : (
                <>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <img src={user?.avatar} alt="" className="h-9 w-9 rounded-full" />
                    <div>
                      <div className="font-semibold">{user?.name}</div>
                      <div className="text-xs text-slate-500">{user?.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left py-3 px-3 text-red-600 hover:bg-red-50 rounded-xl"
                  >
                    <LogOut size={16} /> Keluar
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
