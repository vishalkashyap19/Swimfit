import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6">🌊</div>
      <h1 className="font-['Syne'] text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-white/65 text-xl mb-8">Oops — this page swam away.</p>
      <Link href="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#0055cc] text-white rounded-2xl font-semibold hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-shadow">
        Back to Home
      </Link>
    </div>
  );
}
