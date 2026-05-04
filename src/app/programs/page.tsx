import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProgramsFilter } from "@/components/ui/ProgramsFilter";
import { programs } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching Programs | swimfit",
  description: "Expert-led swimming programs for all ages — kids, adults, professional, and fitness. Flexible batch timings.",
};

export default function ProgramsPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-6"><Clock className="w-4 h-4 text-[#00e5ff]" /> Flexible Batch Timings</Badge>
          <h1 className="gradient-text font-['Syne'] mb-4"
            style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800 }}>
            Coaching Programs
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Expert-led programs tailored for every age and skill level
          </p>
        </div>

        <ProgramsFilter programs={programs} />

        <div className="mt-16">
          <GlassCard className="text-center py-10">
            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-3">
              Not sure which program is right for you?
            </h3>
            <p className="text-white/65 mb-6">Book a free consultation with our coaching team</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0066cc] text-white rounded-2xl font-semibold hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-shadow">
              Schedule Consultation
            </Link>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
