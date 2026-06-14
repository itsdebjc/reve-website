const Testimonial = () => {
  return (
    <section className="py-32 md:py-44 border-b border-hairline bg-[#F7F4EE]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="label-eyebrow mb-8">— Testimonial</p>
        <h2 className="display-serif text-4xl md:text-6xl mb-14 text-[#1C1917]">
          Clients come to us for <span className="display-italic">clarity.</span>
        </h2>

        <blockquote className="font-serif italic text-2xl md:text-3xl text-[#1C1917]/75 leading-relaxed">
          "Reve gave us the structure we didn't know we were missing. Our output went from
          good enough drafts to material we actually want to send."
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#1C1917]/25" />
          <p className="label-mono text-[#1C1917]/50">Founder · Advisory Firm</p>
          <span className="h-px w-10 bg-[#1C1917]/25" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
