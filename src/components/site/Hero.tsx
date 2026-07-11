import heroImg from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative isolate min-h-[100svh] flex flex-col justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Soft pink wildflower meadow at sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[30%_50%] opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/40 to-background" />

      <div className="mx-auto w-full max-w-5xl px-6 md:px-10 pt-24 pb-16 fade-up">
        <p className="label-eyebrow mb-10">— Reve AI</p>

        <h1 className="display-serif text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] text-foreground leading-tight">
          Rebuild your marketing
          <br />
          <span className="display-italic">so AI actually works.</span>
        </h1>

        <p className="mt-8 text-foreground/75 text-base md:text-lg leading-relaxed max-w-xl">
          Your website, content and workflows should make work easier, not more complicated. We help businesses organize their marketing into one AI-ready system so teams can create faster, stay consistent and stop reinventing the same work.
        </p>

        <div className="mt-12 flex flex-row gap-6 items-center flex-wrap">
          <a
            href="https://calendly.com/deb-xjsk/callwithdeb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 label-mono hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
          >
            Start with an AI Marketing Audit →
          </a>
          <a
            href="#how-we-work"
            className="label-mono text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
