import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, Star, Clock, Users, ChevronLeft } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { coaches } from "@/lib/data";

export async function generateStaticParams() {
  return coaches.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const coach = coaches.find(c => c.slug === slug);
  if (!coach) return { title: "Coach Not Found" };
  return {
    title: `${coach.name} | Swimfit Coaches`,
    description: coach.bio,
  };
}

export default async function CoachPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const coach = coaches.find(c => c.slug === slug);
  if (!coach) notFound();

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/coaches"
          className="inline-flex items-center gap-2 text-white/65 hover:text-white mb-8 transition-colors text-sm">
          <ChevronLeft className="w-4 h-4" /> Back to Coaches
        </Link>

        <GlassCard className="md:grid md:grid-cols-[300px_1fr] gap-8">
          {/* Photo */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 md:mb-0 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/25 to-[#0066cc]/20 z-10" />
            <Image src={coach.image} alt={coach.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#00e5ff]" />
              <span className="text-white/90 text-sm">{coach.experience} experience</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-['Syne'] text-3xl font-bold text-white mb-1">{coach.name}</h1>
            <p className="text-[#00e5ff] text-lg mb-6">{coach.title}</p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#00e5ff] mt-0.5" />
                <div><p className="text-white/60 text-xs mb-0.5">Specialty</p><p className="text-white">{coach.specialty}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00e5ff] mt-0.5" />
                <div><p className="text-white/60 text-xs mb-0.5">Availability</p><p className="text-white">{coach.availability}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#00e5ff] mt-0.5" />
                <div><p className="text-white/60 text-xs mb-0.5">Achievement</p><p className="text-white">{coach.achievements}</p></div>
              </div>
            </div>

            <p className="text-white/75 italic leading-relaxed mb-6 text-sm">&ldquo;{coach.bio}&rdquo;</p>

            <div className="mb-6">
              <p className="text-white/60 text-sm mb-2">Certifications:</p>
              <div className="flex flex-wrap gap-2">
                {coach.certifications.map(c => (
                  <span key={c} className="px-3 py-1 bg-white/8 border border-[#00e5ff]/20 rounded-full text-xs text-white">{c}</span>
                ))}
              </div>
            </div>

            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-shadow text-sm">
              Book a Session with {coach.name.split(" ")[0]}
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
