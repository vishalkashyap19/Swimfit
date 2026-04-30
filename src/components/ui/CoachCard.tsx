import Image from "next/image";
import Link from "next/link";
import { Award, Star, Clock, Users } from "lucide-react";
import { GlassCard } from "./GlassCard";
import type { Coach } from "@/lib/data";

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <GlassCard className="group">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/25 to-[#0066cc]/20 z-10" />
        <Image src={coach.image} alt={coach.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent z-10" />
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#00e5ff]" style={{ filter: "drop-shadow(0 0 6px rgba(0,229,255,0.8))" }} />
          <span className="text-white/90 text-xs">{coach.experience} experience</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#0055cc]/92 via-[#0044aa]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <Link href={`/coaches/${coach.slug}`}
            className="w-full py-2.5 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-xl text-center text-sm font-semibold shadow-lg">
            View Profile
          </Link>
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-0.5">{coach.name}</h3>
      <p className="text-[#00e5ff] text-sm mb-3">{coach.title}</p>
      <div className="space-y-2 mb-3">
        <div className="flex items-start gap-2">
          <Star className="w-4 h-4 text-[#00e5ff] mt-0.5 flex-shrink-0" />
          <div><p className="text-white/60 text-xs">Specialty</p><p className="text-white text-sm">{coach.specialty}</p></div>
        </div>
        <div className="flex items-start gap-2">
          <Clock className="w-4 h-4 text-[#00e5ff] mt-0.5 flex-shrink-0" />
          <div><p className="text-white/60 text-xs">Availability</p><p className="text-white text-sm">{coach.availability}</p></div>
        </div>
      </div>
      <p className="text-white/70 text-xs italic mb-3">"{coach.bio}"</p>
      <div className="flex items-center gap-2 text-xs text-white/65">
        <Users className="w-3.5 h-3.5 text-[#00e5ff]" />
        {coach.achievements}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {coach.certifications.map(c => (
          <span key={c} className="px-2.5 py-0.5 bg-white/8 border border-[#00e5ff]/20 rounded-full text-xs text-white">{c}</span>
        ))}
      </div>
    </GlassCard>
  );
}
