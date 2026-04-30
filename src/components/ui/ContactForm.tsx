"use client";
import { useRef, useState } from "react";
import { sendContactEmail } from "@/lib/actions";
import { Button } from "./Button";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    const fd = new FormData(formRef.current!);
    const result = await sendContactEmail(fd);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrors(result.error as Record<string, string[]>);
    }
  }

  const inputClass = "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00e5ff] transition-colors text-sm";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-16 h-16 text-[#00e5ff] mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-white/65 mb-6">We'll get back to you within 24 hours.</p>
        <Button onClick={() => setStatus("idle")}>Send Another</Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white/70 mb-1.5 text-sm">Full Name *</label>
        <input name="name" type="text" placeholder="John Doe" required className={inputClass} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name[0]}</p>}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/70 mb-1.5 text-sm">Email *</label>
          <input name="email" type="email" placeholder="john@example.com" required className={inputClass} />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email[0]}</p>}
        </div>
        <div>
          <label className="block text-white/70 mb-1.5 text-sm">Phone *</label>
          <input name="phone" type="tel" placeholder="+91 1234567890" required className={inputClass} />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone[0]}</p>}
        </div>
      </div>
      <div>
        <label className="block text-white/70 mb-1.5 text-sm">Subject *</label>
        <select name="subject" required className={inputClass} style={{ background: "rgba(255,255,255,0.1)" }}>
          <option value="" className="bg-[#0a1628]">Select a subject</option>
          <option className="bg-[#0a1628]">Book a Trial Session</option>
          <option className="bg-[#0a1628]">Membership Inquiry</option>
          <option className="bg-[#0a1628]">Coaching Programs</option>
          <option className="bg-[#0a1628]">Pool Party Booking</option>
          <option className="bg-[#0a1628]">General Inquiry</option>
        </select>
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject[0]}</p>}
      </div>
      <div>
        <label className="block text-white/70 mb-1.5 text-sm">Message *</label>
        <textarea name="message" rows={5} placeholder="Tell us about your inquiry..." required className={inputClass + " resize-none"} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message[0]}</p>}
      </div>
      {errors._form && <p className="text-red-400 text-sm">{errors._form[0]}</p>}
      <Button type="submit" className="w-full justify-center" disabled={status === "loading"}>
        <Send className="w-4 h-4" />
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
