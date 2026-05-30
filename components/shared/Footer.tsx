import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo-wf.png" 
                alt="Workfolio" 
                className="h-9 w-9 rounded-lg object-contain" 
              />
              <span className="font-semibold text-xl text-white tracking-tight">Workfolio</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
              The premium marketplace for crypto and Web3 professionals.
            </p>
          </div>

          {/* Categories */}
          <div>
            <div className="font-semibold text-white mb-3">Popular Categories</div>
            <div className="space-y-2 text-xs">
              <Link href="/browse" className="block hover:text-white">Smart Contracts</Link>
              <Link href="/browse" className="block hover:text-white">dApp Development</Link>
              <Link href="/browse" className="block hover:text-white">Web3 Design</Link>
              <Link href="/browse" className="block hover:text-white">Tokenomics</Link>
              <Link href="/browse" className="block hover:text-white">DAO Operations</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <div className="space-y-2 text-xs">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/for-freelancers" className="block hover:text-white">Careers</Link>
              <Link href="/contact" className="block hover:text-white">Contact Us</Link>
              <Link href="/pricing" className="block hover:text-white">Pricing</Link>
              <Link href="/how-it-works" className="block hover:text-white">How it Works</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="font-semibold text-white mb-3">Support</div>
            <div className="space-y-2 text-xs">
              <Link href="/contact" className="block hover:text-white">Help Center</Link>
              <Link href="/contact" className="block hover:text-white">Trust &amp; Safety</Link>
              <Link href="/contact" className="block hover:text-white">Privacy Policy</Link>
              <Link href="/contact" className="block hover:text-white">Terms of Service</Link>
              <Link href="/contact" className="block hover:text-white">Report an Issue</Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <div className="font-semibold text-white mb-3">Community</div>
            <div className="space-y-2 text-xs">
              <a href="#" className="block hover:text-white">Workfolio Blog</a>
              <a href="#" className="block hover:text-white">Community Forum</a>
              <a href="#" className="block hover:text-white">Events &amp; Webinars</a>
              <a href="#" className="block hover:text-white">Partner Program</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {year} Workfolio. All rights reserved. Built for the builders of the decentralized future.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
