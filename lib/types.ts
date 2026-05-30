export interface Seller {
  id: string;
  name: string;
  avatar: string;
  level: "New" | "Level 1" | "Level 2" | "Top Rated";
  rating: number;
  reviewCount: number;
  location: string;
  memberSince: string;
  responseTime: string;
}

export interface GigPackage {
  name: "Basic" | "Standard" | "Premium";
  price: number;
  deliveryDays: number;
  description: string;
  features: string[];
  revisions: number;
}

export interface Gig {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  seller: Seller;
  startingPrice: number;
  rating: number;
  reviewCount: number;
  deliveryDays: number;
  images: string[];
  tags: string[];
  packages: GigPackage[];
  faqs: { q: string; a: string }[];
}

export interface Category {
  id: string;
  name: string;
  icon: string; // lucide icon name
  slug: string;
  gigCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  quote: string;
  rating: number;
}

export type SortOption = 
  | "relevance" 
  | "rating-high" 
  | "price-low" 
  | "price-high" 
  | "fastest";
