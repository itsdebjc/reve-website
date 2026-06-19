import { Link } from "react-router-dom";
import { Sparkles, Globe } from "lucide-react";

const systems = [
  {
    icon: Sparkles,
    title: "The AI Build",
    tagline:
      "A custom AI marketing system built around how your business thinks.",
    body: "A custom build for businesses that want to use AI more consistently in their marketing. We capture how your business thinks, sounds and sells, then build the workflows your team uses every day.",
    bestFor:
      "Founders experimenting with AI who want a system their team can actually use without them in the middle.",
    cta: "Learn more",
    href: "/services",
  },
  {
    icon: Globe,
    title: "AI-Built Website",
    tagline:
      "A modern website built faster with clear copy, SEO baked in and simple updates you can manage yourself.",
    body: "A clear, modern website built with AI-supported tools, strong messaging and search-friendly structure. We help you explain what you do, launch faster and update your site without waiting on a developer for every small change.",
    bestFor:
      "Service businesses that need a better site without a long, painful build — ready for Google and AI search.",
    cta: "View website offer",
    href: "/services",
  },
];

const ThreeCards = () => {
  return (
    <section
      id="system"
      className="bg-background text-foreground py-24 md:py-32 px-6 border-y border-border"
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="label-mono text-blush">— Services</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl text-foreground tracking-tight">
            Ways that we can{" "}
            <em className="italic font-normal text-blush">build together.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {systems.map((s, i) => {
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
                    <Icon
                      className="w-6 h-6 text-blush group-hover:text-ink transition-colors duration-500"
                      strokeWidth={1.5}
                    />
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
                  <Link
                    to={s.href}
                    className="group/cta inline-flex items-center gap-3 px-6 py-3 bg-blush text-ink font-mono text-xs uppercase tracking-[0.25em] rounded-sm hover:bg-pink-deep transition-colors"
                  >
                    {s.cta}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
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
