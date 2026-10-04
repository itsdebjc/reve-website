import { CALENDLY_URL } from "@/lib/links";
import { AccordionItem } from "@/components/site/ServiceCards";
import aiImplementationImage from "@/assets/offer-ai-implementation.jpg";

const ACCORDIONS = [
  {
    label: "Best suited for",
    items: [
      "Businesses ready to act on a roadmap",
      "Teams spending too much time correcting AI output",
      "Founders who want fewer tasks dependent on them",
    ],
  },
  {
    label: "By the end, you'll have",
    items: [
      "Working systems built around your priorities",
      "Your business knowledge organized for AI",
      "Clear workflows your team can follow",
      "Training and guidance to keep the systems useful",
    ],
  },
  {
    label: "Typical engagement",
    items: [
      "Every implementation is scoped to what you're building. We'll walk through timing and investment on your discovery call.",
    ],
  },
];

type Icon = "bolt" | "flow" | "chat" | "blocks";

const BUCKETS: {
  num: string;
  title: string;
  accent: string;
  icon: Icon;
  chained?: boolean;
  note?: string;
  items: string[];
}[] = [
  {
    num: "A",
    title: "AI Automations",
    accent: "#E893AC",
    icon: "bolt",
    items: [
      "Automated lead follow-up",
      "CRM updates from meetings and forms",
      "Email reminders and sequences",
      "Scheduled marketing reports",
    ],
  },
  {
    num: "B",
    title: "Connected Workflows",
    accent: "#5FC2E8",
    icon: "flow",
    chained: true,
    note: "Includes content and proposal systems.",
    items: [
      "Client enquiry → intake → onboarding",
      "Sales call → proposal draft → review",
      "Interview → article → social posts → approval",
      "Campaign brief → content drafts → review → scheduling",
    ],
  },
  {
    num: "C",
    title: "AI Assistants",
    accent: "#F2E4D8",
    icon: "chat",
    items: [
      "An internal assistant that answers questions about your business",
      "A writing assistant that uses your brand voice",
      "A proposal assistant that draws on past work and pricing",
      "A website assistant that answers customer questions",
    ],
  },
  {
    num: "D",
    title: "Custom Apps and Tools",
    accent: "#E893AC",
    icon: "blocks",
    items: [
      "Marketing dashboards",
      "Client portals",
      "Interactive assessments and calculators",
      "Custom AI tools for your team or customers",
    ],
  },
];

const BucketIcon = ({ name }: { name: Icon }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "bolt")
    return (
      <svg {...common}>
        <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
      </svg>
    );
  if (name === "flow")
    return (
      <svg {...common}>
        <circle cx="5" cy="6" r="2.2" />
        <circle cx="19" cy="12" r="2.2" />
        <circle cx="5" cy="18" r="2.2" />
        <path d="M7 6.5c5 0 5 5.5 10 5.5M7 17.5c5 0 5-5.5 10-5.5" />
      </svg>
    );
  if (name === "chat")
    return (
      <svg {...common}>
        <path d="M4 5h16v10H10l-5 4v-4H4z" />
        <path d="M8 9.5h8M8 12h5" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <path d="M17 13.5v7M13.5 17h7" />
    </svg>
  );
};

const AIImplementation = () => {
  return (
    <section id="implementation" className="bg-[#20262A] px-6 md:px-16 py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center mb-14 md:mb-16">
          <div>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
              className="inline-flex items-center gap-2 text-[#E893AC] text-xs uppercase mb-6"
            >
              &mdash; 02
            </span>
            <h3
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="text-[#F2E4D8] text-3xl md:text-5xl leading-[1.08] mb-6"
            >
              AI Implementation
            </h3>
            <p className="font-['Inter'] text-[#F2E4D8]/80 text-base md:text-lg leading-relaxed max-w-[560px]">
              We build AI tools and systems around your business. Each engagement includes testing, refinement and
              training with your team.
            </p>
          </div>
          <div className="hidden md:block aspect-[4/3] rounded-[20px] overflow-hidden">
            <img
              src={aiImplementationImage}
              alt="Detail of a glass and steel building facade, a grid of angular reflective windows"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {BUCKETS.map((b) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-7 md:p-9 transition-colors duration-300 hover:bg-white/[0.07]"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] opacity-80"
                style={{ background: b.accent }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-[0.12] blur-3xl transition-opacity duration-300 group-hover:opacity-25"
                style={{ background: b.accent }}
              />

              <div className="relative flex items-center justify-between mb-7">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border"
                  style={{ borderColor: `${b.accent}66`, color: b.accent }}
                >
                  <BucketIcon name={b.icon} />
                </span>
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em", color: b.accent }}
                  className="text-[12px] uppercase"
                >
                  {b.num}
                </span>
              </div>

              <h4
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                className={`relative text-[#F2E4D8] text-2xl md:text-[28px] leading-[1.1] ${b.note ? "mb-3" : "mb-6"}`}
              >
                {b.title}
              </h4>
              {b.note && (
                <p className="relative font-['Inter'] text-[#F2E4D8]/60 text-sm mb-6">{b.note}</p>
              )}

              <ul className="relative space-y-3.5">
                {b.items.map((item) =>
                  b.chained ? (
                    <li key={item} className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
                      {item.split(" → ").map((step, i, arr) => (
                        <span key={step} className="inline-flex items-center gap-1.5">
                          <span
                            className="rounded-full border px-3 py-1 font-['Inter'] text-[13px] leading-snug text-[#F2E4D8]/90"
                            style={{ borderColor: `${b.accent}55`, background: `${b.accent}14` }}
                          >
                            {step}
                          </span>
                          {i < arr.length - 1 && (
                            <span aria-hidden style={{ color: b.accent }} className="text-sm">
                              &rarr;
                            </span>
                          )}
                        </span>
                      ))}
                    </li>
                  ) : (
                    <li key={item} className="flex gap-3 font-['Inter'] text-[15px] leading-relaxed text-[#F2E4D8]/75">
                      <span
                        aria-hidden
                        className="mt-[0.7em] h-[1.5px] w-3 shrink-0"
                        style={{ background: b.accent }}
                      />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          {ACCORDIONS.map((a) => (
            <AccordionItem key={a.label} label={a.label} items={a.items} theme="dark" />
          ))}
        </div>
        <div className="border-t border-white/12 pt-8">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
            className="inline-flex items-center rounded-full bg-[#E893AC] text-[#20262A] text-[13px] font-bold px-7 py-3.5 hover:opacity-90 transition-opacity"
          >
            Put Your Plan to Work &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIImplementation;
