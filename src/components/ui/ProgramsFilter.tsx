"use client";
import { useState } from "react";
import { Clock, Users, Target, ChevronRight } from "lucide-react";
import { GlassCard } from "./GlassCard";
import type { Program } from "@/lib/data";

const CATEGORIES = ["All", "Kids", "Adults", "Professional", "Fitness"];

export function ProgramsFilter({ programs }: { programs: Program[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? programs : programs.filter(p => p.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all ${
              active === cat
                ? "bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                : "bg-white/8 border border-white/15 text-white/70 hover:bg-white/14 hover:text-white"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Program Cards */}
      <div className="space-y-8">
        {filtered.map(program => (
          <GlassCard key={program.id}>
            <div className="grid md:grid-cols-[120px_1fr] gap-6">
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#00e5ff]/25 to-[#0066cc]/20 flex items-center justify-center text-3xl">
                  {program.icon === "baby" ? "👶" : program.icon === "user" ? "🧑" : program.icon === "trophy" ? "🏆" : "💪"}
                </div>
                <span className="px-3 py-1 bg-[#00e5ff]/15 border border-[#00e5ff]/22 rounded-full text-[#00e5ff] text-xs">
                  {program.category}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                <p className="text-white/65 mb-4 text-sm">{program.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {program.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_6px_rgba(0,229,255,0.8)] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <h4 className="text-white font-medium flex items-center gap-2 mb-3 text-sm">
                  <Clock className="w-4 h-4 text-[#00e5ff]" /> Available Batches
                </h4>
                <div className="space-y-2.5">
                  {program.batches.map((batch, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 hover:border-[#00e5ff]/25 transition-colors">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1.5 text-white text-sm font-medium">
                          <Clock className="w-3.5 h-3.5 text-[#00e5ff]" /> {batch.time}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/70 text-sm">
                          <Users className="w-3.5 h-3.5 text-[#00e5ff]" /> {batch.coach}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/70 text-sm">
                          <Target className="w-3.5 h-3.5 text-[#00e5ff]" /> {batch.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-white/55 text-xs">{batch.duration}</span>
                        <button className="px-3.5 py-1.5 bg-gradient-to-r from-[#00e5ff] to-[#0066cc] text-white rounded-xl text-xs font-semibold flex items-center gap-1 hover:shadow-[0_0_16px_rgba(0,229,255,0.4)] transition-shadow">
                          Inquire <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </>
  );
}
