"use client";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight mb-2">Get in Touch</h1>
      <p className="text-slate-600 mb-10">Our team typically responds within 24 hours.</p>

      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you. Your message has been sent (demo)."); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input className="border rounded-2xl px-5 py-3.5" placeholder="Full name" required />
          <input type="email" className="border rounded-2xl px-5 py-3.5" placeholder="Email address" required />
        </div>
        <select className="w-full border rounded-2xl px-5 py-3.5" required>
          <option value="">Select topic</option>
          <option>Client Support</option>
          <option>Professional Support</option>
          <option>Enterprise / Protocol Inquiries</option>
          <option>Careers</option>
          <option>Other</option>
        </select>
        <textarea className="w-full border rounded-3xl px-5 py-4 h-36" placeholder="How can we help you?" required />
        <button className="btn-primary w-full py-4 rounded-2xl font-semibold text-base">Send Message</button>
      </form>

      <div className="mt-10 text-sm text-slate-500">
        Or email us directly: <a href="mailto:hello@workfolio.xyz" className="text-[#15803d] font-medium">hello@workfolio.xyz</a>
      </div>
    </div>
  );
}
