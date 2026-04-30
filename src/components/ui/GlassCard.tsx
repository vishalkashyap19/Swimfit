import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function GlassCard({ children, className, style }: Props) {
  return (
    <div className={cn("glass-card p-6", className)} style={style}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
