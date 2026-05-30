import Link from "next/link";
import { categories, gigs, testimonials } from "@/lib/mock-data";
import { Search, Star, Users, Award, Clock } from "lucide-react";

export default function Home() {
  const featuredGigs = gigs.slice(0, 8);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#f0fdf4] via-white to-white pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-[#15803d]/20 text-sm font-medium text-[#15803d] mb-6">
            <Award className="h-4 w-4" /> Trusted by 180+ Web3 projects and DAOs
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-950 leading-[1.05] mb-6">
            Find world-class<br />Web3 professionals
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-9">
            Connect with exceptional talent building the decentralized future.
          </p>

          {/* Hero Search */}
          <form action="/browse" className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <input
                type="text"
                name="q"
                placeholder="Search services (e.g. smart contracts, tokenomics, DAO operations...)"
                className="search-input w-full text-lg bg-white border-2 border-slate-200 focus:border-[#15803d] shadow-lg rounded-3xl pl-14 pr-6 py-5 placeholder:text-slate-400"
              />
              <Search className="absolute left-5 top-5.5 h-6 w-6 text-slate-400 group-focus-within:text-[#15803d]" />
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {["Smart Contracts", "Tokenomics", "DAO Operations", "Web3 Design", "On-chain Analytics"].map((term) => (
              <Link
                key={term}
                href={`/browse?q=${encodeURIComponent(term)}`}
                className="px-4 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition-colors"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-b bg-white py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-slate-500">
          <div className="flex items-center gap-2"><Users className="h-4 w-4" /> 180+ Web3 projects served</div>
          <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Average rating 4.94/5</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 91% delivered on time</div>
          <div>320+ projects completed this quarter</div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Explore Categories</h2>
            <p className="text-slate-600 mt-1">Find specialized talent across the Web3 ecosystem</p>
          </div>
          <Link href="/browse" className="hidden md:block text-[#15803d] font-medium hover:underline">Browse all services →</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/browse?category=${encodeURIComponent(cat.name)}`}
              className="category-card group flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 hover:border-[#15803d] hover:shadow-sm"
            >
              <div className="mb-3 text-3xl opacity-80 group-hover:scale-110 transition-transform">
                {cat.icon === "Code" && "📜"}
                {cat.icon === "Globe" && "🖥️"}
                {cat.icon === "Palette" && "🎨"}
                {cat.icon === "BarChart" && "📊"}
                {cat.icon === "PenTool" && "✍️"}
                {cat.icon === "Users" && "👥"}
                {cat.icon === "Image" && "🖼️"}
                {cat.icon === "TrendingUp" && "🚀"}
                {cat.icon === "Activity" && "📈"}
              </div>
              <div className="font-semibold text-center text-sm leading-tight mb-1">{cat.name}</div>
              <div className="text-xs text-slate-500">{cat.gigCount.toLocaleString("en-US")} services</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED GIGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Featured Services</h2>
            <p className="text-slate-600 mt-1">Handpicked from top-rated Web3 professionals</p>
          </div>
          <Link href="/browse" className="text-[#15803d] font-medium hidden md:block hover:underline">Browse all services →</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredGigs.map((gig) => (
            <Link
              key={gig.id}
              href={`/browse?gig=${gig.id}`}
              className="gig-card group block rounded-3xl border border-slate-200 bg-white overflow-hidden"
            >
              <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
                <img
                  src={gig.images[0]}
                  alt={gig.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={gig.seller.avatar} alt="" className="h-6 w-6 rounded-full" />
                  <span className="text-xs text-slate-600 truncate">{gig.seller.name}</span>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">{gig.seller.level}</span>
                </div>
                <h3 className="font-semibold leading-tight line-clamp-2 mb-3 group-hover:text-[#15803d] transition-colors">{gig.title}</h3>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold text-slate-900">{gig.rating}</span>
                    <span className="text-slate-500">({gig.reviewCount})</span>
                  </div>
                  <div className="font-semibold text-right">
                    From {gig.startingPrice} SOL
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/browse" className="inline-flex btn-primary px-8 py-3 rounded-2xl text-base font-semibold">
            Explore All Services
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS TEASER */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">How Workfolio Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { step: "01", title: "Discover & Connect", desc: "Browse curated Web3 talent or post a project brief. Filter by expertise, timeline, and budget." },
              { step: "02", title: "Collaborate Securely", desc: "Communicate directly with professionals. Choose the right package and pay with confidence." },
              { step: "03", title: "Deliver & Review", desc: "Iterate with your talent, receive high-quality work, and leave feedback to strengthen the ecosystem." },
            ].map((item) => (
              <div key={item.step} className="bg-white p-7 rounded-3xl border">
                <div className="text-[#15803d] text-xs font-mono tracking-[3px] mb-2">{item.step}</div>
                <div className="font-semibold text-xl mb-2">{item.title}</div>
                <p className="text-slate-600 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/how-it-works" className="inline-block mt-8 text-[#15803d] font-medium hover:underline">Learn more →</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-3xl font-semibold tracking-tight mb-10">Trusted by Web3 leaders</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-3xl border p-7 bg-white">
              <div className="flex gap-1 mb-4 text-amber-500">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-lg leading-snug mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}{t.company && `, ${t.company}`}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#15803d] py-14 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">Ready to build the future?</h2>
          <p className="text-[#c8f0d0] mb-7">Join 180+ Web3 projects and DAOs who found exceptional talent on Workfolio.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/browse" className="bg-white text-[#15803d] font-semibold px-8 py-3.5 rounded-2xl hover:bg-slate-100 transition-colors">Find Talent</Link>
            <Link href="/for-freelancers" className="border border-white/70 hover:bg-white/10 font-semibold px-8 py-3.5 rounded-2xl transition-colors">Join as a Professional</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
