import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
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
  Cpu,
  Layers,
  Terminal,
  Server,
  ShieldCheck,
  GitBranch,
  Box,
  Calendar,
} from "lucide-react";

const RESUME_URL =
  "https://docs.google.com/uc?export=download&id=19aYzpaY-nCdScJsANd5DFN7OMD4pmCzY";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahmudul Hasan Nirab — Full Stack Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Mahmudul Hasan Nirab — Full Stack Developer building intelligent, AI-powered web applications with Next.js, TypeScript, and MongoDB.",
      },
      { property: "og:title", content: "Mahmudul Hasan Nirab — Full Stack Developer" },
      {
        property: "og:description",
        content: "Full Stack Developer & AI Enthusiast crafting modern web experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png",
      },
    ],
  }),
  component: Portfolio,
});

type Project = {
  name: string;
  tagline: string;
  image: string;
  stack: string[];
  category: "All" | "AI" | "Full Stack" | "Next.js";
  description: string;
  live: string;
  repos: { label: string; url: string }[];
  challenges: string[];
  improvements: string[];
  badge: string;
};

const PROJECTS: Project[] = [
  {
  name: "DevAgent",
  tagline: "Agentic AI workspace for autonomous project management & intelligent code assistance.",
  image:
    "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffrontend-sigma-tawny-82.vercel.app%2F?w=1280&h=800",
  stack: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Tailwind CSS", "Google Gemini", "Better Auth"],
  category: "AI",
  description:
    "DevAgent is a full-stack agentic AI workspace that generates detailed project descriptions via Gemini, offers an interactive AI co-pilot chat, and provides secure workspace management for developers.",
  live: "https://frontend-sigma-tawny-82.vercel.app/",
  repos: [
    { label: "Full Repository", url: "https://github.com/mahmudul-Hasan-2/DevAgent" },
  ],
  challenges: [
    "Orchestrating multi-step agentic flows with Gemini while maintaining context across sessions.",
    "Integrating Better Auth with a decoupled Express backend without introducing performance friction.",
  ],
  improvements: [
    "Add multi-model LLM fallback support for higher reliability.",
    "Introduce real-time team collaboration and shared workspace features.",
  ],
  badge: "AI Powered",
},
{
  name: "DevCraft",
  tagline: "Premium full-stack item discovery & management platform secured with Better Auth.",
  image:
    "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdev-craft-lime.vercel.app%2F?w=1280&h=800",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
  category: "Full Stack",
  description:
    "DevCraft is a high-performance full-stack platform for discovering, organizing, and managing developer tools and resources with secure authentication and seamless CRUD operations.",
  live: "https://dev-craft-lime.vercel.app/",
  repos: [
    { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/DevCraft" },
  ],
  challenges: [
    "Implementing robust Better Auth sessions that work reliably across local and Vercel environments.",
    "Building smooth client-side UI synchronization for real-time CRUD feedback.",
  ],
  improvements: [
    "Add advanced filtering, tagging, and search capabilities for large item collections.",
    "Introduce role-based access control and collaborative collections.",
  ],
  badge: "Full Stack",
},
{
  name: "IdeaVault",
  tagline: "Modern idea-sharing platform for pitching, discovering, and discussing startup concepts.",
  image:
    "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fideavault-client-psi.vercel.app%2F?w=1280&h=800",
  stack: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
  category: "Full Stack",
  description:
    "IdeaVault is a collaborative idea-sharing platform featuring secure JWT authentication, smart discovery search, dynamic user dashboards, nested comments, and a responsive carousel UI.",
  live: "https://ideavault-client-psi.vercel.app/",
  repos: [
    { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/IdeaVault-client" },
    { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/IdeaVault-Server" },
  ],
  challenges: [
    "Synchronizing decoupled Next.js client and Express server state while handling CORS and JWT auth.",
    "Designing efficient discovery feeds with pagination, sorting, and nested comment interactions.",
  ],
  improvements: [
    "Add real-time updates via WebSockets for comments and idea interactions.",
    "Expand into full crowdfunding features with campaign management and funding flows.",
  ],
  badge: "Solo",
},
  {
    name: "RecipeHub",
    tagline: "Modern full-stack platform for discovering, sharing, and managing recipes.",
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
      "RecipeHub is a sleek, responsive full-stack application that lets food enthusiasts browse, search, share, and manage recipes with secure authentication, smart filters, and smooth animations.",
    live: "https://recipehub-client.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Client" },
      { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/RecipeHub-Server" },
    ],
    challenges: [
      "Integrating Better Auth with a decoupled Express backend while keeping session handling seamless.",
      "Optimizing data fetching and caching strategies in Next.js App Router for dynamic recipe feeds.",
    ],
    improvements: [
      "Add user-generated recipe submissions with image upload and moderation flow.",
      "Implement real-time likes and comments using WebSockets or Server-Sent Events.",
    ],
    badge: "Full Stack",
  },
  {
    name: "BookVibe",
    tagline: "Interactive reading companion for organizing and tracking your favorite books.",
    image:
      "https://res.cloudinary.com/dyyxcyiz9/image/upload/v1785176613/Screenshot_2026-07-28_002216_hdg5zy.png",
    stack: ["React", "Vite", "Tailwind CSS", "DaisyUI", "React Router", "Recharts", "LocalStorage"],
    category: "Frontend",
    description:
      "BookVibe is a modern React application that helps book lovers discover, review, and organize their reads with dynamic bookshelves, detailed views, and interactive progress charts.",
    live: "https://book-vibe-coral.vercel.app/",
    repos: [{ label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/Book-Vibe" }],
    challenges: [
      "Persisting complex bookshelf state across sessions using LocalStorage without data loss.",
      "Building responsive, interactive charts that accurately reflect reading progress.",
    ],
    improvements: [
      "Migrate data persistence to a backend with user accounts and cloud sync.",
      "Add social features such as public reviews and reading challenges.",
    ],
    badge: "Frontend",
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
      { name: "JS DOM", icon: Code2, level: 90 },
      { name: "Tailwind CSS", icon: Sparkles, level: 95 },
      { name: "HTML5", icon: Globe, level: 95 },
      { name: "CSS3", icon: Globe, level: 95 },
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
    category: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: GitBranch, level: 90 },
      { name: "Docker", icon: Box, level: 75 },
      { name: "NGINX", icon: Server, level: 75 },
      { name: "Vercel Deployment", icon: Globe, level: 95 },
      { name: "Postman", icon: Terminal, level: 85 },
      { name: "VS Code", icon: Code2, level: 95 },
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
    title: "Learning TypeScript Deeply, Docker & NGINX",
    description:
      "Exploring advanced TypeScript patterns, containerization, web servers, and agentic workflows.",
  },
];

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-background text-foreground selection:bg-primary/35 selection:text-primary">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects onSelect={setActive} />
      <NowSection />
      <Contact />
      <Footer />
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 glass w-full border-b border-border/40 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-display font-bold text-lg shrink-0 flex items-center gap-1.5"
        >
          <span className="text-gradient bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Nirab
          </span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline rounded-full px-4 py-2 text-sm inline-flex items-center gap-2 hover:border-primary transition"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
          <a
            href="#contact"
            className="btn-primary rounded-full px-5 py-2 text-sm shadow-lg shadow-primary/20"
          >
            Hire Me
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border px-6 py-5 flex flex-col gap-4 glass w-full animate-fade-up">
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
            download="Mahmudul_Hasan_Nirab_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center justify-center gap-2 mt-2"
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
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 w-full overflow-hidden relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-up order-2 md:order-1 min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300 mb-6 font-medium">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
            Available for new opportunities
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] break-words">
            Mahmudul Hasan{" "}
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Nirab
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-muted-foreground flex items-center gap-2 flex-wrap font-medium">
            <Sparkles className="w-5 h-5 text-violet-400 shrink-0" />
            Building AI-Powered SaaS & Scalable Web Systems
          </p>
          <p className="mt-6 text-muted-foreground max-w-lg text-sm sm:text-base leading-relaxed">
            Crafting high-performance web applications, production-ready architectures, and
            intelligent backend systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              rel="noreferrer"
              target="_blank"
              download="Mahmudul_Hasan_Nirab_Resume.pdf"
              className="btn-primary rounded-full px-5 sm:px-6 py-3 inline-flex items-center gap-2 text-sm sm:text-base shadow-lg shadow-violet-500/25"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="btn-outline rounded-full px-5 sm:px-6 py-3 inline-flex items-center gap-2 text-sm sm:text-base hover:border-violet-400 transition"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/mahmudul-hasan-2"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border bg-card/40 grid place-items-center hover:border-violet-400 hover:text-violet-400 transition shrink-0"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mahmudul-hasan-dev"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border bg-card/40 grid place-items-center hover:border-violet-400 hover:text-violet-400 transition shrink-0"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mahmudul5790@gmail.com"
              className="w-10 h-10 rounded-full border border-border bg-card/40 grid place-items-center hover:border-violet-400 hover:text-violet-400 transition shrink-0"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-60 bg-gradient-to-tr from-violet-600 to-pink-500" />
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-violet-500/40 glass shadow-2xl">
              <img
                src="https://i.ibb.co.com/RpxfvFRT/nirab-s-professional-2.png"
                alt="Mahmudul Hasan Nirab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 text-center px-4">
      <div className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3 font-semibold">
        {eyebrow}
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Background & Timeline" title="Education & Professional Journey" />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div
            className="glass rounded-2xl p-6 border border-border hover:border-violet-500/40 transition duration-300"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-12 h-12 rounded-xl grid place-items-center mb-4 shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Education</h3>
            <p className="text-sm text-violet-400 font-medium mb-3">2024 — Present</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Currently pursuing secondary education at{" "}
              <strong className="text-foreground">Talibpur Ahsania High School</strong>. Alongside
              core academics, maintaining a dedicated focus on software engineering and systems
              architecture.
            </p>
          </div>

          <div
            className="glass rounded-2xl p-6 border border-border hover:border-violet-500/40 transition duration-300"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-12 h-12 rounded-xl grid place-items-center mb-4 shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-500/20">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Professional Focus</h3>
            <p className="text-sm text-violet-400 font-medium mb-3">
              Independent Full-Stack Developer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Operating independently as a developer. Focused on designing production-grade web
              applications and modern architectures.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-violet-400" /> Milestone Timeline
          </h3>
          <div className="space-y-6 border-l-2 border-violet-500/30 ml-4 sm:ml-8 pl-6">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-violet-500 border-4 border-background group-hover:scale-125 transition-transform" />
                <div className="text-xs text-violet-400 font-mono font-semibold">{item.year}</div>
                <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-[1.05rem] glass p-6 sm:p-8 rounded-2xl border border-border shadow-lg">
          <p>
            I am Mahmudul Hasan Nirab, a Full-Stack Developer driven by a commitment to building
            clean, robust, and scalable software solutions. My engineering philosophy centers on
            code quality, performance optimization, and intuitive user experiences.
          </p>
          <p>
            With expertise across the modern JavaScript and TypeScript ecosystem, I continuously
            explore advanced tooling, performance engineering, and intelligent systems.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Technical Expertise" title="Core Skills & Proficiencies" />
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_CATEGORIES.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.category}
                className="glass rounded-2xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-violet-500/50 transition-all duration-300 group hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl grid place-items-center shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform">
                      <GroupIcon className="w-6 h-6 text-white" />
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
                              <SkillIcon className="w-4 h-4 text-violet-400" />
                              <span className="font-medium text-foreground/90">{skill.name}</span>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-card/60 overflow-hidden border border-border/40">
                            <div
                              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
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
    </section>
  );
}

function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState<"All" | "AI" | "Full Stack" | "Next.js" | "Frontend">("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 w-full">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Portfolio" title="Featured Projects" />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", "AI", "Full Stack", "Next.js"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "btn-primary shadow-lg shadow-violet-500/20"
                  : "glass text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <article
              key={p.name}
              className="glass rounded-2xl overflow-hidden group flex flex-col border border-border hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 relative"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-semibold uppercase tracking-wider rounded-full bg-violet-500/80 text-white px-2.5 py-1 backdrop-blur-md shadow-md">
                  {p.badge}
                </span>
              </div>
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-md bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 text-violet-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 3 && (
                    <span className="text-xs rounded-md bg-muted px-2 py-1 text-muted-foreground font-mono">
                      +{p.stack.length - 3}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => onSelect(p)}
                  className="mt-6 btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center justify-center gap-2 self-start shadow-md shadow-violet-500/20 hover:scale-[1.02] transition-transform"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NowSection() {
  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-card/10 border-y border-border/40">
      <div className="mx-auto max-w-4xl glass p-8 rounded-3xl border border-violet-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-violet-500 animate-pulse" />
          <h3 className="text-xl font-bold">Currently Focused On</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="glass p-4 rounded-xl border border-border">
            <strong className="text-foreground block mb-1">🚀 Learning & R&D</strong>
            TypeScript (Deep Dive), NGINX, Docker, Agentic AI workflows, and MCP architectures.
          </div>
          <div className="glass p-4 rounded-xl border border-border">
            <strong className="text-foreground block mb-1">⚡ Engineering</strong>
            Optimizing full-stack performance architectures with Next.js and secure backend
            microservices.
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm px-4 py-8 overflow-y-auto animate-fade-up flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-3xl glass rounded-2xl overflow-hidden border border-border my-auto w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{ boxShadow: "var(--shadow-card)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-muted">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass grid place-items-center hover:text-violet-400 transition shrink-0 border border-border"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">{project.name}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-violet-500/30 px-3 py-1 text-xs sm:text-sm text-violet-300 bg-violet-500/10 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2 shadow-md shadow-violet-500/20"
            >
              <ExternalLink className="w-4 h-4" /> Live Preview
            </a>
            {project.repos.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="btn-outline rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2 hover:border-violet-400 transition"
              >
                <Github className="w-4 h-4" /> {r.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-semibold">
              Technical Challenges
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-semibold">
              Future Improvements
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {project.improvements.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    window.location.href = `mailto:mahmudul5790@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 w-full relative">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Get in Touch" title="Let's build something exceptional" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5 min-w-0">
            <p className="text-muted-foreground text-sm sm:text-base">
              Have an inquiry, a project proposal, or want to discuss potential collaborations? Feel
              free to reach out directly.
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
            className="glass rounded-2xl p-6 space-y-4 border border-border min-w-0 shadow-xl"
            style={{ boxShadow: "var(--shadow-card)" }}
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
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={5}
                placeholder="Describe your project or inquiry..."
                className="w-full rounded-xl bg-card/50 border border-border px-4 py-3 text-sm outline-none focus:border-violet-400 transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary rounded-full px-6 py-3 w-full inline-flex items-center justify-center gap-2 disabled:opacity-65 cursor-pointer shadow-lg shadow-violet-500/20"
            >
              {status === "sent"
                ? "Message ready — check your mail app"
                : status === "sending"
                  ? "Opening..."
                  : "Send Message"}
              {status === "idle" && <ArrowRight className="w-4 h-4" />}
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
  return (
    <div>
      <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        className="w-full rounded-xl bg-card/50 border border-border px-4 py-3 text-sm outline-none focus:border-violet-400 transition"
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
    <div className="flex items-center gap-4 glass rounded-xl p-4 hover:border-violet-400 transition-colors border border-border w-full group">
      <div className="w-11 h-11 rounded-lg grid place-items-center shrink-0 bg-gradient-to-br from-violet-500 to-indigo-600 shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
        <Icon className="w-5 h-5 text-white" />
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
    <footer className="border-t border-border py-16 px-4 sm:px-6 w-full glass">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-10 items-start text-center md:text-left">
        <div className="space-y-3 max-w-sm mx-auto md:mx-0">
          <a
            href="#home"
            className="font-display font-bold text-xl inline-flex items-center gap-2 justify-center md:justify-start"
          >
            <Code2 className="w-5 h-5 text-violet-400" />
            <span className="text-gradient bg-gradient-to-r from-violet-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Nirab
            </span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Crafting high-performance web applications and intelligent digital solutions with
            precision and scalable architecture.
          </p>
        </div>

        <div className="space-y-3 mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h4 className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
            Quick Navigation
          </h4>
          <div className="flex flex-col items-center md:items-start gap-2.5 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition">
              Home
            </a>
            <a href="#about" className="hover:text-foreground transition">
              About
            </a>
            <a href="#skills" className="hover:text-foreground transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-foreground transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-foreground transition">
              Contact
            </a>
          </div>
        </div>

        <div className="space-y-3 mx-auto md:mx-0 flex flex-col items-center md:items-start">
          <h4 className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
            Connect with Me
          </h4>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <a
              href="https://github.com/mahmudul-hasan-2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-violet-400 hover:text-violet-400 transition shrink-0 bg-card/50"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/mahmudul-hasan-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-violet-400 hover:text-violet-400 transition shrink-0 bg-card/50"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:mahmudul5790@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-violet-400 hover:text-violet-400 transition shrink-0 bg-card/50"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-muted-foreground mt-1">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
            Open for remote opportunities
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-border/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center">
        <p>© {new Date().getFullYear()} Mahmudul Hasan Nirab. All rights reserved.</p>
        <p className="flex items-center justify-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-violet-400 fill-violet-400" /> using Next.js
          & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
