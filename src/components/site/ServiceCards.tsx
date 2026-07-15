const ServiceCards = () => {
  const services = [
    { title: "THE AI MARKETING AUDIT", tag: "START WHERE THE WORK FEELS HARD", description: "I look at your store, your email, your ads and your content, then map where AI can save you the most time and make you the most money. You leave with a clear plan, not a list of tools.", bullets: ["90-minute strategy session", "Map of your current workflow and AI gaps", "Prioritized build plan", "Tool and setup recommendations", "Written report you can act on"], highlighted: true },
    { title: "THE FOUNDATION AND BUILD", description: "Set AI up to know your brand, then build what sells.", bullets: ["Voice, positioning and offer library", "Client persona and messaging map", "AI training environment", "Team prompt library", "Standard operating procedures"], highlighted: false },
    { title: "AI GROWTH PARTNER", subtitle: "Keep selling more", description: "AI moves fast and so does ecommerce.", bullets: ["New flows and campaigns as your store grows", "Fresh ad and content creative", "Ongoing optimization and support"], highlighted: false }
  ];
  return (
    <section className="bg-[#FDFAF4] px-6 md:px-16 pb-24">
      <div className="mx-auto max-w-6xl space-y-6">
        {services.map((service, idx) => (
          <div key={idx} className={`border-2 rounded-2xl p-10 ${service.highlighted ? "border-[#E893AC] bg-white" : "border-[rgba(38,50,56,0.15)] bg-white"}`}>
            {service.tag && <div className="bg-[#E893AC] text-white text-xs font-bold px-4 py-2 rounded-lg inline-block mb-6">{service.tag}</div>}
            <h3 className="font-['Anton'] text-3xl mb-4">{service.title}</h3>
            {service.subtitle && <div className="font-['Anton'] text-2xl text-[#E893AC] mb-6">{service.subtitle}</div>}
            <p className="text-base leading-relaxed opacity-65 mb-6 max-w-3xl">{service.description}</p>
            <div className="space-y-3 mb-8 text-base">
              {service.bullets.map((bullet, i) => (<div key={i}>✓ {bullet}</div>))}
            </div>
            <a href="/services" className={`font-['Anton'] text-sm px-8 py-4 rounded-lg inline-block ${service.highlighted ? "bg-[#E893AC] text-white hover:opacity-90" : "border-2 border-[#E893AC] text-[#E893AC] hover:bg-[#E893AC]/5"}`}>BOOK A CALL</a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServiceCards;
