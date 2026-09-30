import debbiePhoto from "@/assets/debbie-portrait.jpg";

const HeroUpperStory = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#171B1E] via-[#20262A] to-[#2E2A33] min-h-[720px] flex flex-col">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 38%, rgba(232,147,172,0.30), transparent 70%), radial-gradient(40% 40% at 90% 80%, rgba(95,194,232,0.14), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(23,27,30,0.92) 0%, rgba(23,27,30,0.55) 46%, rgba(23,27,30,0.05) 68%)",
        }}
      />

      <div className="relative z-[2] flex-1 flex items-center px-6 md:px-16 py-16 md:py-0">
        <div className="mx-auto w-full max-w-[1280px] grid md:grid-cols-[1.15fr_1fr] gap-16 items-center">
          <div className="max-w-[640px]">
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
              className="block text-[#5FC2E8] text-xs uppercase mb-6"
            >
              AI works best in expert hands
            </span>
            <h1
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="text-[#F2E4D8] text-[clamp(44px,6.4vw,88px)] leading-[0.98]"
            >
              Put AI to work
              <br />
              <em className="not-italic italic text-[#E893AC]">in your marketing.</em>
            </h1>
            <p className="font-['Inter'] text-[clamp(16px,1.4vw,19px)] leading-relaxed text-[#F2E4D8]/78 max-w-[480px] mt-7">
              We build websites, content and marketing systems that help your business move forward.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-9">
              <a
                href="/services#audit"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                className="inline-flex items-center rounded-full bg-[#E893AC] text-[#20262A] text-[13px] font-bold px-[30px] py-[15px] hover:opacity-90 transition-opacity"
              >
                Start with the Game Plan
              </a>
              <a
                href="#how-we-work"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                className="inline-flex items-center rounded-full border-[1.5px] border-[#F2E4D8]/40 text-[#F2E4D8] text-[13px] font-bold px-[30px] py-[15px] hover:bg-white/5 transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full bg-[#E893AC] rounded-2xl"
            />
            <img
              src={debbiePhoto}
              alt="Debbie Collins"
              className="relative w-full rounded-2xl aspect-[4/5] object-cover"
            />
            <div className="absolute left-4 bottom-4 bg-[#20262A]/80 backdrop-blur-sm px-4 py-2.5 rounded-[10px]">
              <div
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                className="text-[#F2E4D8] text-sm"
              >
                Debbie Collins
              </div>
              <div className="text-[#F2E4D8]/70 text-xs font-['Inter']">
                Founder, Reve
              </div>
            </div>
          </div>

          <div className="relative md:hidden">
            <img
              src={debbiePhoto}
              alt="Debbie Collins"
              className="w-full rounded-2xl aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroUpperStory;
