"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "buyer" | "seller";
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, name?: string) => void;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isAuthModalOpen: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("workfolio_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, name?: string) => {
    const newUser: User = {
      id: "u_" + Date.now(),
      name: name || email.split("@")[0],
      email,
      avatar: `https://i.pravatar.cc/64?img=${Math.floor(Math.random() * 50) + 1}`,
      role: "buyer",
    };
    setUser(newUser);
    localStorage.setItem("workfolio_user", JSON.stringify(newUser));
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("workfolio_user");
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        openAuthModal,
        closeAuthModal,
        isAuthModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
