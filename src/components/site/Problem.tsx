const Problem = () => {
  return (
    <section className="relative isolate bg-[#F2E4D8] py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <span
        aria-hidden
        style={{ fontFamily: "'Anton', sans-serif" }}
        className="absolute -bottom-6 right-0 md:right-8 text-[18vw] leading-none text-[#263238]/[0.05] uppercase select-none pointer-events-none"
      >
        The Gap
      </span>

      <div className="relative mx-auto max-w-[1280px]">
        <p
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
          className="text-[13px] font-bold text-[#C2477A] uppercase mb-6"
        >
          The Problem
        </p>
        <h2
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
          className="text-[#263238] text-4xl md:text-5xl leading-[1.05] uppercase max-w-3xl mb-12"
        >
          You know AI can do more. Getting it to actually help is the hard
          part.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div className="font-['Inter'] text-[#263238]/80 text-lg leading-relaxed space-y-5">
            <p>Getting AI to help isn't about finding a better tool. It's about what you feed it.</p>
            <p>
              Most marketing systems grow one piece at a time. The website
              says one thing. The proposals say another. Content lives
              everywhere. Knowledge disappears when someone leaves.
            </p>
            <p>AI can only work with what it's given. Feed it chaos, and it hands chaos back, just faster.</p>
          </div>
          <div className="border-l-2 border-[#C2477A]/40 pl-8 font-['Inter'] text-[#263238]/80 text-lg leading-relaxed space-y-5">
            <p>
              Before you add another tool, rebuild the foundation. AI works
              best in the hands of someone who knows the business.
            </p>
            <p className="font-bold text-[#263238]">
              That's the part I build with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
