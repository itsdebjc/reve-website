const Testimonial = () => {
  return (
    <section className="bg-[#20262A] py-20 md:py-28 px-6 md:px-16">
      <div className="mx-auto max-w-[820px] text-center">
        <p
          style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500 }}
          className="text-[#F2E4D8] text-2xl md:text-4xl leading-[1.25] mb-8"
        >
          "Reve gave us the structure we didn't know we were missing. Our
          output went from good enough drafts to material we actually want
          to send."
        </p>
        <p
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
          className="text-[#E893AC] text-xs font-bold uppercase"
        >
          Founder, Advisory Firm
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
