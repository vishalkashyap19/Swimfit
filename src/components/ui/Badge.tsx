import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm",
      "bg-white/8 border border-[#00e5ff]/30 text-white/88",
      "shadow-[0_0_20px_rgba(0,229,255,0.12)]",
      className
    )}>
      {children}
    </span>
  );
}
