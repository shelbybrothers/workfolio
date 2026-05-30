import Link from "next/link";
import { Star } from "lucide-react";
import { gigs, categories } from "@/lib/mock-data";

export default function BrowsePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Browse Web3 Talent</h1>
          <p className="text-slate-600 mt-1">Showing {gigs.length} premium services from verified professionals</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-3xl p-6 sticky top-20">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2 text-sm">
              {categories.map((cat) => (
                <Link 
                  key={cat.id} 
                  href={`/browse?category=${encodeURIComponent(cat.name)}`} 
                  className="block py-1.5 px-3 rounded-xl hover:bg-slate-100 text-slate-700"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="text-sm text-slate-500">All services shown are premium engagements starting from 19 SOL.</div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {gigs.map((gig) => (
              <Link 
                key={gig.id} 
                href={`/browse?gig=${gig.id}`} 
                className="group block rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg hover:border-[#15803d]/30 transition-all"
              >
                <div className="aspect-[16/10] bg-slate-100 relative">
                  <img 
                    src={gig.images[0]} 
                    alt={gig.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" 
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <img src={gig.seller.avatar} alt="" className="h-6 w-6 rounded-full" />
                    <span className="text-sm text-slate-600 truncate">{gig.seller.name}</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                      {gig.seller.level}
                    </span>
                  </div>

                  <h3 className="font-semibold leading-snug line-clamp-2 mb-4 group-hover:text-[#15803d] transition-colors">
                    {gig.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-500 fill-current" />
                      <span className="font-semibold text-slate-900">{gig.rating}</span>
                      <span className="text-slate-500">({gig.reviewCount})</span>
                    </div>
                    <div className="font-semibold">
                      From {gig.startingPrice} SOL
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-slate-500">
            All professionals are manually reviewed. Prices reflect premium, high-impact Web3 work.
          </div>
        </div>
      </div>
    </div>
  );
}

