import { useState } from "react";
import { CALENDLY_URL } from "@/lib/links";
import aiRoadmapImage from "@/assets/offer-ai-roadmap.jpg";

const OFFERS = [
  {
    num: "01",
    theme: "light" as const,
    when: "When you're ready to invest in AI but need a clear direction.",
    title: "AI Marketing Roadmap",
    description:
      "We review your marketing, existing systems and how your team works. Together, we identify where AI can make a useful difference and what needs to be in place first. We look at what your existing tools can do before recommending something new. You leave knowing what to prioritize, what to build and what can wait.",
    image: aiRoadmapImage,
    imageAlt: "A staircase lit from below, leading up into an archway",
    accordions: [
      {
        label: "Best suited for",
        items: [
          "Leaders deciding where to invest in AI",
          "Teams experimenting without a shared plan",
          "Businesses ready to improve how marketing gets done",
        ],
      },
      {
        label: "By the end, you'll have",
        items: [
          "A clear assessment of your current setup",
          "Priority opportunities tied to business goals",
          "Recommendations for tools, workflows and team support",
          "A practical implementation roadmap",
        ],
      },
      {
        label: "Typical engagement",
        items: [
          "Every roadmap is scoped to your business. We'll walk through timing and investment on your discovery call.",
        ],
      },
    ],
    cta: "Plan Your Next Move",
  },
];

type Theme = "light" | "dark";

const THEME = {
  light: {
    section: "bg-[#F2E4D8]",
    ink: "text-[#20262A]",
    inkMuted: "text-[#20262A]/60",
    body: "text-[#20262A]/80",
    border: "border-[#20262A]/12",
    listDash: "text-[#C96E8C]",
    listText: "text-[#20262A]/78",
    ctaBg: "bg-[#20262A]",
    ctaText: "text-[#F2E4D8]",
    toggleIdle: "border-[#C96E8C] text-[#C96E8C]",
    toggleOpen: "border-[#C96E8C] bg-[#C96E8C] text-[#F2E4D8]",
    toggleHover: "hover:bg-[#C96E8C] hover:text-[#F2E4D8]",
  },
  dark: {
    section: "bg-[#20262A]",
    ink: "text-[#F2E4D8]",
    inkMuted: "text-[#F2E4D8]/60",
    body: "text-[#F2E4D8]/80",
    border: "border-white/12",
    listDash: "text-[#E893AC]",
    listText: "text-[#F2E4D8]/75",
    ctaBg: "bg-[#E893AC]",
    ctaText: "text-[#20262A]",
    toggleIdle: "border-[#E893AC] text-[#E893AC]",
    toggleOpen: "border-[#E893AC] bg-[#E893AC] text-[#20262A]",
    toggleHover: "hover:bg-[#E893AC] hover:text-[#20262A]",
  },
};

export const AccordionItem = ({ label, items, theme }: { label: string; items: string[]; theme: Theme }) => {
  const [open, setOpen] = useState(false);
  const t = THEME[theme];
  return (
    <div className={`border-t ${t.border}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
          className={`${t.ink} text-[13px] uppercase`}
        >
          {label}
        </span>
        <span
          className={`w-8 h-8 shrink-0 rounded-full border-[1.5px] flex items-center justify-center transition-colors duration-200 ${
            open ? t.toggleOpen : `${t.toggleIdle} ${t.toggleHover}`
          }`}
        >
          <span className="relative w-3 h-3">
            <span className="absolute left-0 top-1/2 w-full h-[1.5px] -translate-y-1/2 bg-current" />
            <span
              className="absolute left-1/2 top-0 w-[1.5px] h-full -translate-x-1/2 bg-current transition-transform duration-200"
              style={{ transform: open ? "translateX(-50%) scaleY(0)" : "translateX(-50%) scaleY(1)" }}
            />
          </span>
        </span>
      </button>
      {open && (
        <ul className="pb-6 space-y-2.5">
          {items.map((item) => (
            <li key={item} className={`flex gap-2.5 font-['Inter'] text-[14.5px] ${t.listText} leading-relaxed`}>
              <span className={`${t.listDash} shrink-0`}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ServiceCards = () => {
  return (
    <>
      {OFFERS.map((o, i) => {
        const t = THEME[o.theme];
        return (
          <section
            key={o.num}
            id={i === 0 ? "audit" : undefined}
            className={`${t.section} px-6 md:px-16 py-24 md:py-32 scroll-mt-20`}
          >
            <div className="mx-auto max-w-[1100px]">
              <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center mb-8">
                <div>
                  <span
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
                    className={`inline-flex items-center gap-2 ${o.theme === "light" ? "text-[#C96E8C]" : "text-[#E893AC]"} text-xs uppercase mb-6`}
                  >
                    &mdash; {o.num}
                  </span>
                  <h3
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                    className={`${t.ink} text-3xl md:text-4xl leading-[1.08] mb-6`}
                  >
                    {o.title}
                  </h3>
                  <p
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.06em" }}
                    className={`${t.inkMuted} text-[12px] uppercase mb-6`}
                  >
                    {o.when}
                  </p>
                  <p className={`font-['Inter'] ${t.body} text-base md:text-lg leading-relaxed max-w-2xl`}>
                    {o.description}
                  </p>
                </div>
                <div className="hidden md:block aspect-[4/5] rounded-[20px] overflow-hidden" style={!o.image ? { background: o.art } : undefined}>
                  {o.image && (
                    <img
                      src={o.image}
                      alt={o.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="mb-2">
                {o.accordions.map((a) => (
                  <AccordionItem key={a.label} label={a.label} items={a.items} theme={o.theme} />
                ))}
              </div>
              <div className={`border-t ${t.border} pt-8`}>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                  className={`inline-flex items-center rounded-full ${t.ctaBg} ${t.ctaText} text-[13px] font-bold px-7 py-3.5 hover:opacity-90 transition-opacity`}
                >
                  {o.cta} &rarr;
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ServiceCards;
