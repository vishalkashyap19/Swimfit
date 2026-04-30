import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 cursor-pointer",
        variant === "primary" && [
          "bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white",
          "shadow-[0_0_20px_rgba(0,229,255,0.35),0_4px_16px_rgba(0,0,0,0.4)]",
          "hover:shadow-[0_0_35px_rgba(0,229,255,0.55)] hover:scale-[1.03]",
        ],
        variant === "ghost" && [
          "bg-white/8 border border-white/18 text-white",
          "hover:bg-white/15 hover:border-[#00e5ff]/30 hover:scale-[1.02]",
        ],
        variant === "outline" && [
          "border border-[#00e5ff]/40 text-[#00e5ff]",
          "hover:bg-[#00e5ff]/10 hover:scale-[1.02]",
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
