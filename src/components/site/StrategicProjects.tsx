import { useRef } from "react";
import websiteStrategyImage from "@/assets/project-website-strategy-v2.jpg";
import emailMarketingImage from "@/assets/project-notebook-pen.jpg";
import aiVisibilityImage from "@/assets/project-ai-visibility.jpg";
import knowledgeHubImage from "@/assets/project-knowledge-hub.jpg";
import creativeLabImage from "@/assets/project-creative-lab-v2.jpg";

const PROJECTS = [
  {
    when: "When your business knowledge needs to work beyond you.",
    title: "Brand Knowledge Hub",
    description:
      "We bring your positioning, voice, offers and proof into a shared resource your team and AI can use to produce more consistent marketing.",
    image: knowledgeHubImage,
    alt: "A multi-level library with white shelving stacked full of books",
  },
  {
    when: "When your business has outgrown its website.",
    title: "Website Strategy and Build",
    description:
      "We connect positioning, copy, design and development to create a website that reflects your business and supports buying decisions. That may mean improving your existing site or building something new.",
    image: websiteStrategyImage,
    alt: "Watercolor and ink wireframe sketches of website pages",
  },
  {
    when: "When you need to know whether customers can find you through AI.",
    title: "AI Search Visibility Audit and Plan",
    description:
      "We assess how your business appears in AI answers, identify gaps and recommend improvements to your website, content and supporting information.",
    image: aiVisibilityImage,
    alt: "Looking straight up through an architectural opening toward the sky",
  },
  {
    when: "When your email marketing should be doing more for your business.",
    title: "Klaviyo Email Marketing",
    description:
      "We build email programs that support sales and repeat purchases. Engagements can include an audit, automated flows, segmentation and campaign planning, depending on what your business needs.",
    image: emailMarketingImage,
    alt: "A blank white notebook page and a pen catching sunlight on a wooden surface",
  },
  {
    when: "When a promising idea needs something you can test.",
    title: "Creative Lab",
    description:
      "A focused sprint to develop a campaign concept, interactive tool or digital prototype, with a defined deliverable and a clear next step.",
    image: creativeLabImage,
    alt: "A laptop showing a grid of photo edits on screen, on a desk in a studio",
  },
];

const StrategicProjects = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 28 : 340;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-16 scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #F2E4D8 0%, #F0CFDC 100%)" }}
    >
      <div className="relative mx-auto max-w-[1280px]">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div className="max-w-[640px]">
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
              className="inline-flex items-center gap-2 text-[#C96E8C] text-xs uppercase before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-[#C96E8C] before:inline-block mb-4"
            >
              Strategic Projects
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="text-[#20262A] text-[clamp(32px,4vw,48px)] leading-[1.08]"
            >
              One need. One project.
            </h2>
          </div>

          <div className="flex gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border-[1.5px] border-[#20262A]/15 bg-white/70 flex items-center justify-center text-[#20262A] hover:bg-[#20262A] hover:text-[#F2E4D8] hover:border-[#20262A] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border-[1.5px] border-[#20262A]/15 bg-white/70 flex items-center justify-center text-[#20262A] hover:bg-[#20262A] hover:text-[#F2E4D8] hover:border-[#20262A] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-7 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="flex-none w-[clamp(260px,32vw,340px)] [scroll-snap-align:start]"
            >
              <div
                className="aspect-[4/5] rounded-[18px] overflow-hidden mb-6"
                style={p.art ? { background: p.art } : undefined}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>
              <h3
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                className="text-[#20262A] text-2xl leading-[1.1] mb-3"
              >
                {p.title}
              </h3>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                className="text-[#20262A]/55 text-[11px] uppercase mb-3 leading-snug"
              >
                {p.when}
              </p>
              <p className="font-['Inter'] text-[#20262A]/72 text-[14.5px] leading-relaxed">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicProjects;
