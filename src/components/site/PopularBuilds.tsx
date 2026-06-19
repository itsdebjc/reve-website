import { CALENDLY_URL } from "@/lib/links";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  Brain,
  PenTool,
  FileText,
  LayoutDashboard,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const builds = [
  {
    icon: CalendarCheck,
    title: "Founders AI Personal Assistant",
    body: "Calendar, meetings, reminders and follow-ups — nothing slips through the cracks.",
  },
  {
    icon: Brain,
    title: "The Marketing Brain",
    body: "Your voice, offers and rules organized so AI can actually use them.",
  },
  {
    icon: PenTool,
    title: "The Content Engine",
    body: "Plan, write and repurpose content without starting from scratch.",
  },
  {
    icon: FileText,
    title: "The Proposal Builder",
    body: "Turn notes and proof into stronger client-ready proposals.",
  },
  {
    icon: LayoutDashboard,
    title: "The Business Health Dashboard",
    body: "See the signals, know what needs attention and decide what to do next.",
  },
  {
    icon: Sparkles,
    title: "Your Custom Use Case",
    body: "A tailored AI workflow built around your exact bottleneck.",
  },
];

const PopularBuilds = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-deep border-y border-border">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="label-mono text-blush">— Popular AI Builds</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-foreground tracking-tight">
            Smaller systems we build{" "}
            <em className="italic font-normal text-blush">often.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {builds.map((b) => {
            const Icon = b.icon;
            return (
              <a
                key={b.title}
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-start gap-4 p-5 md:p-6 bg-paper text-ink rounded-sm border border-border hover:border-blush hover:shadow-[0_20px_50px_-20px_hsl(348_56%_82%/0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-blush/20 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-ink/80" strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-base md:text-lg text-ink leading-tight mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-ink/60 leading-relaxed line-clamp-2">
                    {b.body}
                  </p>
                </div>

                <ArrowUpRight
                  className="absolute top-4 right-4 w-3.5 h-3.5 text-ink/25 group-hover:text-blush group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-blush hover:text-pink-deep transition-colors"
          >
            See all services
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBuilds;
