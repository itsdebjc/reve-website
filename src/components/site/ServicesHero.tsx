const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-end">
      {/* Background: swap this div for a full bleed <img> when a photo is ready.
          Keep the scrim below over whatever fills this layer, for text legibility. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(155deg, #171B1E 0%, #20262A 45%, #2E2A33 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 55% at 80% 20%, rgba(95,194,232,0.18), transparent 70%), radial-gradient(50% 50% at 15% 85%, rgba(232,147,172,0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "linear-gradient(0deg, rgba(23,27,30,0.65) 0%, transparent 45%)" }}
      />

      <div className="relative px-6 md:px-16 pt-40 pb-16 md:pb-20">
        <div className="max-w-[1280px] mx-auto">
          <span
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}
            className="inline-flex items-center gap-2.5 text-[#E893AC] text-[13px] uppercase mb-8"
          >
            <span className="w-4 h-[1.5px] bg-[#E893AC] inline-block" /> Our Services
          </span>
          <h1
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            className="text-[#F2E4D8] text-[clamp(52px,9vw,132px)] leading-[0.98] mb-10"
          >
            Marketing strategy.
            <br />
            <em className="not-italic italic text-[#E893AC]">AI implementation.</em>
          </h1>
          <div className="font-['Inter'] text-[#F2E4D8]/80 text-lg md:text-xl leading-relaxed max-w-[640px] space-y-5">
            <p>
              Reve is an AI ready marketing studio. We help businesses put AI to work and deliver the marketing projects that move them forward.
            </p>
            <p>
              Some clients need a clear roadmap and help implementing it. Others need a stronger website, a better email program or a more consistent way to create content. Every engagement starts with what the business needs to achieve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesHero;
