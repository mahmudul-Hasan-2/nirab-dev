import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  MapPin,
  GraduationCap,
  Briefcase,
  Cpu,
  Layers,
  Wrench,
  Globe,
  Database,
  ShieldCheck,
} from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/uc?export=download&id=1gQHWYr6MOkiWKtwaoYzAsQAa-kIlcPdD";

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
  description: string;
  live: string;
  repos: { label: string; url: string }[];
  challenges: string[];
  improvements: string[];
};

const PROJECTS: Project[] = [
  {
    name: "DevAgent AI",
    tagline: "Elite agentic AI workspace for technical sourcing & code generation.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffrontend-sigma-tawny-82.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini 1.5 Flash", "Better Auth", "MongoDB"],
    description:
      "DevAgent AI is an elite agentic AI workspace engineered to automate technical sourcing, code vetting, and intelligent code generation. It bridges top engineering talent with global scale-ups through secure, autonomous AI agent workflows.",
    live: "https://frontend-sigma-tawny-82.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/agentic-ai-app" },
    ],
    challenges: [
      "Orchestrating robust multi-step agentic execution flows with context persistence across sessions.",
      "Integrating enterprise-grade authentication using Better Auth without performance friction.",
      "Optimizing LLM token utilization and latency for large-scale code synthesis tasks.",
      "Designing a flexible MongoDB schema to handle dynamic structured data versions.",
    ],
    improvements: [
      "Integrate multi-model LLM provider fallback architectures.",
      "Add real-time team collaboration channels and shared workspace partitions.",
      "Deploy an advanced analytics dashboard for tracking API usage metrics.",
    ],
  },
  {
    name: "DevCraft",
    tagline: "A premium developer marketplace featuring secure escrow & vulnerability analysis.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdev-craft-lime.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Escrow System", "Static Analysis"],
    description:
      "DevCraft is a high-performance marketplace enabling developers to trade verified code modules, templates, and microservices within a trustless environment backed by automated vulnerability scans and escrow security.",
    live: "https://dev-craft-lime.vercel.app/",
    repos: [{ label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/devCraft" }],
    challenges: [
      "Implementing secure multi-party escrow logic with precise fund release milestones.",
      "Automating static source code analysis pipelines for threat detection.",
      "Building a frictionless asset publication and moderation review workflow.",
    ],
    improvements: [
      "Incorporate decentralized smart contract escrow protocols.",
      "Introduce AI-powered code scoring matrix and optimization hints.",
    ],
  },
  {
    name: "IdeaVault",
    tagline: "Collaborative platform for discovering, validating, and launching tech startups.",
    image:
      "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fideavault-client-psi.vercel.app%2F?w=1280&h=800",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
    description:
      "IdeaVault is a collaborative ecosystem designed for founders and creators to pitch, evaluate, and scale startup concepts. Features comprehensive community feedback loops and project tracking roadmaps.",
    live: "https://ideavault-client-psi.vercel.app/",
    repos: [
      { label: "Client Repository", url: "https://github.com/mahmudul-Hasan-2/ideaVault-client" },
      { label: "Server Repository", url: "https://github.com/mahmudul-Hasan-2/ideaVault-server" },
    ],
    challenges: [
      "Synchronizing decoupled client-server state and managing CORS authorization policies.",
      "Designing high-concurrency feeds with optimized pagination and sorting.",
    ],
    improvements: [
      "Add real-time communication protocols via WebSockets.",
      "Implement automated market research insights driven by LLMs.",
    ],
  },
];

const SKILLS_CATEGORIES = [
  {
    category: "Frontend Architecture",
    icon: Globe,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Better Auth", "JWT Security"],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git & GitHub", "Vercel Deployment", "Postman", "VS Code", "npm / Yarn", "Vite"],
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
    <div className="min-h-screen">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects onSelect={setActive} />
      <Contact />
      <Footer />
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 glass">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#home" className="font-display font-bold text-lg shrink-0">
          <span className="text-gradient">Nirab</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
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
            className="btn-outline rounded-full px-4 py-2 text-sm inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
          <a href="#contact" className="btn-primary rounded-full px-5 py-2 text-sm">
            Hire Me
          </a>
        </div>
        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border px-6 py-5 flex flex-col gap-4 glass">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
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
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Mahmudul Hasan <span className="text-gradient">Nirab</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground flex items-center gap-2 flex-wrap">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            Full Stack Developer & AI Enthusiast
          </p>
          <p className="mt-6 text-muted-foreground max-w-lg">
            Engineering scalable, intelligent web applications with modern architectures.
            Specializing in Next.js, TypeScript, and high-performance backend systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              download="Mahmudul_Hasan_Nirab_Resume.pdf"
              className="btn-primary rounded-full px-6 py-3 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="btn-outline rounded-full px-6 py-3 inline-flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/mahmudul-hasan-2"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mahmudul-hasan-dev"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mahmudul5790@gmail.com"
              className="w-10 h-10 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-border glass">
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
    <div className="mb-12 text-center">
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">{eyebrow}</div>
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      <div
        className="mt-4 mx-auto w-16 h-1 rounded-full"
        style={{ background: "var(--gradient-primary)" }}
      />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Background & Credentials"
          title="Education & Professional Journey"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Education Card */}
          <div
            className="glass rounded-2xl p-6 border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="w-12 h-12 rounded-xl grid place-items-center mb-4"
              style={{ background: "var(--gradient-primary)" }}
            >
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Education</h3>
            <p className="text-sm text-primary font-medium mb-3">2024 — Present</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Currently pursuing secondary education at{" "}
              <strong className="text-foreground">Talibpur Ahsania High School</strong>. Alongside
              core academics, maintaining a dedicated focus on software engineering and systems
              architecture.
            </p>
          </div>

          {/* Experience Card */}
          <div
            className="glass rounded-2xl p-6 border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="w-12 h-12 rounded-xl grid place-items-center mb-4"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Professional Focus</h3>
            <p className="text-sm text-primary font-medium mb-3">
              Independent Full-Stack Developer
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Operating independently as a self-taught engineer. Focused on designing
              production-grade web applications, mastering advanced algorithms, and exploring
              agentic AI workflows.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-[1.05rem] glass p-8 rounded-2xl">
          <p>
            I am Mahmudul Hasan Nirab, a Full-Stack Developer driven by a commitment to building
            clean, robust, and scalable software solutions. My engineering philosophy centers on
            code quality, performance optimization, and intuitive user experiences.
          </p>
          <p>
            With deep expertise across the modern JavaScript ecosystem—specifically Next.js,
            TypeScript, and database optimization—I continuously explore the intersection of
            traditional web development and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Technical Expertise" title="Core Skills & Proficiencies" />
        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS_CATEGORIES.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className="glass rounded-2xl p-8 border border-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center mb-6"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">{group.category}</h3>
                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="font-medium text-foreground/90">{skill}</span>
                      </li>
                    ))}
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
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Portfolio" title="Featured Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="glass rounded-2xl overflow-hidden group flex flex-col border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-video overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={`${p.name} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-md bg-muted px-2 py-1 text-muted-foreground font-mono"
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
                  className="mt-6 btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center justify-center gap-2 self-start"
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

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm px-4 py-8 overflow-y-auto animate-fade-up"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-3xl glass rounded-2xl overflow-hidden border border-border"
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
            className="absolute top-4 right-4 w-10 h-10 rounded-full glass grid place-items-center hover:text-primary transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-3xl font-bold">{project.name}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground bg-card/50 font-mono"
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
              className="btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> Live Preview
            </a>
            {project.repos.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="btn-outline rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> {r.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">
              Technical Challenges
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary mb-3 font-semibold">
              Future Improvements
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {project.improvements.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
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
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Get in Touch" title="Let's build something exceptional" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <p className="text-muted-foreground">
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
            <ContactRow icon={MapPin} label="Location" value="Talibpur, Bangladesh (Remote)" />
          </div>

          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl p-6 space-y-4 border border-border"
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
                className="w-full rounded-xl bg-card/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary rounded-full px-6 py-3 w-full inline-flex items-center justify-center gap-2 disabled:opacity-60"
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
        className="w-full rounded-xl bg-card/50 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
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
    <div className="flex items-center gap-4 glass rounded-xl p-4 hover:border-primary transition-colors border border-border">
      <div
        className="w-11 h-11 rounded-lg grid place-items-center shrink-0"
        style={{ background: "var(--gradient-primary)" }}
      >
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
        <div>
          <a href="#home" className="font-display font-bold text-lg">
            <span className="text-gradient">Nirab</span>
            <span className="text-muted-foreground">.dev</span>
          </a>
          <p className="text-sm text-muted-foreground mt-2">
            Engineering scalable web architectures and digital experiences with precision.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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
        <div className="flex items-center justify-end gap-3">
          <a
            href="https://github.com/mahmudul-hasan-2"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/mahmudul-hasan-dev"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:mahmudul5790@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-full border border-border grid place-items-center hover:border-primary hover:text-primary transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border/50 mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mahmudul Hasan Nirab. All rights reserved.
      </div>
    </footer>
  );
}
