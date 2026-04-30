import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: Props) {
  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
