"use client";

import Link from "next/link";

export default function ForProfessionals() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#f0fdf4] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Build Your Web3 Career with Workfolio
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Join the premier network of crypto and Web3 professionals. Work with leading protocols, DAOs, and founders on meaningful projects.
          </p>
          <Link href="#apply" className="btn-primary inline-block px-9 py-3.5 rounded-2xl text-lg font-semibold">
            Apply as a Professional
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Why Top Web3 Talent Chooses Workfolio</h2>
          <ul className="space-y-4 text-slate-600 text-[15px]">
            <li className="flex gap-3">
              <span className="text-[#15803d] mt-1">✓</span> 
              <span><strong>Premium clients only</strong> — Work with serious protocols, DAOs, and well-funded projects</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#15803d] mt-1">✓</span> 
              <span><strong>Fair &amp; timely payments</strong> — Funds released within 48 hours of client approval</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#15803d] mt-1">✓</span> 
              <span><strong>Professional tools</strong> — Portfolio showcase, on-chain proof of work, and performance analytics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#15803d] mt-1">✓</span> 
              <span><strong>Transparent fees</strong> — 15% platform fee (reduced to 8% with Workfolio Pro)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#15803d] mt-1">✓</span> 
              <span><strong>Reputation that travels</strong> — On-chain verified work history and client reviews</span>
            </li>
          </ul>
        </div>

        {/* Application Form */}
        <div id="apply" className="bg-white border rounded-3xl p-8">
          <h3 className="font-semibold text-xl mb-1">Apply to Join Workfolio</h3>
          <p className="text-sm text-slate-500 mb-6">Applications are reviewed within 48 hours. We accept a limited number of professionals per category.</p>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you. Your application has been submitted (demo)."); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full border rounded-2xl px-4 py-3" placeholder="Full name" required />
              <input type="email" className="w-full border rounded-2xl px-4 py-3" placeholder="Professional email" required />
            </div>

            <select className="w-full border rounded-2xl px-4 py-3" required>
              <option value="">Primary expertise</option>
              <option>Smart Contract Development</option>
              <option>dApp &amp; Web3 Frontend</option>
              <option>Web3 Design &amp; UI/UX</option>
              <option>Tokenomics &amp; Research</option>
              <option>Crypto Content &amp; Copywriting</option>
              <option>Community &amp; DAO Operations</option>
              <option>NFT Art &amp; Digital Collectibles</option>
              <option>Crypto Marketing &amp; Growth</option>
              <option>On-chain Analytics</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full border rounded-2xl px-4 py-3" placeholder="Years of Web3 experience" required />
              <input className="w-full border rounded-2xl px-4 py-3" placeholder="Notable projects / clients (optional)" />
            </div>

            <textarea 
              className="w-full border rounded-3xl px-4 py-3 h-28" 
              placeholder="Tell us about your most impactful Web3 project or contribution..." 
              required 
            />

            <button type="submit" className="btn-primary w-full py-3 rounded-2xl font-semibold">
              Submit Application
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-1">We only accept professionals with proven on-chain or crypto-native experience.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
