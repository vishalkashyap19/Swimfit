"use client";
import { useEffect, useRef, useState } from "react";

interface Props { value: number; suffix: string; label: string; }

export function StatCounter({ value, suffix, label }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;
        const step = value / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 28);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="glass-card p-8 flex flex-col items-center gap-2">
      <div className="relative z-10 text-center">
        <span className="block text-4xl font-bold text-white tabular-nums">
          {count}{suffix}
        </span>
        <span className="text-white/60 text-sm mt-1">{label}</span>
      </div>
    </div>
  );
}
