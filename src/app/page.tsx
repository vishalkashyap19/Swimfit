import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Droplets,
  Award,
  Users,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { Badge } from "@/components/ui/Badge";
import { AchievementsSection } from "@/components/ui/AchievementsSection";
import { GallerySection } from "@/components/ui/GallerySection";
import { stats, coaches, testimonials } from "@/lib/data";

const highlights = [
  {
    icon: Award,
    title: "Expert Coaching",
    desc: "Certified instructors with 10+ years experience",
    grad: "from-[#00e5ff] to-[#0066cc]",
  },
  {
    icon: Users,
    title: "All Age Groups",
    desc: "Programs for kids, adults, and professionals",
    grad: "from-[#7c3aed] to-[#4f1d9b]",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "Biometric attendance & lifeguard on duty",
    grad: "from-[#00ffcc] to-[#00b8a9]",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Morning, evening & weekend batches",
    grad: "from-[#f59e0b] to-[#d97706]",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Ripple rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse,rgba(0,229,255,.12) 0%,transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          {[
            { color: "rgba(0,229,255,.55)", delay: "0s", dur: "4.5s" },
            { color: "rgba(0,200,220,.4)", delay: "1.1s", dur: "4.9s" },
            { color: "rgba(0,150,200,.3)", delay: "2.2s", dur: "5.3s" },
            { color: "rgba(0,255,200,.35)", delay: "3.3s", dur: "5.7s" },
            { color: "rgba(0,180,255,.22)", delay: "4.4s", dur: "6.1s" },
          ].map((r, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full border-2"
              style={{
                borderColor: r.color,
                boxShadow: `0 0 14px ${r.color}`,
                animation: `rippleOut ${r.dur} ease-out ${r.delay} infinite`,
              }}
            />
          ))}
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto"
          style={{ animation: "fadeInUp .9s ease" }}
        >
          <div className="mb-8">
            <Badge>
              <Droplets className="w-4 h-4 text-[#00e5ff]" /> Professional
              Swimming Coaching
            </Badge>
          </div>
          <h1
            className="gradient-text font-['Syne'] mb-4 leading-none"
            style={{
              fontSize: "clamp(4.5rem,12vw,9rem)",
              fontWeight: 800,
              letterSpacing: "-.04em",
            }}
          >
            Swimfit
          </h1>
          <p
            className="text-white/72 mb-10 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.1rem,2.5vw,1.4rem)" }}
          >
            Train with experts. Build confidence. Swim smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-9 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-2xl font-semibold overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.35)] hover:shadow-[0_0_50px_rgba(0,229,255,0.55)] transition-shadow"
            >
              <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" />
              <span className="relative">Book a Trial</span>
              <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-9 py-4 bg-white/9 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/16 hover:border-[#00e5ff]/30 transition-all"
            >
              View Batches
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <StatCounter key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Highlights ─────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold text-white mb-4">
              About Swimfit
            </h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto">
              Premier swimming academy with state-of-the-art facilities and
              expert coaching staff dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <GlassCard key={i} className="text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${h.grad} flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(0,229,255,0.25)]`}
                >
                  <h.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Syne'] text-lg font-bold text-white mb-2">
                  {h.title}
                </h3>
                <p className="text-white/65 text-sm">{h.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pool Overview ──────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold text-white mb-4">
              Pool Overview
            </h2>
            <p className="text-white/65 text-lg">
              Professional-grade facilities designed for all skill levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#0066cc] flex items-center justify-center glow-icon">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">
                  Training Pool
                </h3>
              </div>
              <div className="space-y-2 text-white/80">
                <p>
                  <span className="text-[#00e5ff]">Size:</span> 15m × 25m
                </p>
                <p>
                  <span className="text-[#00e5ff]">Depth:</span> 4ft –
                  5&apos;9&quot;
                </p>
                <p>
                  <span className="text-[#00e5ff]">Features:</span> Temperature
                  controlled, UV sanitized
                </p>
                <p>
                  <span className="text-[#00e5ff]">Lanes:</span> 6
                  competition-grade lanes
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#0066cc] flex items-center justify-center glow-icon">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-['Syne'] text-2xl font-bold text-white">
                  Facilities
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Separate changing rooms",
                  "Lockers & storage",
                  "Biometric attendance system",
                  "24/7 CCTV surveillance",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <span className="w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.8)] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── Featured Coaches ───────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Coaches
            </h2>
            <p className="text-white/65 text-lg">
              Learn from the best in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.slice(0, 3).map((coach) => (
              <GlassCard key={coach.slug} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00e5ff] to-[#0066cc] shadow-[0_0_24px_rgba(0,229,255,0.4)]" />
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover rounded-3xl border-2 border-white/25"
                  />
                </div>
                <h3 className="font-['Syne'] text-lg font-bold text-white mb-1">
                  {coach.name}
                </h3>
                <p className="text-[#00e5ff] text-sm mb-1">{coach.specialty}</p>
                <p className="text-white/60 text-xs">
                  {coach.experience} experience
                </p>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/coaches"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/9 border border-white/20 text-white rounded-xl hover:bg-white/16 hover:border-[#00e5ff]/30 transition-all font-semibold text-sm"
            >
              View All Coaches <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-['Syne'] text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-white/65 text-lg">
              Real experiences from our swimming community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <GlassCard key={i}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-[#00e5ff] text-[#00e5ff]"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(0,229,255,0.7))",
                      }}
                    />
                  ))}
                </div>
                <p className="text-white/80 italic leading-relaxed mb-5 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-white font-semibold text-sm">— {t.name}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ────────────────────────────────────── */}
      <AchievementsSection preview />

      {/* ── Gallery ─────────────────────────────────────────── */}
      <GallerySection preview />

      {/* ── CTA Banner ─────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-3xl p-px border border-[#00e5ff]/22 shadow-[0_0_60px_rgba(0,229,255,0.15)]">
            <div className="relative bg-white/7 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-10 md:p-16 text-center overflow-hidden">
              <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%,rgba(0,229,255,.18) 0%,rgba(0,102,204,.1) 50%,transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#0066cc] flex items-center justify-center mx-auto mb-6 float-anim glow-icon">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Dive In?
                </h2>
                <p className="text-white/72 mb-8 text-lg max-w-xl mx-auto">
                  Start your swimming journey with a free trial session. No
                  commitment required.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-2xl font-semibold relative overflow-hidden shadow-[0_0_35px_rgba(0,229,255,0.35)] hover:shadow-[0_0_55px_rgba(0,229,255,0.6)] transition-shadow"
                >
                  <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12" />
                  <span className="relative">Book Your Free Trial</span>
                  <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
