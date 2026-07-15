const FinalCtaSection = () => {
  return (
    <section className="bg-[#F5EEDD] py-16 md:py-24 px-6 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-['Anton'] text-3xl md:text-4xl leading-tight mb-6 max-w-sm mx-auto">
          READY TO SEE WHAT AI CAN <span className="text-[#E893AC]">REALLY DO</span> FOR YOUR STORE?
        </h2>
        <p className="text-base md:text-lg opacity-65 mb-8">
          Start with an Audit. You'll leave knowing exactly what to build first.
        </p>
        <a
          href="/services"
          className="font-['Anton'] text-sm bg-[#4F8577] text-white px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity inline-block"
        >
          GET AN AUDIT
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
