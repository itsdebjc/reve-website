import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import HowWeWork from "@/components/site/HowWeWork";
import { CALENDLY_URL } from "@/lib/links";
import heroBlossom from "@/assets/hero-cherry-blossom.jpg";
import {
  Sparkles,
  Globe,
  CalendarCheck,
  Brain,
  PenTool,
  FileText,
  LayoutDashboard,
} from "lucide-react";

const coreSystems = [
  {
    icon: Sparkles,
    title: "The AI Marketing System",
    tagline: "Your business knowledge turned into repeatable marketing workflows.",
    body: "We capture your voice, offers, proof points, audience, content ideas and marketing rules, then build a system your team can use for content, campaigns, case studies, proposals and newsletters.",
    bestFor:
      "Businesses that want better marketing output without starting from scratch every time.",
    cta: "Build my marketing system",
  },
  {
    icon: Globe,
    title: "The AI Website System",
    tagline:
      "A clear, modern website with strong copy, SEO foundations and simple updates.",
    body: "We build websites that explain what you do, who you help and why someone should choose you. The process is faster because we use AI-supported tools, but every decision is guided by strategy, taste and human review.",
    bestFor:
      "Service businesses that need a better website without a long traditional build.",
    cta: "Build my website system",
  },
];

const popularBuilds = [
  {
    icon: CalendarCheck,
    title: "Founders AI Personal Assistant",
    body: "A personal AI assistant that helps organize your calendar, book meetings, set reminders, track notes and keep follow-ups from slipping through the cracks.",
    bestFor:
      "Founders, consultants and business owners who want less back-and-forth and fewer dropped balls.",
  },
  {
    icon: Brain,
    title: "The Marketing Brain",
    body: "Your voice, offers, audience, proof points, content ideas and marketing rules organized so AI can actually use them.",
    bestFor:
      "Anyone who wants stronger AI output, clearer messaging and less time repeating the same context.",
  },
  {
    icon: PenTool,
    title: "The Content Engine",
    body: "Plan, write and repurpose content without starting from scratch every time.",
    bestFor:
      "LinkedIn posts, newsletters, blogs, case studies, captions and campaign ideas.",
  },
  {
    icon: FileText,
    title: "The Proposal Builder",
    body: "Turn call notes, offers and proof into stronger client-ready proposals.",
    bestFor: "Consultants, agencies and service firms with repeat sales calls.",
  },
  {
    icon: LayoutDashboard,
    title: "The Business Health Dashboard",
    body: "See the signals. Know what needs attention. Decide what to do next. We design the dashboard around the data you already have — simple, semi-automated or connected depending on your tools and APIs.",
    bestFor:
      "Founders who want a clearer view of leads, sales, marketing, operations and priorities.",
  },
  {
    icon: Sparkles,
    title: "Your Custom Use Case",
    body: "Not sure which build fits? Tell us what's eating your time — admin, follow-ups, reporting, onboarding — and we'll design a small AI workflow around that exact problem.",
    bestFor:
      "Founders and teams with a specific bottleneck that doesn't fit a template.",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${heroBlossom})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background pointer-events-none" />
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

        <div className="relative z-10 container-narrow text-center mx-auto">
          <div className="status-pill justify-center mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary">
              Services
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground text-balance">
            Turn your business knowledge into{" "}
            <em className="italic font-normal text-blush">AI workflows</em> you can use.
          </h1>
          <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            We build practical AI systems that help service businesses show up
            clearly, create faster and run with less manual work.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a strategy call
            </a>
            <a href="#core-systems" className="btn-secondary">
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section id="core-systems" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="label-mono text-blush">— Services</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-foreground tracking-tight">
              Ways that we can{" "}
              <em className="italic font-normal text-blush">build together.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {coreSystems.map((s, i) => {
              const Icon = s.icon;
              const num = String(i + 1).padStart(2, "0");
              return (
                <article
                  key={s.title}
                  className="group relative flex flex-col p-10 md:p-14 bg-gradient-to-br from-card/60 via-card/30 to-background border border-border rounded-sm overflow-hidden hover:border-blush/60 hover:shadow-[0_30px_80px_-30px_hsl(348_56%_82%/0.3)] transition-all duration-500"
                >
                  <span
                    aria-hidden
                    className="absolute -top-6 -right-4 font-serif italic text-[180px] md:text-[220px] leading-none text-blush/[0.06] group-hover:text-blush/[0.12] transition-colors duration-700 select-none pointer-events-none"
                  >
                    {num}
                  </span>
                  <span className="absolute top-0 left-0 h-[2px] w-16 bg-blush group-hover:w-32 transition-all duration-700" />

                  <div className="relative flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-full bg-blush/15 border border-blush/40 flex items-center justify-center group-hover:bg-blush group-hover:border-blush transition-all duration-500">
                      <Icon className="w-6 h-6 text-blush group-hover:text-ink transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="relative font-serif text-3xl md:text-5xl text-foreground leading-[1.05] tracking-tight mb-6">
                    {s.title}
                  </h3>

                  <p className="relative font-serif italic text-xl md:text-2xl text-blush leading-snug mb-8 pl-5 border-l-2 border-blush/60">
                    {s.tagline}
                  </p>

                  <p className="relative text-foreground/85 leading-relaxed font-light text-base md:text-lg mb-10">
                    {s.body}
                  </p>

                  <div className="relative mt-auto">
                    <div className="inline-flex items-start gap-3 px-5 py-4 bg-background/60 border border-blush/20 rounded-sm mb-8 max-w-full">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush whitespace-nowrap pt-1">
                        Best for
                      </span>
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {s.bestFor}
                      </span>
                    </div>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex items-center gap-3 px-6 py-3 bg-blush text-ink font-mono text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-pink-deep transition-colors"
                    >
                      {s.cta}
                      <span aria-hidden className="transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular AI Builds */}
      <section className="py-24 md:py-32 px-6 bg-paper border-t border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="label-mono text-pink-deep">— Popular AI Builds</span>
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-ink tracking-tight">
              Smaller systems we build{" "}
              <em className="italic font-normal text-pink-deep">often.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBuilds.map((b) => {
              const Icon = b.icon;
              return (
                <a
                  key={b.title}
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-8 bg-[hsl(40_40%_99%)] border border-ink/15 rounded-sm overflow-hidden shadow-[0_4px_20px_-8px_hsl(220_25%_15%/0.12)] hover:bg-ink hover:border-ink hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_hsl(220_25%_15%/0.45)] transition-all duration-500"
                >
                  <span className="absolute top-0 left-0 h-px w-0 bg-pink-deep group-hover:w-full transition-all duration-700" />
                  <div className="w-12 h-12 rounded-full bg-blush/20 border border-blush/40 flex items-center justify-center mb-6 group-hover:bg-blush group-hover:border-blush transition-all duration-500">
                    <Icon className="w-5 h-5 text-pink-deep group-hover:text-ink transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-ink leading-tight mb-4 group-hover:text-paper transition-colors duration-500">
                    {b.title}
                  </h3>
                  <p className="text-sm text-ink/75 leading-relaxed font-light mb-6 group-hover:text-paper/85 transition-colors duration-500">
                    {b.body}
                  </p>
                  <div className="mt-auto pt-5 border-t border-ink/10 group-hover:border-paper/20 transition-colors duration-500">
                    <p className="text-xs text-ink/75 leading-relaxed group-hover:text-paper/80 transition-colors duration-500">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-pink-deep mr-2 group-hover:text-blush transition-colors duration-500">
                        Best for —
                      </span>
                      {b.bestFor}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <HowWeWork />

      {/* Final CTA */}
      <section className="py-32 px-6 bg-deep border-t-2 border-border relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="status-pill justify-center mb-10">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary">
              Not sure yet?
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground leading-[1.05]">
            Not sure what you{" "}
            <em className="italic font-normal text-blush">need yet?</em>
          </h2>
          <p className="mt-6 font-serif italic text-xl md:text-2xl text-foreground/80">
            That is normal.
          </p>
          <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Most clients come to us with a mix of website, marketing, content,
            workflow and admin problems. You do not need to know the exact
            solution before we talk. We will help you figure out what needs to be
            fixed first, what can wait and what kind of AI system would make the
            biggest difference.
          </p>
          <div className="mt-12">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a strategy call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
