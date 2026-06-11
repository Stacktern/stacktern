import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LearnAI Tutor — Stacktern",
  description:
    "An interactive, modern educational web app that teaches Data Science & Machine Learning fundamentals through 10 hands-on lessons, interactive simulators, and an AI tutor (Gemini 2.5 Flash) on every page.",
};

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
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

function CheckIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} style={style} aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 5.29a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 011.06-1.06L8.674 12.32l6.97-6.97a.75.75 0 011.06-.06z" clipRule="evenodd" />
    </svg>
  );
}

const lessons = [
  "Introduction to Data Science",
  "History & Evolution of Data Science",
  "Data Science vs. Traditional Analysis",
  "The Data Science Lifecycle",
  "Data Collection Methods",
  "Data Cleaning & Handling Missing Values",
  "Data Transformation & Scaling",
  "Data Visualization Techniques",
  "Machine Learning Model Training & Evaluation",
  "Model Deployment & Real-World Applications",
];

const simulators = [
  { name: "Timeline Simulator", desc: "Interactive timeline showing the evolution of data science" },
  { name: "Industries Radar Chart", desc: "Explore data science applications across different industries" },
  { name: "Format Matcher", desc: "Drag-and-drop interface to match data formats" },
  { name: "Lifecycle Visualizer", desc: "Interactive walkthrough of the data science workflow" },
  { name: "Data Collection Simulator", desc: "Hands-on data gathering experience" },
  { name: "Missing Values Explorer", desc: "Learn data cleaning techniques interactively" },
  { name: "Scaling Playground", desc: "Slider-driven tool to understand data normalization" },
  { name: "Train/Test Split Overfit Explorer", desc: "Visual learning about model overfitting" },
  { name: "Visualization Studio", desc: "Experiment with different chart types" },
  { name: "Model Evaluation Dashboard", desc: "Understand model performance metrics" },
];

const techStack: { name: string; purpose: string }[] = [
  { name: "React 19", purpose: "Frontend framework" },
  { name: "TypeScript", purpose: "Type-safe code" },
  { name: "Vite", purpose: "Lightning-fast build tool" },
  { name: "Tailwind CSS v4", purpose: "Utility-first styling with design tokens" },
  { name: "Recharts", purpose: "Interactive data visualizations" },
  { name: "KaTeX", purpose: "Mathematical formula rendering" },
  { name: "Framer Motion", purpose: "Smooth animations and micro-interactions" },
  { name: "Express.js", purpose: "Backend server" },
  { name: "Google Gemini 2.5 Flash", purpose: "AI tutor power" },
  { name: "Lucide React", purpose: "Icon library" },
  { name: "dotenv", purpose: "Environment configuration" },
];

const audiences = [
  "Beginner learners",
  "Self-paced students",
  "Visual learners",
  "Practice-oriented students",
  "AI-assisted learners",
];

export default function LearnAIPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20">
        {/* Top edge glow line */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
          }}
        />
        {/* Emerald glow orbs (distinguishes from cyan home) */}
        <div aria-hidden="true" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-500/[0.12] blur-[120px] pointer-events-none" />
        <div aria-hidden="true" className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-indigo-700/[0.12] blur-[100px] pointer-events-none" />
        <div aria-hidden="true" className="absolute bottom-0 -right-20 w-[420px] h-[420px] rounded-full bg-blue-700/[0.12] blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-blue-500/25 bg-blue-500/[0.08] text-blue-400">
            <BookOpenIcon className="w-3.5 h-3.5" />
            EdTech · AI Tutor
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 ml-1" />
            Live
          </div>

          <h1
            className="text-white mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: "1.05" }}
          >
            LearnAI{" "}
            <span style={{ color: "#3B82F6" }}>Tutor</span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10" style={{ fontSize: "1.0625rem", lineHeight: "1.75", color: "#8FA8CC" }}>
            An interactive, modern educational web application designed to teach{" "}
            <span className="text-slate-200 font-medium">Data Science &amp; Machine Learning</span>{" "}
            fundamentals. Built around <span className="text-slate-200 font-medium">&ldquo;Data Science, A Comprehensive Guide for Beginners&rdquo;</span>{" "}
            with 10 comprehensive lessons — combining theory, hands-on simulations, and an AI tutor on every page.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://learn-ai-neon-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold bg-blue-500 text-[#04080F] hover:bg-blue-400 transition-colors duration-200"
              style={{ boxShadow: "0 0 30px rgba(59,130,246,0.30), 0 0 60px rgba(59,130,246,0.12)" }}
            >
              Open Live App
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-blue-300 px-7 py-3.5 rounded-lg text-sm font-medium border border-blue-500/40 hover:bg-blue-500/[0.08] transition-all duration-200"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="pb-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              { v: "10", l: "Comprehensive Lessons" },
              { v: "10", l: "Interactive Simulators" },
              { v: "Gemini 2.5", l: "AI Tutor Model" },
              { v: "Light + Dark", l: "Theme Modes" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl p-5 border border-white/[0.08] text-center"
                style={{ background: "rgba(13,21,38,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
              >
                <p
                  className="mb-1.5"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.6vw, 2rem)", fontWeight: 700, color: "#3B82F6" }}
                >
                  {s.v}
                </p>
                <p className="text-xs uppercase tracking-wider" style={{ color: "#4A6080" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP CTA — prominent live-link callout near the top */}
      <section className="pb-12 sm:pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8 border border-blue-500/25 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.10) 0%, rgba(13,21,38,0.55) 60%)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
          >
            <div aria-hidden="true" className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/[0.10] blur-[100px] pointer-events-none" />
            <div className="relative flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#3B82F6" }}>
                Try it now
              </p>
              <h3
                className="text-white tracking-tight mb-1.5"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.25rem, 2vw, 1.5rem)", fontWeight: 600 }}
              >
                Jump into LearnAI Tutor
              </h3>
              <p style={{ color: "#8FA8CC", fontSize: "0.9375rem", lineHeight: "1.65" }}>
                The live app is up and running — lessons, simulators, and the AI tutor are ready when you are.
              </p>
            </div>
            <div className="relative shrink-0">
              <a
                href="https://learn-ai-neon-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-blue-500 text-[#04080F] hover:bg-blue-400 transition-colors duration-200"
                style={{ boxShadow: "0 0 24px rgba(59,130,246,0.25), 0 0 48px rgba(59,130,246,0.10)" }}
              >
                Open Live App
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PURPOSE */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B82F6" }}>Core Purpose</p>
          <h2
            className="text-white tracking-tight mb-5"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", fontWeight: 600 }}
          >
            Learn by doing, with an AI tutor at your side
          </h2>
          <p style={{ color: "#8FA8CC", fontSize: "1.0625rem", lineHeight: "1.75" }}>
            The app provides an engaging, hands-on learning experience for beginners exploring data
            science concepts — combining theoretical knowledge with interactive simulations and
            AI-powered tutoring that&apos;s available on every single lesson.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B82F6" }}>Key Features</p>
            <h2
              className="text-white tracking-tight mb-3"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", fontWeight: 600 }}
            >
              Everything inside the app
            </h2>
            <p style={{ color: "#8FA8CC", lineHeight: "1.7" }}>
              From a structured 10-lesson curriculum to live simulators and an AI tutor on every page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 10 Comprehensive Lessons */}
            <div className="rounded-2xl p-6 border border-white/[0.08] md:col-span-2" style={{ background: "rgba(13,21,38,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
              <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                📚 10 Comprehensive Lessons
              </h3>
              <p style={{ color: "#8FA8CC", fontSize: "0.9375rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Each lesson covers essential data science topics in a structured progression:
              </p>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {lessons.map((l, i) => (
                  <li
                    key={l}
                    className="flex items-start gap-3 text-sm px-3 py-2 rounded-lg border border-white/[0.05]"
                    style={{ background: "rgba(8,13,26,0.5)", color: "#cfe0f5" }}
                  >
                    <span className="font-mono text-xs mt-0.5 shrink-0 w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "rgba(59,130,246,0.12)", color: "#3B82F6" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{l}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Interactive Simulators */}
            <div className="rounded-2xl p-6 border border-white/[0.08] md:col-span-2" style={{ background: "rgba(13,21,38,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
              <h3 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                🎮 Interactive Simulators
              </h3>
              <p style={{ color: "#8FA8CC", fontSize: "0.9375rem", lineHeight: "1.7", marginBottom: "1.25rem" }}>
                Every lesson includes a unique, hands-on playground simulator for experiential learning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {simulators.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-lg p-3 border border-white/[0.06]"
                    style={{ background: "rgba(8,13,26,0.5)" }}
                  >
                    <p className="text-sm font-medium text-white mb-0.5">{s.name}</p>
                    <p style={{ color: "#8FA8CC", fontSize: "0.8125rem", lineHeight: "1.55" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Tutor Chat */}
            <FeatureCard
              title="💬 AI Tutor Chat (Gemini 2.5 Flash)"
              items={[
                "Context-aware AI assistant available on every lesson",
                "Per-lesson chat history persisted in local storage",
                "Real-time responses powered by Google’s Gemini API",
                "Helps clarify concepts, answer questions, and provide guidance",
              ]}
            />

            {/* Structured Learning Content */}
            <FeatureCard
              title="📝 Structured Learning Content"
              items={[
                "Clear Learning Objectives — defined goals for what students will learn",
                "Concept Cards — well-organized explanations with core paragraphs, analogies, and code snippets with syntax highlighting",
                "Key Formulas — mathematical expressions rendered with KaTeX for data science concepts",
                "Glossary — definitions of key terminology",
                "Real-World Examples — practical scenarios showing how concepts apply in industry",
                "Key Takeaways — summarized core points for quick review",
              ]}
            />

            {/* Assessment & Practice */}
            <FeatureCard
              title="✅ Assessment & Practice"
              items={[
                "Interactive Quizzes — multiple-choice questions with explanations after each lesson",
                "Open-Ended Practice Exercises — tasks with hints and expected answers for deeper learning",
                "Progress Tracking — quiz scores and lesson completion saved in browser local storage",
              ]}
            />

            {/* Theme & Accessibility */}
            <FeatureCard
              title="🎨 Theme & Accessibility"
              items={[
                "Light & Dark Mode — full-featured dark mode toggle in the top navigation bar",
                "Smart Defaults — automatically detects OS preference on first visit",
                "Persistent Theme — user’s choice saved in local storage",
                "Responsive Design — three-column layout for desktop, collapsible sidebar and mobile drawer for tablets/phones",
                "Mobile-Optimized — bottom chat button and adapted navigation on small screens",
              ]}
            />

            {/* Responsive UI Components */}
            <FeatureCard
              title="📊 Responsive UI Components"
              items={[
                "Sidebar Navigation — expandable/collapsible lesson selector with progress indicators",
                "Lesson Progress — visual tracking of course completion percentage",
                "Scroll Progress Bar — shows reading progress through lesson content",
                "Card-Based Layout — modular, clean presentation of content sections",
                "Code Blocks — syntax-highlighted code with one-click copy functionality",
                "Callouts & Highlights — visual emphasis for important concepts",
              ]}
            />
          </div>
        </div>
      </section>

      {/* MIDDLE CTA — repeated live-link callout in the middle of the page */}
      <section className="py-8 sm:py-10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-2xl p-6 sm:p-7 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            style={{ background: "rgba(13,21,38,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
          >
            <div aria-hidden="true" className="absolute inset-y-0 -right-10 w-60 bg-blue-500/[0.08] blur-[80px] pointer-events-none" />
            <div className="relative flex-1 flex items-center gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                <ExternalLinkIcon className="w-5 h-5" style={{ color: "#3B82F6" }} />
              </div>
              <div>
                <h3
                  className="text-white tracking-tight mb-0.5"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)", fontWeight: 600 }}
                >
                  See it for yourself
                </h3>
                <p style={{ color: "#8FA8CC", fontSize: "0.875rem", lineHeight: "1.6" }}>
                  Open the live app and try a lesson, a simulator, or chat with the AI tutor.
                </p>
              </div>
            </div>
            <div className="relative shrink-0">
              <a
                href="https://learn-ai-neon-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-blue-500 text-[#04080F] hover:bg-blue-400 transition-colors duration-200"
                style={{ boxShadow: "0 0 24px rgba(59,130,246,0.25), 0 0 48px rgba(59,130,246,0.10)" }}
              >
                Open Live App
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="py-20 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[350px] rounded-full blur-[100px]" style={{ background: "rgba(59,130,246,0.06)" }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B82F6" }}>Technical Stack</p>
            <h2
              className="text-white tracking-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", fontWeight: 600 }}
            >
              Built with a modern, type-safe stack
            </h2>
          </div>

          <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "rgba(13,21,38,0.55)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                  <th className="text-left font-semibold text-white px-5 py-3.5" style={{ fontFamily: "var(--font-heading)" }}>Technology</th>
                  <th className="text-left font-semibold text-white px-5 py-3.5" style={{ fontFamily: "var(--font-heading)" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((row, i) => (
                  <tr
                    key={row.name}
                    className="border-t border-white/[0.05]"
                    style={{ background: i % 2 === 1 ? "rgba(255,255,255,0.02)" : "transparent" }}
                  >
                    <td className="px-5 py-3 font-mono text-blue-300 whitespace-nowrap">{row.name}</td>
                    <td className="px-5 py-3" style={{ color: "#8FA8CC" }}>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DATA PERSISTENCE + DEVELOPER + DESIGN SYSTEM */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            title="Data Persistence"
            items={[
              "Progress Tracking — lesson completion status stored in localStorage",
              "Quiz Scores — per-lesson quiz results cached in browser",
              "Chat History — tutor conversations maintained per lesson in localStorage",
              "UI State — sidebar collapse and chat panel state saved for returning users",
            ]}
          />
          <FeatureCard
            title="Developer Features"
            items={[
              "Structured Data-Driven Curriculum — all lessons defined as plain TypeScript objects in curriculum.ts, not JSX",
              "Extensible Architecture — easy to add new lessons and playground types",
              "Type Safety — full TypeScript coverage with strict types for lessons, quizzes, and playground specs",
              "Development Server — hot-reload with npm run dev on port 3000",
              "Production Build — esbuild bundling for optimized server deployment",
              "Lint Verification — TypeScript type checking with npm run lint",
            ]}
          />
          <FeatureCard
            title="Design System"
            items={[
              "Design Tokens — CSS variables in index.css for consistent colors, spacing, and typography",
              "Dark Mode Support — Tailwind v4 custom dark variant implementation",
              "Component Library — reusable UI primitives (Card, CodeBlock, Callout, ThemeToggle, Logo)",
            ]}
          />
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B82F6" }}>Perfect For</p>
          <h2
            className="text-white tracking-tight mb-8"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)", fontWeight: 600 }}
          >
            Who it’s built for
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {audiences.map((a) => (
              <span
                key={a}
                className="text-sm font-medium px-4 py-2 rounded-full"
                style={{ background: "rgba(59,130,246,0.10)", color: "#6ee7b7", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-28 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[350px] rounded-full blur-[100px]" style={{ background: "rgba(59,130,246,0.08)" }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-white mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600 }}
          >
            Try LearnAI Tutor
          </h2>
          <p className="mb-10 max-w-xl mx-auto" style={{ color: "#8FA8CC", fontSize: "1.0625rem", lineHeight: "1.7" }}>
            Jump into the live app and start learning data science the hands-on way — lessons, simulators, and an AI tutor included.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://learn-ai-neon-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold bg-blue-500 text-[#04080F] hover:bg-blue-400 transition-colors duration-200"
              style={{ boxShadow: "0 0 30px rgba(59,130,246,0.25), 0 0 60px rgba(59,130,246,0.10)" }}
            >
              Open Live App
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto text-blue-300 px-7 py-3.5 rounded-lg text-sm font-semibold border border-blue-500/40 hover:bg-blue-500/[0.08] transition-all duration-200"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Products
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="rounded-2xl p-6 border border-white/[0.08] h-full"
      style={{ background: "rgba(13,21,38,0.45)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
    >
      <h3 className="text-white font-semibold text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5" style={{ color: "#8FA8CC", fontSize: "0.9375rem", lineHeight: "1.65" }}>
            <CheckIcon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#3B82F6" }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
