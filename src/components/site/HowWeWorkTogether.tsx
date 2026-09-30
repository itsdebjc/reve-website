import { useRef } from "react";
import websiteImage from "@/assets/system-website.jpg";
import dashboardImage from "@/assets/system-ecommerce-dashboard.png";

const BRAIN_IMAGE = "/system-marketing.jpg";

const SYSTEMS = [
  {
    num: "01",
    name: "Marketing Assistant",
    when: "When you need an answer, not a search.",
    desc: "Ask it anything. It answers like it has worked with you for years.",
    image: "/system-founder.jpg",
    alt: "Marketing Assistant preview with a daily briefing and calendar",
  },
  {
    num: "02",
    name: "Content Engine",
    when: "When content keeps slipping.",
    desc: "On brand posts, emails and articles, in your voice.",
    image: "/system-content.jpg",
    alt: "Content Engine preview with a weekly content calendar",
  },
  {
    num: "03",
    name: "Creative Lab",
    when: "When you need visuals fast.",
    desc: "Images and video for your brand, in minutes.",
    image: websiteImage,
    alt: "Creative Lab preview of an AI-built website hero",
  },
  {
    num: "04",
    name: "Customer Intelligence",
    when: "When you are guessing what customers want.",
    desc: "What your customers want, and what to say to them.",
    image: dashboardImage,
    alt: "Customer Intelligence preview with revenue source and repeat rate",
  },
  {
    num: "05",
    name: "Business Health Dashboard",
    when: "When you do not know what is actually working.",
    desc: "What is working and your next move, on one screen.",
    image: "/system-business-health.jpg",
    alt: "Business Health Dashboard preview with revenue and pipeline",
  },
  {
    num: "06",
    name: "New Business Engine",
    when: "When proposals eat your week.",
    desc: "Proposals and pitches that win, 60% faster.",
    image: "/system-proposal.jpg",
    alt: "New Business Engine preview with a proposal draft",
  },
];

const HowWeWorkTogether = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 22 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="how-we-work" className="relative overflow-hidden bg-[#F2E4D8] py-24 md:py-32 px-6 md:px-16">
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "-160px",
          top: "40px",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(232,147,172,0.55), rgba(232,147,172,0.08) 55%, transparent 72%)",
          filter: "blur(6px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid md:grid-cols-[1fr_0.9fr] gap-14 items-center mb-16">
          <div>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
              className="inline-flex items-center gap-2 text-[#C96E8C] text-xs uppercase before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-[#C96E8C] before:inline-block"
            >
              How we work together
            </span>
            <h2
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="text-[#20262A] text-[clamp(34px,4.4vw,56px)] leading-[1.04] mt-4"
            >
              Your Brand Brain,
              <br />
              then your systems.
            </h2>
            <p className="font-['Inter'] text-[17px] leading-relaxed text-[#20262A]/72 max-w-[520px] mt-5">
              One core built from your business, your voice, your offers, your proof. Every system below draws on it.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full bg-[#5FC2E8] rounded-2xl"
            />
            <div className="relative rounded-2xl overflow-hidden border border-[#20262A]/12 shadow-[0_24px_48px_-24px_rgba(32,38,42,0.35)]">
              <img
                src={BRAIN_IMAGE}
                alt="Marketing Brain preview showing brand voice, offers and how the AI uses them"
                loading="lazy"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-5 flex-wrap mb-10">
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
            className="text-[#20262A]/50 text-xs uppercase"
          >
            The six systems that run on it
          </p>

          <div className="flex gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous system"
              className="w-11 h-11 rounded-full border-[1.5px] border-[#20262A]/12 bg-white flex items-center justify-center text-[#20262A] hover:bg-[#E893AC] hover:border-[#E893AC] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next system"
              className="w-11 h-11 rounded-full border-[1.5px] border-[#20262A]/12 bg-white flex items-center justify-center text-[#20262A] hover:bg-[#E893AC] hover:border-[#E893AC] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-[22px] overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SYSTEMS.map((s) => (
            <article
              key={s.num}
              className="flex-none w-[clamp(260px,30vw,320px)] [scroll-snap-align:start] bg-white rounded-[20px] overflow-hidden border border-[#20262A]/12 flex flex-col"
            >
              <div className="h-[190px] relative overflow-hidden bg-[#20262A]">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
                <span
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
                  className="absolute top-4 left-4 bg-[#20262A]/70 backdrop-blur-sm text-white/90 text-[11px] px-2 py-1 rounded-md"
                >
                  {s.num}
                </span>
              </div>
              <div className="p-[22px] pb-[26px]">
                <div
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
                  className="text-[#20262A] text-xl"
                >
                  {s.name}
                </div>
                <p className="mt-2.5 text-[13.5px] font-semibold leading-snug text-[#C96E8C]">
                  {s.when}
                </p>
                <p className="mt-2 text-sm leading-[1.55] text-[#20262A]/68 font-['Inter']">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTogether;
