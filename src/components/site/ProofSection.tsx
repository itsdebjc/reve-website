const ProofSection = () => {
  const stats = [
    {
      stat: "60%",
      caption: "Faster email flows for a DTC skincare brand",
    },
    {
      stat: "3X",
      caption: "More content published for an apparel brand",
    },
    {
      stat: "80%",
      caption: "Less editing on ad copy for a home goods brand",
    },
  ];

  return (
    <section className="bg-[#263238] py-16 md:py-24 px-6 text-center">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs md:text-sm font-bold tracking-widest text-[#F3C9A8] mb-6 uppercase">
          THE PROOF
        </p>
        <h2 className="font-['Anton'] text-3xl md:text-4xl text-white mb-12 whitespace-nowrap">
          AI THAT ACTUALLY KNOWS YOUR BRAND.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((item, idx) => (
            <div key={idx}>
              <div className="font-['Anton'] text-5xl md:text-6xl text-white mb-4">
                {item.stat}
              </div>
              <div className="text-xs md:text-sm font-bold text-[#F5EEDD] uppercase tracking-wide">
                {item.caption}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/case-studies"
          className="font-['Anton'] text-sm border-2 border-white text-white px-8 py-4 rounded-[10px] hover:bg-white/10 transition-colors inline-block"
        >
          SEE THE CASE STUDIES
        </a>
      </div>
    </section>
  );
};

export default ProofSection;
