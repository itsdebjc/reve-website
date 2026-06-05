import heroImg from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-[100svh] flex flex-col justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Soft pink wildflower meadow at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/40 to-background" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16 fade-up">
        <p className="label-eyebrow mb-10">— AI Consultancy · 2026</p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="display-serif text-5xl md:text-7xl lg:text-[6.5rem] text-foreground leading-tight">
              Marketing is hard.
              <br />
              <span className="display-italic">We make it easier.</span>
            </h1>

            <p className="mt-8 text-foreground/75 text-base md:text-lg leading-relaxed max-w-xl">
              We bring your ideas, content, tools and workflows into one clear setup so AI can help you create faster, stay consistent and spend less time fixing everything.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:items-end shrink-0">
            <a
              href="https://calendly.com/deb-xjsk/callwithdeb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 label-mono hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
            >
              Book a Strategy Call →
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 label-mono text-foreground/80 hover:text-primary transition-colors whitespace-nowrap px-2"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
