import type { Metadata } from "next";
import { CoachCard } from "@/components/ui/CoachCard";
import { coaches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Expert Coaches | Swimfit",
  description: "Meet our team of certified swimming coaches — each with years of experience and a passion for teaching.",
};

export default function CoachesPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="gradient-text font-['Syne'] mb-4"
            style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800 }}>
            Our Expert Coaches
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Learn from certified professionals with decades of combined experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map(coach => <CoachCard key={coach.slug} coach={coach} />)}
        </div>

        <div className="mt-16">
          <div className="glass-card p-8 text-center">
            <div className="text-5xl mb-4">🏅</div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-6">All Coaches Are:</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {["Certified & Licensed", "CPR & First Aid Trained", "Background Verified"].map(item => (
                <div key={item} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5ff]/22 to-[#0066cc]/18 flex items-center justify-center mx-auto mb-3 text-[#00e5ff] font-bold text-lg">
                    ✓
                  </div>
                  <p className="text-white/80 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
