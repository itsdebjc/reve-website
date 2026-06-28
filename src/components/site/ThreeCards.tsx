import { Link } from "react-router-dom";
import { Sparkles, LayoutDashboard, Globe, ArrowUpRight } from "lucide-react";
import ecommerceDashboardExample from "@/assets/ecommerce-dashboard-example.png.asset.json";
import marketingAsset from "@/assets/system-marketing.jpg.asset.json";
import websiteImage from "@/assets/system-website.jpg";

const systems = [
  {
    num: "01",
    icon: Sparkles,
    title: "Marketing Clarity Systems",
    tagline:
      "Turn scattered ideas, offers and content into a system your team can actually use.",
    href: "/services#cat-01",
    image: marketingAsset.url,
    alt: "Marketing Brain knowledge base preview showing brand voice, offers and connected AI tools",
  },
  {
    num: "02",
    icon: LayoutDashboard,
    title: "Business Visibility Dashboards",
    tagline:
      "See what is working, what is slipping and what needs attention next.",
    href: "/services#cat-02",
    image: ecommerceDashboardExample.url,
    alt: "E-commerce health dashboard with conversion rate, LTV:CAC, revenue sources and recent orders",
  },
  {
    num: "03",
    icon: Globe,
    title: "AI-Built Websites",
    tagline:
      "A clearer website built faster, with stronger copy and a structure you can manage.",
    href: "/services#cat-03",
    image: websiteImage,
    alt: "Modern service business website mockup in a browser frame",
  },
];

const ThreeCards = () => {
  return (
    <section
      id="system"
      className="bg-background text-foreground py-24 md:py-32 px-6 border-y border-border"
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="label-mono text-blush">— Offers</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-foreground tracking-tight leading-[1.05]">
            Scattered marketing. Scattered data.{" "}
            <em className="italic font-normal text-blush">Unclear websites.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
            Choose the system your business needs next.
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
  );
};

export default ThreeCards;
