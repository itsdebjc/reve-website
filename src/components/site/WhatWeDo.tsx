const OFFERS = [
  {
    num: "01",
    title: "AI Marketing Roadmap",
    when: "When you're ready to invest in AI but need a clear direction.",
    description:
      "We review your marketing, existing systems and how your team works. Together, we identify where AI can make a useful difference and what needs to be in place first.",
    href: "/services#audit",
    cta: "See the Roadmap",
    tags: [] as string[],
  },
  {
    num: "02",
    title: "AI Implementation",
    when: "When your team needs AI to do more than draft.",
    description:
      "We build AI tools and systems around your business. Each engagement includes testing, refinement and training with your team.",
    href: "/services#implementation",
    cta: "See what we build",
    tags: ["AI Automations", "Connected Workflows", "AI Assistants", "Custom Apps and Tools"],
  },
  {
    num: "03",
    title: "Strategic Projects",
    when: "When you have one specific marketing need.",
    description: "One need. One project. Each one can stand alone or work together.",
    href: "/services#projects",
    cta: "See the projects",
    tags: [
      "Brand Knowledge Hub",
      "Website Strategy and Build",
      "AI Search Visibility Audit and Plan",
      "Klaviyo Email Marketing",
      "Creative Lab",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="relative overflow-hidden bg-[#F2E4D8] py-24 md:py-32 px-6 md:px-16 scroll-mt-20">
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "-160px",
          top: "40px",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(232,147,172,0.45), rgba(232,147,172,0.06) 55%, transparent 72%)",
          filter: "blur(6px)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="max-w-[720px] mb-14 md:mb-16">
          <span
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
            className="inline-flex items-center gap-2 text-[#C96E8C] text-xs uppercase before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-[#C96E8C] before:inline-block"
          >
            What we do
          </span>
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            className="text-[#20262A] text-[clamp(34px,4.4vw,56px)] leading-[1.04] mt-4"
          >
            Marketing strategy.
            <br />
            AI implementation.
          </h2>
          <p className="font-['Inter'] text-[17px] leading-relaxed text-[#20262A]/72 max-w-[560px] mt-5">
            Reve is an AI ready marketing studio. Every engagement starts with what your business needs to achieve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {OFFERS.map((o) => (
            <article
              key={o.num}
              className="flex flex-col rounded-[22px] border border-[#20262A]/12 bg-white p-8 md:p-9"
            >
              <span
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
                className="text-[#C96E8C] text-[12px] uppercase mb-6"
              >
                {o.num}
              </span>
              <h3
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                className="text-[#20262A] text-[28px] leading-[1.1] mb-4"
              >
                {o.title}
              </h3>
              <p
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                className="text-[#20262A]/55 text-[11px] uppercase leading-snug mb-4"
              >
                {o.when}
              </p>
              <p className="font-['Inter'] text-[#20262A]/75 text-[15px] leading-relaxed mb-6">{o.description}</p>

              {o.tags.length > 0 && (
                <ul className="flex flex-wrap gap-2 mb-8">
                  {o.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[#C96E8C]/40 bg-[#E893AC]/10 px-3 py-1 font-['Inter'] text-[12.5px] text-[#20262A]/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={o.href}
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
                className="mt-auto inline-flex items-center text-[13px] font-bold text-[#C96E8C] hover:text-[#20262A] transition-colors"
              >
                {o.cta} &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
