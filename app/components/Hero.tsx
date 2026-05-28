function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow orbs */}
      <div aria-hidden="true" className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-cyan-500/[0.12] blur-[120px] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full bg-blue-700/[0.12] blur-[100px] pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 -right-20 w-[500px] h-[400px] rounded-full bg-indigo-700/[0.10] blur-[100px] pointer-events-none" />

      {/* Dot grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex flex-wrap justify-center items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-[#00D4C8]/25 bg-[#00D4C8]/[0.08] text-[#00D4C8] max-w-xs sm:max-w-none">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Early Stage &middot; Independent &middot; Building in Public
        </div>

        {/* Headline */}
        <h1
          className="text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: "1.06" }}
        >
          Building Tomorrow&apos;s{" "}
          <span style={{ color: "#00D4C8" }}>
            Stack
          </span>
        </h1>

        {/* Sub */}
        <p className="max-w-2xl mx-auto mb-12" style={{ fontSize: "0.9375rem", lineHeight: "1.7", color: "#8FA8CC" }}>
          An independent technology company at the intersection of{" "}
          <span className="text-slate-200 font-medium">AI</span>,{" "}
          <span className="text-slate-200 font-medium">data</span>, and{" "}
          <span className="text-slate-200 font-medium">developer tooling</span>.
          Building products that are useful, thoughtful, and purposeful.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-24">
          <a
            href="https://github.com/Stacktern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold bg-[#00D4C8] text-[#04080F] hover:bg-[#00B8AE] transition-colors duration-200"
            style={{ boxShadow: "0 0 30px rgba(0,212,200,0.2), 0 0 60px rgba(0,212,200,0.08)" }}
          >
            <GitHubIcon className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-[#00D4C8] px-7 py-3.5 rounded-lg text-sm font-medium border border-[#00D4C8] hover:bg-[rgba(0,212,200,0.08)] transition-all duration-200"
          >
            See what we&apos;re building
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] overflow-hidden backdrop-blur-[12px]"
          style={{ background: "rgba(13,21,38,0.45)" }}
        >
          {[
          { value: "01", label: "AI Model Live" },
          { value: "02+", label: "Products in Pipeline" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <p className="font-mono mb-1" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "#00D4C8" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#4A6080", letterSpacing: "0.03em" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
