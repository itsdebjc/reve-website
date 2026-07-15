const HonestSection = () => {
  return (
    <section className="bg-[#FDFAF4] py-16 md:py-24 px-6 relative">
      <div className="mx-auto max-w-6xl relative">
        {/* Watermark background - TOP RIGHT */}
        <div style={{fontFamily: "'Anton', sans-serif", fontWeight: 400}} className="absolute -top-12 -right-20 text-[#E893AC] text-[120px] md:text-[200px] opacity-10 leading-none pointer-events-none select-none whitespace-nowrap">
          THE TRUTH
        </div>

        <div className="relative z-10">
          <p style={{fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.14em"}} className="text-[#E893AC] mb-5 uppercase">
            LET'S BE HONEST
          </p>
          <h2 style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "48px", lineHeight: "1.05", textTransform: "uppercase"}} className="mb-10 max-w-2xl">
            YOU CAN'T PROMPT YOUR WAY TO <span className="text-[#E893AC]">GOOD WORK</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-8">
            <p style={{fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "1.7"}} className="opacity-65">
              AI has to know your brand: your products, your customers, the way you talk to them.
            </p>
            <p style={{fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "1.7"}} className="opacity-65 border-l-2 border-[#E893AC] pl-6">
              Give it that and it does real work. Skip it and you get generic. That's the part I build with you.
            </p>
          </div>

          <a href="/services" style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase"}} className="bg-[#4F8577] text-white px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity inline-block leading-tight">
            FIX THIS WITH ME →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HonestSection;
