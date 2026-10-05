const WhatChangesSection = () => {
  return (
    <section className="bg-[#F2E4D8] py-32 md:py-48 px-6 md:px-16">
      <div className="mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
          className="inline-flex items-center gap-2 text-xs text-[#C96E8C] uppercase mb-10 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-[#C96E8C] before:inline-block"
        >
          What Changes
        </p>
        <h2
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.02em" }}
          className="text-[#20262A] text-[clamp(44px,7.6vw,116px)] leading-[0.98] max-w-[1100px]"
        >
          AI that works the way{" "}
          <em className="not-italic italic text-[#C96E8C]">your business does.</em>
        </h2>
        <p className="font-['Inter'] text-[#20262A]/75 text-lg md:text-xl leading-relaxed max-w-[560px] mt-16 md:mt-24 md:ml-auto">
          Your marketing gets sharper and faster. The repetitive work drops and the thinking stays with your team.
          Your team can run what we build, so you stay in control of your marketing.
        </p>
      </div>
    </section>
  );
};

export default WhatChangesSection;
