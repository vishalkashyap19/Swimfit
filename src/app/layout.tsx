import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { FloatingActions } from "@/components/ui/FloatingActions";

export const metadata: Metadata = {
  title: "Swimfit — Professional Swimming Coaching",
  description: "Premier swimming academy with expert coaches, state-of-the-art facilities, and flexible batch timings for all age groups.",
  keywords: ["swimming", "coaching", "swimming academy", "swim classes", "aqua fitness"],
  openGraph: {
    title: "Swimfit — Professional Swimming Coaching",
    description: "Train with experts. Build confidence. Swim smarter.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen relative" suppressHydrationWarning>
        <AnimatedBackground />
        <Navbar />
        <main className="pt-20">{children}</main>
        <FloatingActions />
      </body>
    </html>
  );
}
