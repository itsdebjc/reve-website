import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { CALENDLY_URL } from "@/lib/links";
import heroBlossom from "@/assets/hero-blossom.jpg";
import { Search, Boxes, TrendingUp, Check, type LucideIcon } from "lucide-react";

type Service = {
  num: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  listLabel?: string;
  items?: string[];
  closing?: string[];
};

const services: Service[] = [
  {
    num: "01",
    icon: Search,
    title: "AI Marketing Audit",
    tagline: "Find what's getting in the way.",
    description:
      "We'll review your marketing, identify opportunities and create a roadmap for where AI can make the biggest impact.",
    listLabel: "You'll receive",
    items: [
      "Website review",
      "Messaging review",
      "Content review",
      "Workflow review",
      "AI recommendations",
      "Priority roadmap",
    ],
  },
  {
    num: "02",
    icon: Boxes,
    title: "AI Marketing System",
    tagline: "We'll build the right system for your business.",
    description:
      "Every build is different. Depending on your goals, your system may include:",
    items: [
      "AI-ready website",
      "Brand Hub",
      "Content System",
      "Proposal System",
      "Case Study Library",
      "Knowledge Base",
      "AI workflows",
      "Dashboards",
      "Team training",
    ],
    closing: [
      "Not every client needs every system.",
      "Every client gets the right one.",
    ],
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "AI Growth Partner",
    tagline: "Keep improving.",
    description:
      "AI moves quickly. We'll help your team continue improving with coaching, workflow updates, new tools and ongoing support.",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services — Reve AI";
    const desc =
      "Don't buy another AI tool until you know what your business actually needs. Start with an AI Marketing Audit.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${heroBlossom})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="label-eyebrow mb-8">— AI Marketing Services</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
            Don't buy another AI tool until you know what your business{" "}
            <span className="italic">actually needs.</span>
          </h1>
          <p className="mt-8 text-foreground/75 text-lg md:text-xl leading-relaxed">
            Our services are designed to help you build a marketing system that
            works today and gets smarter over time.
          </p>
          <div className="mt-12">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Start with an AI Marketing Audit →
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-44 px-6 border-t border-hairline overflow-hidden">
        <div className="mx-auto max-w-5xl space-y-24 md:space-y-32">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="label-mono text-primary">
                    Service {s.num}
                  </span>
                </div>

                <h2 className="display-serif text-3xl md:text-4xl text-foreground leading-tight mb-3">
                  {s.title}
                </h2>
                <p className="display-italic text-2xl md:text-3xl text-primary mb-8">
                  {s.tagline}
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed font-light max-w-2xl">
                  {s.description}
                </p>

                {s.items && (
                  <div className="mt-10">
                    {s.listLabel && (
                      <p className="label-mono text-primary mb-6">
                        {s.listLabel}
                      </p>
                    )}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-foreground/90 text-base"
                        >
                          <Check
                            className="text-primary w-4 h-4 flex-shrink-0"
                            strokeWidth={2}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {s.closing && (
                  <div className="mt-10 space-y-1 text-foreground/85 text-lg">
                    {s.closing.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Reve AI */}
      <section className="py-32 md:py-44 px-6 border-t border-hairline bg-dark-warm overflow-hidden">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-eyebrow mb-8">— Why Reve AI</p>
          <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-10">
            Why clients <span className="display-italic">work with us.</span>
          </h2>
          <div className="space-y-4 text-foreground/85 text-lg md:text-xl leading-relaxed">
            <p>We don't start with software.</p>
            <p>We start with the way your business works.</p>
            <p className="text-foreground/70">
              That means the systems we build are practical, easy to adopt and
              designed to grow with your team.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative isolate py-20 md:py-28 px-6 border-t border-hairline overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, hsl(350 70% 90%) 0%, hsl(350 65% 86%) 60%, hsl(350 55% 80%) 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center text-[hsl(0_0%_0%)]">
          <h2 className="display-serif text-3xl md:text-5xl mb-6 text-[hsl(0_0%_0%)]">
            Let's build something your team will{" "}
            <span className="display-italic !text-[hsl(0_0%_0%)]">
              actually use.
            </span>
          </h2>
          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[hsl(0_0%_0%)] text-[hsl(30_25%_96%)] px-10 py-3.5 font-mono text-[13px] md:text-[12px] tracking-[0.22em] uppercase hover:bg-[hsl(0_0%_15%)] transition-colors"
            >
              Start with an AI Marketing Audit →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
