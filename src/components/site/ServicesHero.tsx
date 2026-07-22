const ServicesHero = () => {
  return (
    <section className="bg-[#20262A] pt-32 pb-16 px-6 md:px-16">
      <div className="mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          className="text-[13px] font-bold text-[#7ED2F2] uppercase mb-6"
        >
          Services
        </p>
        <h1
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400, maxWidth: "26ch" }}
          className="text-[#F2E4D8] text-4xl md:text-5xl leading-[1.05] uppercase mb-6"
        >
          Rebuild your marketing so AI actually works.
        </h1>
        <p className="font-['Inter'] text-[#E8E1D8] text-base md:text-lg leading-relaxed max-w-2xl">
          Every engagement starts the same way. We find what's getting in
          the way, then build the systems that fix it.
        </p>
      </div>
    </section>
  );
};
export default ServicesHero;
