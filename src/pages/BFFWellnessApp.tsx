import { useEffect, useState } from "react";

// BFF color palette
const BFF_COLORS = {
  cream: "#FFF7F1",
  "cream-alt": "#FFFCFA",
  "cream-pink": "#FCEEF2",
  mat: "#F3ECE6",
  ink: "#2A211C",
  coral: "#FF6A4D",
  "coral-light": "#FF8A5C",
  pink: "#F0508C",
  amber: "#FFA13E",
  "body-text": "#6E5F57",
  "muted-gray": "#9a8b82",
  "placeholder-gray": "#b3a399",
  green: "#2FB67A",
};

const HeartGradient = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120">
    <defs>
      <linearGradient id="bffGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={BFF_COLORS.coral} />
        <stop offset="1" stopColor={BFF_COLORS.pink} />
      </linearGradient>
    </defs>
    <path
      d="M60 100 C28 79 14 62 14 43 C14 29 25 20 37 20 C49 20 56 28 60 36 C64 28 71 20 83 20 C95 20 106 29 106 43 C106 62 92 79 60 100 Z"
      fill="url(#bffGrad)"
    />
  </svg>
);

const RadiantHeart = ({ size = 78 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 220 220" fill="none">
    <defs>
      <linearGradient id="bffGrad2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={BFF_COLORS.coral} />
        <stop offset="1" stopColor={BFF_COLORS.pink} />
      </linearGradient>
    </defs>
    <g strokeLinecap="round" strokeWidth="6">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={angle}
          x1="110"
          y1="30"
          x2="110"
          y2="11"
          stroke={i % 2 === 0 ? BFF_COLORS.amber : BFF_COLORS.coral}
          transform={`rotate(${angle} 110 110)`}
        />
      ))}
    </g>
    <path
      d="M110 168 C70 142 50 120 50 96 C50 78 64 66 80 66 C95 66 105 76 110 86 C115 76 125 66 140 66 C156 66 170 78 170 96 C170 120 150 142 110 168 Z"
      fill="url(#bffGrad2)"
    />
  </svg>
);

const BFFWordmark = ({ size = 23 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: "-0.04em",
      lineHeight: 1,
    }}
  >
    <span style={{ color: BFF_COLORS.coral }}>B</span>
    <span style={{ color: BFF_COLORS.pink }}>F</span>
    <span style={{ color: BFF_COLORS.amber }}>F</span>
  </div>
);

const BFFWellnessApp = () => {
  useEffect(() => {
    document.title = "AI Body Workshop — Reve AI";
    const desc = "A practical AI body workshop for midlife women. Learn the Body Food Feedback system.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const [form, setForm] = useState({ name: "", email: "", submitted: false });

  const handleWaitlist = () => {
    document.getElementById("bff-waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=TPQB4A", {
        method: "POST",
        headers: { "Content-Type": "application/json", revision: "2023-12-15" },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: { email: form.email, subscribed: "SUBSCRIBED" },
            relationships: { list: { data: { type: "list", id: "QQMm5G" } } },
          },
        }),
      });
      if (res.ok || res.status === 202) {
        setForm((p) => ({ ...p, submitted: true }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main style={{ background: BFF_COLORS.cream, color: BFF_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Caveat:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        @keyframes bffMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        details summary::-webkit-details-marker { display: none; }
        details[open] .bff-faq-plus { transform: rotate(45deg); transition: transform 0.2s; }
      `}</style>

      {/* STICKY HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: `rgba(255,247,241,0.82)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid rgba(42,33,28,0.07)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "13px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <HeartGradient size={26} />
            <BFFWordmark size={23} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"] }}>Body Food Feedback</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: "21px", fontWeight: 600, color: BFF_COLORS["body-text"] }}>Learn the system. Meet your BFF.</div>
          <button onClick={handleWaitlist} style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "11px 20px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 8px 18px rgba(240,80,140,0.26)" }}>Join the waitlist →</button>
        </div>
      </header>

      {/* HERO - Simplified for brevity, full version would have all details */}
      <section style={{ background: `linear-gradient(180deg, ${BFF_COLORS.cream} 0%, ${BFF_COLORS["cream-alt"]} 100%)`, padding: "64px 26px 76px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.04fr", gap: "56px", alignItems: "center" }}>
          <div>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: 0, color: BFF_COLORS.ink }}>Your body changed.</h1>
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1, color: BFF_COLORS.pink, marginTop: "6px" }}>BFF helps you stop guessing.</div>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "24px 0 0" }}>A live AI body workshop for midlife women who want to understand their food, habits and body data — without starting another diet.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px", margin: "28px 0 30px" }}>
              {["Learn the Body Food Feedback system", "See how tiny patterns can start to show up", "Get your BFF coach after the workshop"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "11px" }}>
                  <HeartGradient size={20} />
                  <span style={{ fontSize: "15px", fontWeight: 600, color: BFF_COLORS.ink }}>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={handleWaitlist} style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "16px 30px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.30)" }}>Join the waitlist →</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/src/assets/debbie-collins.jpeg" alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section style={{ background: BFF_COLORS.ink, overflow: "hidden", padding: "15px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "bffMarquee 34s linear infinite" }}>
          {["Body. Food. Feedback.", "Meet your BFF", "Not another diet", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start noticing", "Data is feedback", "Your body is not broken"].map((text, i) => (
            <span key={`${i}-1`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: BFF_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
              {text}
              {i < 11 && <span style={{ color: BFF_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
        </div>
      </section>

      {/* THE STORY SECTION - Dark background */}
      <section style={{ background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: BFF_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The story</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "22px 0 0", color: BFF_COLORS.cream }}>
            I was doing the right things. <span style={{ color: BFF_COLORS["coral-light"] }}>Still nothing made sense.</span>
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "24px 0 0", maxWidth: "560px" }}>I was doing all the things women are told to do in midlife.</p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", margin: "30px 0" }}>
            {["🏋️‍♀️ Gym 4× a week", "🚶‍♀️ Daily walking", "💧 Drinking water", "🌿 HRT support through my healthcare provider", "🍳 More protein", "🧘‍♀️ Meditating", "🥗 Eating well"].map((item) => (
              <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,247,241,0.07)", border: `1px solid rgba(255,247,241,0.12)`, color: BFF_COLORS.cream, fontSize: "14px", fontWeight: 600, padding: "10px 18px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                {item}
              </span>
            ))}
          </div>

          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "0", maxWidth: "560px" }}>When that did not work, I even tried a fancier gym. Still, I felt like I was guessing.</p>

          <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: `1px solid rgba(255,247,241,0.12)` }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2, color: "rgba(255,247,241,0.55)" }}>It wasn't effort I was missing.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.15, color: BFF_COLORS.amber, marginTop: "6px" }}>It was feedback.</div>
          </div>
        </div>
      </section>

      {/* THE SHIFT SECTION */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "0", maxWidth: "760px", color: BFF_COLORS.ink }}>
            Your body changed. <span style={{ color: BFF_COLORS.pink }}>The old rules may not explain what is happening now.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", margin: "42px 0 32px" }}>
            <div style={{ background: BFF_COLORS.mat, borderRadius: "20px", padding: "30px 28px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"], marginBottom: "18px" }}>Before</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: BFF_COLORS["body-text"], margin: "0" }}>Effort in → Results out. You worked harder, the scale moved.</div>
            </div>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.22)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 16px 40px rgba(240,80,140,0.10)" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS.coral, marginBottom: "18px" }}>Now</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: BFF_COLORS["body-text"], margin: "0" }}>Pattern in → Response out. Your body may be responding to patterns you have not seen yet.</div>
            </div>
          </div>

          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "0" }}>Midlife can change how your body responds. Food, timing, stress, sleep, movement and tiny daily habits can all start showing up differently.</p>

          <div style={{ marginTop: "30px" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 2.4vw, 26px)", color: BFF_COLORS["placeholder-gray"] }}>The goal is not to blame yourself.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: BFF_COLORS.ink, marginTop: "4px" }}>The goal is to notice what may be connected.</div>
          </div>
        </div>
      </section>

      {/* WORKSHOP DETAILS + WAITLIST FORM */}
      <section id="bff-waitlist" style={{ background: BFF_COLORS.cream, padding: "84px 26px", scrollMarginTop: "70px" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "54px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0" }}>
              Join the first <span style={{ color: BFF_COLORS.pink }}>BFF workshop.</span>
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>I'll walk you through the Body Food Feedback system I created to stop guessing and start noticing patterns.</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
              {[{ label: "Date", value: "Soon", sub: "Coming" }, { label: "Format", value: "Live", sub: "Online" }, { label: "Spots", value: "Few", sub: "Limited" }].map((item) => (
                <div key={item.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 22px", minWidth: "120px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"] }}>{item.label}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: [BFF_COLORS.coral, BFF_COLORS.pink, BFF_COLORS.amber][Object.keys({ Date: 0, Format: 1, Spots: 2 })[item.label] || 0], marginTop: "4px" }}>{item.value}</div>
                  <div style={{ fontSize: "13px", color: BFF_COLORS["body-text"] }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 34px", boxShadow: "0 24px 56px rgba(42,33,28,0.12)" }}>
            {!form.submitted ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <HeartGradient size={26} />
                  <BFFWordmark size={24} />
                </div>
                <div style={{ fontSize: "14px", color: BFF_COLORS["body-text"], marginBottom: "22px" }}>Join the waitlist for first invites.</div>
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="text" placeholder="First name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ fontSize: "15px", color: BFF_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: BFF_COLORS["cream-alt"] }} />
                  <input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ fontSize: "15px", color: BFF_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: BFF_COLORS["cream-alt"] }} />
                  <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.28)" }}>Join the waitlist →</button>
                </form>
                <div style={{ fontSize: "12px", color: BFF_COLORS["placeholder-gray"], textAlign: "center", marginTop: "14px" }}>First invites open soon.</div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "18px 6px" }}>
                <div style={{ marginBottom: "14px" }}>
                  <HeartGradient size={52} />
                </div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px", color: BFF_COLORS.ink }}>You're on the list.</div>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "12px auto 0", maxWidth: "300px" }}>I'll be in touch when the first invites go out.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "40px 26px", textAlign: "center", borderTop: `1px solid rgba(255,247,241,0.1)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <HeartGradient size={24} />
            <BFFWordmark size={20} />
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,247,241,0.65)", margin: "0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            For general wellness and education only. Not medical advice, diagnosis or treatment. Personal results shared are not a promise of your results. © 2026 BFF.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default BFFWellnessApp;
