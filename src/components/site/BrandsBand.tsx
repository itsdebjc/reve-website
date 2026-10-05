import organikaLogo from "@/assets/organika-logo.png";
import intuitionLogo from "@/assets/intuition-logo.png";
import meiraLogo from "@/assets/meira-logo.png";
import maFolieLogo from "@/assets/ma-folie-logo.png";
import lkaLogo from "@/assets/lka-logo.png";

type Brand = { name: string; logo?: string; logoClass?: string };

const BRANDS: Brand[] = [
  { name: "Organika", logo: organikaLogo, logoClass: "h-8 md:h-11" },
  { name: "Nature's Fare" },
  { name: "Blue Ruby" },
  { name: "Candy Lab Toys" },
  { name: "Fancy Face Makeup" },
  { name: "Intuition Liners", logo: intuitionLogo, logoClass: "h-10 md:h-14" },
  { name: "Meira", logo: meiraLogo, logoClass: "h-6 md:h-8" },
  { name: "Ma Folie", logo: maFolieLogo, logoClass: "h-14 md:h-20" },
  { name: "Little Kitchen Academy", logo: lkaLogo, logoClass: "h-16 md:h-24" },
];

const BrandsBand = () => {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section aria-label="Brands we have led marketing for" className="bg-[#171B1E] py-14 md:py-20 overflow-hidden">
      <p
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
        className="text-center text-xs uppercase text-[#E893AC] mb-10 md:mb-12 px-6"
      >
        Marketing leadership behind brands like
      </p>
      <div className="marquee flex w-max items-center hover:[animation-play-state:paused]">
        {row.map((b, i) => {
          const dup = i >= BRANDS.length;
          return (
            <span
              key={i}
              aria-hidden={dup}
              className={`flex items-center justify-center px-10 md:px-16 ${dup ? "marquee-dup" : ""}`}
            >
              {b.logo ? (
                <img
                  src={b.logo}
                  alt={dup ? "" : b.name}
                  loading="lazy"
                  className={`${b.logoClass} w-auto max-w-none object-contain brightness-0 invert opacity-85`}
                />
              ) : (
                <span
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
                  className="text-[#F2E4D8]/85 text-3xl md:text-4xl whitespace-nowrap"
                >
                  {b.name}
                </span>
              )}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default BrandsBand;
