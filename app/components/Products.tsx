import Link from "next/link";

function SparklesIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function ChartBarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

function TimelineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 12h3M14 12h3" />
      <path d="M5 10V6M12 10V4M19 10V7" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function BookOpenIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 5h7a4 4 0 014 4v11a3 3 0 00-3-3H2V5z" />
      <path d="M22 5h-7a4 4 0 00-4 4v11a3 3 0 013-3h8V5z" />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  );
}

const products = [
  {
    id: "llm",
    icon: SparklesIcon,
    iconStyle: "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400",
    cardHover: "hover:border-cyan-500/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.06)]",
    category: "AI · Language Model",
    categoryStyle: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    name: "Personal Assistant LLM",
    model: "gemma3-270m-personal-assistant-v1",
    description:
      "A fine-tuned Gemma 3 270M language model optimised for personal assistant tasks. Lightweight, open, and ready to run on HuggingFace.",
    status: "Live",
    statusStyle: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    link: "https://huggingface.co/debojitbasak/gemma3-270m-personal-assistant-v1",
    linkLabel: "View on HuggingFace",
    linkColor: "text-cyan-400 hover:text-cyan-300",
    descriptionHref: null,
  },
  {
    id: "learn-ai",
    icon: BookOpenIcon,
    iconStyle: "bg-blue-500/10 border border-blue-500/20 text-blue-400",
    cardHover: "hover:border-blue-500/25 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]",
    category: "EdTech · AI Tutor",
    categoryStyle: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    name: "LearnAI Tutor",
    model: null,
    description:
      "An interactive, modern educational web app that teaches Data Science & Machine Learning fundamentals through 10 hands-on lessons, interactive simulators, and an AI tutor (Gemini 2.5 Flash) available on every page.",
    status: "Live",
    statusStyle: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    link: "https://learn-ai-neon-six.vercel.app/",
    linkLabel: "Open Live App",
    linkColor: "text-blue-400 hover:text-blue-300",
    descriptionHref: "/products/learn-ai",
  },
  {
    id: "statly",
    icon: ChartBarIcon,
    iconStyle: "bg-violet-500/10 border border-violet-500/20 text-violet-400",
    cardHover: "hover:border-violet-500/25 hover:shadow-[0_0_40px_rgba(139,92,246,0.06)]",
    category: "Analytics · Data",
    categoryStyle: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    name: "Statly",
    model: null,
    description:
      "Statly is a dead-simple status page builder that monitors your website or API every minute and automatically alerts subscribers when you go down. At $9/mo — a fraction of what Atlassian charges — it gives indie hackers and small agencies a professional \"All Systems Operational\" page in under 60 seconds.",
    status: "Coming Soon",
    statusStyle: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    link: null,
    linkLabel: null,
    linkColor: "",
    descriptionHref: null,
  },
  {
    id: "trackline",
    icon: TimelineIcon,
    iconStyle: "bg-sky-500/10 border border-sky-500/20 text-sky-400",
    cardHover: "hover:border-sky-500/25 hover:shadow-[0_0_40px_rgba(14,165,233,0.06)]",
    category: "Developer Tool",
    categoryStyle: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
    name: "Trackline",
    model: null,
    description:
      "Trackline is a data pipeline observability tool that monitors schema changes, NULL spikes, volume anomalies, and lineage tracking using a simple Python decorator. It helps data teams detect silent pipeline failures early with zero-configuration setup, lightweight storage, and an optional dashboard for monitoring pipeline health.",
    status: "Coming Soon",
    statusStyle: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    link: null,
    linkLabel: null,
    linkColor: "",
    descriptionHref: null,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-28 relative overflow-hidden">
      {/* top edge glow line */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      {/* background accent glow */}
      <div aria-hidden="true" className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-700/[0.08] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#00D4C8" }}>Products</p>
          <h2
            className="text-white tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            What We&apos;re Building
          </h2>
          <p style={{ color: "#8FA8CC", lineHeight: "1.7" }}>
            From AI models to data tools and developer products — everything under Stacktern.
            We&apos;re just getting started.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="product-card group relative rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.08]"
                style={{ background: "rgba(13,21,38,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
              >
                {/* Icon + status row */}
                <div className="flex items-start justify-between">
                  <div className={`w-11 h-11 rounded-xl ${product.iconStyle} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${product.statusStyle}`}>
                    {product.status}
                  </span>
                </div>

                {/* Category */}
                <span className={`self-start text-xs font-medium px-2.5 py-1 rounded-full ${product.categoryStyle}`}>
                  {product.category}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>{product.name}</h3>
                  {product.model && (
                    <p className="font-mono text-xs mb-2.5 truncate" style={{ color: "#4A6080" }}>{product.model}</p>
                  )}
                  <p style={{ fontSize: "0.9375rem", color: "#8FA8CC", lineHeight: "1.7" }}>{product.description}</p>
                </div>

                {/* CTAs */}
                {product.link || product.descriptionHref ? (
                  <div className="mt-auto pt-3 flex flex-col gap-2.5">
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${product.linkColor || "text-[#00D4C8] hover:text-[#00B8AE]"}`}
                      >
                        {product.linkLabel}
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {product.descriptionHref && (
                      <Link
                        href={product.descriptionHref}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#8FA8CC] hover:text-white transition-colors"
                      >
                        View Full Description
                        <ChevronRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                ) : (
                  <p className="text-xs mt-auto pt-2 italic" style={{ color: "#4A6080" }}>
                    Stay tuned — this one&apos;s in the works.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
