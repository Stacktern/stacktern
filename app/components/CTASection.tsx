function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Top edge line */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] rounded-full blur-[100px]" style={{ background: "rgba(0,212,200,0.07)" }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4C8" }}>
          Get Involved
        </p>
        <h2
          className="text-white mb-5 tracking-tight"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600 }}
        >
          Follow the Journey
        </h2>
        <p className="mb-10 max-w-xl mx-auto" style={{ color: "#8FA8CC", fontSize: "1.0625rem", lineHeight: "1.7" }}>
          Stacktern is just getting started. Follow us on GitHub and connect on LinkedIn to stay
          updated on everything we&apos;re building — models, tools, and more.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/Stacktern"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold bg-[#00D4C8] text-[#04080F] hover:bg-[#00B8AE] transition-colors duration-200"
            style={{ boxShadow: "0 0 30px rgba(0,212,200,0.2), 0 0 60px rgba(0,212,200,0.08)" }}
          >
            <GitHubIcon className="w-4 h-4" />
            Follow on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/debojit-basak/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto text-[#00D4C8] px-7 py-3.5 rounded-lg text-sm font-semibold border border-[#00D4C8] hover:bg-[rgba(0,212,200,0.08)] transition-all duration-200"
          >
            <LinkedInIcon className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
