const WhyReve = () => {
  return (
    <section className="bg-[#20262A] py-24 md:py-28 px-6 md:px-16">
      <div className="mx-auto max-w-[720px] text-center">
        <span
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          className="inline-flex items-center gap-2 text-[#5FC2E8] text-xs uppercase mb-8"
        >
          Why Reve
        </span>
        <p
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
          className="text-[#F2E4D8] text-[clamp(24px,3vw,34px)] leading-[1.35]"
        >
          Great marketing starts with expertise. That's why you hire a marketer, not a tool. I don't start with software. I start with how your business works. Twenty five years in marketing,{" "}
          <em className="not-italic italic text-[#E893AC]">three deep in AI</em>, and I run my own businesses. AI works best in expert hands, so I put it in yours.
        </p>
      </div>
    </section>
  );
};

export default WhyReve;
