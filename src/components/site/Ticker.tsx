const ITEMS = [
  "AI Marketing Roadmap",
  "AI Automations",
  "Connected Workflows",
  "AI Assistants",
  "Custom Apps and Tools",
  "Brand Knowledge Hub",
  "Website Strategy and Build",
  "AI Search Visibility",
  "Klaviyo Email Marketing",
  "Creative Lab",
];

const Ticker = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section aria-hidden className="bg-[#E893AC] overflow-hidden py-5 border-y border-[#20262A]/10">
      <div className="marquee flex w-max items-center hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span key={i} className={`flex items-center ${i >= ITEMS.length ? "marquee-dup" : ""}`}>
            <span
              style={{ fontFamily: "'Fraunces', serif", fontStyle: i % 2 ? "italic" : "normal", fontWeight: 500 }}
              className="text-[#20262A] text-2xl md:text-3xl whitespace-nowrap px-8"
            >
              {item}
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#20262A" aria-hidden>
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Ticker;
