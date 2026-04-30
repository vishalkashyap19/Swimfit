import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Pool & Facilities | Swimfit",
  description: "World-class pool infrastructure — two pools, UV sanitization, biometric attendance, CCTV, and more.",
};

const facilities = [
  { emoji: "🌊", title: "Olympic-Standard Pools", desc: "Two professionally maintained pools with temperature control and UV sanitization", details: ["Temperature: 28–30°C", "UV water treatment", "Hourly quality testing", "Ozone purification"] },
  { emoji: "✨", title: "Advanced Cleaning System", desc: "State-of-the-art filtration for crystal-clear water", details: ["Sand filter system", "Automated dosing", "Turbidity monitoring", "Ozone purification"] },
  { emoji: "🚿", title: "Changing Rooms & Lockers", desc: "Separate, well-maintained facilities for men and women", details: ["Hot water showers", "Individual lockers", "Grooming stations", "Complimentary towels"] },
  { emoji: "🛡️", title: "Safety & Hygiene", desc: "Your safety is our top priority", details: ["Certified lifeguards", "First aid equipment", "Anti-slip flooring", "Regular sanitization"] },
  { emoji: "📷", title: "24/7 CCTV Surveillance", desc: "Complete security coverage for peace of mind", details: ["Pool area monitoring", "Entrance surveillance", "Parking security", "Recorded footage"] },
  { emoji: "👆", title: "Biometric Attendance", desc: "Modern attendance tracking for members", details: ["Fingerprint check-in", "Automated logging", "Usage analytics", "Member portal access"] },
];

const amenities = ["Free WiFi", "Parking", "Cafeteria", "Pro Shop", "Waiting Lounge", "Kids Play Area", "Equipment Rental", "Lockers"];

export default function FacilitiesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="gradient-text font-['Syne'] mb-4" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800 }}>
            Pool & Facilities
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            World-class infrastructure designed for excellence in swimming
          </p>
        </div>

        {/* Pool specs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { name: "Training Pool", specs: [["Size","15m × 25m"],["Depth","4ft – 5'9\""],["Lanes","6 lanes"],["Capacity","40 swimmers"]], features: ["Competition ready","Diving board","Lane markers","Starting blocks"] },
            { name: "Learning Pool", specs: [["Size","15m wide"],["Depth","4ft uniform"],["Lanes","4 lanes"],["Capacity","25 swimmers"]], features: ["Beginner friendly","Gentle entry","Pool toys","Teaching platform"] },
          ].map(pool => (
            <GlassCard key={pool.name}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#0066cc] flex items-center justify-center text-white text-xl glow-icon">🏊</div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">{pool.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {pool.specs.map(([label, val]) => (
                  <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <p className="text-white/60 text-xs mb-1">{label}</p>
                    <p className="text-white font-semibold text-sm">{val}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {pool.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Facilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map(f => (
            <GlassCard key={f.title}>
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-['Syne'] text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/65 text-sm mb-4">{f.desc}</p>
              <ul className="space-y-1.5">
                {f.details.map(d => (
                  <li key={d} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        {/* Amenities */}
        <GlassCard className="mb-12">
          <h3 className="font-['Syne'] text-2xl font-bold text-white mb-6 text-center">Additional Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {amenities.map(a => (
              <div key={a} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white/80 text-sm hover:border-[#00e5ff]/25 hover:scale-[1.03] transition-all cursor-default">
                {a}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Climate control */}
        <GlassCard className="text-center py-10" style={{ background: "linear-gradient(135deg,rgba(0,229,255,.08),rgba(0,102,204,.1))" }}>
          <div className="text-5xl mb-4">🌡️</div>
          <h3 className="font-['Syne'] text-2xl font-bold text-white mb-3">Climate Controlled Environment</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
            Our pools maintain optimal temperature year-round with advanced HVAC systems ensuring comfort in all seasons.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[["Water Temperature","28–30°C"],["Air Quality","Premium"],["Humidity","60–70%"]].map(([label, val]) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-white/65 text-xs mb-1">{label}</p>
                <p className="text-white font-bold text-xl">{val}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
