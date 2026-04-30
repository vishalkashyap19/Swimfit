import type { Metadata } from "next";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Swimfit",
  description: "Get in touch with Swimfit — book a trial, inquire about memberships, or ask us anything.",
};

const contactInfo = [
  { emoji: "📍", title: "Location",  lines: ["123 Swimming Pool Road", "Aqua District, City – 123456"], action: { label: "Get Directions", href: "https://maps.google.com" } },
  { emoji: "📞", title: "Phone",     lines: ["+91 1234567890", "+91 9876543210"],                       action: { label: "Call Now", href: "tel:+911234567890" } },
  { emoji: "📧", title: "Email",     lines: ["info@swimfit.com", "support@swimfit.com"],                 action: { label: "Send Email", href: "mailto:info@swimfit.com" } },
  { emoji: "⏰", title: "Hours",     lines: ["Mon-Sat: 5AM – 9PM", "Sunday: 6AM – 8PM"],               action: null },
];

const timings = [
  { day: "Monday – Friday", morning: "5:00 AM – 10:00 AM", evening: "4:00 PM – 9:00 PM" },
  { day: "Saturday",        morning: "5:00 AM – 12:00 PM", evening: "3:00 PM – 9:00 PM" },
  { day: "Sunday",          morning: "6:00 AM – 12:00 PM", evening: "5:00 PM – 8:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="gradient-text font-['Syne'] mb-4" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800 }}>
            Get In Touch
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contactInfo.map(info => (
            <GlassCard key={info.title} className="text-center">
              <div className="text-3xl mb-3">{info.emoji}</div>
              <h3 className="font-['Syne'] font-bold text-white mb-3 text-lg">{info.title}</h3>
              {info.lines.map(l => <p key={l} className="text-white/70 text-sm mb-1">{l}</p>)}
              {info.action && (
                <a href={info.action.href} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#00e5ff] text-sm hover:text-white transition-colors">
                  {info.action.label} →
                </a>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Form + Hours */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GlassCard>
            <h2 className="font-['Syne'] text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            <ContactForm />
          </GlassCard>

          <div className="space-y-6">
            <GlassCard>
              <h2 className="font-['Syne'] text-xl font-bold text-white mb-5">Opening Hours</h2>
              <div className="space-y-3">
                {timings.map(t => (
                  <div key={t.day} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">{t.day}</h4>
                    <p className="text-white/65 text-xs mb-1">⏰ Morning: {t.morning}</p>
                    <p className="text-white/65 text-xs">🌙 Evening: {t.evening}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="text-center py-6" style={{ background: "linear-gradient(135deg,rgba(37,211,102,.15),rgba(18,140,126,.15))" }}>
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-['Syne'] text-xl font-bold text-white mb-2">WhatsApp Us</h3>
              <p className="text-white/75 text-sm mb-4">Get instant responses to your queries</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
                💬 Chat on WhatsApp
              </a>
            </GlassCard>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-3xl border border-white/12 overflow-hidden"
          style={{ background: "linear-gradient(135deg,rgba(0,229,255,.1),rgba(0,102,204,.12))", aspectRatio: "16/5" }}>
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="text-5xl mb-3">📍</div>
            <p className="text-white font-semibold text-lg mb-1">123 Swimming Pool Road, Aqua District</p>
            <p className="text-white/60 text-sm mb-4">Click below to open in Google Maps</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white/20 border border-white/30 text-white rounded-xl text-sm hover:bg-white/30 transition-colors">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
