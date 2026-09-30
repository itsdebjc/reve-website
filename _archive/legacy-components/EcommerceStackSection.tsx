const EcommerceStackSection = () => {
  const steps = [
    {
      number: "01",
      title: "AUDIT",
      description: "We look at how you work and find where AI can help most.",
      highlighted: false,
    },
    {
      number: "02",
      title: "FOUNDATION",
      description: "We set AI up to know your business inside out: your voice, your offers, how you talk to clients.",
      highlighted: true,
    },
    {
      number: "03",
      title: "BUILD",
      description: "We build what the audit points to: content, proposals, dashboards, ads, a personal assistant.",
      highlighted: false,
    },
    {
      number: "04",
      title: "GROW",
      description: "Ecommerce moves fast. We keep your systems sharp with new flows and fresh creative.",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-[#FDFAF4] py-16 md:py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs md:text-sm font-bold tracking-widest text-[#E893AC] mb-5 uppercase">
          WHAT I DO
        </p>
        <h2 className="font-['Anton'] text-3xl md:text-4xl mb-6">YOUR ECOMMERCE AI STACK</h2>
        <p className="text-base md:text-lg leading-relaxed opacity-65 max-w-3xl mb-12">
          We start with an AI Marketing Audit, then build the Foundation: everything AI needs to know your brand, your products and your voice. From there we build what your store needs: Klaviyo email and SMS flows, product and collection page copy, Meta and Google ads, product photos and video, a content system for social, a personal assistant that turns a review into content. These are just examples, if your brand needs it, we can probably build it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t-2 border-[#E893AC] mb-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`py-7 px-6 ${
                step.highlighted
                  ? "bg-[#4F8577] text-white"
                  : idx !== steps.length - 1
                    ? "border-r border-[rgba(38,50,56,0.12)]"
                    : ""
              }`}
            >
              <div className={`font-['Anton'] text-2xl mb-3 ${step.highlighted ? "text-white" : "text-[#E893AC]"}`}>
                {step.number}
              </div>
              <div className={`font-['Anton'] text-xl mb-3 ${step.highlighted ? "text-white" : ""}`}>
                {step.title}
              </div>
              <div className={`text-sm leading-relaxed ${step.highlighted ? "opacity-90" : "opacity-65"}`}>
                {step.description}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/services"
          className="font-['Anton'] text-sm bg-[#263238] text-white px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity inline-block"
        >
          START WITH STEP 01
        </a>
      </div>
    </section>
  );
};

export default EcommerceStackSection;
