import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Sparkles,
  Bot,
  Mic,
  TrendingUp,
  Users,
  Zap,
  Award,
  ArrowUpRight,
  MessageSquare,
  ShoppingBag,
  CreditCard,
  Shield,
  Rocket,
  BrainCircuit,
} from "lucide-react";
import portrait from "@/assets/shahrukh.jpg";
import logoConvex from "@/assets/logos/convex.png";
import logoInnowi from "@/assets/logos/innowi.png";
import logoBlink from "@/assets/logos/blink.png";
import logoPure from "@/assets/logos/purevpn.png";
import logoSav from "@/assets/logos/savyour.webp";
import logoBerry from "@/assets/logos/berrytalks.svg";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp= {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const experiences = [
  {
    role: "Product Manager",
    company: "Convex Interactive",
    location: "Karachi, Pakistan",
    period: "Jan 2025 — Present",
    product: "BerryTalks · Omni-Channel CPaaS & Conversational AI",
    logo: logoConvex,
    sub: logoBerry,
    points: [
      "Architected & shipped Text + Voice AI Agentic systems with full ownership of the Agentic AI stack — NLU, conversation design, agent orchestration, and multi-channel deployment across WhatsApp, SMS, Voice & Web Chat.",
      "Drove rapid AI prototyping to validate ideas and shorten the loop from concept to live agent.",
      "Designed conversational AI flows enabling autonomous resolution with human-in-the-loop escalation.",
      "↑ 50% customer acquisition through targeted PLG initiatives.",
      "Maintained sub-3% monthly churn via deep customer feedback loops.",
    ],
  },
  {
    role: "Head of Product",
    company: "Innowi Inc",
    location: "USA (Remote)",
    period: "Aug 2023 — Jun 2024",
    product: "POS · Kiosk · Online Ordering · KDS · Merchant & Admin Portals",
    logo: logoInnowi,
    points: [
      "↑ 30% product team efficiency by leading comprehensive product strategy and roadmap.",
      "↓ 18% development cycle time by translating customer requirements into precise user stories.",
      "Initiated and led multiple strategic third-party integrations end-to-end.",
      "Bridged engineering, design and business stakeholders for high-quality releases.",
    ],
  },
  {
    role: "Product Manager",
    company: "Blink Co Technologies",
    location: "KSA / MENA (Remote)",
    period: "Feb 2022 — Aug 2023",
    product: "Q-Commerce B2C apps · Delivery B2B Rider Portal · POS",
    logo: logoBlink,
    points: [
      "Launched a POS system 0→1, contributing to a 15% revenue lift.",
      "↑ 35% Online Ordering NPS through growth features & UX improvements.",
      "Maintained quarterly churn below 4% via clear KPIs and proactive feedback loops.",
      "↑ 28% release cycle efficiency through Jira sprints and cross-functional alignment.",
    ],
  },
  {
    role: "Product Marketing Executive",
    company: "PureVPN",
    location: "Karachi, Pakistan",
    period: "Jun 2018 — Jan 2022",
    product: "Cybersecurity · Consumer VPN",
    logo: logoPure,
    points: [
      "Deployed PLG frameworks — activation flows, referral loops, onboarding sequences — improving free-to-paid conversion.",
      "↑ 30% YoY brand impressions by leading 30+ product & sales marketing campaigns.",
      "Executed A/B testing, viral referrals, and data-driven email programs.",
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "SavYour",
    location: "Karachi, Pakistan",
    period: "Sep 2017 — Jun 2018",
    product: "Cashback & Rewards Platform",
    logo: logoSav,
    points: [
      "Formulated in-app user journeys to enhance the product experience.",
      "Executed content & growth campaigns aligned to business goals.",
      "Improved organic search visibility through targeted SEO.",
    ],
  },
];

const skills = [
  "AI Agentic Product Design",
  "Conversational AI (Text & Voice)",
  "CPaaS / SaaS",
  "Product-Led Growth",
  "Roadmap & Strategy",
  "Conversion Optimization",
  "Product Analytics",
  "Agile / Scrum",
  "Retention & Churn Reduction",
  "Technical Project Management",
];

const stats = [
  { icon: Award, value: "10+", label: "Years in Product" },
  { icon: TrendingUp, value: "50%", label: "Acquisition Lift" },
  { icon: Users, value: "<3%", label: "Monthly Churn" },
  { icon: Zap, value: "30+", label: "Campaigns Led" },
];

type OrbitItem = { icon: React.ComponentType<{ className?: string }>; label: string };

function OrbitRing({ items, radius, duration }: { items: OrbitItem[]; radius: number; duration: number }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 z-20 pointer-events-none"
      style={{ width: radius * 2, height: radius * 2, transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-dashed border-border/60" />
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => {
          const angle = (i / items.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="absolute top-1/2 left-1/2"
              style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ rotate: { duration, repeat: Infinity, ease: "linear" } }}
                className="pointer-events-auto flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-card/40 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:bg-card/70 transition whitespace-nowrap"
              >
                <Icon className="h-2.5 w-2.5 text-muted-foreground/70" />
                <span className="text-[9px] md:text-[10px] font-normal text-muted-foreground/80">{item.label}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

function ResponsiveOrbit({ items }: { items: OrbitItem[] }) {
  return (
    <>
      <div className="md:hidden">
        <OrbitRing items={items} radius={150} duration={28} />
      </div>
      <div className="hidden md:block lg:hidden">
        <OrbitRing items={items} radius={230} duration={26} />
      </div>
      <div className="hidden lg:block">
        <OrbitRing items={items} radius={270} duration={26} />
      </div>
    </>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ backgroundImage: "var(--gradient-bg)" }}>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>SG.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href="mailto:mshahrukhghanchi@gmail.com"
            className="text-sm px-4 py-2 rounded-full font-medium text-primary-foreground transition hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            Let's talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
        <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Senior PM roles
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Shahrukh
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
                Ghanchi.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Senior Product Manager with <span className="text-foreground font-medium">10+ years</span> shipping AI Agentic, CPaaS, SaaS, POS and Cybersecurity products that grow.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 inline-flex bg-card/95 backdrop-blur border border-border rounded-2xl px-4 py-3 items-center gap-3 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Currently building</div>
                <div className="text-sm font-medium">Voice AI Agents</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="px-6 py-3 rounded-full font-medium text-primary-foreground transition hover:scale-105" style={{ backgroundImage: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}>
                Explore my work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full font-medium border border-border bg-card/40 hover:bg-card transition">
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Karachi, PK</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> AI Agentic PM</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[22rem] aspect-square md:max-w-[34rem] lg:max-w-[40rem] flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute h-64 w-64 md:h-80 md:w-80 rounded-full opacity-30 blur-2xl"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            />
            <div className="relative h-56 w-56 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden border border-border z-10" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={portrait} alt="Shahrukh Ghanchi portrait" className="h-full w-full object-cover" />
            </div>

            {/* Orbiting industry chips */}
            <ResponsiveOrbit
              items={[
                { icon: Mic, label: "Voice AI" },
                { icon: BrainCircuit, label: "Agentic AI" },
                { icon: MessageSquare, label: "CPaaS" },
                { icon: CreditCard, label: "POS" },
                { icon: ShoppingBag, label: "Q-Commerce" },
                { icon: Shield, label: "Cybersecurity" },
                { icon: Bot, label: "Conv. AI" },
                { icon: Rocket, label: "PLG / SaaS" },
              ]}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-12 px-6 border-y border-border bg-card/20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center">
              <s.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">About</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              I turn complex AI capability into{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>products people actually use.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Result-oriented Senior Product Manager with a decade of experience building and scaling SaaS — from CPaaS and Agentic AI platforms to POS, Online Ordering, and Cybersecurity VPN. Deep, end-to-end fluency in Agentic AI architecture: NLU, conversation design, orchestration, and multi-channel deployment. I prototype fast, ship deliberately, and obsess over PLG, retention, and clarity.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Bot, title: "Agentic AI", desc: "Text & voice agents end-to-end" },
                { icon: TrendingUp, title: "PLG Growth", desc: "Activation, retention, conversion" },
                { icon: Mic, title: "Voice AI", desc: "Conversation design at scale" },
              ].map((c) => (
                <div key={c.title} className="p-5 rounded-2xl border border-border bg-card/40 backdrop-blur">
                  <c.icon className="h-5 w-5 text-primary mb-3" />
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Experience</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A decade of shipping.</h2>
          </motion.div>

          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className={`relative mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-3 w-3 rounded-full ring-4 ring-background" style={{ backgroundImage: "var(--gradient-hero)" }} />
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{exp.period}</div>
                  <div className="text-xl md:text-2xl font-semibold mt-1">{exp.role}</div>
                  <div className="text-primary font-medium">{exp.company}</div>
                  <div className="text-sm text-muted-foreground">{exp.location}</div>
                </div>
                <div className={`pl-12 md:pl-0 mt-4 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/40 transition group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-14 w-20 rounded-xl bg-white border border-border shadow-sm p-2.5 flex items-center justify-center shrink-0">
                        <img src={exp.logo} alt={exp.company} className="max-h-full max-w-full object-contain" />
                      </div>
                      {exp.sub && (
                        <div className="h-14 px-3 rounded-xl bg-white border border-border shadow-sm flex items-center">
                          <img src={exp.sub} alt="" className="max-h-9 max-w-[110px] object-contain" />
                        </div>
                      )}
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                    </div>
                    <div className="text-sm text-primary/90 font-medium mb-3">{exp.product}</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.points.map((p, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Core competencies</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What I bring.</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 flex flex-wrap gap-3">
            {skills.map((s) => (
              <motion.span
                key={s}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur text-sm hover:border-primary/60 hover:text-primary transition cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card/40">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Education</div>
              <div className="font-semibold">M.S. Media Science</div>
              <div className="text-sm text-muted-foreground">SZABIST</div>
              <div className="font-semibold mt-3">B.S. Public Administration</div>
              <div className="text-sm text-muted-foreground">University of Karachi</div>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-card/40">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Certifications</div>
              <ul className="space-y-2 text-sm">
                <li>• Artificial Intelligence (AI) Certification</li>
                <li>• Technical Product Management — LinkedIn Learning</li>
                <li>• Product-Led Growth (PLG) Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 blur-3xl pointer-events-none" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Let's build</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Have a product worth <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>building?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">I'm open to senior PM and Head of Product roles, especially in AI Agentic and SaaS.</p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <a href="mailto:mshahrukhghanchi@gmail.com" className="p-5 rounded-2xl border border-border bg-card/60 hover:border-primary/60 transition group">
                <Mail className="h-5 w-5 text-primary mb-2 mx-auto" />
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium break-all">mshahrukhghanchi@gmail.com</div>
              </a>
              <a href="tel:+923132473726" className="p-5 rounded-2xl border border-border bg-card/60 hover:border-primary/60 transition">
                <Phone className="h-5 w-5 text-primary mb-2 mx-auto" />
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">+92 313 247 3726</div>
              </a>
              <a href="https://www.linkedin.com/in/shahrukhghanchi/" target="_blank" rel="noreferrer" className="p-5 rounded-2xl border border-border bg-card/60 hover:border-primary/60 transition">
                <Linkedin className="h-5 w-5 text-primary mb-2 mx-auto" />
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium">/shahrukhghanchi</div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shahrukh Ghanchi. Crafted with care.
      </footer>
    </div>
  );
}
