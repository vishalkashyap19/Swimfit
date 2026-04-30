"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Waves, Phone, Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/programs", label: "Programs" },
  { path: "/coaches", label: "Coaches" },
  { path: "/facilities", label: "Facilities" },
  { path: "/shop", label: "Shop" },
  { path: "/pool-party", label: "Pool Party" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      style={{ animation: "navSlideDown .7s ease" }}>
      {/* Main bar */}
      <div className={`backdrop-blur-2xl border rounded-3xl px-6 py-3 transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(2,13,26,0.78)] border-[rgba(0,229,255,0.2)] shadow-[0_8px_32px_rgba(0,229,255,0.08)]"
          : "bg-white/7 border-white/14 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#0055cc] flex items-center justify-center glow-icon hover:scale-110 hover:rotate-6 transition-transform">
              <Waves className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight gradient-text">Swimfit</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map(item => {
              const active = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}
                  className={`relative px-4 py-2 text-sm transition-all rounded-xl group ${
                    active ? "text-white" : "text-white/55 hover:text-white"
                  }`}>
                  {active && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00e5ff]/22 to-[#0066cc]/18 border border-[#00e5ff]/3" />
                  )}
                  {!active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 bg-gradient-to-r from-[#00e5ff] to-[#0066cc] transition-all duration-300 rounded-full" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-xl text-sm font-semibold shadow-[0_0_16px_rgba(0,229,255,0.35)] hover:shadow-[0_0_28px_rgba(0,229,255,0.55)] hover:scale-[1.04] transition-all">
              <Phone className="w-4 h-4" /> Book Now
            </Link>
            <button onClick={() => setMobileOpen(v => !v)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="mt-2 backdrop-blur-2xl bg-[rgba(2,13,26,0.88)] border border-white/13 rounded-3xl p-4 shadow-2xl">
          {navItems.map(item => (
            <Link key={item.path} href={item.path}
              className={`block px-4 py-3 rounded-2xl text-sm transition-all mb-1 ${
                pathname === item.path
                  ? "bg-gradient-to-r from-[#00e5ff]/20 to-[#0066cc]/15 text-white border border-[#00e5ff]/25"
                  : "text-white/65 hover:text-white hover:bg-white/8"
              }`}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact"
            className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-2xl text-sm font-semibold">
            <Phone className="w-4 h-4" /> Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
