import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight text-center mb-3">How Workfolio Works</h1>
      <p className="text-center text-slate-600 mb-12 text-lg">A simple, secure process designed for serious Web3 projects and professionals.</p>

      <div className="space-y-6">
        {[
          { 
            num: "1", 
            title: "Discover Exceptional Talent", 
            desc: "Browse our curated network of verified Web3 professionals. Filter by expertise, delivery time, and client reviews. Every professional on Workfolio has demonstrated real on-chain or crypto-native experience." 
          },
          { 
            num: "2", 
            title: "Engage & Contract Securely", 
            desc: "Reach out directly, discuss scope, and select the right package. All payments are held securely in escrow and released only after you approve the delivered work." 
          },
          { 
            num: "3", 
            title: "Collaborate & Deliver", 
            desc: "Work together through clear deliverables and revisions. Once complete, release payment and leave a verified review that contributes to the professional’s on-platform reputation." 
          },
        ].map((step) => (
          <div key={step.num} className="flex gap-6 bg-white border rounded-3xl p-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#15803d] text-white flex items-center justify-center text-3xl font-semibold">{step.num}</div>
            <div>
              <h3 className="font-semibold text-2xl tracking-tight mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/browse" className="btn-primary inline-block px-10 py-3.5 rounded-2xl font-semibold">Start Exploring Talent</Link>
      </div>
    </div>
  );
}
