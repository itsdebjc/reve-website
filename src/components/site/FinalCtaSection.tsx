import { CALENDLY_URL } from "@/lib/links";

const FinalCtaSection = () => {
  return (
    <section className="bg-[#E893AC] py-20 md:py-28 px-6 text-center">
      <div className="mx-auto max-w-[820px]">
        <h2
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
          className="text-[#20262A] text-[clamp(30px,4.4vw,52px)] leading-[1.08] mb-6"
        >
          Ready to put AI to work in your marketing?
        </h2>
        <p className="font-['Inter'] text-[#20262A]/80 text-lg mb-9">
          Start with an AI Marketing Roadmap, or book a call and tell us what needs to change.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
            className="inline-flex items-center justify-center rounded-full bg-[#20262A] text-[#F2E4D8] text-[13px] font-bold px-[30px] py-[15px] hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
          <a
            href="/services#audit"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#20262A]/60 text-[#20262A] text-[13px] font-bold px-[30px] py-[15px] hover:bg-[#20262A]/10 transition-colors"
          >
            Get Your AI Marketing Roadmap
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
