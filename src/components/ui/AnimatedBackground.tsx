"use client";
import { useEffect, useState } from "react";

interface Bubble {
  id: number; x: number; size: number; delay: number; duration: number; opacity: number;
}

export function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 16 + 4,
        delay: Math.random() * 14,
        duration: Math.random() * 10 + 7,
        opacity: Math.random() * 0.4 + 0.08,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* ── Underwater pool photo base ─────────────────── */}
      {/* Using a high-quality Unsplash underwater pool image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1920&q=85&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── Deep tint overlay — keeps text readable ─────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,13,26,0.72) 0%, rgba(0,21,53,0.60) 40%, rgba(0,29,74,0.68) 100%)",
        }}
      />

      {/* ── Animated caustic light patches ─────────────── */}
      <div className="absolute inset-0" style={{ mixBlendMode: "screen", opacity: 0.18 }}>
        {/* Caustic 1 */}
        <div
          className="absolute"
          style={{
            top: "8%", left: "15%",
            width: 420, height: 280,
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,229,255,0.9) 0%, rgba(0,180,220,0.4) 40%, transparent 75%)",
            filter: "blur(18px)",
            animation: "caustic1 8s ease-in-out infinite",
          }}
        />
        {/* Caustic 2 */}
        <div
          className="absolute"
          style={{
            top: "30%", right: "10%",
            width: 360, height: 220,
            background:
              "radial-gradient(ellipse 55% 35% at 50% 50%, rgba(0,200,255,0.85) 0%, rgba(0,150,230,0.35) 45%, transparent 75%)",
            filter: "blur(22px)",
            animation: "caustic2 11s ease-in-out infinite",
          }}
        />
        {/* Caustic 3 */}
        <div
          className="absolute"
          style={{
            bottom: "20%", left: "30%",
            width: 500, height: 200,
            background:
              "radial-gradient(ellipse 70% 30% at 50% 50%, rgba(0,229,255,0.7) 0%, transparent 70%)",
            filter: "blur(28px)",
            animation: "caustic3 14s ease-in-out infinite",
          }}
        />
        {/* Caustic 4 — small bright spot */}
        <div
          className="absolute"
          style={{
            top: "55%", left: "55%",
            width: 200, height: 140,
            background:
              "radial-gradient(ellipse, rgba(120,240,255,0.95) 0%, transparent 70%)",
            filter: "blur(12px)",
            animation: "caustic4 7s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Animated light ray shafts ───────────────────── */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.12 }}>
        {[
          { left: "18%",  skew: "skewX(-8deg)",  delay: "0s",    dur: "6s",  w: 60 },
          { left: "34%",  skew: "skewX(-3deg)",  delay: "1.5s",  dur: "8s",  w: 40 },
          { left: "52%",  skew: "skewX(4deg)",   delay: "0.8s",  dur: "7s",  w: 80 },
          { left: "68%",  skew: "skewX(-5deg)",  delay: "2.2s",  dur: "9s",  w: 50 },
          { left: "82%",  skew: "skewX(6deg)",   delay: "1s",    dur: "6.5s",w: 35 },
        ].map((ray, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: ray.left,
              width: ray.w,
              height: "70%",
              transform: ray.skew,
              background:
                "linear-gradient(180deg, rgba(0,229,255,0.9) 0%, rgba(0,200,255,0.4) 50%, transparent 100%)",
              filter: "blur(8px)",
              animation: `rayPulse ${ray.dur} ease-in-out ${ray.delay} infinite`,
              transformOrigin: "top center",
            }}
          />
        ))}
      </div>

      {/* ── Animated wave shimmer overlay ──────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(0,229,255,0.025) 60px,
              rgba(0,229,255,0.025) 61px
            )
          `,
          animation: "waveShimmer 4s linear infinite",
        }}
      />

      {/* ── Cyan orb glows (keep colour harmony) ────────── */}
      <div className="absolute rounded-full" style={{ top:"-8%", left:"-6%", width:680, height:680, background:"radial-gradient(circle at 40% 40%,rgba(0,229,255,.38) 0%,rgba(0,102,204,.18) 45%,transparent 72%)", filter:"blur(72px)", animation:"orbDrift1 22s ease-in-out infinite" }} />
      <div className="absolute rounded-full" style={{ bottom:"-12%", right:"-8%", width:750, height:750, background:"radial-gradient(circle at 55% 55%,rgba(0,80,200,.32) 0%,rgba(0,30,100,.18) 45%,transparent 70%)", filter:"blur(90px)", animation:"orbDrift2 28s ease-in-out infinite" }} />

      {/* ── Rising bubbles ───────────────────────────────── */}
      {bubbles.map(b => (
        <div
          key={b.id}
          className="bubble absolute bottom-[-20px] rounded-full"
          style={{
            left: `${b.x}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      {/* ── Top vignette (navbar readability) ───────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, rgba(2,13,26,0.55), transparent)" }}
      />

      {/* ── Bottom vignette ──────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{ background: "linear-gradient(to top, rgba(2,13,26,0.75), transparent)" }}
      />

      {/* ── Keyframes injected via style tag ─────────────── */}
      <style>{`
        @keyframes caustic1 {
          0%,100% { transform: translate(0px, 0px) scaleX(1) scaleY(1); opacity: 1; }
          25%      { transform: translate(30px, 20px) scaleX(1.15) scaleY(0.9); opacity: 0.7; }
          50%      { transform: translate(-20px, 35px) scaleX(0.88) scaleY(1.2); opacity: 1; }
          75%      { transform: translate(15px, -15px) scaleX(1.08) scaleY(0.95); opacity: 0.85; }
        }
        @keyframes caustic2 {
          0%,100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.9; }
          33%      { transform: translate(-25px, 18px) rotate(8deg); opacity: 0.6; }
          66%      { transform: translate(20px, -22px) rotate(-6deg); opacity: 1; }
        }
        @keyframes caustic3 {
          0%,100% { transform: translateX(0) scaleX(1); opacity: 0.8; }
          50%      { transform: translateX(40px) scaleX(1.2); opacity: 1; }
        }
        @keyframes caustic4 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 1; }
          30%      { transform: translate(18px, -12px) scale(1.3); opacity: 0.5; }
          70%      { transform: translate(-12px, 10px) scale(0.8); opacity: 0.9; }
        }
        @keyframes rayPulse {
          0%,100% { opacity: 1; transform: var(--skew, skewX(0deg)) scaleY(1); }
          50%      { opacity: 0.35; transform: var(--skew, skewX(0deg)) scaleY(0.85); }
        }
        @keyframes waveShimmer {
          0%   { background-position-y: 0px; }
          100% { background-position-y: 61px; }
        }
      `}</style>
    </div>
  );
}
