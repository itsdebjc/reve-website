const WhatChangesSection = () => {
  return (
    <section className="bg-[#F2E4D8] py-24 md:py-32 px-6 md:px-16">
      <div className="mx-auto max-w-[1280px] grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
            className="text-xs text-[#C96E8C] uppercase mb-6"
          >
            What Changes
          </p>
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            className="text-[#20262A] text-[clamp(30px,4vw,48px)] leading-[1.08]"
          >
            AI that works the way your business does.
          </h2>
        </div>
        <p className="font-['Inter'] text-[#20262A]/80 text-lg leading-relaxed">
          Your marketing gets sharper and faster. The repetitive work drops and the thinking stays with your team.
          Your team can run what we build, so you stay in control of your marketing.
        </p>
      </div>
    </section>
  );
};

export default WhatChangesSection;
