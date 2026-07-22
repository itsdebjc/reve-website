const WhatChangesSection = () => {
  return (
    <section className="bg-[#F2E4D8] py-24 md:py-32 px-6 md:px-16">
      <div className="mx-auto max-w-[1280px] grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#C2477A] uppercase mb-6"
          >
            What Changes
          </p>
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#263238] text-3xl md:text-4xl leading-[1.05] uppercase"
          >
            AI stops guessing. It starts working.
          </h2>
        </div>
        <p className="font-['Inter'] text-[#263238]/80 text-lg leading-relaxed">
          Your marketing gets sharper, not just faster. The busywork drops.
          The thinking stays yours. And your team can run it, so you're not
          dependent on anyone, including me. You end up a better marketer
          with AI, not a worse one who leans on it.
        </p>
      </div>
    </section>
  );
};

export default WhatChangesSection;
