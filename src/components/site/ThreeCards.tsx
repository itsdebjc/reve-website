import { Link } from "react-router-dom";
import { Sparkles, LayoutDashboard, Globe, ArrowUpRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/links";
import ecommerceDashboardExample from "@/assets/ecommerce-dashboard-example.png.asset.json";
import marketingAsset from "@/assets/system-marketing.jpg.asset.json";
import websiteImage from "@/assets/system-website.jpg";

const systems = [
  {
    num: "01",
    icon: Sparkles,
    title: "Reve AI Marketing Systems",
    tagline:
      "Turn your brand, offers, content and workflows into one clear system your team can actually use with AI.",
    href: "/services#cat-01",
    image: marketingAsset.url,
    alt: "Marketing Brain knowledge base preview showing brand voice, offers and connected AI tools",
  },
  {
    num: "02",
    icon: LayoutDashboard,
    title: "Business Visibility Dashboards",
    tagline:
      "Bring your most important numbers into one view so you can see what is working, what is slipping and what needs attention.",
    href: "/services#cat-02",
    image: ecommerceDashboardExample.url,
    alt: "E-commerce health dashboard with conversion rate, LTV:CAC, revenue sources and recent orders",
  },
  {
    num: "03",
    icon: Globe,
    title: "AI-Built Websites",
    tagline:
      "Build a clearer website that works for your customers, your team and the AI tools trying to understand your business.",
    href: "/services#cat-03",
    image: websiteImage,
    alt: "The Reve AI homepage hero, an AI-built website with a wildflower meadow and the headline AI runs on clear marketing",
  },
];

const ThreeCards = () => {
  return (
    <>
      {/* Start Here */}
      <section
        id="start-here"
        className="bg-background text-foreground py-24 md:py-32 px-6 border-y border-border"
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-mono text-blush">— Start Here</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-foreground tracking-tight leading-[1.05]">
              Start where the work{" "}
              <em className="italic font-normal text-blush">feels hard.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
              Your marketing is slow. Your website is unclear. Your numbers
              live in too many places. Or AI is creating more work instead of
              less.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed font-light">
              We start with an audit to understand what is getting in the way,
              what needs attention first and where a better system could make
              the biggest difference.
            </p>
            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start With an Audit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section
        id="system"
        className="bg-background text-foreground py-24 md:py-32 px-6 border-b border-border"
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <span className="label-mono text-blush">— Services</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-foreground tracking-tight leading-[1.05]">
              Then we build what your business{" "}
              <em className="italic font-normal text-blush">needs next.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
              The audit gives us a clear starting point. From there, we usually
              build one of three systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {systems.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to={s.href}
                  className="group relative flex flex-col bg-gradient-to-br from-card/60 via-card/30 to-background border border-border rounded-sm overflow-hidden hover:border-blush/60 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_hsl(348_56%_82%/0.2)] transition-all duration-500"
                >
                  <span
                    aria-hidden
                    className="absolute -top-4 -right-2 font-serif italic text-[120px] leading-none text-blush/[0.06] group-hover:text-blush/[0.12] transition-colors duration-700 select-none pointer-events-none z-10"
                  >
                    {s.num}
                  </span>
                  <span className="absolute top-0 left-0 h-[2px] w-12 bg-blush group-hover:w-20 transition-all duration-700 z-10" />

                  <div className="aspect-[16/10] overflow-hidden border-b border-border/60">
                    <img
                      src={s.image}
                      alt={s.alt}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="relative flex flex-col flex-1 p-7 md:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-blush/15 border border-blush/40 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blush" strokeWidth={1.5} />
                      </div>
                      <span className="label-mono text-blush">— {s.title}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-[1.65rem] text-foreground leading-[1.1] tracking-tight mb-4">
                      {s.title}
                    </h3>

                    <p className="text-foreground/75 leading-relaxed font-light text-base mb-8 flex-1">
                      {s.tagline}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-blush group-hover:text-foreground transition-colors">
                      Learn more
                      <ArrowUpRight
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.75}
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blush hover:text-pink-deep transition-colors"
            >
              See all services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThreeCards;
