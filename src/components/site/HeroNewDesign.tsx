import { useState } from "react";

const HeroNewDesign = () => {
  const [photoUrl] = useState("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop");

  return (
    <section className="bg-[#FDFAF4] py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div>
          <h1 className="font-['Anton'] text-6xl md:text-7xl leading-tight mb-7">
            AI THAT<br />
            <span className="text-[#E893AC]">KNOWS YOUR</span><br />
            BRAND.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-65 max-w-lg mb-8">
            I help ecommerce brands use AI to sell more, in your voice, across your store, your email and your ads. You keep the strategy. AI does the rest.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="/services"
              className="font-['Anton'] text-sm bg-[#4F8577] text-white px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
            >
              GET AN AUDIT
            </a>
            <a
              href="/services"
              className="font-['Anton'] text-sm border-2 border-[#263238] text-[#263238] px-8 py-3 rounded-[10px] hover:bg-gray-50 transition-colors"
            >
              SEE HOW IT WORKS
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={photoUrl}
            alt="Debbie Collins"
            className="w-full rounded-2xl aspect-[4/5] object-cover"
          />
          <div className="absolute left-4 bottom-4 bg-black/65 backdrop-blur-sm px-4 py-2.5 rounded-[10px]">
            <div className="font-['Anton'] text-white text-sm">DEBBIE COLLINS</div>
            <div className="text-white/80 text-xs">Founder, RÊVE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNewDesign;
