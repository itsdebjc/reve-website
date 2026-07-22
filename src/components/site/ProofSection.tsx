const ProofSection = () => {
  const stats = [
    { stat: "60%", caption: "Faster proposals for an advisory firm" },
    { stat: "3X", caption: "More publishing for a boutique agency" },
    { stat: "80%", caption: "Less editing for a B2B software team" },
  ];

  return (
    <section className="bg-[#20262A] py-24 md:py-32 px-6 text-center border-b border-white/10">
      <div className="mx-auto max-w-[1000px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          className="text-[13px] font-bold text-[#5FC2E8] uppercase mb-6"
        >
          The Proof
        </p>
        <h2
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
          className="text-[#F2E4D8] text-3xl md:text-4xl uppercase mb-14 leading-[1.1]"
        >
          See what happens when AI actually knows the business.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {stats.map((item, idx) => (
            <div key={idx}>
              <div
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-[#5FAF95] text-5xl md:text-6xl mb-4"
              >
                {item.stat}
              </div>
              <div className="font-['Inter'] text-sm font-bold text-[#F2E4D8]/70 uppercase tracking-wide">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/case-studies"
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-sm border-2 border-[#F2E4D8]/40 text-[#F2E4D8] px-8 py-4 rounded-[10px] hover:bg-white/5 transition-colors inline-block uppercase"
        >
          See the Case Studies
        </a>
      </div>
    </section>
  );
};

export default ProofSection;
