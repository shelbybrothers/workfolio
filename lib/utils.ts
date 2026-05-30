import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatCompactPrice(price: number): string {
  if (price >= 1_000_000) {
    return `Rp ${(price / 1_000_000).toFixed(1)}jt`;
  }
  if (price >= 1000) {
    return `Rp ${(price / 1000).toFixed(0)}rb`;
  }
  return `Rp ${price}`;
}
