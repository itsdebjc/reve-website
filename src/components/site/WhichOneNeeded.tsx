import { CALENDLY_URL } from "@/lib/links";

const ROWS = [
  { quote: "We need to know where to start with AI.", engagement: "AI Marketing Roadmap" },
  { quote: "We need help making AI work in our business.", engagement: "AI Implementation" },
  { quote: "We have a specific marketing project in mind.", engagement: "Strategic Projects" },
];

const WhichOneNeeded = () => {
  return (
    <>
      <section className="bg-[#171B1E] py-20 md:py-28 px-6 md:px-16">
        <div className="mx-auto max-w-[720px]">
          <span
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.12em" }}
            className="inline-flex items-center gap-2 text-[#5FC2E8] text-xs uppercase mb-10"
          >
            Which engagement is right for you?
          </span>

          <div className="space-y-5">
            {ROWS.map((r) => (
              <div
                key={r.engagement}
                className="bg-[#F2E4D8] rounded-[20px] px-7 py-8 md:px-9 md:py-9 text-center"
              >
                <p
                  style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
                  className="text-[#20262A] text-lg md:text-xl leading-snug mb-4"
                >
                  &ldquo;{r.quote}&rdquo;
                </p>
                <span className="text-[#C96E8C] block mb-3">&darr;</span>
                <span
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
                  className="text-[#C96E8C] text-sm md:text-base font-bold uppercase"
                >
                  {r.engagement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E4D8] py-20 md:py-28 px-6 text-center">
        <div className="mx-auto max-w-[640px]">
          <h2
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            className="text-[#20262A] text-2xl md:text-3xl leading-[1.2] mb-4"
          >
            Not sure where to start?
          </h2>
          <p className="font-['Inter'] text-[#20262A]/70 text-base leading-relaxed mb-8 max-w-[440px] mx-auto">
            Tell us what needs to change. We'll help you choose the right engagement.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}
            className="inline-flex items-center rounded-full bg-[#20262A] text-[#F2E4D8] text-[13px] font-bold px-[30px] py-[15px] hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </>
  );
};

export default WhichOneNeeded;
