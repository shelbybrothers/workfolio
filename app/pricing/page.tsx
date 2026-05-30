export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <h1 className="text-center text-4xl font-semibold tracking-tight mb-3">Transparent Pricing</h1>
      <p className="text-center text-slate-600 max-w-md mx-auto mb-12">Pay only when you’re satisfied. No hidden fees.</p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* For Clients */}
        <div className="border rounded-3xl p-8">
          <div className="uppercase text-xs tracking-widest text-emerald-600 font-semibold mb-1">FOR CLIENTS</div>
          <div className="text-3xl font-semibold mb-2">Free Forever</div>
          <p className="text-sm text-slate-500">Pay professionals directly in SOL.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>✓ Unlimited access to all professionals</li>
            <li>✓ Secure escrow payments (held until you approve)</li>
            <li>✓ Revisions included per package terms</li>
            <li>✓ Direct communication with talent</li>
            <li>✓ 100% satisfaction guarantee on every project</li>
          </ul>
        </div>

        {/* For Professionals */}
        <div className="border-2 border-[#15803d] rounded-3xl p-8 relative">
          <div className="absolute -top-3 right-6 bg-[#15803d] text-white text-xs px-4 py-1 rounded-full font-medium">FOR PROFESSIONALS</div>
          <div className="text-3xl font-semibold mb-1 mt-4">Platform Fee</div>
          <p className="text-sm text-slate-600">Only charged when you successfully complete a project. Payouts in SOL.</p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between border-b pb-3">
              <span>Standard</span> <span className="font-semibold">15%</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span>Pro — 0.33 SOL/month</span> <span className="font-semibold text-[#15803d]">8%</span>
            </div>
            <div className="flex justify-between">
              <span>Enterprise / Teams</span> <span className="font-semibold">Custom</span>
            </div>
          </div>

          <a href="/for-freelancers" className="mt-8 block text-center btn-primary py-3 rounded-2xl font-semibold">
            Apply as a Professional
          </a>
        </div>
      </div>
    </div>
  );
}
