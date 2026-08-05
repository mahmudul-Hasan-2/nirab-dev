import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  X,
  Menu,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Wrench,
  Globe,
  Database,
  Code2,
  Heart,
  MapPin,
  Terminal,
  Server,
  ShieldCheck,
  GitBranch,
  Box,
  Zap,
  Rocket,
  CheckCircle2,
  Users,
  Lock,
  Lightbulb,
  FileText,
  Quote,
  Star,
  Sun,
  Moon,
} from "lucide-react";

const RESUME_URL =
  "https://docs.google.com/uc?export=download&id=19aYzpaY-nCdScJsANd5DFN7OMD4pmCzY";

const SITE_URL = "https://nirab-s-digital-space.vercel.app";
const SITE_NAME = "Mahmudul Hasan Nirab — Full Stack Developer";
const SITE_DESCRIPTION =
  "Self-taught Full Stack Developer building modern web applications with React, TypeScript & Node.js. Open to freelance and full-time opportunities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_NAME },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Mahmudul Hasan Nirab" },
      {
        name: "keywords",
        content:
          "Mahmudul Hasan Nirab, Full Stack Developer, React, Next.js, TypeScript, Node.js, MongoDB, MERN, Portfolio, Bangladesh Developer",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#8b5cf6" },
      {
        name: "google-site-verification",
        content: "Y6DdP2pL_a-DSwMPFUlaTbJsUu98O4chdg44mCiaNhU",
      },

      // Open Graph
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Nirab.dev" },
      { property: "og:locale", content: "en_US" },
      {
        property: "og:image",
        content: "https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Mahmudul Hasan Nirab - Full Stack Developer",
      },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_NAME },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      {
        name: "twitter:image",
        content: "https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png",
      },
      {
        name: "twitter:image:alt",
        content: "Mahmudul Hasan Nirab - Full Stack Developer",
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: Portfolio,
});

type Project = {
  name: string;
  tagline: string;
  image: string;
  stack: string[];
  category: "All" | "AI" | "Full Stack";
  description: string;
  live: string;
  repos: { label: string; url: string }[];
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  results: string[];
  learnings: string;
  badge: string;
  metric: string;
};

const PROJECTS: Project[] = [
  {
    name: "DevAgent",
    tagline:
      "Agentic AI workspace for autonomous project management & intelligent code assistance.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffrontend-sigma-tawny-82.vercel.app%2F?w=1280&h=800",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express.js 5",
      "MongoDB",
      "Tailwind CSS 4",
      "Google Gemini",
      "Better Auth",
      "TanStack Query",
      "JWT",
    ],
    category: "AI",
    description:
      "DevAgent is a full-stack agentic AI workspace that generates detailed project descriptions via Gemini, offers an interactive AI co-pilot chat, and provides secure workspace management.",
    live: "https://frontend-sigma-tawny-82.vercel.app/",
    repos: [
      {
        label: "GitHub Repository",
        url: "https://github.com/mahmudul-Hasan-2/DevAgent",
      },
    ],
    problem:
      "Developers often face context-switching overhead when planning features and structuring new applications.",
    solution:
      "Built an integrated agentic workspace leveraging Google Gemini API to streamline project scaffolding and task breakdown.",
    architecture:
      "Client-side Next.js 16 App Router connected to a secured Express.js backend API and MongoDB database.",
    challenges: [
      "Managing multi-turn LLM response states gracefully within the UI.",
      "Ensuring seamless cookie/token session persistence across frontend and backend domains.",
    ],
    results: [
      "⚡ Lighthouse Performance: 98",
      "🚀 Reduced project structuring time to under 2 minutes",
      "👥 Active test users: 50+",
      "🔒 Secure Better Auth integration",
    ],
    learnings:
      "Improved state management for asynchronous AI streams and learned how to handle cross-origin cookie authentication securely.",
    badge: "AI Powered",
    metric: "Structured projects in under 2 mins using Gemini",
  },
  {
    name: "DevCraft",
    tagline: "Modern full-stack tool discovery platform secured with Better Auth.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdev-craft-lime.vercel.app%2F?w=1280&h=800",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
    category: "Full Stack",
    description:
      "DevCraft is a high-performance platform for discovering, organizing, and managing developer tools with secure authentication.",
    live: "https://dev-craft-lime.vercel.app/",
    repos: [
      {
        label: "GitHub Repository",
        url: "https://github.com/mahmudul-Hasan-2/DevCraft",
      },
    ],
    problem:
      "Developers need a centralized, fast hub to discover and save specialized engineering tools.",
    solution:
      "Created a clean directory platform with instant search and organized categorization.",
    architecture: "Server-side rendered Next.js 16 communicating with MongoDB.",
    challenges: [
      "Configuring robust environment variables and session handlers for production deployment.",
    ],
    results: [
      "⚡ Lighthouse Score: 99",
      "🚀 Optimized dynamic search response",
      "🔒 Secure credential handling",
    ],
    learnings:
      "Mastered Next.js server-side data fetching patterns and optimized MongoDB queries for instant search filters.",
    badge: "Full Stack",
    metric: "Implemented Better Auth with role-based access in 3 days",
  },
  {
    name: "IdeaVault",
    tagline: "Collaborative platform for sharing, pitching, and discussing startup concepts.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fideavault-client-psi.vercel.app%2F?w=1280&h=800",
    stack: [
      "Next.js 16",
      "React 19",
      "Node.js",
      "Express.js 5",
      "MongoDB",
      "JWT",
      "Tailwind CSS 4",
      "Better Auth",
      "HeroUI",
    ],
    category: "Full Stack",
    description:
      "IdeaVault enables creators to pitch initial startup ideas, receive community feedback, and explore innovative concepts.",
    live: "https://ideavault-client-psi.vercel.app/",
    repos: [
      {
        label: "Client Repo",
        url: "https://github.com/mahmudul-Hasan-2/IdeaVault-client",
      },
      {
        label: "Server Repo",
        url: "https://github.com/mahmudul-Hasan-2/IdeaVault-Server",
      },
    ],
    problem: "Founders lack a streamlined space to pitch early concepts for peer feedback.",
    solution: "Developed an interactive vault with nested comments, upvoting, and user dashboards.",
    architecture: "Decoupled Next.js client and Node.js REST API backend.",
    challenges: ["Handling CORS policies and JWT validation securely across decoupled endpoints."],
    results: [
      "⚡ Lighthouse Score: 97",
      "🔒 JWT Authentication implemented",
      "👥 Community submission support",
    ],
    learnings:
      "Gained deep understanding of JWT implementation strategies and robust Express middleware protection.",
    badge: "Full Stack",
    metric: "Integrated secure JWT auth across decoupled client/server",
  },
  {
    name: "RecipeHub",
    tagline: "Responsive full-stack recipe sharing and discovery application.",
    image:
      "https://res.cloudinary.com/dyyxcyiz9/image/upload/v1785176448/Screenshot_2026-07-28_001916_a864d4.png",
    stack: [
      "Next.js 16",
      "React 19",
      "Express.js 5",
      "MongoDB",
      "Tailwind CSS 4",
      "Better Auth",
      "Framer Motion",
      "HeroUI",
      "Stripe",
    ],
    category: "Full Stack",
    description:
      "RecipeHub lets food enthusiasts browse, search, and share recipes with smooth animations and secure profiles.",
    live: "https://recipehub-client.vercel.app/",
    repos: [
      {
        label: "Client Repo",
        url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Client",
      },
      {
        label: "Server Repo",
        url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Server",
      },
    ],
    problem: "Standard recipe blogs often lack personalized bookmarking and filtering features.",
    solution: "Built a responsive recipe repository with smooth transitions and filter controls.",
    architecture: "Next.js frontend integrated with an Express/MongoDB backend cluster.",
    challenges: ["Optimizing image asset loading and layout shifts during category filtering."],
    results: [
      "⚡ Lighthouse Score: 98",
      "🚀 Smooth Framer Motion animations",
      "🔒 Better Auth secure session",
    ],
    learnings:
      "Improved UI micro-interactions with Framer Motion and learned effective asset caching techniques.",
    badge: "Full Stack",
    metric: "Optimized asset loading for sub-second layout transitions",
  },
];

const ARTICLES = [
  {
    id: "portfolio-architecture",
    title: "Building My Developer Portfolio: Architecture & Learnings",
    description:
      "A walkthrough of component structuring, performance considerations, and deployment workflows.",
    date: "July 2026",
    readTime: "4 min read",
    tag: "Architecture",
    content: `Building this portfolio involved focusing on clean typography, accessible components, and fast static generation.

### Key Architectural Decisions
- **Lightweight UI Components:** Keeping bundle sizes low by avoiding unnecessary heavy external component libraries.
- **Tailwind CSS Utility First:** Streamlining style maintenance and ensuring seamless dark-mode consistency across all viewports.
- **Performance First:** Leveraging edge infrastructure and optimized image rendering to target high Lighthouse scores.`,
  },
  {
    id: "decoupled-auth",
    title: "Handling Authentication in Decoupled Full-Stack Applications",
    description:
      "Comparing JWT tokens and modern session management strategies in React and Node.js apps.",
    date: "June 2026",
    readTime: "6 min read",
    tag: "Security",
    content: `When building full-stack apps with separate client and server repositories, managing sessions securely is one of the most critical hurdles.

### JWT vs. Better Auth Sessions
- **JWT (JSON Web Tokens):** Great for stateless microservices, but handling token revocation requires careful blacklisting strategies.
- **Better Auth / Cookie-based Sessions:** Provides out-of-the-box security against XSS vulnerabilities when configured with HTTP-only, Secure, and SameSite cookies.`,
  },
  {
    id: "mongodb-aggregation",
    title: "Getting Started with MongoDB Aggregation Pipelines",
    description:
      "Practical tips on writing efficient database queries for filtering and grouping data.",
    date: "May 2026",
    readTime: "5 min read",
    tag: "Database",
    content: `MongoDB aggregation pipelines allow you to process records and return computed data directly from the database server.

### Essential Stages
- **$match:** Filters documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
- **$group:** Groups documents by a specified expression and outputs a document for each distinct grouping.
- **$project:** Reshapes each document in the stream, such as by adding new fields or removing existing ones.`,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Nirab built our project prototype with incredible speed. His attention to detail with Next.js and clean code structure made handoff seamless.",
    name: "Tanvir Ahmed",
    role: "Peer Collaborator & Open Source Contributor",
  },
  {
    quote:
      "Working with Nirab on IdeaVault showed me his dedication to learning full-stack concepts rapidly and applying them correctly.",
    name: "Rakibul Hasan",
    role: "Full Stack Developer Peer",
  },
];

const METRICS = [
  { label: "Lighthouse Performance", value: "98+", icon: Zap },
  { label: "Optimized Load Time", value: "Fast", icon: Rocket },
  { label: "GitHub Repositories", value: "15+", icon: Users },
  { label: "Auth Security", value: "JWT / Auth", icon: Lock },
];

const EXPERIENCES = [
  {
    role: "Full Stack Developer (Self-Taught)",
    period: "2026 — Present",
    company: "Independent Projects & Open Source",
    description:
      "Building production-ready full-stack web applications, integrating modern AI APIs, and refining responsive interfaces with React, TypeScript and Node.js. Focused on clean architecture, secure authentication and performance.",
  },
];

const SKILLS_CATEGORIES = [
  {
    category: "Frontend",
    icon: Globe,
    skills: [
      { name: "React / Next.js", icon: Code2, level: 90 },
      { name: "TypeScript", icon: Terminal, level: 80 },
      { name: "JavaScript (ES6+)", icon: Code2, level: 85 },
      { name: "Tailwind CSS", icon: Sparkles, level: 90 },
    ],
  },
  {
    category: "Backend & DB",
    icon: Database,
    skills: [
      { name: "Node.js & Express.js", icon: Server, level: 80 },
      { name: "MongoDB & Aggregations", icon: Database, level: 75 },
      { name: "REST APIs", icon: Globe, level: 85 },
      { name: "Better Auth / JWT", icon: ShieldCheck, level: 75 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: 85 },
      { name: "Vercel Deployment", icon: Globe, level: 90 },
      { name: "Postman API Client", icon: Box, level: 80 },
    ],
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "articles", label: "Articles" },
  { id: "contact", label: "Contact" },
];

/* ───────────────────────── Theme Hook ───────────────────────── */
function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");

    setTheme(initial);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(initial);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("portfolio-theme", next);
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(next);
      return next;
    });
  }, []);

  return { theme, toggle };
}

/* ───────────────────────── Custom Cursor ───────────────────────── */
function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible, reducedMotion]);

  if (typeof window !== "undefined" && ("ontouchstart" in window || reducedMotion)) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
      style={{ x: cursorXSpring, y: cursorYSpring }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? "rgba(244, 114, 182, 0.95)" : "rgba(196, 181, 253, 0.90)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-8 h-8 rounded-full"
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </motion.div>
  );
}

/* ───────────────────────── Page Skeleton ───────────────────────── */
function PageSkeleton() {
  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-primary/15 via-accent/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="fixed top-0 inset-x-0 z-40 glass border-b border-border/40 h-16 flex items-center px-4 sm:px-6">
        <div className="mx-auto max-w-6xl w-full flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/20 animate-pulse" />
            <div className="space-y-1.5">
              <div className="h-3.5 w-16 rounded bg-muted animate-pulse" />
              <div className="h-2 w-12 rounded bg-muted/60 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── JSON-LD Structured Data ───────────────────────── */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Nirab.dev",
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Mahmudul Hasan Nirab",
        url: SITE_URL,
        image: "https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png",
        jobTitle: "Full Stack Developer",
        description: SITE_DESCRIPTION,
        sameAs: [
          "https://github.com/mahmudul-Hasan-2",
          "https://linkedin.com/in/mahmudul-hasan-dev",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "Full Stack Development",
          "Web Development",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BD",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ───────────────────────── Main Portfolio ───────────────────────── */
function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);
  const [activeArticle, setActiveArticle] = useState<(typeof ARTICLES)[0] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.documentElement.style.scrollPaddingTop = "5rem";
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "";
      document.documentElement.style.scrollPaddingTop = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setActiveArticle(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <StructuredData />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <PageSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="min-h-screen overflow-x-hidden w-full bg-background text-foreground selection:bg-primary/30 selection:text-foreground relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-primary/10 via-accent/5 to-transparent blur-[140px] pointer-events-none" />
            <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

            <CustomCursor />
            <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggle} />

            <main id="main-content">
              <Hero />
              <MetricsSection />
              <About />
              <ExperienceSection />
              <Skills />
              <Projects onSelect={setActive} />
              <GithubContribution />
              <TestimonialsSection />
              <ArticleSection onSelectArticle={setActiveArticle} />
              <Contact />
            </main>

            <Footer />

            <AnimatePresence>
              {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
              {activeArticle && (
                <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ───────────────────────── Nav ───────────────────────── */
function Nav({
  menuOpen,
  setMenuOpen,
  theme,
  toggleTheme,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 glass w-full border-b border-border/40 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5 group" data-cursor="pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent grid place-items-center text-primary-foreground font-mono text-sm font-bold shadow-lg shadow-primary/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-foreground group-hover:text-primary transition-colors leading-none">
              Nirab
            </span>
            <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase mt-0.5">
              Developer
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              data-cursor="pointer"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-primary/50 hover:bg-primary/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-cursor="pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-primary" />
            ) : (
              <Moon className="w-4 h-4 text-primary" />
            )}
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline rounded-full px-4 py-2 text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-cursor="pointer"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
          <a
            href="#contact"
            className="btn-primary rounded-full px-5 py-2 text-sm shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-cursor="pointer"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-border grid place-items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-primary" />
            ) : (
              <Moon className="w-4 h-4 text-primary" />
            )}
          </button>
          <button
            className="w-10 h-10 grid place-items-center rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border px-6 py-5 flex flex-col gap-4 glass w-full overflow-hidden"
            aria-label="Mobile navigation"
          >
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-muted-foreground hover:text-primary font-medium"
              >
                {n.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              rel="noreferrer"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center justify-center gap-2 mt-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section
      id="home"
      className="pt-36 pb-20 px-4 sm:px-6 w-full overflow-hidden relative"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1 min-w-0"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/10 px-4 py-1.5 text-xs font-medium shadow-inner relative overflow-hidden text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.45)]" />
            </span>
            Available for freelance & full-time roles
          </div>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] break-words mt-6"
          >
            Mahmudul Hasan <span className="text-gradient">Nirab</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
            Self-taught Full Stack Developer building production-ready web apps with React,
            TypeScript & Node.js. Focused on clean code, secure auth and modern AI integrations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              rel="noreferrer"
              target="_blank"
              className="btn-primary rounded-full px-5 sm:px-6 py-3 inline-flex items-center gap-2 text-sm sm:text-base shadow-lg shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              data-cursor="pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="btn-outline rounded-full px-5 sm:px-6 py-3 inline-flex items-center gap-2 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              data-cursor="pointer"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { href: "https://github.com/mahmudul-Hasan-2", icon: Github, label: "GitHub" },
              {
                href: "https://linkedin.com/in/mahmudul-hasan-dev",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:mahmudul5709@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border bg-card/40 grid place-items-center hover:border-primary hover:text-primary transition shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={label}
                data-cursor="pointer"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 md:order-2 flex justify-center md:justify-end w-full"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-50 bg-gradient-to-tr from-primary to-accent rotate-6" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-primary/30 glass shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png"
                alt="Mahmudul Hasan Nirab - Full Stack Developer portrait"
                className="w-full h-full object-cover"
                width={320}
                height={320}
                fetchPriority="high"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── Shared ───────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center px-4">
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-semibold">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold text-foreground">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
    </div>
  );
}

/* ───────────────────────── Metrics ───────────────────────── */
function MetricsSection() {
  return (
    <AnimatedSection className="py-12 px-4 sm:px-6 w-full border-y border-border/40 bg-card/25">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {METRICS.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-border flex flex-col items-center hover:border-primary/40 transition"
            >
              <Icon className="w-6 h-6 text-primary mb-2" aria-hidden="true" />
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{m.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
                {m.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── About ───────────────────────── */
function About() {
  return (
    <AnimatedSection id="about" className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Background & Journey" title="About Me" />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              subtitle: "Self-Taught Developer",
              body: (
                <>
                  Continuously learning modern web technologies while pursuing secondary education
                  at <strong className="text-foreground">Talibpur Ahsania High School</strong>,
                  Bangladesh.
                </>
              ),
            },
            {
              icon: Briefcase,
              title: "Focus Areas",
              subtitle: "Full Stack & AI Integrations",
              body: "Passionate about building functional web applications, secure authentication systems, and clean, maintainable code.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="w-12 h-12 rounded-xl grid place-items-center mb-4 shrink-0 bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20">
                  <Icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{card.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{card.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-[1.05rem] glass p-6 sm:p-8 rounded-2xl border border-border shadow-lg">
          <p>
            Hello! I&apos;m Mahmudul Hasan Nirab, a self-taught full-stack developer based in
            Bangladesh. I started coding because I was fascinated by how simple lines of logic could
            turn into interactive applications that solve real user problems.
          </p>
          <p>
            I particularly enjoy tackling full-stack data flow challenges, building responsive
            interfaces, and integrating secure authentication. As an independent learner, I treat
            every bug as an opportunity to master underlying principles and ship better software.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── Experience ───────────────────────── */
function ExperienceSection() {
  return (
    <AnimatedSection className="py-16 px-4 sm:px-6 w-full bg-card/10 border-y border-border/40">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Timeline" title="Experience & Projects" />
        <div className="space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="glass p-6 sm:p-8 rounded-2xl border border-border relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <span className="text-xs font-mono rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-primary w-fit">
                  {exp.period}
                </span>
              </div>
              <div className="text-sm font-medium text-primary mb-2">{exp.company}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── Skills ───────────────────────── */
function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Technical Skills" title="Technologies I Use" />
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_CATEGORIES.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.category}
                className="glass rounded-2xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl grid place-items-center shrink-0 bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
                      <GroupIcon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <ul className="space-y-4">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <li key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <SkillIcon className="w-4 h-4 text-primary" aria-hidden="true" />
                              <span className="font-medium text-foreground/90">{skill.name}</span>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden border border-border/40">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: "var(--gradient-primary)" }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── Projects ───────────────────────── */
function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState<"All" | "AI" | "Full Stack">("All");
  const [techFilter, setTechFilter] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    let list = PROJECTS;
    if (filter !== "All") list = list.filter((p) => p.category === filter);
    if (techFilter) list = list.filter((p) => p.stack.includes(techFilter));
    return list;
  }, [filter, techFilter]);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.stack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  return (
    <AnimatedSection id="projects" className="py-24 px-4 sm:px-6 w-full">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Portfolio" title="Featured Projects & Case Studies" />

        <div
          className="flex flex-wrap justify-center gap-2 mb-6"
          role="group"
          aria-label="Project category filters"
        >
          {(["All", "AI", "Full Stack"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setTechFilter(null);
              }}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                filter === cat && !techFilter
                  ? "btn-primary shadow-lg shadow-primary/20"
                  : "glass text-muted-foreground hover:text-foreground border border-border"
              }`}
              data-cursor="pointer"
              aria-pressed={filter === cat && !techFilter}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto"
          role="group"
          aria-label="Technology filters"
        >
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => {
                setTechFilter(techFilter === tech ? null : tech);
                setFilter("All");
              }}
              className={`text-xs rounded-md border px-2.5 py-1 font-mono transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                techFilter === tech
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                  : "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/40"
              }`}
              data-cursor="pointer"
              aria-pressed={techFilter === tech}
            >
              {tech}
            </button>
          ))}
        </div>

        {techFilter && (
          <div className="text-center mb-6">
            <span className="text-sm text-muted-foreground">
              Showing projects using <strong className="text-primary">{techFilter}</strong>
              {" · "}
              <button
                onClick={() => setTechFilter(null)}
                className="text-primary hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Clear filter
              </button>
            </span>
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center border border-border max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 grid place-items-center mx-auto text-primary">
              <Box className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">No Projects Found</h3>
            <p className="text-muted-foreground text-sm">No projects match the current filter.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((p, idx) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass rounded-2xl overflow-hidden group flex flex-col border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 relative shadow-xl"
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary text-primary-foreground px-2.5 py-1 backdrop-blur-md shadow-md">
                    {p.badge}
                  </span>
                </div>

                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img
                    src={p.image}
                    alt={`${p.name} project screenshot - ${p.tagline}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    width={640}
                    height={360}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-xs font-medium text-white bg-primary/90 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Preview
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>

                  <div className="space-y-3 pt-2 border-t border-border/60">
                    <div className="text-xs bg-primary/10 border border-primary/30 p-2.5 rounded-xl">
                      <span className="text-primary font-semibold flex items-center gap-1.5 mb-0.5">
                        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Key Metric / Win:
                      </span>
                      <p className="text-foreground/90 font-medium">{p.metric}</p>
                    </div>

                    <div className="text-xs">
                      <strong className="text-primary block uppercase tracking-wider mb-1">
                        The Problem:
                      </strong>
                      <p className="text-muted-foreground line-clamp-2">{p.problem}</p>
                    </div>
                    <div className="text-xs">
                      <strong className="text-accent block uppercase tracking-wider mb-1">
                        The Solution:
                      </strong>
                      <p className="text-muted-foreground line-clamp-2">{p.solution}</p>
                    </div>
                    <div className="text-xs bg-card/40 border border-border/60 p-2.5 rounded-xl">
                      <span className="text-primary font-semibold flex items-center gap-1.5 mb-1">
                        <Lightbulb className="w-3.5 h-3.5" aria-hidden="true" /> What I Learned:
                      </span>
                      <p className="text-muted-foreground">{p.learnings}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.stack.map((t) => (
                      <button
                        key={t}
                        onClick={(e) => {
                          e.stopPropagation();
                          setTechFilter(t);
                          setFilter("All");
                        }}
                        className="text-xs rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-primary font-mono hover:bg-primary/25 hover:border-primary/40 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        data-cursor="pointer"
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3 mt-auto border-t border-border/60">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary rounded-full px-4 py-2 text-xs inline-flex items-center gap-1.5 shadow-md shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      data-cursor="pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /> Live Demo
                    </a>
                    {p.repos.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline rounded-full px-4 py-2 text-xs inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        data-cursor="pointer"
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" /> {r.label}
                      </a>
                    ))}
                    <button
                      onClick={() => onSelect(p)}
                      className="ml-auto text-xs text-primary hover:underline inline-flex items-center gap-1 font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      data-cursor="pointer"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── GitHub ───────────────────────── */
function GithubContribution() {
  return (
    <AnimatedSection className="py-20 px-4 sm:px-6 w-full bg-card/10 border-y border-border/40">
      <div className="mx-auto max-w-4xl text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
          GitHub Activity
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Coding Contributions</h3>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Explore my GitHub profile stats and open-source commit history.
        </p>
        <div className="glass p-6 rounded-2xl border border-border inline-block w-full overflow-x-auto shadow-xl">
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mahmudul-Hasan-2&theme=tokyonight"
            alt="GitHub contribution stats and profile summary for Mahmudul Hasan Nirab"
            className="mx-auto max-w-full"
            loading="lazy"
            width={800}
            height={200}
          />
        </div>
        <div>
          <a
            href="https://github.com/mahmudul-Hasan-2"
            target="_blank"
            rel="noreferrer"
            className="btn-outline rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-cursor="pointer"
          >
            <Github className="w-4 h-4" aria-hidden="true" /> Visit GitHub Profile{" "}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── Testimonials ───────────────────────── */
function TestimonialsSection() {
  return (
    <AnimatedSection className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Peer Feedback" title="What Peers Say" />
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 border border-border relative flex flex-col justify-between shadow-lg"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" aria-hidden="true" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="pt-4 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="font-semibold text-sm text-foreground not-italic">{t.name}</cite>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── Articles ───────────────────────── */
function ArticleSection({
  onSelectArticle,
}: {
  onSelectArticle: (a: (typeof ARTICLES)[0]) => void;
}) {
  return (
    <AnimatedSection
      id="articles"
      className="py-24 px-4 sm:px-6 w-full bg-card/10 border-y border-border/40"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Articles & Notes" title="Technical Insights" />
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="text-primary font-mono font-semibold">{article.tag}</span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                <time className="text-xs text-muted-foreground" dateTime="2026-07">
                  {article.date}
                </time>
                <button
                  onClick={() => onSelectArticle(article)}
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1 font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  data-cursor="pointer"
                >
                  Read Article <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ───────────────────────── Project Modal ───────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm px-4 py-8 overflow-y-auto flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="mx-auto max-w-3xl glass rounded-2xl overflow-hidden border border-border my-auto w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-muted">
          <img
            src={project.image}
            alt={`${project.name} detailed screenshot`}
            className="w-full h-full object-cover object-top"
            width={800}
            height={450}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass grid place-items-center hover:text-primary transition shrink-0 border border-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close project details"
            data-cursor="pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Case Study Details
            </span>
            <h3
              id="project-modal-title"
              className="text-2xl sm:text-3xl font-bold mt-1 text-foreground"
            >
              {project.name}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="glass p-4 rounded-xl border border-primary/30 bg-primary/5">
            <h4 className="text-xs uppercase tracking-widest text-primary mb-1 font-semibold flex items-center gap-1.5">
              <Star className="w-4 h-4" aria-hidden="true" /> Key Impact Metric
            </h4>
            <p className="text-sm font-medium text-foreground/90">{project.metric}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl border border-border">
              <h4 className="text-xs uppercase tracking-widest text-primary mb-1 font-semibold">
                Problem
              </h4>
              <p className="text-sm text-muted-foreground">{project.problem}</p>
            </div>
            <div className="glass p-4 rounded-xl border border-border">
              <h4 className="text-xs uppercase tracking-widest text-accent mb-1 font-semibold">
                Solution
              </h4>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          </div>

          <div className="glass p-4 rounded-xl border border-border">
            <h4 className="text-xs uppercase tracking-widest text-primary mb-1 font-semibold">
              What I Learned
            </h4>
            <p className="text-sm text-muted-foreground">{project.learnings}</p>
          </div>

          <div className="glass p-4 rounded-xl border border-border">
            <h4 className="text-xs uppercase tracking-widest text-primary mb-1 font-semibold">
              Architecture
            </h4>
            <p className="text-sm text-muted-foreground">{project.architecture}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/30 px-3 py-1 text-xs sm:text-sm text-primary bg-primary/10 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-4 rounded-xl border border-border space-y-2">
            <h4 className="text-xs uppercase tracking-widest text-primary font-semibold">
              Challenges
            </h4>
            <ul className="space-y-1.5 text-muted-foreground text-sm">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-2.5 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-4 rounded-xl border border-border space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" /> Results & Metrics
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.results.map((res, i) => (
                <div
                  key={i}
                  className="text-xs font-mono bg-card border border-border/50 px-3 py-2 rounded-lg text-foreground/90"
                >
                  {res}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2 shadow-md shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              data-cursor="pointer"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
            </a>
            {project.repos.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="btn-outline rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                data-cursor="pointer"
              >
                <Github className="w-4 h-4" aria-hidden="true" /> {r.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── Article Modal ───────────────────────── */
function ArticleModal({
  article,
  onClose,
}: {
  article: (typeof ARTICLES)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm px-4 py-8 overflow-y-auto flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="mx-auto max-w-2xl glass rounded-2xl overflow-hidden border border-border my-auto w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full glass grid place-items-center hover:text-primary transition shrink-0 border border-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close article"
          data-cursor="pointer"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="space-y-2 pr-12">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-primary font-mono font-semibold">{article.tag}</span>
            <span>•</span>
            <time dateTime="2026-07">{article.date}</time>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h3 id="article-modal-title" className="text-2xl font-bold text-foreground">
            {article.title}
          </h3>
        </div>
        <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4 pt-4 border-t border-border/60 whitespace-pre-line">
          {article.content}
        </div>
        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="btn-outline rounded-full px-5 py-2 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            data-cursor="pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── Contact ───────────────────────── */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:mahmudul5709@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 400);
  };

  return (
    <AnimatedSection id="contact" className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Get in Touch" title="Let's Connect" />
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <span className="text-xs rounded-full bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 font-medium">
            Open to Opportunities & Collaborations
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5 min-w-0">
            <p className="text-muted-foreground text-sm sm:text-base">
              Have a project idea or want to discuss web development? Feel free to reach out via
              email or connect on LinkedIn.
            </p>
            <ContactRow
              icon={Mail}
              label="Email"
              value="mahmudul5709@gmail.com"
              href="mailto:mahmudul5709@gmail.com"
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/mahmudul-hasan-dev"
              href="https://linkedin.com/in/mahmudul-hasan-dev"
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value="github.com/mahmudul-Hasan-2"
              href="https://github.com/mahmudul-Hasan-2"
            />
            <ContactRow icon={MapPin} label="Location" value="Bangladesh" />
          </div>

          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl p-6 space-y-4 border border-border min-w-0 shadow-xl"
            noValidate
          >
            <Field name="name" label="Name" placeholder="Your name" maxLength={100} required />
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              maxLength={255}
              required
            />
            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-card/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition resize-none text-foreground focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary rounded-full px-6 py-3 w-full inline-flex items-center justify-center gap-2 disabled:opacity-65 cursor-pointer shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              data-cursor="pointer"
            >
              {status === "sent"
                ? "Opening mail client..."
                : status === "sending"
                  ? "Preparing..."
                  : "Send Message"}
              {status === "idle" && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  maxLength,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground mb-1.5 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="w-full rounded-xl bg-card/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition text-foreground focus-visible:ring-2 focus-visible:ring-primary"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary transition-colors border border-border w-full group">
      <div className="w-11 h-11 rounded-lg grid place-items-center shrink-0 bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
        <Icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground truncate font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      data-cursor="pointer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4 sm:px-6 w-full glass">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-10 items-start text-center md:text-left">
        <div className="space-y-3 max-w-sm mx-auto md:mx-0">
          <a
            href="#home"
            className="font-display font-bold text-xl inline-flex items-center gap-2 justify-center md:justify-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            data-cursor="pointer"
          >
            <Code2 className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-gradient">Nirab</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building modern web applications and exploring clean coding practices.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 mx-auto md:mx-0">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Live Visitors
          </span>
          <a
            href="https://visitor-badge.laobi.icu"
            target="_blank"
            rel="noreferrer"
            className="inline-block hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            data-cursor="pointer"
            title="Open-source visitor counter"
          >
            <img
              src="https://visitor-badge.laobi.icu/badge?page_id=mahmudul-Hasan-2.portfolio&left_color=%23334155&right_color=%238B5CF6&left_text=Visitors"
              alt="Visitor count badge for Nirab portfolio"
              className="h-7 rounded shadow-sm"
              loading="lazy"
              width={120}
              height={28}
            />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-border/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center">
        <p>
          © {new Date().getFullYear()} Mahmudul Hasan Nirab. All rights reserved. • Last updated:
          August 2026
        </p>
        <p className="flex items-center justify-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-primary fill-primary" aria-hidden="true" />{" "}
          React + TypeScript + Framer Motion
        </p>
      </div>
    </footer>
  );
}
