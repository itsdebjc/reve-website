import problemImage from "@/assets/offer-ai-roadmap.jpg";

const MOMENTS = [
  "AI works with what it is given.",
  "The website says one thing and the proposals say another.",
  "Content lives in different places. Knowledge leaves when people do.",
  "When AI starts from that, it produces more of the same, only faster.",
];

const Problem = () => {
  return (
    <section className="relative isolate bg-[#20262A] py-28 md:py-44 px-6 md:px-16 overflow-hidden">
      <img
        src={problemImage}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(32,38,42,0.94) 0%, rgba(32,38,42,0.7) 55%, rgba(32,38,42,0.35) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          className="inline-flex items-center gap-2 text-xs text-[#E893AC] uppercase mb-10 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-[#E893AC] before:inline-block"
        >
          The Problem
        </p>
        <h2
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.02em" }}
          className="text-[#F2E4D8] text-[clamp(44px,7.2vw,108px)] leading-[0.98] max-w-[1100px]"
        >
          You know AI can do more.
          <br />
          <em className="not-italic italic text-[#E893AC]">Getting it to help is the hard part.</em>
        </h2>

        <ul className="mt-24 md:mt-36 max-w-[980px]">
          {MOMENTS.map((m, i) => (
            <li
              key={m}
              className="grid grid-cols-[48px_1fr] md:grid-cols-[96px_1fr] items-baseline gap-4 border-t border-white/15 py-8 md:py-10"
            >
              <span
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
                className="text-[#E893AC] text-xs md:text-sm"
              >
                0{i + 1}
              </span>
              <span
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, letterSpacing: "-0.01em" }}
                className="text-[#F2E4D8] text-2xl md:text-[38px] leading-[1.15]"
              >
                {m}
              </span>
            </li>
          ))}
          <li className="border-t border-white/15" aria-hidden />
        </ul>

        <div className="mt-24 md:mt-36 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-20 items-end">
          <p className="font-['Inter'] text-[#F2E4D8]/80 text-lg md:text-xl leading-relaxed max-w-[520px]">
            We start with the foundation: your positioning, voice, offers and proof, organized so your team and AI
            can use them. Then we build the roadmap, systems and projects on top of it.
          </p>
          <p
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.02em" }}
            className="text-[#E893AC] text-[clamp(36px,5vw,72px)] leading-[1.02] italic md:text-right"
          >
            That is where Reve starts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
