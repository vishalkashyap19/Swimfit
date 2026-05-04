import type { Metadata } from "next";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { partyPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pool Party Events | swimfit",
  description: "Unforgettable pool party events — DJ, LED lights, catering, photography. Book for birthdays, corporate events, and more.",
};

const addOns = [
  { emoji: "🎵", name: "Live DJ Performance", price: "₹8,000" },
  { emoji: "📸", name: "Professional Photography", price: "₹5,000" },
  { emoji: "🍽️", name: "Premium Catering", price: "₹500/person" },
  { emoji: "💡", name: "LED Light Show", price: "₹6,000" },
  { emoji: "🎊", name: "Themed Decorations", price: "₹7,000" },
  { emoji: "🎮", name: "Party Games & Activities", price: "₹4,000" },
];

export default function PoolPartyPage() {
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg,rgba(255,0,255,.08),rgba(0,229,255,.08),rgba(0,102,204,.08))" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4 inline-block" style={{ animation: "floatY 2s ease-in-out infinite" }}>🎉</div>
          <h1 className="gradient-text font-['Syne'] mb-4" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800 }}>
            Pool Party Events
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Make a splash with unforgettable celebrations at swimfit. DJ, lights, music, and memories!
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partyPackages.map(pkg => (
            <div key={pkg.name} className="relative">
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 bg-gradient-to-r from-[#ff00ff] to-[#00e5ff] rounded-full text-white text-xs font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <GlassCard className={`h-full flex flex-col ${pkg.popular ? "!border-[#00e5ff] !border-2 shadow-[0_0_40px_rgba(0,229,255,0.2)]" : ""}`}>
                <div className="text-center mb-6">
                  <h3 className="font-['Syne'] text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-[#00e5ff] font-['Syne'] text-3xl font-bold">{pkg.price}</p>
                  <p className="text-white/60 text-sm mt-1">{pkg.duration} · {pkg.capacity}</p>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#00e5ff]/20 border border-[#00e5ff]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                      </span>
                      <span className="text-white/80 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className={`block w-full py-3 rounded-xl text-center font-semibold text-sm transition-all ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#0066cc] text-white hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/18"
                  }`}>
                  Book This Package
                </Link>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <h2 className="font-['Syne'] text-3xl font-bold text-white text-center mb-8">Add-On Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {addOns.map(addon => (
            <GlassCard key={addon.name}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#0066cc]/20 flex items-center justify-center text-2xl flex-shrink-0">
                  {addon.emoji}
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-0.5">{addon.name}</h4>
                  <p className="text-[#00e5ff] text-sm font-semibold">{addon.price}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* What's Included + booking */}
        <GlassCard style={{ background: "linear-gradient(135deg,rgba(255,0,255,.1),rgba(0,229,255,.1))" }}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-['Syne'] text-2xl font-bold text-white mb-6">What&apos;s Included</h3>
              {[
                { emoji: "🎵", title: "Professional DJ & Sound", desc: "High-quality audio system with experienced DJ for all music genres" },
                { emoji: "✨", title: "LED Lighting Effects", desc: "Dynamic underwater and poolside lighting for amazing ambiance" },
                { emoji: "👥", title: "Dedicated Event Staff", desc: "Professional coordinators and lifeguards throughout your event" },
              ].map(item => (
                <div key={item.title} className="flex gap-3 mb-5">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm">{item.title}</h4>
                    <p className="text-white/65 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-card !bg-white/5 p-6">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-['Syne'] text-xl font-bold text-white mb-2">Book Your Party</h3>
              <p className="text-white/65 text-sm mb-5">
                Contact us to customise your perfect pool party. Available for birthdays, corporate events, and celebrations.
              </p>
              <a href="tel:+1234567890"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#00e5ff] to-[#0066cc] text-white rounded-xl text-sm font-semibold mb-3 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-shadow">
                📞 Call to Book
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 border border-white/20 text-white rounded-xl text-sm hover:bg-white/18 transition-colors">
                💬 WhatsApp Inquiry
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
