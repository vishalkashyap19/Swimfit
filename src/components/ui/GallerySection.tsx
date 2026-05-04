"use client";
import { useState, useCallback, useEffect } from "react";
import "@/components/ui/SectionAnimatedBg.css";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images, PartyPopper } from "lucide-react";
import Link from "next/link";

/* ─── Types ───────────────────────────────────────────────── */
type GalleryTab = "Pool Moments" | "Party & Events";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  tab: GalleryTab;
  /** relative span hint: "tall" = 2 rows, else 1 */
  span?: "tall" | "wide";
}

/* ─── Gallery Data ────────────────────────────────────────── */
const images: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery-pool-1.jpg",
    alt: "Training session – freestyle lanes",
    caption: "Championship training in full swing",
    tab: "Pool Moments",
    span: "tall",
  },
  {
    id: 2,
    src: "/gallery-pool-2.jpg",
    alt: "Kids swimming lesson",
    caption: "Little swimmers building big confidence",
    tab: "Pool Moments",
  },
  {
    id: 3,
    src: "/gallery-pool-3.jpg",
    alt: "Adult coaching session",
    caption: "Professional technique refinement",
    tab: "Pool Moments",
  },
  {
    id: 4,
    src: "/gallery-party-1.jpg",
    alt: "Pool party celebration",
    caption: "An unforgettable evening poolside",
    tab: "Party & Events",
    span: "tall",
  },
  {
    id: 5,
    src: "/gallery-party-2.jpg",
    alt: "Birthday pool bash",
    caption: "Making birthday dreams come true",
    tab: "Party & Events",
  },
  {
    id: 6,
    src: "/gallery-pool-1.jpg",
    alt: "Morning batch – lap swimming",
    caption: "Dawn patrol — 6 AM warriors",
    tab: "Pool Moments",
  },
  {
    id: 7,
    src: "/gallery-party-1.jpg",
    alt: "Corporate pool event",
    caption: "Team building with a splash",
    tab: "Party & Events",
  },
];

const TABS: GalleryTab[] = ["Pool Moments", "Party & Events"];
const TAB_ICONS: Record<GalleryTab, React.ElementType> = {
  "Pool Moments": Images,
  "Party & Events": PartyPopper,
};

/* ─── Lightbox ────────────────────────────────────────────── */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = items[index];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(2,13,26,0.93)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        style={{ animation: "fadeInUp .25s ease" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image container */}
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 0 60px rgba(0,229,255,0.12)",
          }}
        >
          <div className="relative w-full" style={{ maxHeight: "70vh", aspectRatio: "16/9" }}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Caption overlay */}
          {img.caption && (
            <div
              className="absolute bottom-0 left-0 right-0 px-6 py-5"
              style={{ background: "linear-gradient(to top,rgba(2,13,26,0.85) 0%,transparent 100%)" }}
            >
              <p className="text-white font-medium text-sm">{img.caption}</p>
            </div>
          )}
        </div>

        {/* Counter & nav */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white/75 hover:bg-white/14 hover:text-white text-sm font-medium transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <span className="text-white/45 text-sm tabular-nums">
            {index + 1} / {items.length}
          </span>

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white/75 hover:bg-white/14 hover:text-white text-sm font-medium transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Gallery Image Tile ──────────────────────────────────── */
function GalleryTile({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl h-full ${image.span === "tall" ? "row-span-2" : ""}`}
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        transition: "box-shadow .3s, border-color .3s, transform .25s",
      }}
      onClick={onClick}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 1px rgba(0,229,255,.25), 0 16px 48px rgba(0,229,255,.1)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,229,255,.25)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.10)";
        (e.currentTarget as HTMLDivElement).style.transform = "";
      }}
    >
      <div className="relative w-full h-full min-h-[200px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top,rgba(2,13,26,0.82) 0%,rgba(2,13,26,0.2) 60%,transparent 100%)" }}
        >
          {image.caption && (
            <p className="text-white text-sm font-medium leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {image.caption}
            </p>
          )}
          <span className="inline-flex items-center gap-1 text-[#00e5ff] text-xs mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            <Images className="w-3 h-3" /> View full
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ────────────────────────────────────────── */
export function GallerySection({ preview = false }: { preview?: boolean }) {
  const [activeTab, setActiveTab] = useState<GalleryTab>("Pool Moments");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayItems = preview 
    ? images.slice(0, 5)
    : images.filter(img => img.tab === activeTab);

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
    <section id="gallery" className="py-20 px-4 scroll-mt-28 section-animated-bg">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Glimpses of the aquatic life at swimfit — training, fun, and unforgettable memories
          </p>
        </div>

        {/* Tab buttons - Hide in preview */}
        {!preview && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {TABS.map(tab => {
              const Icon = TAB_ICONS[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                      : "bg-white/8 border border-white/15 text-white/70 hover:bg-white/14 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid / Slider */}
        {preview ? (
          <>
            <style>{`
              @keyframes marquee-reverse {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(0%); }
              }
              .animate-marquee-reverse {
                display: flex;
                animation: marquee-reverse 30s linear infinite;
              }
              .marquee-container-reverse:hover .animate-marquee-reverse {
                animation-play-state: paused;
              }
              .mask-edges {
                mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              }
            `}</style>
            <div className="flex overflow-hidden pb-8 mask-edges marquee-container-reverse">
              <div className="animate-marquee-reverse gap-4 pr-4">
                {displayItems.map((img, idx) => (
                  <div key={`set1-${img.id}`} className="w-[85vw] sm:w-[400px] aspect-[4/3] flex-shrink-0">
                    <GalleryTile image={{...img, span: undefined}} onClick={() => openLightbox(idx)} />
                  </div>
                ))}
              </div>
              <div className="animate-marquee-reverse gap-4 pr-4" aria-hidden="true">
                {displayItems.map((img, idx) => (
                  <div key={`set2-${img.id}`} className="w-[85vw] sm:w-[400px] aspect-[4/3] flex-shrink-0">
                    <GalleryTile image={{...img, span: undefined}} onClick={() => openLightbox(idx)} />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: "240px" }}>
            {displayItems.map((img, idx) => (
              <GalleryTile key={img.id} image={img} onClick={() => openLightbox(idx)} />
            ))}
          </div>
        )}

        {/* View All Button */}
        {preview && (
          <div className="mt-8 text-center">
            <Link href="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/9 border border-white/20 text-white rounded-xl hover:bg-white/16 hover:border-[#00e5ff]/30 transition-all font-semibold text-sm">
              View Full Gallery <ChevronRight className="w-4 h-4" />
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
