import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { CALENDLY_URL } from "@/lib/links";
import heroBlossom from "@/assets/hero-blossom.jpg";
import marketingAsset from "@/assets/system-marketing.jpg.asset.json";
import contentAsset from "@/assets/system-content.jpg.asset.json";
import proposalAsset from "@/assets/system-proposal.jpg.asset.json";
import ecommerceDashboardExample from "@/assets/ecommerce-dashboard-example.png.asset.json";
import businessHealthAsset from "@/assets/system-business-health.jpg.asset.json";
import websiteImage from "@/assets/system-website.jpg";
import {
  Sparkles,
  LayoutDashboard,
  Globe,
  Brain,
  PenTool,
  FileText,
  ShoppingCart,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Understand Your Challenge",
    description:
      "We learn what is scattered, slow or hard to keep consistent. Marketing, websites, content, reporting, workflows or operations.",
  },
  {
    num: "02",
    title: "Audit Your Systems",
    description:
      "We map where the work actually lives, what is getting done where and what is causing the most friction.",
  },
  {
    num: "03",
    title: "Design the Fix",
    description:
      "We identify which system will create the most useful movement and what AI integration makes it work better.",
  },
  {
    num: "04",
    title: "Build and Launch",
    description:
      "We build the system, train your team and hand everything off so it works from day one.",
  },
];

const systems = [
  {
    icon: Brain,
    title: "Marketing Brain",
    description: "The source of truth for your brand voice, offers and proof.",
    image: marketingAsset.url,
    alt: "Marketing Brain",
  },
  {
    icon: PenTool,
    title: "Content Engine",
    description:
      "Content planning, drafting and repurposing workflows for consistency.",
    image: contentAsset.url,
    alt: "Content Engine",
  },
  {
    icon: FileText,
    title: "Proposal Builder",
    description: "Sales call notes transformed into stronger proposals, faster.",
    image: proposalAsset.url,
    alt: "Proposal Builder",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Dashboards",
    description: "Real-time visibility into conversion, revenue and customer health.",
    image: ecommerceDashboardExample.url,
    alt: "E-commerce Dashboard",
  },
  {
    icon: LayoutDashboard,
    title: "Business Health Dashboards",
    description: "All your important numbers in one clear, decision-ready view.",
    image: businessHealthAsset.url,
    alt: "Business Health Dashboard",
  },
  {
    icon: Globe,
    title: "AI-Ready Websites",
    description:
      "Structured for AI, search platforms and your team to actually use.",
    image: websiteImage,
    alt: "The Reve AI homepage hero, an AI-built website with a wildflower meadow and the headline AI runs on clear marketing",
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services — Reve AI";
    const desc = "Custom AI systems built for your business, or a focused session to show you exactly where to start.";
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
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${heroBlossom})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
            Not sure what AI system your business{" "}
            <span className="italic">needs?</span>
          </h1>
          <p className="mt-8 text-foreground/75 text-lg md:text-xl">
            Most businesses have the same problem: scattered tools, scattered workflows and no clear starting point.
          </p>
          <div className="mt-12">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Start with the AI Systems Audit →
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-44 px-6 border-t border-hairline overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <span className="label-eyebrow">— How It Works</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-8 text-foreground">
              From scattered to <span className="display-italic">systems that work.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                      <span className="font-serif text-2xl text-primary">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-serif text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-foreground/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-32 md:py-44 px-6 border-t border-hairline overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <span className="label-eyebrow">— What We Build</span>
            <h2 className="display-serif text-4xl md:text-5xl mt-8 text-foreground">
              Six systems we <span className="display-italic">build most.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((system) => {
              const Icon = system.icon;
              return (
                <div
                  key={system.title}
                  className="group flex flex-col bg-gradient-to-br from-card/60 via-card/30 to-background border border-hairline rounded-sm overflow-hidden hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_hsl(350_60%_82%/0.2)] transition-all duration-500"
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-hairline">
                    <img
                      src={system.image}
                      alt={system.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="relative flex flex-col flex-1 p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl md:text-xl text-foreground leading-tight mb-3">
                      {system.title}
                    </h3>

                    <p className="text-foreground/75 leading-relaxed font-light text-base mb-6 flex-1">
                      {system.description}
                    </p>

                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                      Learn more →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="py-32 md:py-44 px-6 bg-primary/10 border-t border-hairline overflow-hidden">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-8">
            Start with the <span className="display-italic">AI Systems Audit.</span>
          </h2>
          <p className="text-foreground/75 text-lg md:text-xl mb-12 leading-relaxed">
            A focused session where we map what is scattered, what is slow and where an AI system will create the most useful movement in your business.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Book Your Audit →
          </a>
        </div>
      </section>

      {/* Not Sure Yet */}
      <section className="py-32 md:py-44 px-6 border-t border-hairline overflow-hidden">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-serif text-4xl md:text-5xl text-foreground mb-8">
            Not sure what you <span className="display-italic">need yet?</span>
          </h2>
          <p className="text-foreground/75 text-lg md:text-xl mb-4">That is normal.</p>
          <p className="text-foreground/75 text-lg leading-relaxed mb-12">
            Most clients come to us with a mix of problems. We help you decide what needs to be fixed first, what can wait and which system will create the most useful movement.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Book a Strategy Call →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
