const FounderCtaBand = () => {
  return (
    <section className="bg-[#E893AC] py-20 md:py-24 px-6 text-center">
      <div className="mx-auto max-w-[820px]">
        <h2
          style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
          className="text-[#20262A] text-3xl md:text-4xl leading-[1.1] uppercase mb-9"
        >
          Let's build something your team will actually use.
        </h2>
        <a
          href="https://calendly.com/deb-xjsk/callwithdeb"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-sm bg-[#20262A] text-[#F2E4D8] px-8 py-4 rounded-[10px] inline-block hover:opacity-90 transition-opacity uppercase"
        >
          Book a Strategy Call
        </a>
      </div>
    </section>
  );
};
export default FounderCtaBand;
