"use client";
import { useState, useCallback } from "react";
import "@/components/ui/SectionAnimatedBg.css";
import Image from "next/image";
import { X, Medal, Star, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { GlassCard } from "./GlassCard";
import Link from "next/link";

/* ─── Types ───────────────────────────────────────────────── */
type Category = "All" | "Kids" | "Adults" | "Competitions";

interface Achievement {
  id: number;
  name: string;
  event: string;
  year: number;
  category: Exclude<Category, "All">;
  image: string;
  medal?: "gold" | "silver" | "bronze";
  featured?: boolean;
}

/* ─── Data ────────────────────────────────────────────────── */
const achievements: Achievement[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    event: "District Junior Swimming Championship",
    year: 2024,
    category: "Kids",
    image: "/cert-placeholder.png",
    medal: "gold",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    event: "State Open Water Swim – 1500m",
    year: 2024,
    category: "Adults",
    image: "/cert-placeholder.png",
    medal: "silver",
  },
  {
    id: 3,
    name: "Riya Kapoor",
    event: "National School Games – 100m Freestyle",
    year: 2023,
    category: "Competitions",
    image: "/cert-placeholder.png",
    medal: "gold",
  },
  {
    id: 4,
    name: "Dev Nair",
    event: "Aqua Kids Cup – Butterfly",
    year: 2023,
    category: "Kids",
    image: "/cert-placeholder.png",
    medal: "bronze",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    event: "Corporate Swim League – Medley",
    year: 2024,
    category: "Adults",
    image: "/cert-placeholder.png",
    medal: "silver",
  },
  {
    id: 6,
    name: "swimfit Team",
    event: "Inter-Academy Relay Championship",
    year: 2024,
    category: "Competitions",
    image: "/cert-placeholder.png",
    medal: "gold",
  },
];

const FILTERS: Category[] = ["All", "Kids", "Adults", "Competitions"];

const MEDAL_STYLES = {
  gold: { color: "#FFD700", glow: "rgba(255,215,0,0.55)", label: "🥇 Gold" },
  silver: { color: "#C0C0C0", glow: "rgba(192,192,192,0.45)", label: "🥈 Silver" },
  bronze: { color: "#CD7F32", glow: "rgba(205,127,50,0.45)", label: "🥉 Bronze" },
};

/* ─── Lightbox ────────────────────────────────────────────── */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: Achievement[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const a = items[index];
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(2,13,26,0.92)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <div
        className="glass-card max-w-lg w-full p-0 overflow-hidden"
        style={{ animation: "fadeInUp .25s ease" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Certificate image */}
        <div className="relative w-full aspect-[4/3]">
          <Image src={a.image} alt={a.name} fill className="object-cover" />
          
          {/* Certificate Name Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none mix-blend-overlay">
            <h4 className="text-white/90 font-['Syne'] text-3xl font-bold tracking-wide drop-shadow-lg">
              {a.name}
            </h4>
          </div>

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top,rgba(2,13,26,0.6) 0%,transparent 50%)" }}
          />
        </div>

        {/* Info */}
        <div className="p-6 flex flex-col items-center text-center">
          {a.medal && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                background: `${MEDAL_STYLES[a.medal].color}22`,
                border: `1px solid ${MEDAL_STYLES[a.medal].color}55`,
                color: MEDAL_STYLES[a.medal].color,
                boxShadow: `0 0 12px ${MEDAL_STYLES[a.medal].glow}`,
              }}
            >
              {MEDAL_STYLES[a.medal].label}
            </span>
          )}
          <h3 className="font-['Syne'] text-xl font-bold text-white mb-1">{a.name}</h3>
          <p className="text-white/60 text-sm mb-4">{a.event} • {a.year}</p>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between px-6 pb-5 gap-3">
          <button
            onClick={onPrev}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/8 border border-white/15 text-white/70 hover:bg-white/14 hover:text-white text-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/8 border border-white/15 text-white/70 hover:bg-white/14 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/8 border border-white/15 text-white/70 hover:bg-white/14 hover:text-white text-sm transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Achievement Card ────────────────────────────────────── */
function AchievementCard({
  achievement,
  onClick,
  preview,
}: {
  achievement: Achievement;
  onClick: () => void;
  preview?: boolean;
}) {
  const medal = achievement.medal ? MEDAL_STYLES[achievement.medal] : null;

  return (
    <div
      className={`glass-card overflow-hidden cursor-pointer group h-full ${achievement.featured && !preview ? "md:col-span-2 md:row-span-1" : ""}`}
      onClick={onClick}
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Certificate Thumbnail */}
        <div className={`relative w-full overflow-hidden rounded-xl mb-4 ${achievement.featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
          <Image
            src={achievement.image}
            alt={achievement.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Certificate Name Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none mix-blend-overlay">
            <h4 className="text-white/90 font-['Syne'] text-xl md:text-2xl font-bold tracking-wide drop-shadow-md">
              {achievement.name}
            </h4>
          </div>
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top,rgba(2,13,26,0.65) 0%,transparent 60%)" }}
          />
          {/* Year badge */}
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#00e5ff]/20 border border-[#00e5ff]/35 text-[#00e5ff]"
            style={{ backdropFilter: "blur(8px)" }}
          >
            {achievement.year}
          </span>
          {/* Featured badge */}
          {achievement.featured && (
            <span
              className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{ background: "rgba(0,229,255,0.18)", border: "1px solid rgba(0,229,255,0.4)", color: "#00e5ff", backdropFilter: "blur(8px)" }}
            >
              <Star className="w-3 h-3 fill-[#00e5ff]" /> Featured Swimmer
            </span>
          )}
        </div>

        {/* Medal icon */}
        {medal && (
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-2"
            style={{
              background: `${medal.color}18`,
              border: `1px solid ${medal.color}45`,
              color: medal.color,
            }}
          >
            <Medal className="w-3 h-3" /> {medal.label}
          </span>
        )}

        {/* Name */}
        <h3 className={`font-['Syne'] font-bold text-white mb-1 ${achievement.featured ? "text-xl" : "text-base"}`}>
          {achievement.name}
        </h3>

        {/* Event */}
        <p className="text-white/60 text-xs leading-relaxed">{achievement.event}</p>
      </div>
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────────── */
export function AchievementsSection({ preview = false }: { preview?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayItems = preview
    ? achievements.slice(0, 5)
    : activeFilter === "All"
      ? achievements
      : achievements.filter(a => a.category === activeFilter);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(
    () => setLightboxIndex(i => (i === null ? 0 : (i - 1 + displayItems.length) % displayItems.length)),
    [displayItems.length]
  );
  const nextItem = useCallback(
    () => setLightboxIndex(i => (i === null ? 0 : (i + 1) % displayItems.length)),
    [displayItems.length]
  );

  return (
    <section id="achievements" className="py-20 px-4 scroll-mt-28">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm bg-white/8 border border-[#00e5ff]/30 text-white/88 shadow-[0_0_20px_rgba(0,229,255,0.12)]">
              <Trophy className="w-4 h-4 text-[#00e5ff]" /> Celebrating Excellence
            </span>
          </div>
          <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Proud moments from our swimmers who competed and excelled at local, state, and national levels
          </p>
        </div>

        {/* Filter Tabs */}
        {!preview && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {FILTERS.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all ${activeFilter === cat
                    ? "bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                    : "bg-white/8 border border-white/15 text-white/70 hover:bg-white/14 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid / Slider */}
        {preview ? (
          <>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-100%); }
              }
              .animate-marquee {
                display: flex;
                animation: marquee 25s linear infinite;
              }
              .marquee-container:hover .animate-marquee {
                animation-play-state: paused;
              }
              .mask-edges {
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              }
            `}</style>
            <div className="flex overflow-hidden pb-8 mask-edges marquee-container">
              <div className="animate-marquee gap-6 pr-6">
                {displayItems.map((achievement, idx) => (
                  <div key={`set1-${achievement.id}`} className="w-[85vw] sm:w-[400px] flex-shrink-0">
                    <AchievementCard
                      achievement={achievement}
                      onClick={() => openLightbox(idx)}
                      preview={preview}
                    />
                  </div>
                ))}
              </div>
              <div className="animate-marquee gap-6 pr-6" aria-hidden="true">
                {displayItems.map((achievement, idx) => (
                  <div key={`set2-${achievement.id}`} className="w-[85vw] sm:w-[400px] flex-shrink-0">
                    <AchievementCard
                      achievement={achievement}
                      onClick={() => openLightbox(idx)}
                      preview={preview}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {displayItems.map((achievement, idx) => (
              <div key={achievement.id} className="h-full">
                <AchievementCard
                  achievement={achievement}
                  onClick={() => openLightbox(idx)}
                  preview={preview}
                />
              </div>
            ))}
          </div>
        )}

        {displayItems.length === 0 && (
          <div className="text-center py-16 text-white/45 text-sm">
            No achievements in this category yet — watch this space!
          </div>
        )}

        {preview && (
          <div className="mt-8 text-center">
            <Link href="/achievements"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/9 border border-white/20 text-white rounded-xl hover:bg-white/16 hover:border-[#00e5ff]/30 transition-all font-semibold text-sm">
              View All Achievements <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={displayItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </section>
  );
}
