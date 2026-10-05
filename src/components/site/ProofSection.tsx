import { useEffect, useRef, useState } from "react";

const CountUp = ({ value }: { value: string }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const end = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          setN(Math.round(end * (1 - Math.pow(1 - t, 3))));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        setN(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end]);

  return (
    <div ref={ref}>
      {n}
      {suffix}
    </div>
  );
};

const ProofSection = () => {
  const stats = [
    { stat: "60%", caption: "Faster proposals for an advisory firm" },
    { stat: "3X", caption: "More publishing for a boutique agency" },
    { stat: "80%", caption: "Less editing for a B2B software team" },
  ];

  return (
    <section className="bg-[#20262A] py-28 md:py-44 px-6 text-center border-b border-white/10">
      <div className="mx-auto max-w-[1000px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          className="text-xs text-[#5FC2E8] uppercase mb-6"
        >
          The Proof
        </p>
        <h2
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
          className="text-[#F2E4D8] text-[clamp(38px,6vw,84px)] mb-20 leading-[1.02] max-w-[900px] mx-auto"
        >
          What happens when AI knows your business.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {stats.map((item, idx) => (
            <div key={idx}>
              <div
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                className="text-[#E893AC] text-7xl md:text-8xl mb-4"
              >
                <CountUp value={item.stat} />
              </div>
              <div className="font-['Inter'] text-sm font-bold text-[#F2E4D8]/70 uppercase tracking-wide">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/case-studies"
          style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
          className="inline-flex items-center rounded-full border-[1.5px] border-[#F2E4D8]/60 text-[#F2E4D8] text-[13px] font-bold px-[30px] py-[15px] hover:bg-white/10 transition-colors"
        >
          See the Case Studies
        </a>
      </div>
    </section>
  );
};

export default ProofSection;
