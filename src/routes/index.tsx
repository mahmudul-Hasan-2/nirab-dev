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
  HelpCircle,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Trophy,
  Wrench,
  X,
  Zap,
  Bot,
  Layout,
  Lock,
  Award,
  Star,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1ees204_QzxwYvjY6sbJLkc0FjI_Gln0J";

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
          "Mahmudul Hasan Nirab, Full Stack Developer, React, Next.js, TypeScript, Node.js, MongoDB, MERN, Portfolio, Bangladesh Developer, AI, Programming Hero",
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
      "Full-stack AI workspace — project generation with Gemini, interactive co-pilot chat, and secure workspaces.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffrontend-sigma-tawny-82.vercel.app%2F?w=1280&h=800",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Express",
      "MongoDB",
      "Google Gemini",
      "Groq",
      "Better Auth",
      "TanStack Query",
      "Tailwind CSS",
    ],
    category: "AI",
    description:
      "DevAgent is a full-stack AI-powered workspace for project management and intelligent assistance. It generates project blueprints with Google Gemini, offers an interactive AI co-pilot chat (Gemini & Groq), and provides secure workspace management with Better Auth.",
    live: "https://frontend-sigma-tawny-82.vercel.app/",
    repos: [{ label: "Full Repository", url: "https://github.com/mahmudul-Hasan-2/DevAgent" }],
    challenges: [
      "Orchestrating multi-step agentic flows with Gemini while managing context-window limits and conversation history across sessions.",
      "Safely streaming asynchronous LLM responses (Gemini & Groq) without blocking the UI or leaking partial tokens.",
      "Building reliable multi-model fallback pathways so a failing primary model silently switches to a secondary provider.",
      "Integrating Better Auth with a decoupled Express backend and reliable cross-origin cookie sessions.",
      "Building a clean TypeScript shared interface layer between frontend and backend.",
    ],
    improvements: [
      "Expand multi-model LLM fallback with automatic health checks and cost-aware routing.",
      "Introduce real-time team collaboration and shared workspaces.",
      "Add file upload + vector memory for deeper project context beyond token limits.",
    ],
    badge: "AI Powered",
    keyMetric: "Agentic project generation + streaming co-pilot with model fallback",
    problem:
      "Developers spend too much time switching tools when planning features and structuring new applications from scratch.",
    solution:
      "Built an integrated agentic workspace that uses Google Gemini to generate project structure and task breakdown, with a real-time AI co-pilot chat (Gemini + Groq streaming) inside Better Auth–protected workspaces. Context is carefully truncated and summarized; failed primary calls fall back to a secondary model.",
    learnings:
      "Hands-on experience with async AI streams, context-window management, multi-step agent orchestration, token-safe fallbacks, Better Auth across domains, and end-to-end TypeScript architecture (Next.js frontend + Express backend).",
    features: [
      "AI project blueprint generation (Gemini) with context-aware prompting",
      "Interactive AI co-pilot chat with async streaming (Gemini & Groq)",
      "Multi-model token fallback for higher reliability",
      "Secure workspace management with Better Auth",
      "Project create / explore / update flows",
      "TypeScript across frontend and backend",
      "Modern responsive UI with Tailwind CSS",
    ],
  },
  {
    name: "DevCraft",
    tagline:
      "Full-stack item discovery & management platform with Better Auth, search, filters, and CRUD.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdev-craft-lime.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    category: "Full Stack",
    description:
      "DevCraft is a full-stack platform for discovering, organizing, and managing developer tools and resources. It uses the Next.js App Router, Better Auth for sessions, and MongoDB for data — with search, filters, and full CRUD.",
    live: "https://dev-craft-lime.vercel.app/",
    repos: [{ label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/DevCraft" }],
    challenges: [
      "Making Better Auth sessions work reliably on both localhost and Vercel production.",
      "Keeping client UI in sync after create / update / delete operations.",
      "Dynamic baseURL routing so the same code works in local and production environments.",
    ],
    improvements: [
      "Advanced filtering, tagging, and full-text search for large collections.",
      "Role-based access and collaborative collections.",
      "Public sharing links for curated tool lists.",
    ],
    badge: "Full Stack",
    keyMetric: "Better Auth + full CRUD with multi-environment stability",
    problem:
      "Developers need one place to discover and save specialized tools without juggling bookmarks and tabs.",
    solution:
      "Built a clean directory platform with search, categorization, secure user collections, and seamless CRUD powered by Better Auth and MongoDB.",
    learnings:
      "Next.js App Router data patterns, Better Auth environment setup, and MongoDB queries tuned for search and filtering.",
    features: [
      "Authentication with Better Auth",
      "Browse, search, and filter items on /explore",
      "Full CRUD with instant client-side updates",
      "Works on localhost and Vercel with dynamic baseURL",
      "Responsive grids and loading states",
    ],
  },
  {
    name: "IdeaVault",
    tagline:
      "Idea-sharing platform with JWT auth, discovery search, nested comments, and user dashboards.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fideavault-client-psi.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    category: "Full Stack",
    description:
      "IdeaVault is a collaborative idea-sharing platform. Users create and explore ideas, leave nested comments, and manage their own dashboards. The client is Next.js; the API is a separate Express server with JWT authentication.",
    live: "https://ideavault-client-psi.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/IdeaVault-client" },
      { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/IdeaVault-Server" },
    ],
    challenges: [
      "Keeping a fully decoupled Next.js client and Express server in sync (CORS + JWT).",
      "Discovery feeds with pagination, sorting, and nested comments.",
      "User dashboards (My Ideas, My Interactions) with correct data ownership.",
    ],
    improvements: [
      "Real-time updates via WebSockets for comments and interactions.",
      "Crowdfunding-style campaign features.",
      "Upvoting and a simple trending algorithm.",
    ],
    badge: "Solo",
    keyMetric: "JWT auth working across fully decoupled client & server",
    problem:
      "Founders and builders need a simple place to pitch early ideas and get structured feedback.",
    solution:
      "Built a full platform with idea creation, nested comments, search-based discovery, user dashboards, and a responsive homepage carousel.",
    learnings:
      "Practical JWT + Express middleware, CORS handling, and state management across a split client/server architecture.",
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
      "Recipe browsing & management app with Better Auth, smart search, dark mode, and Framer Motion.",
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
      "RecipeHub is a responsive culinary platform for browsing, searching, and managing recipes. It includes Better Auth, category/name/difficulty search, dark/light mode, and smooth animations with Framer Motion and HeroUI.",
    live: "https://recipehub-client.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Client" },
      { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Server" },
    ],
    challenges: [
      "Better Auth with a decoupled Express backend across local and production environments.",
      "Data fetching and caching in the Next.js App Router for dynamic recipe feeds.",
      "Smooth Framer Motion transitions without hurting performance.",
    ],
    improvements: [
      "User-submitted recipes with image upload and moderation.",
      "Real-time likes and comments.",
      "Personalized recipe recommendations.",
    ],
    badge: "Full Stack",
    keyMetric: "Dark/light mode + Framer Motion micro-interactions on a full-stack recipe app",
    problem:
      "Many recipe sites feel cluttered and lack clear search, personalization, and smooth UX.",
    solution:
      "Built a clean, animated recipe platform with smart filters, Better Auth, dark/light mode, and Framer Motion + HeroUI interactions.",
    learnings:
      "UI micro-interactions, Next.js caching strategies, Better Auth integration, and polished full-stack UX.",
    features: [
      "Modern UI with dark / light mode",
      "Search by category, name & difficulty",
      "Secure authentication via Better Auth",
      "Smooth animations with Framer Motion",
      "Fully responsive design",
    ],
  },
  {
    name: "BookVibe",
    tagline:
      "Frontend reading companion — dynamic bookshelves, book details, progress charts. No auth; LocalStorage only.",
    image:
      "https://res.cloudinary.com/dyyxcyiz9/image/upload/v1785176613/Screenshot_2026-07-28_002216_hdg5zy.png",
    stack: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Router", "Recharts", "LocalStorage"],
    category: "Frontend",
    description:
      "BookVibe is a pure frontend React app for book lovers. It has no authentication and no backend. Users organize books into To-Read / Currently Reading / Completed shelves, open detail pages, view Recharts progress charts, and keep everything offline via LocalStorage.",
    live: "https://book-vibe-coral.vercel.app/",
    repos: [{ label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/Book-Vibe" }],
    challenges: [
      "Persisting complex bookshelf state in LocalStorage without data loss.",
      "Responsive, accurate reading-progress charts with Recharts.",
      "Consistent multi-page UX with React Router.",
    ],
    improvements: [
      "Optional backend + user accounts for cloud sync (would add auth).",
      "Public reviews and reading challenges.",
      "Richer filters and reading statistics.",
    ],
    badge: "Frontend",
    keyMetric: "Offline-first reading tracker — LocalStorage only, no auth system",
    problem:
      "Readers want a simple way to organize books, track progress, and see stats without accounts or a heavy setup.",
    solution:
      "Built a React + Vite app with dynamic bookshelves, detail pages, and interactive progress charts. All data stays in the browser via LocalStorage — no login, no server.",
    learnings:
      "Client-side state management, LocalStorage patterns, data visualization with Recharts, and multi-page React apps without a backend.",
    features: [
      "Dynamic bookshelves (To-Read / Reading / Completed)",
      "Detailed book information pages",
      "Interactive progress charts with Recharts",
      "Mobile-first responsive design",
      "Offline-first with LocalStorage (no authentication)",
    ],
  },
];

function matchesFilter(p: Project, filter: ProjectCategory) {
  if (filter === "All") return true;
  if (filter === "Next.js") return p.stack.some((s) => s.toLowerCase().includes("next"));
  return p.category === filter;
}

const SERVICES = [
  {
    icon: Layout,
    title: "Full-Stack Web Apps",
    description:
      "End-to-end products with React/Next.js frontends, Node.js APIs, and MongoDB — from idea to production deploy.",
  },
  {
    icon: Lock,
    title: "Auth & Secure Backends",
    description:
      "Better Auth, JWT, session handling, protected routes, and reliable CORS setups across decoupled architectures.",
  },
  {
    icon: Bot,
    title: "AI Feature Integration",
    description:
      "LLM-powered flows with Google Gemini (and Groq) — project generators, co-pilot chat, and agent-style workflows.",
  },
  {
    icon: Zap,
    title: "Performance & UX Polish",
    description:
      "Clean UI systems, responsive layouts, caching strategies, and micro-interactions that feel fast and intentional.",
  },
];

const ARTICLES = [
  {
    id: "better-auth-sessions",
    title: "Reliable Better Auth Across Local & Vercel",
    tag: "Auth",
    date: "Aug 2026",
    readTime: "5 min",
    summary:
      "How I configure cookie sessions, baseURL routing, and environment variables so auth works the same in development and production.",
    content:
      "Running Better Auth with a decoupled Express backend taught me that most “auth bugs” are environment bugs. Aligning trusted origins, secure cookie flags, and dynamic baseURL values removed almost all session failures between localhost and Vercel. I now treat auth config as part of the deployment checklist, not an afterthought.",
  },
  {
    id: "agentic-gemini-flows",
    title: "Building Multi-Step Flows with Gemini",
    tag: "AI",
    date: "Jul 2026",
    readTime: "6 min",
    summary:
      "Lessons from DevAgent: keeping conversation context, structuring prompts, and handling async streams without freezing the UI.",
    content:
      "Agentic UX fails when the UI assumes a single response. In DevAgent I separated planning steps from chat turns, persisted lightweight context, and streamed progress so users always knew what the model was doing. Clear failure states mattered as much as clever prompts.",
  },
  {
    id: "decoupled-mern",
    title: "Decoupled Next.js + Express Without the Pain",
    tag: "Architecture",
    date: "Jun 2026",
    readTime: "4 min",
    summary:
      "CORS, JWT ownership, and shared TypeScript contracts — practical patterns for keeping client and server aligned.",
    content:
      "Fully separated repos force discipline. I keep DTO-style types close to the API boundary, centralize error shapes, and document auth expectations early. Pagination and nested resources (like IdeaVault comments) stay predictable when the server owns validation and the client stays thin.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Are you available for remote work?",
    a: "Yes. I work remotely from Bangladesh and am actively looking for freelance projects, internships, and full-time remote full-stack roles worldwide.",
  },
  {
    q: "What stack do you prefer?",
    a: "React, Next.js, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS. I also integrate AI features with Google Gemini and use Better Auth or JWT for authentication.",
  },
  {
    q: "Can you build both frontend and backend?",
    a: "Yes. Most of my shipped projects are full-stack — UI, API, database models, auth, and deployment on Vercel. BookVibe is a pure frontend exception (LocalStorage only, no auth).",
  },
  {
    q: "How do you usually start a project?",
    a: "I clarify the problem and constraints first, sketch the data model and routes, then ship in small increments so feedback stays continuous.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes. I can join an existing React/Next or Node project, fix auth or API issues, and improve structure without rewriting everything.",
  },
  {
    q: "Where did you learn web development?",
    a: "I started the Programming Hero Complete Web Development Course in January 2026 and completed it with Excellence in August 2026 (Batch-13). Since then I have been building and shipping real full-stack projects from that foundation.",
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

/** Milestone timeline — Programming Hero Jan–Aug 2026 + shipped projects */
const TIMELINE_DATA = [
  {
    year: "Jan 2026",
    title: "Started with Programming Hero",
    description:
      "Enrolled in Programming Hero’s Complete Web Development Course (Batch-13) and began learning HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and modern full-stack workflows from the ground up.",
  },
  {
    year: "2026",
    title: "Built first full-stack apps",
    description:
      "Shipped IdeaVault (JWT + decoupled client/server), RecipeHub (Better Auth + Framer Motion), and BookVibe (React + LocalStorage only — no auth).",
  },
  {
    year: "2026",
    title: "Auth, TypeScript & production deploys",
    description:
      "Deepened Better Auth, TypeScript, and Next.js App Router skills while deploying DevCraft and other projects to Vercel.",
  },
  {
    year: "Jul–Aug 2026",
    title: "Completed Programming Hero + AI projects",
    description:
      "Finished the Complete Web Development Course with Excellence (Certificate of Completion). Integrated Google Gemini and Groq into DevAgent — agentic project generation, co-pilot chat, and secure AI workspaces.",
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

/** Trust / learning highlights */
const LEARNING_HIGHLIGHTS = [
  {
    title: "Programming Hero",
    detail: "Complete Web Development Course · Jan–Aug 2026",
    description:
      "Structured training in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, authentication, AI-powered practices, and deployment. Completed with Excellence (Batch-13).",
  },
  {
    title: "5+ production projects",
    detail: "Shipped & live on Vercel",
    description:
      "DevAgent, DevCraft, IdeaVault, RecipeHub, and BookVibe — real apps with public GitHub repos and live demos (BookVibe is frontend-only, no auth).",
  },
  {
    title: "AI & modern stack",
    detail: "Gemini, Better Auth, TypeScript",
    description:
      "Building with Google Gemini, Groq, Better Auth, and end-to-end TypeScript after the core MERN foundation.",
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "certificates", label: "Certificates" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Trust" },
  { id: "articles", label: "Articles" },
  { id: "faq", label: "FAQ" },
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

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-8 sm:mb-12 px-1">
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-violet-600 mb-2">
        {eyebrow}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight break-words">
        {title}
      </h2>
    </div>
  );
}

function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);
  const [activeArticle, setActiveArticle] = useState<(typeof ARTICLES)[0] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useBodyScrollLock(!!active || !!activeArticle || menuOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setActiveArticle(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7ff] text-slate-800 selection:bg-violet-200 selection:text-violet-900 overflow-x-hidden">
      <Navbar activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Certificates />
        <Services />
        <Skills />
        <Projects onSelect={setActive} />
        <Trust />
        <Process />
        <Articles onSelect={setActiveArticle} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      {activeArticle && (
        <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </div>
  );
}

function Navbar({
  activeSection,
  menuOpen,
  setMenuOpen,
}: {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-violet-100/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        <a href="#home" className="font-bold text-base sm:text-lg tracking-tight text-slate-900 shrink-0">
          Nirab<span className="text-violet-600">.dev</span>
        </a>
        <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center min-w-0">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition whitespace-nowrap ${
                activeSection === n.id
                  ? "bg-violet-100 text-violet-700"
                  : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/80"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-violet-600 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-violet-700 transition shadow-md shadow-violet-500/25"
          >
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
          <button
            type="button"
            className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 grid place-items-center rounded-full border border-violet-100 text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="xl:hidden border-t border-violet-100 bg-white/95 backdrop-blur-xl px-4 py-3 space-y-0.5 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                activeSection === n.id
                  ? "bg-violet-50 text-violet-700"
                  : "text-slate-700 hover:bg-violet-50"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-violet-700 bg-violet-50 mt-1"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 px-4 sm:px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.18), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(99,102,241,0.12), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1 text-xs font-medium text-violet-700 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to remote roles & freelance
          </div>
          <p className="text-sm font-medium text-violet-600 mb-2">Hello, I&apos;m</p>
          <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 break-words">
            Mahmudul Hasan{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Nirab
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-slate-700">
            Full-Stack Developer & AI Enthusiast
          </p>
          <p className="mt-4 sm:mt-5 text-slate-600 max-w-lg mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            I ship secure, scalable full-stack products (DevAgent, DevCraft, and more) with React,
            Next.js, TypeScript, and MongoDB. Focused on production-ready apps and agentic AI
            systems that solve real developer workflows.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3 w-full max-w-md mx-auto md:mx-0 md:max-w-none">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5 transition duration-300 motion-reduce:transform-none"
            >
              View Case Studies <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-violet-200 bg-white text-violet-700 font-semibold px-5 sm:px-6 py-3 text-sm sm:text-base hover:border-violet-400 hover:bg-violet-50 transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full text-slate-600 font-medium px-4 py-2.5 text-sm hover:text-violet-600 transition"
            >
              Contact me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
            {[
              { href: "https://github.com/mahmudul-hasan-2", icon: Github, label: "GitHub" },
              {
                href: "https://linkedin.com/in/mahmudul-hasan-dev",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:mahmudul5709@gmail.com", icon: Mail, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-violet-100 bg-white grid place-items-center text-slate-500 hover:border-violet-400 hover:text-violet-600 hover:shadow-md hover:-translate-y-0.5 transition motion-reduce:transform-none"
                aria-label={item.label}
              >
                <item.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500 flex items-center justify-center md:justify-start gap-1.5">
            <MapPin className="w-3.5 h-3.5" aria-hidden /> Madhabpur, Bangladesh (Remote)
          </p>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center md:justify-end pb-8 sm:pb-6"
          style={{ perspective: "1200px" }}
        >
          <div className="relative group" style={{ transformStyle: "preserve-3d" }}>
            <div
              className="absolute -inset-4 sm:-inset-8 rounded-[2.8rem] bg-gradient-to-br from-violet-400/40 via-indigo-300/30 to-fuchsia-300/30 blur-3xl opacity-70 group-hover:opacity-95 transition duration-700 motion-reduce:transition-none"
              aria-hidden
            />
            <div
              className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[1.25rem] sm:rounded-[2rem] overflow-hidden border-4 sm:border-[5px] border-white shadow-[0_30px_60px_-15px_rgba(99,102,241,0.5)] transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
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
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 sm:-left-6 md:-left-8 rounded-2xl bg-white/95 backdrop-blur border border-white shadow-xl px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-1rem)]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 grid place-items-center text-white shadow-md shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-slate-800">5+ Projects</p>
                <p className="text-[11px] sm:text-xs text-slate-500">Shipped & live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Background & Timeline" title="Education & Professional Journey" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            {
              icon: GraduationCap,
              title: "Self-Taught & Shipping",
              period: "2024 — Present",
              body: (
                <>
                  Self-taught Full-Stack Developer focused on shipping production applications
                  (DevAgent, DevCraft, and more). Continuously leveling up through rigorous
                  self-study and real product milestones rather than just coursework.
                </>
              ),
            },
            {
              icon: Briefcase,
              title: "Programming Hero Training",
              period: "Jan 2026 — Aug 2026",
              body: (
                <>
                  Completed the{" "}
                  <strong className="text-slate-800">Programming Hero</strong> Complete Web
                  Development Course with Excellence (Batch-13). Covered HTML, CSS, JavaScript,
                  React.js, Next.js, Node.js, Express.js, MongoDB, auth, AI-powered practices, and
                  professional web engineering. Every project on this site grew from that foundation.
                </>
              ),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.16)] hover:-translate-y-1 transition duration-300 motion-reduce:transform-none min-w-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl grid place-items-center mb-3 sm:mb-4 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
                <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">{card.title}</h3>
              <p className="text-sm text-violet-600 font-medium mb-3">{card.period}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 text-slate-900">
            <Calendar className="w-5 h-5 text-violet-600 shrink-0" aria-hidden /> Milestone Timeline
          </h3>
          <div className="space-y-5 sm:space-y-6 border-l-2 border-violet-200 ml-3 sm:ml-6 pl-5 sm:pl-6">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-violet-500 border-[3px] sm:border-4 border-[#f8f7ff] group-hover:scale-125 transition-transform shadow-md shadow-violet-500/40 motion-reduce:transform-none" />
                <div className="text-[11px] sm:text-xs text-violet-600 font-mono font-semibold">
                  {item.year}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-slate-900 mt-0.5 sm:mt-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5 text-slate-600 leading-relaxed text-sm sm:text-base p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)]">
          <p>
            I&apos;m Mahmudul Hasan Nirab — a self-taught Full-Stack Developer who ships clean,
            reliable software. I care deeply about code quality, performance, and experiences that
            feel thoughtful.
          </p>
          <p>
            Most of my time goes into the modern JavaScript/TypeScript ecosystem: React, Next.js,
            Node.js, MongoDB, Better Auth, and agentic AI features with Gemini & Groq. Every project
            is a chance to ship something real and level up.
          </p>
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Credentials" title="Certificates" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          <div className="w-full min-w-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.12)] p-2 sm:p-3">
            <img
              src="https://res.cloudinary.com/ki15pqkv/image/upload/v1789140009/certificate.png"
              alt="Certificate of Completion with Excellence — Programming Hero Complete Web Development Course, awarded to Mahmudul Hasan Nirab (Batch-13, WEB13-1485)"
              className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] object-contain mx-auto rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 sm:space-y-5 min-w-0">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-violet-100 text-violet-700 px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide">
              <Award className="w-3.5 h-3.5 shrink-0" aria-hidden />
              <span>Certificate of Completion with Excellence</span>
            </div>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug sm:leading-tight break-words">
              Complete Web Development Course With Programming Hero
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Awarded to <strong className="text-slate-800">Mahmudul Hasan Nirab</strong> for
              successfully completing the Complete Web Development Course (Batch-13 · WEB13-1485).
              The program ran from <strong>1 January 2026</strong> to{" "}
              <strong>23 July 2026</strong>, with formal completion recognized in August 2026.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" aria-hidden />
                <span>
                  Demonstrated proficiency in HTML, CSS, JavaScript, React.js, Next.js, Node.js,
                  Express.js, and MongoDB
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" aria-hidden />
                <span>
                  AI-powered development practices and professional web engineering readiness
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" aria-hidden />
                <span>Signed by Jhankar Mahbub, CEO of Programming Hero</span>
              </li>
            </ul>
            <p className="text-sm text-slate-500 italic pt-1">
              “You did it, and we are proud of you!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="What I Offer" title="Services" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)] hover:-translate-y-1.5 transition duration-300 motion-reduce:transform-none min-w-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl grid place-items-center mb-3 sm:mb-4 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Technical Expertise" title="Core Skills & Proficiencies" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILLS_CATEGORIES.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.18)] hover:-translate-y-2 transition-all duration-300 group motion-reduce:transform-none min-w-0"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl grid place-items-center shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform motion-reduce:transform-none">
                    <GroupIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 break-words">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm gap-2">
                          <div className="flex items-center gap-2 font-medium text-slate-700 min-w-0">
                            <SkillIcon className="w-4 h-4 text-violet-500 shrink-0" aria-hidden />
                            <span className="truncate">{skill.name}</span>
                          </div>
                          <span className="text-xs text-slate-500 font-mono shrink-0">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full bg-violet-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-700"
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
  const filters: ProjectCategory[] = ["All", "AI", "Full Stack", "Next.js", "Frontend"];
  const filtered = useMemo(() => PROJECTS.filter((p) => matchesFilter(p, filter)), [filter]);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Portfolio" title="Featured Case Studies" />
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                filter === f
                  ? "bg-violet-600 text-white shadow-md shadow-violet-500/30"
                  : "bg-white border border-violet-100 text-slate-600 hover:border-violet-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((project) => (
            <article
              key={project.name}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/80 bg-white/90 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.2)] hover:-translate-y-2 transition-all duration-300 motion-reduce:transform-none cursor-pointer min-w-0"
              onClick={() => onSelect(project)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 motion-reduce:transform-none"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider rounded-full bg-violet-600 text-white px-2.5 py-1 shadow">
                    {project.badge}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <span className="text-white text-sm font-semibold flex items-center gap-1">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-violet-700 transition">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 line-clamp-2">{project.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[11px] rounded-full bg-slate-100 text-slate-600 px-2 py-0.5 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[11px] rounded-full bg-violet-50 text-violet-600 px-2 py-0.5 font-mono">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Social Proof" title="Learning & Proof of Work" />
        <p className="text-center text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 -mt-4 sm:-mt-6 px-1">
          Real training path, certificate of excellence, and shipped production projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {LEARNING_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] min-w-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl grid place-items-center mb-3 sm:mb-4 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-violet-600 font-medium mt-1 mb-3">{item.detail}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-violet-100 bg-violet-50/50 p-5 sm:p-6 md:p-8 text-center">
          <Star className="w-7 h-7 sm:w-8 sm:h-8 text-violet-500 mx-auto mb-3" aria-hidden />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            All featured projects are live on Vercel with public GitHub repositories. Open any case
            study for the problem, solution, stack, and source code.
          </p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Methodology" title="How I Work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.08)] min-w-0"
            >
              <span className="text-2xl sm:text-3xl font-bold text-violet-200 font-mono">
                {step.number}
              </span>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Articles({ onSelect }: { onSelect: (a: (typeof ARTICLES)[0]) => void }) {
  return (
    <section id="articles" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Writing" title="Articles & Notes" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ARTICLES.map((article) => (
            <button
              key={article.id}
              type="button"
              onClick={() => onSelect(article)}
              className="text-left rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/80 bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.16)] hover:-translate-y-1 transition duration-300 motion-reduce:transform-none min-w-0"
            >
              <div className="flex items-center gap-2 text-xs text-violet-600 font-medium mb-3 flex-wrap">
                <Newspaper className="w-3.5 h-3.5 shrink-0" />
                {article.tag} · {article.date} · {article.readTime}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 break-words">
                {article.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{article.summary}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="Questions" title="FAQ" />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/80 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
              >
                <span className="font-medium text-slate-900 text-sm sm:text-base pr-2">
                  {item.q}
                </span>
                <HelpCircle
                  className={`w-5 h-5 text-violet-500 shrink-0 transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-4 sm:px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-violet-50 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Get in Touch" title="Let's build something" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="space-y-6 min-w-0">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I&apos;m always open to interesting conversations — freelance work, collaboration, or
              just talking about TypeScript and AI.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "mahmudul5709@gmail.com",
                  href: "mailto:mahmudul5709@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/mahmudul-hasan-dev",
                  href: "https://linkedin.com/in/mahmudul-hasan-dev",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/mahmudul-hasan-2",
                  href: "https://github.com/mahmudul-hasan-2",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Madhabpur, Bangladesh (Remote)",
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 grid place-items-center shrink-0">
                    <item.icon className="w-4 h-4 text-violet-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm font-medium text-slate-800 hover:text-violet-600 break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-800 break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl sm:rounded-3xl border border-white/80 bg-white/90 p-5 sm:p-8 shadow-[0_10px_40px_rgba(99,102,241,0.1)] space-y-4 min-w-0"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-violet-100 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-violet-100 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-violet-100 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold py-3 shadow-lg shadow-violet-500/30 hover:shadow-xl disabled:opacity-70 transition"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent ✓"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-3xl max-h-[min(92vh,100dvh)] overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-3xl bg-white shadow-2xl outline-none"
      >
        <div className="relative aspect-[16/10] sm:aspect-[2/1]">
          <img src={project.image} alt="" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-600 hover:text-violet-600 transition border border-white shadow-md"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-full bg-violet-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-md">
              {project.badge}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
          <div>
            <h3
              id="project-modal-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 break-words"
            >
              {project.name}
            </h3>
            <p className="mt-2 sm:mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 grid place-items-center shrink-0">
              <Trophy className="w-5 h-5 text-white" aria-hidden />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 mb-1">
                Key Metric / Win
              </p>
              <p className="text-slate-800 font-medium text-sm sm:text-base">{project.keyMetric}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {[
              { icon: Target, color: "text-rose-500", title: "The Problem", text: project.problem },
              {
                icon: Lightbulb,
                color: "text-amber-500",
                title: "The Solution",
                text: project.solution,
              },
              {
                icon: BookOpen,
                color: "text-emerald-500",
                title: "What I Learned",
                text: project.learnings,
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <block.icon className={`w-4 h-4 ${block.color}`} aria-hidden />
                  <h4 className="text-sm font-semibold text-slate-900">{block.title}</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{block.text}</p>
              </div>
            ))}
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
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-full bg-violet-50 text-violet-700 px-2.5 py-1 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 hover:bg-violet-700 transition"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            {project.repos.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold px-5 py-2.5 hover:bg-slate-50 transition"
              >
                <Github className="w-4 h-4" /> {r.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleModal({
  article,
  onClose,
}: {
  article: (typeof ARTICLES)[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xl max-h-[min(90vh,100dvh)] overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-slate-100 grid place-items-center text-slate-500 hover:text-violet-600"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-violet-600 mb-2 pr-10">
          {article.tag} · {article.date} · {article.readTime}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 pr-8 break-words">
          {article.title}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{article.content}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white/60 pt-12 sm:pt-14 pb-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
        <div className="space-y-3 mx-auto md:mx-0">
          <p className="font-bold text-lg text-slate-900">
            Nirab<span className="text-violet-600">.dev</span>
          </p>
          <p className="text-sm text-slate-500 max-w-xs mx-auto md:mx-0">
            Full-Stack Developer focused on clean TypeScript architecture and AI-powered products.
            Completed Programming Hero Complete Web Development Course (Jan–Aug 2026) with Excellence.
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
              { href: "mailto:mahmudul5709@gmail.com", icon: Mail, label: "Email" },
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
