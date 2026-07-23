import { useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "The Game Plan",
    desc: "We map what to fix first and where AI helps most.",
  },
  {
    num: "02",
    title: "Your Brand Brain",
    desc: "We build the core, your business taught to AI.",
  },
  {
    num: "03",
    title: "Your Systems",
    desc: "We build the ones you picked, all drawing on the Brain.",
  },
  {
    num: "04",
    title: "The Handover",
    desc: "Your team learns to run it, so the skill sticks.",
  },
];

const StartHere = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* Start Here */}
      <section id="audit" className="bg-[#20262A] py-24 md:py-32 px-6 md:px-16 scroll-mt-20">
        <div className="mx-auto max-w-[720px] text-center">
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#5FC2E8] uppercase mb-6"
          >
            Start Here
          </p>
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#F2E4D8] text-4xl md:text-5xl leading-[1.05] uppercase mb-8"
          >
            Start where work feels hard.
          </h2>
          <p className="font-['Inter'] text-[#F2E4D8]/75 text-lg leading-relaxed mb-3 max-w-[560px] mx-auto">
            Every project begins with an AI Marketing Audit, we call it the
            Game Plan. You'll leave with a practical roadmap, not another
            list of tools.
          </p>
          <p className="font-['Inter'] text-[#F2E4D8] text-lg leading-relaxed mb-10">
            Strategy comes first. The tools just make it sharper.
          </p>
          <a
            href="/services#audit"
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="inline-flex text-sm bg-[#5FAF95] text-[#20262A] px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity uppercase"
          >
            Get Your Game Plan →
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1D2224] pt-24 pb-24 md:pt-32 md:pb-32 px-6 md:px-16 border-t border-b border-white/10">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center mb-14">
            <p
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
              className="text-[13px] font-bold text-[#5FC2E8] uppercase mb-6"
            >
              How It Works
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
              className="text-[#F2E4D8] text-3xl md:text-4xl uppercase"
            >
              Roadmap. Build. Own. Grow.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-14">
            {STEPS.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.num}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-2xl p-7 border transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-[#5FAF95] border-[#5FAF95] -translate-y-1 shadow-[0_16px_32px_-12px_rgba(95,175,149,0.4)]"
                      : "bg-[#20262A] border-white/10 hover:border-[#5FAF95]/40"
                  }`}
                >
                  <div
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className={`text-2xl mb-6 transition-colors duration-300 ${
                      isActive ? "text-[#20262A]" : "text-[#F2E4D8]/40"
                    }`}
                  >
                    {s.num}
                  </div>
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className={`text-lg uppercase mb-3 transition-colors duration-300 ${
                      isActive ? "text-[#20262A]" : "text-[#F2E4D8]"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`font-['Inter'] text-sm leading-relaxed transition-colors duration-300 ${
                      isActive ? "text-[#20262A]/80" : "text-[#F2E4D8]/65"
                    }`}
                  >
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="/services"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="inline-flex text-sm border-2 border-[#F2E4D8]/40 text-[#F2E4D8] px-8 py-4 rounded-[10px] hover:bg-white/5 hover:border-[#F2E4D8] transition-colors uppercase"
            >
              See Our Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartHere;
