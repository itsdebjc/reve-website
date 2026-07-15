const ServiceCards = () => {
  const services = [
    {
      title: "THE AI MARKETING AUDIT",
      tag: "START WHERE THE WORK FEELS HARD",
      description: "I look at your store, your email, your ads and your content, then map where AI can save you the most time and make you the most money.",
      bullets: ["90-minute strategy session", "Map of current workflow and AI gaps", "Prioritized build plan", "Written report you can act on"],
      color: "#E893AC",
      colorName: "pink"
    },
    {
      title: "THE FOUNDATION AND BUILD",
      description: "Set AI up to know your brand, then build what sells. Everything AI needs to know your brand: your voice, your offers, how you talk to clients.",
      bullets: ["Voice, positioning and offer library", "Client persona and messaging map", "AI training environment", "Team prompt library"],
      color: "#4F8577",
      colorName: "teal"
    },
    {
      title: "AI GROWTH PARTNER",
      subtitle: "Keep selling more",
      description: "AI moves fast and so does ecommerce. I help your team keep improving with new flows, fresh creative and ongoing support.",
      bullets: ["New flows and campaigns as your store grows", "Fresh ad and content creative", "Ongoing optimization and support"],
      color: "#263238",
      colorName: "ink"
    }
  ];

  return (
    <section className="bg-[#FDFAF4] px-6 md:px-16 pb-24">
      <div className="mx-auto max-w-6xl space-y-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{borderColor: service.color, borderWidth: "2px"}}
            className="rounded-2xl p-10 bg-white"
          >
            {service.tag && (
              <div style={{backgroundColor: service.color, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.06em"}} className="text-white px-4 py-2 rounded-lg inline-block mb-6 uppercase">
                {service.tag}
              </div>
            )}
            <h3 style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "32px", textTransform: "uppercase", lineHeight: "1.2"}} className="mb-4">{service.title}</h3>
            {service.subtitle && (
              <div style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "22px", color: service.color, textTransform: "uppercase"}} className="mb-6">{service.subtitle}</div>
            )}
            <p style={{fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.65"}} className="opacity-65 mb-6 max-w-3xl">{service.description}</p>
            <div style={{fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px"}} className="space-y-3 mb-8">
              {service.bullets.map((bullet, i) => (
                <div key={i}>✓ {bullet}</div>
              ))}
            </div>
            <a
              href="/services"
              style={{fontFamily: "'Anton', sans-serif", fontWeight: 400, fontSize: "14px", textTransform: "uppercase", backgroundColor: service.colorName === "ink" ? "transparent" : service.color, color: service.colorName === "ink" ? service.color : "white", borderWidth: service.colorName === "ink" ? "2px" : "0", borderColor: service.color}}
              className="px-8 py-4 rounded-lg inline-block hover:opacity-90 transition-opacity leading-tight"
            >
              BOOK A CALL
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
