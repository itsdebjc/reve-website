import { useState } from "react";
import { CALENDLY_URL } from "@/lib/links";

const SERVICES = [
  {
    num: "01",
    label: "Start Here",
    accent: "#7ED2F2",
    title: "AI Marketing Audit",
    tagline: "Find what's getting in the way.",
    description:
      "We review how your marketing works today, uncover gaps and identify where AI can improve performance, save time and make the work easier.",
    pills: [
      "Positioning & messaging",
      "Website & conversion path",
      "Customer journey & funnel",
      "Content & channel system",
      "Email, CRM & follow-up",
      "AI workflows, tools & reporting",
    ],
    tinted: false,
    cta: "Get Your Game Plan",
  },
  {
    num: "02",
    label: "Next",
    accent: "#F0AAC0",
    title: "AI Marketing System",
    tagline: "We'll build the right system for your business.",
    description:
      "Every build is different. Depending on your goals, your system may include:",
    pills: [
      "AI Brand Hub",
      "Content Engine",
      "Proposal System",
      "Business Dashboard",
      "Team training",
      "AI Website",
    ],
    footnote: "Not every client needs every system. Every client gets the right one.",
    tinted: true,
    cta: "Book a Call",
  },
  {
    num: "03",
    label: "Ongoing",
    accent: "#7EDCB8",
    title: "AI Growth Partner",
    tagline: "Keep improving.",
    description:
      "AI moves quickly. We'll help your team continue improving with ongoing coaching, new systems and ongoing support.",
    pills: [],
    tinted: false,
    cta: "Book a Call",
  },
];

const ServiceCards = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="audit" className="bg-[#20262A] px-6 md:px-16 pb-24 scroll-mt-20">
      <div className="mx-auto max-w-[1280px] space-y-8">
        {SERVICES.map((s, i) => {
          const isHovered = hovered === i;
          return (
            <div
              key={s.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`grid md:grid-cols-[280px_1fr] gap-10 rounded-2xl p-10 border transition-all duration-300 ease-out ${
                s.tinted ? "bg-[#F0AAC0]/[0.06]" : "bg-[#1D2224]"
              } ${isHovered ? "-translate-y-1" : ""}`}
              style={{
                borderColor: isHovered ? s.accent : `${s.accent}40`,
                boxShadow: isHovered ? `0 20px 40px -16px ${s.accent}40` : "none",
              }}
            >
              {/* Identity block */}
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.1em",
                    color: s.accent,
                    border: `1px solid ${s.accent}`,
                  }}
                  className="inline-flex text-xs font-bold uppercase px-3 py-1.5 rounded-full mb-6"
                >
                  {s.label}
                </div>
                <div
                  style={{ fontFamily: "'Anton', sans-serif", color: s.accent }}
                  className="text-5xl mb-3"
                >
                  {s.num}
                </div>
                <h3
                  style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
                  className="text-[#F2E4D8] text-2xl uppercase leading-tight mb-2"
                >
                  {s.title}
                </h3>
                <p className="font-['Inter'] text-[#F2E4D8]/60 text-sm">{s.tagline}</p>
              </div>

              {/* Content */}
              <div>
                <p className="font-['Inter'] text-[#E8E1D8] text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                  {s.description}
                </p>
                {s.pills.length > 0 && (
                  <div className="grid md:grid-cols-3 gap-x-3 gap-y-2.5 mb-4">
                    {s.pills.map((pill) => (
                      <div
                        key={pill}
                        style={{ borderColor: `${s.accent}60`, backgroundColor: `${s.accent}14`, color: s.accent }}
                        className="flex items-center gap-2 border rounded-full px-4 py-2 font-['Inter'] text-sm font-medium"
                      >
                        <span>✓</span>
                        <span className="text-[#F2E4D8]">{pill}</span>
                      </div>
                    ))}
                  </div>
                )}
                {s.footnote && (
                  <p className="font-['Inter'] text-[#F2E4D8]/50 text-sm italic mb-6">{s.footnote}</p>
                )}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Anton', sans-serif", backgroundColor: s.accent }}
                  className="inline-flex text-xs text-[#20262A] px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity uppercase mt-2"
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceCards;
