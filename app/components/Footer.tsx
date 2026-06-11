import { Logo } from "./Logo";

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

function HuggingFaceIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm-3.5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-7.75 2.75c.55-.55 1.32-.92 2.15-1.04a7.3 7.3 0 012.2 0c.83.12 1.6.49 2.15 1.04a.5.5 0 01-.7.7c-.4-.4-.97-.67-1.6-.77a5.8 5.8 0 00-1.7 0c-.63.1-1.2.37-1.6.77a.5.5 0 01-.7-.7z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{ background: "rgba(4, 7, 26, 0.97)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Logo className="w-7 h-7 text-[#00D4C8]" />
              <span className="font-semibold text-white text-lg tracking-tight">Stacktern</span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#8FA8CC", lineHeight: "1.7" }} className="max-w-xs">
              An independent technology company building AI models, data tools, and developer products.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#4A6080" }}>
              Products
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://huggingface.co/debojitbasak/gemma3-270m-personal-assistant-v1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors" style={{ color: "#8FA8CC" }}
                >
                  Personal Assistant LLM
                </a>
              </li>
              <li>
                <a
                  href="https://learn-ai-neon-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors" style={{ color: "#8FA8CC" }}
                >
                  LearnAI Tutor
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "#4A6080" }}>
                Statly
                <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: "#4A6080" }}>
                Trackline
                <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#4A6080" }}>
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/Stacktern"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "#8FA8CC" }}>
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/debojit-basak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "#8FA8CC" }}>
                  <LinkedInIcon className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/debojitbasak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "#8FA8CC" }}>
                  <HuggingFaceIcon className="w-4 h-4" />
                  HuggingFace
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#4A6080" }}>&copy; {year} Stacktern. All rights reserved.</p>
          <p className="text-xs" style={{ color: "#4A6080" }}>
            Built with &hearts; by{" "}
            <a
              href="https://www.linkedin.com/in/debojit-basak/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Debojit Basak
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
