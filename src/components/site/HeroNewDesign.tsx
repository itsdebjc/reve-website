import debbiePhoto from "@/assets/debbie-collins.jpeg";

const HeroNewDesign = () => {
  return (
    <section className="bg-[#FDFAF4] py-12 md:py-28 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 md:px-16 grid md:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div>
          <h1 style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "88px", lineHeight: "0.92", textTransform: "uppercase", margin: "0 0 28px"}} className="leading-tight mb-7">
            AI THAT<br />
            <span className="text-[#E893AC]">KNOWS YOUR</span><br />
            BRAND.
          </h1>
          <p style={{fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "1.65"}} className="opacity-65 max-w-lg mb-8">
            I help ecommerce brands use AI to sell more, in your voice, across your store, your email and your ads. You keep the strategy. AI does the rest.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="/services" style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase"}} className="bg-[#4F8577] text-white px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity inline-block leading-tight">
              GET AN AUDIT
            </a>
            <a href="/services" style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase"}} className="border-2 border-[#263238] text-[#263238] px-8 py-4 rounded-[10px] hover:bg-gray-50 transition-colors inline-block leading-tight">
              SEE HOW IT WORKS
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={debbiePhoto}
            alt="Debbie Collins"
            className="w-full rounded-2xl aspect-[4/5] object-cover"
          />
          <div className="absolute left-4 bottom-4 bg-black/65 backdrop-blur-sm px-4 py-2.5 rounded-[10px]">
            <div style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "14px"}} className="text-white">DEBBIE COLLINS</div>
            <div className="text-white/80 text-xs">Founder, RÊVE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewDesign;
