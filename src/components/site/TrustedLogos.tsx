import meiraLogo from "@/assets/meira-logo.png";
import intuitionLogo from "@/assets/intuition-logo.png";
import lkaLogo from "@/assets/lka-logo.png";
import maFolieLogo from "@/assets/ma-folie-logo.png";

const clients = [
  { name: "Meira", logo: meiraLogo },
  { name: "Ma Folie", logo: maFolieLogo },
  { name: "Intuition", logo: intuitionLogo },
  { name: "LKA", logo: lkaLogo },
];

const TrustedLogos = () => {
  const row = [...clients, ...clients];

  return (
    <div className="overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {row.map((client, i) => (
          <div key={i} className="flex items-center shrink-0 px-8">
            <img
              src={client.logo}
              alt={client.name}
              className={`h-12 md:h-14 w-auto object-contain ${
                client.name === "LKA" ? "scale-150" : ""
              } ${
                client.name === "Meira" || client.name === "Ma Folie" || client.name === "LKA"
                  ? "opacity-100 invert brightness-200"
                  : "grayscale opacity-80"
              }`}
            />
            <span className="ml-8 text-primary">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedLogos;
