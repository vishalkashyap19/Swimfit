import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop | swimfit",
  description: "Premium swimming gear — goggles, caps, swimwear and more. Available at our facility counter.",
};

const categoryEmojis: Record<string, string> = {
  Goggles: "🥽",
  "Swim Caps": "🏊",
  Swimwear: "👙",
};

export default function ShopPage() {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="gradient-text font-['Syne'] mb-4" style={{ fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 800 }}>
            swimfit Shop
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-4">
            Premium swimming gear and accessories available at our facility
          </p>
          <Badge><ShoppingBag className="w-4 h-4 text-[#00e5ff]" /> Buy at Counter — No Online Payment</Badge>
        </div>

        <div className="space-y-14">
          {products.map(cat => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#0066cc]/20 flex items-center justify-center text-2xl">
                  {categoryEmojis[cat.category] ?? "🏊"}
                </div>
                <h2 className="font-['Syne'] text-3xl font-bold text-white">{cat.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map(item => (
                  <GlassCard key={item.name} className="hover:-translate-y-2">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#00e5ff]/10 to-[#0066cc]/10 border border-white/10 flex items-center justify-center mb-4 text-6xl">
                      {categoryEmojis[cat.category] ?? "🏊"}
                    </div>
                    <h3 className="font-['Syne'] text-lg font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-white/65 text-sm mb-3">{item.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white/55 text-xs">Color</p>
                        <p className="text-white text-sm">{item.color}</p>
                      </div>
                      <p className="text-[#00e5ff] font-['Syne'] text-2xl font-bold">{item.price}</p>
                    </div>
                    <button className="w-full py-2.5 bg-gradient-to-r from-[#00e5ff] to-[#0066cc] text-white rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-shadow mb-2">
                      Inquire at Counter
                    </button>
                    <button className="w-full py-2.5 bg-white/10 border border-white/20 text-white rounded-xl text-sm hover:bg-white/18 transition-colors">
                      Check Availability
                    </button>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <GlassCard className="text-center py-10" style={{ background: "linear-gradient(135deg,rgba(0,229,255,.08),rgba(0,102,204,.1))" }}>
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="font-['Syne'] text-2xl font-bold text-white mb-3">Visit Our Pro Shop</h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm">
              All products are available for purchase at our facility counter. Our staff will help you choose the right gear.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-xl mx-auto">
              {[["Quality","Branded Only"],["Member Discount","Up to 15%"],["Returns","7-day Policy"]].map(([label, val]) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-4">
                  <p className="text-white/65 text-xs mb-1">{label}</p>
                  <p className="text-white font-bold">{val}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
