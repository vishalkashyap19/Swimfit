"use client";
import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-40">
      <div className="relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[rgba(37,211,102,0.35)] animate-ping" style={{ animationDuration: "2.2s" }} />
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center border border-white/25 hover:scale-115 transition-transform"
          style={{ boxShadow: "0 0 20px rgba(37,211,102,0.45),0 4px 16px rgba(0,0,0,0.4)" }}>
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>
      <div className="relative flex items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[rgba(0,229,255,0.3)] animate-ping" style={{ animationDuration: "2.2s", animationDelay: "0.9s" }} />
        <a href="tel:+1234567890"
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#00e5ff] to-[#0055cc] flex items-center justify-center border border-white/25 hover:scale-115 transition-transform"
          style={{ boxShadow: "0 0 20px rgba(0,229,255,0.45),0 4px 16px rgba(0,0,0,0.4)" }}>
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  );
}
