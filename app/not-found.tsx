import { GlowButton } from "@/components/glow-button";

export default function NotFound() {
  return (
    <main className="shell flex min-h-[70vh] items-center justify-center py-24">
      <div className="glass-panel neon-outline max-w-2xl rounded-[30px] border border-white/8 p-10 text-center">
        <p className="section-kicker mb-4 text-xs">Navigation Error</p>
        <h1 className="font-display text-4xl uppercase tracking-[0.1em] text-white">Page Not Found</h1>
        <p className="mt-5 text-lg text-slate-300">
          The requested page does not exist in the portfolio interface. Return to the homepage to continue browsing the work.
        </p>
        <div className="mt-8 flex justify-center">
          <GlowButton href="/">Return Home</GlowButton>
        </div>
      </div>
    </main>
  );
}
