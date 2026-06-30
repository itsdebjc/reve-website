import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Method from "@/components/site/Method";
import { CALENDLY_URL } from "@/lib/links";
import heroBlossom from "@/assets/hero-blossom.jpg";
import ecommerceDashboardExample from "@/assets/ecommerce-dashboard-example.png.asset.json";
import businessHealthAsset from "@/assets/system-business-health.jpg.asset.json";
import proposalAsset from "@/assets/system-proposal.jpg.asset.json";
import contentAsset from "@/assets/system-content.jpg.asset.json";
import marketingAsset from "@/assets/system-marketing.jpg.asset.json";
import founderAsset from "@/assets/system-founder.jpg.asset.json";
import websiteImage from "@/assets/system-website.jpg";
import {
  Sparkles,
  Globe,
  CalendarCheck,
  Brain,
  PenTool,
  FileText,
  LayoutDashboard,
  ShoppingCart,
  Check,
  type LucideIcon,
} from "lucide-react";

type Example = {
  icon: LucideIcon;
  label: string;
  title: string;
  image: string;
  alt: string;
};

type Category = {
  num: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  problem: string;
  outcome: string[];
  included: string[];
  bestFor: string;
  cta: string;
  featuredImage: string;
  featuredAlt: string;
  examplesHeading: string;
  examples: Example[];
};

const categories: Category[] = [
  {
    num: "01",
    icon: Sparkles,
    eyebrow: "Marketing Clarity Systems",
    title: "Marketing Clarity Systems",
    problem:
      "When every post, proposal and newsletter starts from scratch, your marketing gets slow, inconsistent and hard to scale.",
    outcome: [
      "Most businesses are not short on ideas. They are short on structure.",
      "The offer lives in one doc. The voice lives in someone's head. The content ideas are everywhere. The sales material gets rebuilt from scratch. The team keeps asking, \"What should we say?\"",
      "We fix that.",
      "We capture how your business thinks, sounds and sells, then build a simple AI-supported system your team can use to create content, proposals, campaigns and client-facing material with more consistency.",
    ],
    included: [
      "Brand Intelligence Foundation — voice, offers, audience, proof and content rules in one place",
      "Marketing Brain — the source of truth AI can use",
      "Content Engine — content planning, drafting and repurposing workflows",
      "Proposal Builder — sales call notes turned into stronger proposals",
      "Founder's AI Assistant — follow-ups, notes, reminders and daily briefings",
      "Team Training — training inside the real system using your actual work",
    ],
    bestFor: "Businesses that want better marketing output without starting from scratch every time.",
    cta: "Build My Marketing System",
    featuredImage: marketingAsset.url,
    featuredAlt:
      "Marketing Brain knowledge base preview showing brand voice, offers and connected AI tools",
    examplesHeading: "Examples we can build",
    examples: [
      {
        icon: Brain,
        label: "Marketing Brain",
        title: "Marketing Brain",
        image: marketingAsset.url,
        alt: "Marketing Brain knowledge base preview",
      },
      {
        icon: PenTool,
        label: "Content Engine",
        title: "Content Engine",
        image: contentAsset.url,
        alt: "Content Engine app preview with weekly calendar and draft editor",
      },
      {
        icon: FileText,
        label: "Proposal Builder",
        title: "Proposal Builder",
        image: proposalAsset.url,
        alt: "Proposal Builder app preview with draft editor and AI suggestions",
      },
      {
        icon: CalendarCheck,
        label: "Founder's AI",
        title: "Founder's AI Assistant",
        image: founderAsset.url,
        alt: "Founder's AI Personal Assistant preview with calendar and follow-ups",
      },
    ],
  },
  {
    num: "02",
    icon: LayoutDashboard,
    eyebrow: "Business Visibility Dashboards",
    title: "Business Visibility Dashboards",
    problem:
      "When your numbers live across Shopify, Meta, GA4, sales tools and spreadsheets, no one has the full story.",
    outcome: [
      "Most businesses have the data. They just do not have the clarity.",
      "Sales are in one place. Email is in another. Ads are somewhere else. Customer behaviour is buried. The spreadsheet is already out of date.",
      "We build dashboards that bring the important signals into one clear view, so you can make better decisions without hunting through reports.",
    ],
    included: [
      "Custom dashboard structure",
      "E-commerce or business health view",
      "Revenue, leads, sales or pipeline signals",
      "Marketing and campaign performance",
      "Plain-language insights, not just charts",
      "Priority alerts",
      "Next-step recommendations",
      "Built around the tools you already use",
    ],
    bestFor: "Businesses that are checking too many tools and still guessing what to do next.",
    cta: "Build My Dashboard",
    featuredImage: ecommerceDashboardExample.url,
    featuredAlt:
      "E-commerce health dashboard with conversion rate, LTV:CAC, revenue sources and recent orders",
    examplesHeading: "Two common builds",
    examples: [
      {
        icon: ShoppingCart,
        label: "E-commerce",
        title: "E-commerce Health Dashboard",
        image: ecommerceDashboardExample.url,
        alt: "E-commerce health dashboard with conversion rate, LTV:CAC, revenue sources and recent orders",
      },
      {
        icon: LayoutDashboard,
        label: "Business Health",
        title: "Business Health Dashboard",
        image: businessHealthAsset.url,
        alt: "Business health dashboard preview",
      },
    ],
  },
  {
    num: "03",
    icon: Globe,
    eyebrow: "AI-Built Websites",
    title: "AI-Built Websites",
    problem:
      "Most websites are just pages. They don't work for your business, your team or the AI tools and search platforms trying to understand you.",
    outcome: [
      "Your website should be more than something people land on. It should be something AI, search platforms and your own team can actually use.",
      "We build sites that are AI-ready from the ground up: structured, written and built so they double as a content source and sales support tool.",
    ],
    included: [
      "Website strategy, structure and messaging before design",
      "AI-supported copy with human editing on every page",
      "Structured so AI and search platforms can read and pull from it accurately",
      "Built to double as a content source for proposals, social and sales material",
      "SEO foundations: meta, headings, alt text and performance",
      "Simple CMS so you can update without a developer",
      "Launch-ready analytics, forms and tracking",
    ],
    bestFor: "Service businesses that want a website that works harder — for people, for AI and for the systems they build next.",
    cta: "Build My Website",
    featuredImage: websiteImage,
    featuredAlt:
      "Modern service business website mockup in a browser frame with soft pink gradient underlay",
    examplesHeading: "Examples we can build",
    examples: [],
  },
];

const Services = () => {
  const [preview, setPreview] = useState<Example | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

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
            Choose the system your business{" "}
            <em className="italic font-normal text-blush">needs next.</em>
          </h1>
          <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            We build AI-supported marketing systems, websites, dashboards and
            workflows for businesses that want clearer output, better decisions
            and less manual work.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Strategy Call →
            </a>
            <a href="#offers" className="btn-secondary">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section
        id="offers"
        className="py-24 md:py-32 px-6 border-t border-border bg-deep"
      >
        <div className="container-wide">
          <div className="text-center mb-16 md:mb-20">
            <p className="label-mono text-blush mb-4">— Core Systems</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground tracking-tight leading-[1.05]">
              Three places we usually <em className="italic font-normal text-blush">start.</em>
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {categories.map((c, i) => {
              const Icon = c.icon;
              const imageLeft = i % 2 === 1;
              return (
                <article
                  key={c.title}
                  id={`cat-${c.num}`}
                  className="scroll-mt-24"
                >
                  {/* Featured card */}
                  <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 bg-gradient-to-br from-card/60 via-card/30 to-background border border-border rounded-sm overflow-hidden shadow-[0_20px_60px_-20px_hsl(220_25%_15%/0.5)]">
                    <span
                      aria-hidden
                      className="absolute -top-6 -right-4 font-serif italic text-[180px] md:text-[220px] leading-none text-blush/[0.06] select-none pointer-events-none"
                    >
                      {c.num}
                    </span>
                    <span className="absolute top-0 left-0 h-[2px] w-16 bg-blush" />

                    <div
                      className={`relative flex flex-col order-2 ${
                        imageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-blush/15 border border-blush/40 flex items-center justify-center">
                          <Icon
                            className="w-4 h-4 text-blush"
                            strokeWidth={1.5}
                          />
                        </div>
                        <span className="label-mono text-blush">
                          — {c.eyebrow}
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05] tracking-tight mb-6">
                        {c.title}
                      </h3>
                      <p className="font-serif italic text-lg md:text-xl text-blush leading-snug mb-6 pl-5 border-l-2 border-blush/60">
                        {c.problem}
                      </p>
                      <div className="mb-8 space-y-3">
                        {c.outcome.map((para, pi) => (
                          <p
                            key={pi}
                            className="text-foreground/85 leading-relaxed font-light text-base md:text-lg"
                          >
                            {para}
                          </p>
                        ))}
                      </div>

                      <div className="mb-8">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush block mb-4">
                          What's included
                        </span>
                        <ul className="space-y-3">
                          {c.included.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check
                                className="w-4 h-4 text-blush mt-1 shrink-0"
                                strokeWidth={2}
                              />
                              <span className="text-sm md:text-base text-foreground/85 leading-relaxed font-light">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush block mb-2">
                          Best for
                        </span>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {c.bestFor}
                        </p>
                      </div>

                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-3 px-6 py-3 bg-blush text-ink font-mono text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-pink-deep transition-colors w-fit"
                      >
                        {c.cta}
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover/cta:translate-x-1"
                        >
                          →
                        </span>
                      </a>
                    </div>

                    <div
                      className={`relative order-1 ${
                        imageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <img
                        src={c.featuredImage}
                        alt={c.featuredAlt}
                        width={1400}
                        height={896}
                        className="w-full h-auto rounded-sm border border-border/50 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Examples */}
                  {c.examples.length > 0 && (
                    <div className="mt-10 md:mt-12">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="h-px w-8 bg-blush/50" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blush">
                          {c.examplesHeading}
                        </span>
                      </div>
                      <div
                        className={`grid gap-4 md:gap-5 ${
                          c.examples.length === 2
                            ? "sm:grid-cols-2"
                            : c.examples.length === 3
                            ? "sm:grid-cols-2 lg:grid-cols-3"
                            : "sm:grid-cols-2 lg:grid-cols-4"
                        }`}
                      >
                        {c.examples.map((ex) => {
                          const ExIcon = ex.icon;
                          return (
                            <button
                              type="button"
                              key={ex.title}
                              onClick={() => setPreview(ex)}
                              className="group flex flex-col text-left bg-background/60 border border-border rounded-sm overflow-hidden hover:border-blush/50 hover:shadow-[0_20px_50px_-20px_hsl(348_56%_82%/0.25)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush"
                            >
                              <div className="aspect-[16/10] overflow-hidden border-b border-border/60">
                                <img
                                  src={ex.image}
                                  alt={ex.alt}
                                  width={800}
                                  height={500}
                                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <div className="p-4 md:p-5 flex items-center justify-between gap-3">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <ExIcon
                                      className="w-3.5 h-3.5 text-blush"
                                      strokeWidth={1.5}
                                    />
                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-blush">
                                      {ex.label}
                                    </span>
                                  </div>
                                  <h4 className="font-serif text-base md:text-lg text-foreground leading-tight">
                                    {ex.title}
                                  </h4>
                                </div>
                                <span
                                  aria-hidden
                                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-blush opacity-70 group-hover:opacity-100 transition-opacity shrink-0"
                                >
                                  View →
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Method />

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
            reporting, workflow and admin problems. You do not need to know the
            exact solution before we talk. We will help you figure out what
            needs to be fixed first, what can wait and which AI-supported
            system would make the biggest difference.
          </p>
          <div className="mt-12">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Strategy Call →
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-foreground hover:bg-blush hover:text-ink hover:border-blush transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-blush/60" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blush">
                {preview.label}
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-5">
              {preview.title}
            </h3>
            <div className="rounded-sm overflow-hidden border border-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-card">
              <img
                src={preview.image}
                alt={preview.alt}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Services;
