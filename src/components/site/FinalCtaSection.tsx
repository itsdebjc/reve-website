import { CALENDLY_URL } from "@/lib/links";

const FinalCtaSection = () => {
  return (
    <section className="bg-[#5FAF95] py-20 md:py-28 px-6 text-center">
      <div className="mx-auto max-w-[820px]">
        <h2
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
          className="text-[#20262A] text-3xl md:text-4xl leading-[1.1] uppercase mb-6"
        >
          Ready to see what AI can really do for your marketing?
        </h2>
        <p className="font-['Inter'] text-[#20262A]/80 text-lg mb-9">
          Start with the Game Plan, or book a call and we'll figure it out
          together.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-sm bg-[#20262A] text-[#F2E4D8] px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity inline-block uppercase"
          >
            Book a Call
          </a>
          <a
            href="/services#audit"
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-sm border-2 border-[#20262A]/50 text-[#20262A] px-8 py-4 rounded-[10px] hover:bg-[#20262A]/10 transition-colors inline-block uppercase"
          >
            Get Your Game Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
