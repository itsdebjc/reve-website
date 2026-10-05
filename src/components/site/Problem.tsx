const Problem = () => {
  return (
    <section className="relative isolate bg-[#20262A] py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <span
        aria-hidden
        style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
        className="absolute -bottom-6 right-0 md:right-8 text-[16vw] leading-none text-[#F2E4D8]/[0.04] select-none pointer-events-none"
      >
        The Gap
      </span>

      <div className="relative mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          className="text-xs text-[#E893AC] uppercase mb-6"
        >
          The Problem
        </p>
        <h2
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
          className="text-[#F2E4D8] text-[clamp(32px,4.4vw,52px)] leading-[1.08] max-w-3xl mb-12"
        >
          You know AI can do more. Getting it to help is the hard part.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="font-['Inter'] text-[#F2E4D8]/80 text-lg leading-relaxed space-y-5">
            <p>
              AI works with what it is given. Most marketing grows one piece at a time. The website says one thing
              and the proposals say another. Content lives in different places. Knowledge leaves when people do.
            </p>
            <p>When AI starts from that, it produces more of the same, only faster.</p>
          </div>
          <div className="border-l-2 border-[#E893AC]/50 pl-8 font-['Inter'] text-[#F2E4D8]/80 text-lg leading-relaxed space-y-5">
            <p>
              We start with the foundation: your positioning, voice, offers and proof, organized so your team and
              AI can use them. Then we build the roadmap, systems and projects on top of it.
            </p>
            <p className="font-bold text-[#F2E4D8]">
              That is where Reve starts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
