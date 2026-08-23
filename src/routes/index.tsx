import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Heart,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Trophy,
  Wrench,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

const RESUME_URL =
  "https://docs.google.com/uc?export=download&id=19aYzpaY-nCdScJsANd5DFN7OMD4pmCzY";

const SITE_URL = "https://nirab-dev.vercel.app";
const SITE_NAME = "Mahmudul Hasan Nirab — Full Stack Developer & AI Enthusiast";
const SITE_DESCRIPTION =
  "Portfolio of Mahmudul Hasan Nirab — Full Stack Developer building intelligent, AI-powered web applications with Next.js, TypeScript, and MongoDB.";
const OG_IMAGE = "https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_NAME },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Mahmudul Hasan Nirab" },
      {
        name: "keywords",
        content:
          "Mahmudul Hasan Nirab, Full Stack Developer, React, Next.js, TypeScript, Node.js, MongoDB, MERN, Portfolio, Bangladesh Developer, AI",
      },
      { property: "og:title", content: "Mahmudul Hasan Nirab — Full Stack Developer" },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Nirab.dev" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mahmudul Hasan Nirab — Full Stack Developer" },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Portfolio,
});

type ProjectCategory = "All" | "AI" | "Full Stack" | "Next.js" | "Frontend";

type Project = {
  name: string;
  tagline: string;
  image: string;
  stack: string[];
  category: Exclude<ProjectCategory, "All" | "Next.js">;
  description: string;
  live: string;
  repos: { label: string; url: string }[];
  challenges: string[];
  improvements: string[];
  badge: string;
  keyMetric: string;
  problem: string;
  solution: string;
  learnings: string;
  features: string[];
};

const PROJECTS: Project[] = [
  {
    name: "DevAgent",
    tagline:
      "Elite Agentic AI Workspace — Autonomous project management & intelligent AI co-pilot.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffrontend-sigma-tawny-82.vercel.app%2F?w=1280&h=800",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express.js 5",
      "MongoDB",
      "Google Gemini",
      "Better Auth",
      "TanStack Query",
    ],
    category: "AI",
    description:
      "DevAgent is a next-generation Agentic AI Workspace that bridges high-level project ideas and production-ready execution. Powered by Google Gemini, it generates detailed project descriptions, offers an interactive AI Co-Pilot chat, and provides secure workspace management.",
    live: "https://frontend-sigma-tawny-82.vercel.app/",
    repos: [{ label: "Full Repository", url: "https://github.com/mahmudul-Hasan-2/DevAgent" }],
    challenges: [
      "Orchestrating multi-step agentic flows with Gemini while maintaining conversation context across sessions.",
      "Integrating Better Auth with a fully decoupled Express backend and handling cross-origin cookie sessions reliably.",
      "Building a clean TypeScript shared interface layer between frontend and backend.",
    ],
    improvements: [
      "Add multi-model LLM fallback support for higher reliability.",
      "Introduce real-time team collaboration and shared workspaces.",
      "Add file upload + vector memory for deeper project context.",
    ],
    badge: "AI Powered",
    keyMetric: "Generate structured project plans in under 2 minutes using Gemini",
    problem:
      "Developers waste significant time context-switching when planning features and structuring new applications from scratch.",
    solution:
      "Built an integrated agentic workspace that uses Google Gemini to automatically generate project structure, task breakdown, and provides a real-time AI co-pilot chat inside secure workspaces.",
    learnings:
      "Deepened understanding of asynchronous AI stream handling, multi-step agent orchestration, Better Auth session management across domains, and end-to-end TypeScript architecture.",
    features: [
      "Autonomous AI project description generator",
      "Interactive AI Co-Pilot chat with context memory",
      "Secure workspace management with Better Auth",
      "Full TypeScript type safety across frontend & backend",
      "Modern dashboard with dark mode support",
    ],
  },
  {
    name: "DevCraft",
    tagline:
      "Premium full-stack developer tools discovery & management platform secured with Better Auth.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdev-craft-lime.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    category: "Full Stack",
    description:
      "DevCraft is a high-performance full-stack platform for discovering, organizing, and managing developer tools and resources. It features secure authentication, seamless CRUD operations, and a clean explore experience.",
    live: "https://dev-craft-lime.vercel.app/",
    repos: [{ label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/DevCraft" }],
    challenges: [
      "Implementing robust Better Auth sessions that work reliably across local development and Vercel production.",
      "Building smooth client-side UI synchronization for real-time CRUD feedback.",
      "Architecting dynamic baseURL routing for seamless environment switching.",
    ],
    improvements: [
      "Add advanced filtering, tagging, and full-text search for large collections.",
      "Introduce role-based access control and collaborative collections.",
      "Add public sharing links for curated tool lists.",
    ],
    badge: "Full Stack",
    keyMetric: "Implemented Better Auth + full CRUD with role support in under 3 days",
    problem:
      "Developers need a fast, centralized place to discover and save specialized engineering tools without switching between multiple bookmarks and tabs.",
    solution:
      "Created a clean, high-performance directory platform with instant search, organized categorization, secure user collections, and seamless CRUD powered by Better Auth.",
    learnings:
      "Mastered Next.js App Router data fetching patterns, Better Auth environment configuration, and optimized MongoDB queries for instant search and filtering.",
    features: [
      "Bulletproof authentication with Better Auth",
      "Dynamic item discovery with search & filters",
      "Full CRUD with instant client-side updates",
      "Multi-environment stability (local + Vercel)",
      "Clean modern UI with responsive grids",
    ],
  },
  {
    name: "IdeaVault",
    tagline:
      "Modern idea-sharing platform for pitching, discovering, and discussing startup concepts.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fideavault-client-psi.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    category: "Full Stack",
    description:
      "IdeaVault is a collaborative idea-sharing platform where users can create, explore, and interact with startup ideas. It features secure JWT authentication, smart discovery, nested comments, user dashboards, and a responsive carousel UI.",
    live: "https://ideavault-client-psi.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/IdeaVault-client" },
      { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/IdeaVault-Server" },
    ],
    challenges: [
      "Synchronizing a fully decoupled Next.js client and Express server while handling CORS and JWT authentication securely.",
      "Designing efficient discovery feeds with pagination, sorting, and nested comment interactions.",
      "Building clean user dashboards (My Ideas, My Interactions) with proper data ownership.",
    ],
    improvements: [
      "Add real-time updates via WebSockets for comments and idea interactions.",
      "Expand into full crowdfunding features with campaign management.",
      "Add idea upvoting and trending algorithm.",
    ],
    badge: "Solo",
    keyMetric: "Secure JWT auth working across fully decoupled client & server",
    problem:
      "Founders and builders lack a clean, modern space to pitch early concepts and receive structured peer feedback.",
    solution:
      "Developed a full collaborative platform with idea creation, nested comments, smart discovery search, user dashboards, and a responsive homepage carousel.",
    learnings:
      "Gained deep practical experience with JWT implementation, Express middleware protection, CORS handling, and managing state across a decoupled architecture.",
    features: [
      "Secure JWT authentication",
      "Smart idea discovery & search",
      "Nested comment system",
      "User dashboards (My Ideas / Interactions)",
      "Responsive homepage carousel",
    ],
  },
  {
    name: "RecipeHub",
    tagline:
      "Sleek full-stack platform for discovering, sharing, and managing recipes with smooth animations.",
    image:
      "https://res.cloudinary.com/dyyxcyiz9/image/upload/v1785176448/Screenshot_2026-07-28_001916_a864d4.png",
    stack: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "Framer Motion",
    ],
    category: "Full Stack",
    description:
      "RecipeHub is a modern, responsive culinary platform that lets food enthusiasts browse, search, share, and manage recipes. It features secure authentication, smart filters, dark/light mode, and delightful micro-interactions powered by Framer Motion.",
    live: "https://recipehub-client.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Client" },
      { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Server" },
    ],
    challenges: [
      "Integrating Better Auth with a decoupled Express backend while keeping session handling seamless across environments.",
      "Optimizing data fetching and caching strategies in Next.js App Router for dynamic recipe feeds.",
      "Creating smooth page transitions and micro-interactions with Framer Motion without hurting performance.",
    ],
    improvements: [
      "Add user-generated recipe submissions with image upload and moderation.",
      "Implement real-time likes and comments.",
      "Add personalized recipe recommendations.",
    ],
    badge: "Full Stack",
    keyMetric: "Sub-second layout transitions with optimized asset loading",
    problem:
      "Most recipe websites feel cluttered and lack personalization, bookmarking, and smooth discovery experiences.",
    solution:
      "Built a clean, animated recipe platform with smart filters, secure authentication, dark/light mode, and delightful micro-interactions using Framer Motion + HeroUI.",
    learnings:
      "Improved skills in UI micro-interactions, effective caching strategies with Next.js, Better Auth integration, and building polished full-stack user experiences.",
    features: [
      "Modern UI with Dark/Light mode",
      "Smart search by category, name & difficulty",
      "Secure authentication via Better Auth",
      "Smooth animations with Framer Motion",
      "Fully responsive design",
    ],
  },
  {
    name: "BookVibe",
    tagline:
      "Interactive reading companion for organizing, tracking, and visualizing your favorite books.",
    image:
      "https://res.cloudinary.com/dyyxcyiz9/image/upload/v1785176613/Screenshot_2026-07-28_002216_hdg5zy.png",
    stack: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Router", "Recharts", "LocalStorage"],
    category: "Frontend",
    description:
      "BookVibe is a modern React application that helps book lovers discover, review, and organize their reads. It features dynamic bookshelves, detailed book views, interactive progress charts, and fully offline-first data persistence using LocalStorage.",
    live: "https://book-vibe-coral.vercel.app/",
    repos: [{ label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/Book-Vibe" }],
    challenges: [
      "Persisting complex bookshelf state across sessions using LocalStorage without data loss or corruption.",
      "Building responsive, interactive charts that accurately reflect reading progress with Recharts.",
      "Creating a clean multi-page experience with React Router while keeping the UI consistent.",
    ],
    improvements: [
      "Migrate data persistence to a backend with user accounts and cloud sync.",
      "Add social features such as public reviews and reading challenges.",
      "Implement advanced filtering and reading statistics.",
    ],
    badge: "Frontend",
    keyMetric: "Fully functional offline-first reading tracker with LocalStorage",
    problem:
      "Readers need a simple, beautiful way to organize books, track progress, and visualize their reading habits without complex setups.",
    solution:
      "Created a clean React application with dynamic bookshelves (To-Read, Currently Reading, Completed), detailed book views, and interactive progress charts powered by Recharts.",
    learnings:
      "Strengthened skills in client-side state management, LocalStorage patterns, data visualization with Recharts, and building polished multi-page React applications.",
    features: [
      "Dynamic bookshelves (To-Read / Reading / Completed)",
      "Detailed book information pages",
      "Interactive progress charts with Recharts",
      "Fully responsive mobile-first design",
      "Offline-first with LocalStorage persistence",
    ],
  },
];

const SKILLS_CATEGORIES = [
  {
    category: "Frontend Architecture",
    icon: Globe,
    skills: [
      { name: "React", icon: Code2, level: 95 },
      { name: "Next.js", icon: Layers, level: 90 },
      { name: "TypeScript", icon: Terminal, level: 85 },
      { name: "JavaScript (ES6+)", icon: Code2, level: 90 },
      { name: "Tailwind CSS", icon: Sparkles, level: 95 },
      { name: "HTML5 & CSS3", icon: Globe, level: 95 },
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node.js", icon: Server, level: 85 },
      { name: "Express.js", icon: Cpu, level: 85 },
      { name: "MongoDB", icon: Database, level: 80 },
      { name: "RESTful APIs", icon: Globe, level: 90 },
      { name: "Better Auth", icon: ShieldCheck, level: 80 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: 90 },
      { name: "Vercel Deployment", icon: Globe, level: 95 },
      { name: "Postman", icon: Terminal, level: 85 },
      { name: "VS Code", icon: Code2, level: 95 },
      { name: "NGINX (Learning)", icon: Server, level: 65 },
    ],
  },
];

const TIMELINE_DATA = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Built foundational skills in HTML, CSS, JavaScript DOM, and modern responsive layouts.",
  },
  {
    year: "2025",
    title: "Learned MERN Stack & Next.js",
    description:
      "Engineered full-stack systems with Node.js, Express, MongoDB, and Next.js App Router.",
  },
  {
    year: "2025",
    title: "Built AI-Powered Projects",
    description:
      "Integrated Large Language Models like Gemini into production applications for autonomous workflows.",
  },
  {
    year: "2026",
    title: "Deep TypeScript & Systems",
    description:
      "Exploring advanced TypeScript patterns, containerization concepts, web servers, and agentic workflows.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the problem first",
    description:
      "Every solution starts with understanding the requirements, users, and constraints before writing code.",
  },
  {
    number: "02",
    title: "Design for reuse",
    description:
      "Build reusable components and modular systems that are easy to maintain and extend.",
  },
  {
    number: "03",
    title: "Keep frontend & backend aligned",
    description:
      "APIs, data models, and validation stay synchronized to keep applications predictable and reliable.",
  },
  {
    number: "04",
    title: "Prefer simplicity",
    description: "Choose clear, maintainable solutions over clever complexity whenever possible.",
  },
  {
    number: "05",
    title: "Ship incrementally",
    description:
      "Deliver working software in small, continuous improvements instead of waiting for perfection.",
  },
  {
    number: "06",
    title: "Prioritize quality",
    description:
      "Every feature should be accessible, performant, and maintainable — not just functional.",
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
] as const;

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "home");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function matchesFilter(project: Project, filter: ProjectCategory) {
  if (filter === "All") return true;
  if (filter === "Next.js") {
    return project.stack.some((s) => /next\.?js/i.test(s));
  }
  return project.category === filter;
}

function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV.map((n) => n.id));

  useBodyScrollLock(Boolean(active) || menuOpen);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-[#f3f0ff] text-slate-800 selection:bg-violet-500/20 selection:text-violet-900 motion-reduce:transition-none">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden>
        <div className="absolute top-[-15%] left-[-8%] w-[520px] h-[520px] rounded-full bg-violet-400/25 blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-12%] w-[620px] h-[620px] rounded-full bg-indigo-300/30 blur-[150px]" />
        <div className="absolute top-[35%] right-[10%] w-[280px] h-[280px] rounded-full bg-fuchsia-300/20 blur-[110px]" />
      </div>

      <Nav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />
      <Hero />
      <About />
      <Skills />
      <Projects onSelect={setActive} />
      <Process />
      <NowSection />
      <Contact />
      <Footer />
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function Nav({
  menuOpen,
  setMenuOpen,
  activeSection,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  activeSection: string;
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4">
        <div className="h-14 sm:h-16 flex items-center justify-between gap-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/70 shadow-[0_8px_32px_rgba(99,102,241,0.14)] px-5 sm:px-6">
          <a
            href="#home"
            className="font-bold text-lg shrink-0 flex items-center gap-1.5 tracking-tight"
          >
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Nirab
            </span>
            <span className="text-slate-400">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm" aria-label="Primary">
            {NAV.map((n) => {
              const isActive = activeSection === n.id;
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-violet-600"
                      : "text-slate-500 hover:text-violet-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm inline-flex items-center gap-2 text-slate-600 hover:border-violet-400 hover:text-violet-700 transition shadow-sm"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/45 hover:-translate-y-0.5 transition"
            >
              Hire Me
            </a>
          </div>
          <button
            type="button"
            className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-violet-100 text-slate-600 hover:border-violet-300 hover:text-violet-600 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className="md:hidden mx-4 mt-2 rounded-2xl border border-white/70 bg-white/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4 shadow-xl shadow-violet-500/15"
          aria-label="Mobile"
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setMenuOpen(false)}
              className={`font-medium ${
                activeSection === n.id ? "text-violet-600" : "text-slate-600 hover:text-violet-600"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            rel="noreferrer"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center justify-center gap-2 mt-2"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-32 sm:pt-36 pb-24 px-4 sm:px-6 w-full relative scroll-mt-24">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 md:order-1 min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/90 px-3.5 py-1.5 text-xs text-violet-700 mb-6 font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shrink-0" aria-hidden />
            Available for new opportunities
          </div>
          <p className="text-sm font-medium text-violet-600 mb-2">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-slate-900">
            Mahmudul Hasan{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              Nirab
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-violet-700 font-semibold flex items-center gap-2 flex-wrap">
            <Sparkles className="w-5 h-5 text-violet-500 shrink-0" aria-hidden />
            Full-Stack Developer & AI Enthusiast
          </p>
          <p className="mt-5 text-slate-600 max-w-lg text-sm sm:text-base leading-relaxed">
            I build secure, scalable web applications with React, Next.js, TypeScript, and MongoDB.
            I love turning ideas into clean, production-ready products — especially ones that
            involve AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={RESUME_URL}
              rel="noreferrer"
              target="_blank"
              className="rounded-full border border-violet-200 bg-white px-6 py-3 inline-flex items-center gap-2 text-sm text-slate-700 hover:border-violet-400 hover:text-violet-700 transition shadow-sm"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { href: "https://github.com/mahmudul-hasan-2", icon: Github, label: "GitHub" },
              {
                href: "https://linkedin.com/in/mahmudul-hasan-dev",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:mahmudul5790@gmail.com", icon: Mail, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-violet-100 bg-white grid place-items-center text-slate-500 hover:border-violet-400 hover:text-violet-600 hover:shadow-md hover:-translate-y-0.5 transition"
                aria-label={item.label}
              >
                <item.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" aria-hidden /> Madhabpur, Bangladesh (Remote)
          </p>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center md:justify-end"
          style={{ perspective: "1200px" }}
        >
          <div className="relative group" style={{ transformStyle: "preserve-3d" }}>
            <div
              className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-br from-violet-400/40 via-indigo-300/30 to-fuchsia-300/30 blur-3xl opacity-70 group-hover:opacity-95 transition duration-700 motion-reduce:transition-none"
              aria-hidden
            />
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden border-[5px] border-white shadow-[0_30px_60px_-15px_rgba(99,102,241,0.5)] transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
              style={{ transform: "rotateY(-6deg) rotateX(3deg)" }}
            >
              <img
                src={OG_IMAGE}
                alt="Mahmudul Hasan Nirab"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-5 -left-4 sm:-left-8 rounded-2xl bg-white/95 backdrop-blur border border-white shadow-xl px-4 py-3 flex items-center gap-3 transform transition group-hover:-translate-y-1 motion-reduce:transform-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 grid place-items-center text-white shadow-md">
                <Code2 className="w-5 h-5" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">5+ Projects</p>
                <p className="text-xs text-slate-500">Shipped & live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-14 text-center px-4">
      <div className="text-xs uppercase tracking-[0.2em] text-violet-600 mb-3 font-semibold">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Background & Timeline" title="Education & Professional Journey" />
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              period: "2024 — Present",
              body: (
                <>
                  Currently pursuing secondary education at{" "}
                  <strong className="text-slate-800">Talibpur Ahsania High School</strong>.
                  Alongside core academics, I dedicate serious time to software engineering and
                  system design.
                </>
              ),
            },
            {
              icon: Briefcase,
              title: "Professional Focus",
              period: "Independent Full-Stack Developer",
              body: "Building production-grade web applications independently. Focused on clean architecture, secure auth, and scalable full-stack systems.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl p-6 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition duration-300 motion-reduce:transform-none"
            >
              <div className="w-12 h-12 rounded-2xl grid place-items-center mb-4 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
                <card.icon className="w-6 h-6 text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-1">{card.title}</h3>
              <p className="text-sm text-violet-600 font-medium mb-3">{card.period}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-2 text-slate-900">
            <Calendar className="w-5 h-5 text-violet-600" aria-hidden /> Milestone Timeline
          </h3>
          <div className="space-y-6 border-l-2 border-violet-200 ml-4 sm:ml-8 pl-6">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#f3f0ff] group-hover:scale-125 transition-transform shadow-md shadow-violet-500/40 motion-reduce:transform-none" />
                <div className="text-xs text-violet-600 font-mono font-semibold">{item.year}</div>
                <h4 className="text-lg font-semibold text-slate-900 mt-1">{item.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm sm:text-base p-6 sm:p-8 rounded-3xl border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)]">
          <p>
            I&apos;m Mahmudul Hasan Nirab — a self-taught Full-Stack Developer who loves building
            clean, reliable software. I care deeply about code quality, performance, and creating
            experiences that feel thoughtful.
          </p>
          <p>
            Most of my time goes into the modern JavaScript/TypeScript ecosystem, exploring better
            architecture patterns, secure authentication, and intelligent AI-powered features.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Technical Expertise" title="Core Skills & Proficiencies" />
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-3xl p-6 sm:p-8 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.18)] hover:-translate-y-2 transition-all duration-300 group motion-reduce:transform-none"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl grid place-items-center shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform motion-reduce:transform-none">
                    <GroupIcon className="w-6 h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{group.category}</h3>
                </div>
                <ul className="space-y-4">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="w-4 h-4 text-violet-500" aria-hidden />
                            <span className="font-medium text-slate-800">{skill.name}</span>
                          </div>
                          <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
                        </div>
                        <div
                          className="w-full h-1.5 rounded-full bg-violet-100 overflow-hidden"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <div
                            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const filteredProjects = useMemo(
    () => PROJECTS.filter((p) => matchesFilter(p, filter)),
    [filter],
  );

  const onCardKeyDown = (e: ReactKeyboardEvent, project: Project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Portfolio" title="Featured Projects" />
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Project filters">
          {(["All", "AI", "Full Stack", "Next.js", "Frontend"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30"
                  : "border border-violet-100 bg-white text-slate-500 hover:text-violet-700 hover:border-violet-300 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-slate-500 text-sm py-16">
            No projects in this category yet. Try another filter.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1100px" }}>
            {filteredProjects.map((p) => (
              <article
                key={p.name}
                role="button"
                tabIndex={0}
                onClick={() => onSelect(p)}
                onKeyDown={(e) => onCardKeyDown(e, p)}
                className="rounded-3xl overflow-hidden group flex flex-col border border-white/80 bg-white/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_30px_60px_rgba(99,102,241,0.22)] transition-all duration-400 relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 motion-reduce:transform-none"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={(e) => {
                  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                  e.currentTarget.style.transform = "rotateY(5deg) rotateX(2deg) translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0) rotateX(0) translateY(0)";
                }}
              >
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wider rounded-full bg-violet-600 text-white px-2.5 py-1 shadow-md">
                    {p.badge}
                  </span>
                </div>
                <div className="aspect-video overflow-hidden bg-slate-100 relative">
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 flex-1">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-md bg-violet-50 border border-violet-100 px-2.5 py-1 text-violet-700 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                    {p.stack.length > 3 && (
                      <span className="text-xs rounded-md bg-slate-100 px-2 py-1 text-slate-500 font-mono">
                        +{p.stack.length - 3}
                      </span>
                    )}
                  </div>
                  <span className="mt-6 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center justify-center gap-2 self-start shadow-md shadow-violet-500/25">
                    View Details <ArrowRight className="w-4 h-4" aria-hidden />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Methodology" title="How I Work" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl p-6 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition duration-300 motion-reduce:transform-none"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NowSection() {
  return (
    <section className="py-20 px-4 sm:px-6 w-full">
      <div className="mx-auto max-w-4xl rounded-[2rem] p-8 border border-violet-200/70 bg-gradient-to-br from-violet-50/90 to-indigo-50/90 backdrop-blur-sm shadow-[0_15px_50px_rgba(99,102,241,0.15)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" aria-hidden />
          <h3 className="text-xl font-bold text-slate-900">Currently Focused On</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
          <div className="rounded-2xl p-4 border border-white bg-white/90 shadow-sm">
            <strong className="text-slate-900 block mb-1">Learning & R&D</strong>
            TypeScript deep dive, NGINX, Agentic AI workflows, and modern backend patterns.
          </div>
          <div className="rounded-2xl p-4 border border-white bg-white/90 shadow-sm">
            <strong className="text-slate-900 block mb-1">Engineering</strong>
            Building and optimizing full-stack architectures with Next.js and secure backend
            services.
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm px-4 py-8 overflow-y-auto flex items-start sm:items-center justify-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="mx-auto max-w-3xl rounded-3xl overflow-hidden border border-white/80 bg-white my-8 w-full max-h-[92vh] overflow-y-auto shadow-2xl shadow-violet-500/25"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-slate-100">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur grid place-items-center text-slate-600 hover:text-violet-600 transition border border-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider rounded-full bg-violet-600 text-white px-3 py-1.5 shadow-md">
              {project.badge}
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900">
              {project.name}
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 grid place-items-center shrink-0">
              <Trophy className="w-5 h-5 text-white" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-1">
                Key Metric / Win
              </p>
              <p className="text-slate-800 font-medium text-sm sm:text-base">{project.keyMetric}</p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-rose-500" aria-hidden />
                <h4 className="text-sm font-semibold text-slate-900">The Problem</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500" aria-hidden />
                <h4 className="text-sm font-semibold text-slate-900">The Solution</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-emerald-500" aria-hidden />
                <h4 className="text-sm font-semibold text-slate-900">What I Learned</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{project.learnings}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-violet-600 mb-3 font-semibold">
              Key Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-violet-600 mb-3 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-violet-200 px-3 py-1 text-xs sm:text-sm text-violet-700 bg-violet-50 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-violet-600 mb-3 font-semibold">
                Technical Challenges
              </h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                {project.challenges.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-violet-600 mb-3 font-semibold">
                Future Improvements
              </h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                {project.improvements.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2 shadow-md shadow-violet-500/25"
            >
              <ExternalLink className="w-4 h-4" aria-hidden /> Live Preview
            </a>
            {project.repos.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-violet-200 px-5 py-2.5 text-sm inline-flex items-center gap-2 text-slate-700 hover:border-violet-400 hover:text-violet-700 transition bg-white"
              >
                <Github className="w-4 h-4" aria-hidden /> {r.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    window.location.href = `mailto:mahmudul5790@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Get in Touch" title="Let's build something exceptional" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5 min-w-0">
            <p className="text-slate-600 text-sm sm:text-base">
              Have a project idea, collaboration opportunity, or just want to say hi? I&apos;m
              always open to interesting conversations.
            </p>
            <ContactRow
              icon={Mail}
              label="Email"
              value="mahmudul5790@gmail.com"
              href="mailto:mahmudul5790@gmail.com"
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
              value="github.com/mahmudul-hasan-2"
              href="https://github.com/mahmudul-hasan-2"
            />
            <ContactRow icon={MapPin} label="Location" value="Madhabpur, Bangladesh (Remote)" />
          </div>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl p-6 space-y-4 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)]"
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
              <label htmlFor="message" className="text-sm text-slate-500 mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={1000}
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="w-full rounded-2xl bg-white border border-violet-100 px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 transition resize-none text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 w-full inline-flex items-center justify-center gap-2 font-medium text-white disabled:opacity-65 cursor-pointer shadow-lg shadow-violet-500/30 hover:shadow-violet-500/45 transition"
            >
              {status === "sent"
                ? "Message ready — check your mail app"
                : status === "sending"
                  ? "Opening..."
                  : "Send Message"}
              {status === "idle" && <ArrowRight className="w-4 h-4" aria-hidden />}
            </button>
          </form>
        </div>
      </div>
    </section>
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
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm text-slate-500 mb-1.5 block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="w-full rounded-2xl bg-white border border-violet-100 px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 transition text-slate-800 placeholder:text-slate-400"
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
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl p-4 border border-white/80 bg-white/80 backdrop-blur-sm hover:border-violet-200 hover:shadow-md transition-all w-full group">
      <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-500/25 group-hover:scale-105 transition-transform motion-reduce:transform-none">
        <Icon className="w-5 h-5 text-white" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-widest text-slate-400">{label}</div>
        <div className="text-sm text-slate-800 truncate font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block w-full"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <footer className="border-t border-violet-100 py-16 px-4 sm:px-6 w-full bg-white/50">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-10 items-start text-center md:text-left">
        <div className="space-y-3 max-w-sm mx-auto md:mx-0">
          <a
            href="#home"
            className="font-bold text-xl inline-flex items-center gap-2 justify-center md:justify-start"
          >
            <Code2 className="w-5 h-5 text-violet-600" aria-hidden />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Nirab
            </span>
            <span className="text-slate-400">.dev</span>
          </a>
          <p className="text-sm text-slate-500 leading-relaxed">
            Building high-performance web applications and intelligent digital solutions with clean
            architecture.
          </p>
        </div>
        <div className="space-y-3 mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h4 className="text-xs uppercase tracking-widest text-violet-600 font-semibold">
            Quick Navigation
          </h4>
          <div className="flex flex-col items-center md:items-start gap-2.5 text-sm text-slate-500">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-violet-600 transition">
                {n.label}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-3 mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h4 className="text-xs uppercase tracking-widest text-violet-600 font-semibold">
            Connect with Me
          </h4>
          <div className="flex items-center justify-center md:justify-start gap-3">
            {[
              { href: "https://github.com/mahmudul-hasan-2", icon: Github, label: "GitHub" },
              {
                href: "https://linkedin.com/in/mahmudul-hasan-dev",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:mahmudul5790@gmail.com", icon: Mail, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-full border border-violet-100 grid place-items-center hover:border-violet-400 hover:text-violet-600 transition bg-white text-slate-500"
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-slate-500 mt-1">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse shrink-0" aria-hidden />
            Open for remote opportunities
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-violet-100 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center">
        <p>© {new Date().getFullYear()} Mahmudul Hasan Nirab. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-violet-500 fill-violet-500" aria-hidden />{" "}
          using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
