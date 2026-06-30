import { useEffect, useState } from "react";
import debbieCollins from "@/assets/debbie-collins.jpeg";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import heroCherryBlossom from "@/assets/hero-cherry-blossom.jpg";
import debbieMallSolo from "@/assets/debbie-mall-solo.jpeg";

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
        @media (max-width: 768px) {
          .bff-grid-2col { grid-template-columns: 1fr !important; }
          .bff-hide-mobile { display: none !important; }
          .bff-header-label { display: none !important; }
          .bff-header-tagline { display: none !important; }
          .bff-header-button { padding: 8px 14px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* STICKY HEADER */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: `rgba(255,247,241,0.82)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid rgba(42,33,28,0.07)` }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "13px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <HeartGradient size={26} />
            <BFFWordmark size={23} />
            <span className="bff-header-label" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"] }}>Body Food Feedback</span>
          </div>
          <div className="bff-header-tagline" style={{ fontFamily: "'Caveat', cursive", fontSize: "21px", fontWeight: 600, color: BFF_COLORS["body-text"] }}>Learn the system. Meet your BFF.</div>
          <button className="bff-header-button" onClick={handleWaitlist} style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "11px 20px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 8px 18px rgba(240,80,140,0.26)" }}>Join the waitlist →</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={{ background: `linear-gradient(180deg, ${BFF_COLORS.cream} 0%, ${BFF_COLORS["cream-alt"]} 100%)`, padding: "64px 26px 76px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.04fr", gap: "56px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "26px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}><HeartGradient size={14} />BFF Body Food Feedback</span>
              <span style={{ display: "inline-flex", alignItems: "center", background: BFF_COLORS.ink, color: BFF_COLORS.cream, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Coming Soon</span>
            </div>
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
            <span style={{ fontSize: "14px", color: BFF_COLORS["muted-gray"], display: "inline-block", marginTop: "8px", marginLeft: "12px" }}>First invites open soon.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img src={debbieCollins} alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
            <div style={{ position: "absolute", left: "-18px", bottom: "-22px", background: "#fff", borderRadius: "16px", padding: "13px 17px", boxShadow: "0 16px 34px rgba(42,33,28,0.16)", maxWidth: "228px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "21px", lineHeight: 1.15, color: BFF_COLORS.ink }}>Hi, I'm Deb. I built BFF because I needed a better feedback loop.</div>
            </div>
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
          {["Body. Food. Feedback.", "Meet your BFF", "Not another diet", "Built for midlife", "Better feedback", "Small shifts", "Daily choices", "See the pattern", "Stop guessing", "Start noticing", "Data is feedback", "Your body is not broken"].map((text, i) => (
            <span key={`${i}-2`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "16px", color: BFF_COLORS.cream, whiteSpace: "nowrap", display: "flex", alignItems: "center" }} aria-hidden="true">
              {text}
              {i < 11 && <span style={{ color: BFF_COLORS.coral, marginLeft: "22px" }}>•</span>}
            </span>
          ))}
        </div>
      </section>

      {/* THE STORY */}
      <section style={{ background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: BFF_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The story</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "22px 0 0", color: BFF_COLORS.cream }}>I was doing the right things. <span style={{ color: BFF_COLORS["coral-light"] }}>Still nothing made sense.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "24px 0 0", maxWidth: "560px" }}>I was doing all the things women are told to do in midlife.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", margin: "30px 0" }}>
            {["🏋️ Gym 4× a week", "🚶 Daily walking", "💧 Drinking water", "🌿 HRT support through my healthcare provider", "🍳 More protein", "🧘 Meditating", "🥗 Eating well"].map((item) => (
              <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,247,241,0.07)", border: "1px solid rgba(255,247,241,0.12)", color: BFF_COLORS.cream, fontSize: "14px", fontWeight: 600, padding: "10px 18px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                {item}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "0", maxWidth: "560px" }}>When that did not work, I even tried a fancier gym. Still, I felt like I was guessing.</p>
          <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2, color: "rgba(255,247,241,0.55)" }}>It wasn't effort I was missing.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.15, color: BFF_COLORS.amber, marginTop: "6px" }}>It was feedback.</div>
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The shift</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "760px" }}>Your body changed. <span style={{ color: BFF_COLORS.pink }}>The old rules may not explain what is happening now.</span></h2>
          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px", margin: "42px 0 32px" }}>
            <div style={{ background: BFF_COLORS.mat, borderRadius: "20px", padding: "30px 28px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"], marginBottom: "18px" }}>Before</div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: BFF_COLORS["body-text"], background: "#fff", padding: "10px 16px", borderRadius: "12px" }}>Effort</span>
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" stroke="#c2b3a9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8h22"/><path d="M17 2l7 6-7 6"/></svg>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: BFF_COLORS["body-text"], background: "#fff", padding: "10px 16px", borderRadius: "12px" }}>Results</span>
              </div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "0" }}>You worked harder, the scale moved. One direction only.</p>
            </div>
            <div style={{ background: "#fff", border: "1.5px solid rgba(240,80,140,0.22)", borderRadius: "20px", padding: "30px 28px", boxShadow: "0 16px 40px rgba(240,80,140,0.10)" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS.coral, marginBottom: "18px" }}>Now</div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "10px 16px", borderRadius: "12px" }}>Pattern</span>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={BFF_COLORS.pink} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11a9 9 0 0 1 15-6.7L21 7"/><path d="M21 3v4h-4"/><path d="M21 13a9 9 0 0 1-15 6.7L3 17"/><path d="M3 21v-4h4"/></svg>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "10px 16px", borderRadius: "12px" }}>Response</span>
              </div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "0" }}>Your body may be responding to patterns you have not seen yet — a loop you can read.</p>
            </div>
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "0" }}>Midlife can change how your body responds. Food, timing, stress, sleep, movement and tiny daily habits can all start showing up differently.</p>
          <div style={{ marginTop: "30px" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(20px, 2.4vw, 26px)", color: BFF_COLORS["placeholder-gray"] }}>The goal is not to blame yourself.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 32px)", color: BFF_COLORS.ink, marginTop: "4px" }}>The goal is to notice what may be connected.</div>
          </div>
        </div>
      </section>

      {/* THE METHOD: BFF */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The method</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0" }}>This is not a diet. <span style={{ color: BFF_COLORS.pink }}>It is a feedback loop.</span></h2>
            <div style={{ display: "inline-flex", gap: "0", alignItems: "baseline", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "20px", letterSpacing: "0.02em", margin: "18px 0 0" }}>
              <span style={{ color: BFF_COLORS.coral }}>Body.</span>&nbsp;
              <span style={{ color: BFF_COLORS.pink }}>Food.</span>&nbsp;
              <span style={{ color: BFF_COLORS.amber }}>Feedback.</span>
            </div>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>BFF is the simple system I'll teach you in the workshop. It helps you connect your food notes, habits, movement and body data, so you can start seeing what may be connected.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", margin: "26px 0 0", borderLeft: "2px solid rgba(240,80,140,0.25)", paddingLeft: "18px" }}>
              {["Your body gives you signals.", "Your food gives you clues.", "Your habits leave patterns.", "Your BFF coach helps you notice what you may be missing."].map((line, i) => (
                <div key={line} style={{ fontSize: "16px", fontWeight: i === 3 ? 700 : 600, color: i === 3 ? BFF_COLORS.pink : BFF_COLORS.ink, padding: "7px 0" }}>{line}</div>
              ))}
            </div>
            <div style={{ margin: "28px 0 26px" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: BFF_COLORS["placeholder-gray"] }}>First, you learn the system.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: BFF_COLORS.ink, marginTop: "2px" }}>Then you get your BFF coach, so you can use it in real life.</div>
            </div>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer" }}>Join the waitlist →</button>
          </div>
          <div style={{ justifySelf: "center", width: "100%", maxWidth: "280px", background: "#000", borderRadius: "44px", padding: "12px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ background: BFF_COLORS.cream, borderRadius: "40px", overflow: "hidden", height: "540px", display: "flex", flexDirection: "column" }}>
              <div style={{ background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "12px 16px", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>9:41</div>
              <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ height: "80px", background: "repeating-linear-gradient(45deg, #ede5dd, #ede5dd 10px, #e6dad1 10px, #e6dad1 20px)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: BFF_COLORS["muted-gray"] }}>meal photo</div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <HeartGradient size={20} />
                  <div style={{ background: "#fff", borderRadius: "12px", padding: "10px 12px", maxWidth: "200px", fontSize: "13px", lineHeight: 1.4, color: BFF_COLORS.ink, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                    <div style={{ fontWeight: 700, color: BFF_COLORS.green }}>Nice balance! 👏</div>
                    <div style={{ color: BFF_COLORS["body-text"], marginTop: "4px" }}>Solid protein here. Want to note how you feel around 3pm?</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, color: "#fff", borderRadius: "12px", padding: "10px 12px", maxWidth: "220px", fontSize: "13px", lineHeight: 1.4 }}>Felt a dip after lunch yesterday too.</div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <HeartGradient size={20} />
                  <div style={{ background: "#fff", borderRadius: "12px", padding: "10px 12px", maxWidth: "200px", fontSize: "13px", lineHeight: 1.4, color: BFF_COLORS.ink, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>Worth noticing 💡 Let's look at your last three afternoons together.</div>
                </div>
              </div>
              <div style={{ borderTop: `1px solid rgba(0,0,0,0.05)`, padding: "10px", display: "flex", gap: "8px" }}>
                <input type="text" placeholder="Ask your BFF…" style={{ flex: 1, background: "#f5f1ed", border: "none", borderRadius: "20px", padding: "10px 14px", fontSize: "13px", color: BFF_COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }} readOnly />
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "16px", cursor: "pointer" }}>↑</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERY DAY */}
      <section style={{ background: BFF_COLORS["cream-pink"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: BFF_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Every day</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>BFF is with you in <span style={{ color: BFF_COLORS.pink }}>the moments that matter.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "22px 0 0" }}>Breakfast. Coffee. Snacks. Dinner. Weekends. Restaurants. Busy days. That is where the pattern lives. Your BFF coach helps you bring the system into the tiny moments where you are deciding what to eat, what to notice or what to adjust.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "14px", margin: "32px 0 34px" }}>
            {[{ emoji: "🥨", label: "The snack" }, { emoji: "🍵", label: "The matcha" }, { emoji: "🌙", label: "The late dinner" }, { emoji: "🥂", label: "The weekend" }, { emoji: "🍽️", label: "The restaurant order" }, { emoji: "🤭", label: "The 'doesn't count' bite" }].map((item) => (
              <div key={item.label} style={{ background: "#fff", borderRadius: "18px", padding: "22px 18px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <span style={{ fontSize: "32px", lineHeight: 1 }}>{item.emoji}</span>
                <span style={{ color: BFF_COLORS.ink, fontSize: "15px", fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(19px, 2.2vw, 24px)", color: BFF_COLORS["placeholder-gray"] }}>The workshop teaches you what to notice.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(21px, 2.6vw, 30px)", color: BFF_COLORS.ink, marginTop: "2px" }}>Your BFF coach helps you use it every day.</div>
          </div>
        </div>
      </section>

      {/* MOTIVATIONAL TICKER */}
      <section style={{ background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, overflow: "hidden", padding: "16px 0" }}>
        <div style={{ display: "flex", width: "max-content", animation: "bffMarquee 38s linear infinite" }}>
          {["Your body changed. You are not broken.", "Small shifts beat big overhauls", "Better feedback. Better decisions.", "Stop guessing. Start noticing.", "Data is feedback, not judgment", "Body. Food. Feedback.", "Meet your BFF."].map((text, i) => (
            <span key={`${i}-1`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "17px", color: "#fff", whiteSpace: "nowrap" }}>
              {text}{i < 6 && <span style={{ marginLeft: "22px" }}>★</span>}
            </span>
          ))}
          {["Your body changed. You are not broken.", "Small shifts beat big overhauls", "Better feedback. Better decisions.", "Stop guessing. Start noticing.", "Data is feedback, not judgment", "Body. Food. Feedback.", "Meet your BFF."].map((text, i) => (
            <span key={`${i}-2`} style={{ padding: "0 22px", fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "17px", color: "#fff", whiteSpace: "nowrap" }} aria-hidden="true">
              {text}{i < 6 && <span style={{ marginLeft: "22px" }}>★</span>}
            </span>
          ))}
        </div>
      </section>

      {/* PERSONAL PROOF */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "center" }}>
          <img src={debbieBeach} alt="Debbie at beach" style={{ display: "block", width: "100%", height: "460px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What changed for me</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>At 54, I finally <span style={{ color: BFF_COLORS.pink }}>stopped guessing.</span></h2>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "20px 0 16px" }}>In three months, after I started using AI with my food notes, habits and body composition data, I:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "22px" }}>
              {[{ label: "7.8 lbs", desc: "lost total" }, { label: "7 lbs", desc: "body fat reduced" }, { label: "32.3% → 25.7%", desc: "body fat" }, { label: "muscle", desc: "supported while losing fat" }].map((stat) => (
                <div key={stat.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 20px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "26px", color: BFF_COLORS.coral }}>{stat.label}</div>
                  <div style={{ fontSize: "13px", color: BFF_COLORS["body-text"], marginTop: "2px" }}>{stat.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS.ink, fontWeight: 600, margin: "22px 0 0" }}>But the biggest change was not the number.</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "8px 0 0" }}>The biggest change was that I finally had a feedback loop. I could see what was working, what was not and what I wanted to adjust next.</p>
            <p style={{ fontSize: "13px", lineHeight: 1.55, color: BFF_COLORS["muted-gray"], background: BFF_COLORS.mat, borderRadius: "14px", padding: "16px 18px", margin: "24px 0 0" }}>These are my personal results, not a promise. Your results will be different because your body, food, habits and data are different. That is the point. This workshop is not about copying my exact plan — it is about learning how to notice your own patterns.</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What you'll learn</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>Inside the workshop, I'll show you <span style={{ color: BFF_COLORS.pink }}>the BFF feedback loop.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "22px 0 0" }}>You'll learn how I used AI, simple food notes and body composition data to understand my patterns. This is a teaching session first. After the workshop, you'll get your BFF coach so you can start using the system yourself.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "38px 0 30px" }}>
            {[
              { num: "01", text: "Why midlife bodies need better feedback", color: BFF_COLORS.coral },
              { num: "02", text: "How food timing and tiny habits can add up", color: BFF_COLORS.pink },
              { num: "03", text: "How to use body composition data without obsessing", color: BFF_COLORS.amber },
              { num: "04", text: "How to use your BFF coach in daily moments", color: BFF_COLORS.coral },
              { num: "05", text: "How to ask better questions", color: BFF_COLORS.pink },
              { num: "06", text: "How to review your week and adjust one thing", color: BFF_COLORS.amber },
            ].map((item) => (
              <div key={item.num} style={{ background: BFF_COLORS.cream, borderRadius: "18px", padding: "24px 26px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "18px", color: item.color, flexShrink: 0 }}>{item.num}</span>
                <span style={{ fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, lineHeight: 1.45 }}>{item.text}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "0 0 26px" }}>This is practical, simple and beginner-friendly. You do not need to be an AI expert.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer" }}>Join the waitlist →</button>
        </div>
      </section>

      {/* REASSURANCE */}
      <section style={{ position: "relative", overflow: "hidden", background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "96px 26px" }}>
        <div style={{ position: "absolute", inset: "0", background: "radial-gradient(ellipse 62% 72% at 50% 36%, rgba(240,80,140,0.22), rgba(255,124,77,0.07) 46%, transparent 72%)", pointerEvents: "none" }} />
        {[
          { top: "66px", left: "13%", size: "8px", color: BFF_COLORS.amber, opacity: 0.75 },
          { top: "128px", right: "15%", size: "6px", color: BFF_COLORS.pink, opacity: 0.75 },
          { bottom: "90px", left: "21%", size: "5px", color: BFF_COLORS.coral, opacity: 0.6 },
          { bottom: "128px", right: "23%", size: "7px", color: BFF_COLORS.amber, opacity: 0.6 },
        ].map((dot, i) => (
          <div key={i} style={{ position: "absolute", ...dot, borderRadius: "50%", background: dot.color, opacity: dot.opacity }} />
        ))}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "740px", margin: "0 auto", textAlign: "center" }}>
          <RadiantHeart size={78} />
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: BFF_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Reassurance</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.02, letterSpacing: "-0.02em", margin: "20px 0 0", color: BFF_COLORS.cream }}>You do not need to be <span style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, color: BFF_COLORS.pink, fontSize: "1.18em", lineHeight: 0.8 }}>perfect.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "24px auto 0", maxWidth: "600px" }}>You just need enough information to start noticing patterns. This is not about tracking every bite forever. It is about learning what matters, what does not and what may be worth adjusting next.</p>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(23px, 3.1vw, 36px)", lineHeight: 1.16, margin: "34px auto 0", maxWidth: "660px", background: `linear-gradient(95deg, ${BFF_COLORS.amber}, ${BFF_COLORS.coral} 45%, ${BFF_COLORS.pink})`, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Once you can see the pattern, you can make better choices without starting over every Monday.</p>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: "22px", padding: "34px 32px", boxShadow: "0 10px 30px rgba(42,33,28,0.06)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>This is for you if…</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>You are a woman in midlife and:</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "Your body changed and the old tricks are not working",
                "You are doing healthy things but not seeing clear patterns",
                "Your weight, body fat or energy no longer makes sense",
                "You want to use AI in a practical way",
                "You are tired of guessing what to eat or change",
                "You want a simple system, not another strict plan",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <HeartGradient size={18} />
                  <span style={{ fontSize: "15px", color: BFF_COLORS.ink, lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: BFF_COLORS.mat, borderRadius: "22px", padding: "34px 32px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: BFF_COLORS["muted-gray"], fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>This is not for you if…</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>You're looking for something this is not.</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You want a meal plan handed to you",
                "You want someone to tell you exactly what to eat forever",
                "You are looking for a quick fix",
                "You do not want to take any notes",
                "You want medical advice, diagnosis or treatment",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <span style={{ color: BFF_COLORS["placeholder-gray"], fontWeight: 800, flexShrink: 0, lineHeight: 1.4 }}>✕</span>
                  <span style={{ fontSize: "15px", color: BFF_COLORS["body-text"], lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.5, color: BFF_COLORS["muted-gray"], margin: "20px 0 0", paddingTop: "16px", borderTop: "1px solid rgba(42,33,28,0.08)" }}>This is not medical advice. It is a practical AI feedback system to help you notice your own patterns.</p>
          </div>
        </div>
      </section>

      {/* WHY AI */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "80px 26px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why AI</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0" }}>AI helps connect the dots.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", margin: "28px 0 0" }}>
            {[
              { text: "Food notes", color: BFF_COLORS.coral },
              { text: "Body data", color: BFF_COLORS.pink },
              { text: "Habits", color: BFF_COLORS.amber },
              { text: "Questions", color: BFF_COLORS.coral },
              { text: "Things we meant to remember", color: BFF_COLORS.pink },
            ].map((item) => (
              <span key={item.text} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: BFF_COLORS.cream, border: `1px solid rgba(42,33,28,0.07)`, color: BFF_COLORS["body-text"], fontSize: "14px", fontWeight: 600, padding: "9px 16px", borderRadius: "999px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.color }} />
                {item.text}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "14px 0 6px" }}>
            <div style={{ width: "2px", height: "30px", background: `linear-gradient(180deg, rgba(240,80,140,0), rgba(240,80,140,0.5))` }} />
            <RadiantHeart size={54} />
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "0 auto", maxWidth: "640px" }}>Most of us have the pieces everywhere. AI helps bring those pieces together, so you can notice patterns and choose one smart next step.</p>
          <p style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px", color: BFF_COLORS.pink, margin: "18px 0 0" }}>That is the point of your BFF coach.</p>
        </div>
      </section>

      {/* WHAT YOU'LL NEED */}
      <section style={{ background: BFF_COLORS.cream, padding: "80px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What you'll need</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0" }}>A simple kit. Nothing fancy.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "34px 0 26px" }}>
            {[
              "Your BFF coach access after the workshop",
              "Body data, if you have it",
              "A few simple daily food notes",
              "A willingness to look at patterns without judging yourself",
            ].map((item) => (
              <div key={item} style={{ background: "#fff", borderRadius: "16px", padding: "22px 24px", display: "flex", gap: "13px", alignItems: "flex-start", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <HeartGradient size={20} />
                <span style={{ fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, lineHeight: 1.45 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "0" }}>You do not need to be perfect. You do not need to track forever. You just need enough information to start noticing.</p>
        </div>
      </section>

      {/* LANDSCAPE IMAGE BAND */}
      <section style={{ position: "relative", minHeight: "620px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={heroCherryBlossom} alt="Cherry blossom landscape" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(42,33,28,0.28), rgba(42,33,28,0.6))" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 26px", maxWidth: "780px" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: BFF_COLORS.cream, margin: "0", textShadow: "0 2px 20px rgba(42,33,28,0.4)" }}>Your body has changed. Now you have a better way to <span style={{ color: "#FFC8A0" }}>listen to the feedback.</span></h2>
          <button onClick={handleWaitlist} style={{ display: "inline-block", marginTop: "26px", fontSize: "16px", fontWeight: 700, color: BFF_COLORS.ink, background: BFF_COLORS.cream, padding: "15px 28px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(0,0,0,0.25)" }}>Join the waitlist →</button>
        </div>
      </section>

      {/* WHY I BUILT THIS */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why I built this</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>I built BFF because I needed it.</h2>
            <p style={{ fontSize: "18px", lineHeight: 1.65, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "24px 0 0" }}>I have worked in wellness, supplements, gyms and natural health for years. I have been health-conscious most of my adult life. And still, midlife changed the rules. So I built BFF: a simple way to use AI, body data and food notes to create a clearer feedback loop.</p>
            <div style={{ marginTop: "28px", paddingLeft: "18px", borderLeft: "2px solid rgba(240,80,140,0.3)" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "28px", lineHeight: 1.25, color: BFF_COLORS.ink }}>Not as a doctor. Not as a guru. As a woman in midlife who finally stopped guessing.</div>
            </div>
          </div>
          <img src={debbieMallSolo} alt="Debbie" style={{ display: "block", width: "100%", height: "520px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
        </div>
      </section>

      {/* WORKSHOP DETAILS + WAITLIST FORM */}
      <section id="bff-waitlist" style={{ background: BFF_COLORS.cream, padding: "84px 26px", scrollMarginTop: "70px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "54px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Workshop details</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "22px 0 0" }}>Join the first <span style={{ color: BFF_COLORS.pink }}>BFF workshop.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>I'll walk you through the Body Food Feedback system I created to stop guessing and start noticing patterns. You'll learn how the system works, what data to bring and how to start using your BFF coach after the workshop.</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "30px", flexWrap: "wrap" }}>
              {[{ label: "Date", value: "Soon", sub: "Coming" }, { label: "Format", value: "Live", sub: "Online" }, { label: "Spots", value: "Few", sub: "Limited" }].map((item) => (
                <div key={item.label} style={{ background: "#fff", borderRadius: "16px", padding: "18px 22px", minWidth: "120px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BFF_COLORS["muted-gray"] }}>{item.label}</div>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: [BFF_COLORS.coral, BFF_COLORS.pink, BFF_COLORS.amber][["Date", "Format", "Spots"].indexOf(item.label)], marginTop: "4px" }}>{item.value}</div>
                  <div style={{ fontSize: "13px", color: BFF_COLORS["body-text"] }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 34px", boxShadow: "0 24px 56px rgba(42,33,28,0.12)" }}>
            {!form.submitted ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <HeartGradient size={26} />
                  <BFFWordmark size={24} />
                </div>
                <div style={{ fontSize: "14px", color: BFF_COLORS["body-text"], marginBottom: "22px" }}>Join the waitlist for first invites.</div>
                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <input type="text" placeholder="First name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={{ fontSize: "15px", color: BFF_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: BFF_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <input type="email" placeholder="Email address" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={{ fontSize: "15px", color: BFF_COLORS.ink, padding: "15px 18px", border: `1.5px solid #ece2da`, borderRadius: "14px", outline: "none", background: BFF_COLORS["cream-alt"], fontFamily: "'Plus Jakarta Sans', sans-serif" }} required />
                  <button type="submit" style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, border: "none", padding: "16px", borderRadius: "999px", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Join the waitlist →</button>
                </form>
                <div style={{ fontSize: "12px", color: BFF_COLORS["placeholder-gray"], textAlign: "center", marginTop: "14px" }}>First invites open soon.</div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "18px 6px" }}>
                <div style={{ marginBottom: "14px", display: "flex", justifyContent: "center" }}>
                  <HeartGradient size={52} />
                </div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "28px", color: BFF_COLORS.ink }}>You're on the list.</div>
                <p style={{ fontSize: "15px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "12px auto 0", maxWidth: "300px" }}>I'll be in touch when the first invites go out.</p>
                <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px", color: BFF_COLORS.pink, marginTop: "16px" }}>Talk soon — Deb</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>FAQ</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 0" }}>Questions you might have.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "Do I need to know how to use AI?", a: "No. This is beginner-friendly. I'll show you how to get started and what to do." },
              { q: "Do I need a smart scale?", a: "A body composition or smart scale makes the feedback more useful, but you can still join and learn the system without one." },
              { q: "Is this a diet?", a: "No. BFF is a feedback system. It helps you notice patterns. No meal plan, no calorie counting." },
              { q: "Will you tell me exactly what to eat?", a: "No. I'll show you how to use AI to support your own decisions based on your food notes, body data and real life." },
              { q: "Is this medical advice?", a: "No. This workshop is for general wellness and education only. It is not medical advice, diagnosis or treatment." },
              { q: "Is this a weight-loss app?", a: "No. BFF is not a weight-loss app. It is a body feedback system designed to help you notice patterns in your food, habits and body data. My results are my personal experience, not a promise." },
              { q: "Will I get the BFF coach?", a: "Yes. After the workshop, you'll get access to your BFF coach so you can start using the system in your own life." },
              { q: "Is the workshop about the app or the system?", a: "Both. The workshop teaches the Body Food Feedback system. Your BFF coach helps you use the system after the workshop." },
            ].map((item) => (
              <details key={item.q} style={{ background: "#fff", border: `1px solid rgba(42,33,28,0.07)`, borderRadius: "16px", padding: "4px 22px" }}>
                <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", cursor: "pointer", listStyle: "none", padding: "18px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: BFF_COLORS.ink }}>
                  {item.q}
                  <span className="bff-faq-plus" style={{ color: BFF_COLORS.coral, fontSize: "22px", fontWeight: 700, transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "0 0 18px" }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: `linear-gradient(150deg, ${BFF_COLORS.coral} 0%, ${BFF_COLORS.pink} 100%)`, padding: "90px 26px", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.2)", color: "#fff", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 16px", borderRadius: "999px", backdropFilter: "blur(4px)" }}>
            <HeartGradient size={14} />
            BFF Body Food Feedback — Coming Soon
          </span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(38px, 5.5vw, 66px)", lineHeight: 1, letterSpacing: "-0.03em", color: "#fff", margin: "24px 0 0" }}>Ready to stop guessing?</h2>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1, color: "#FFE3D0", marginTop: "8px" }}>Meet your BFF.</div>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "18px", color: "rgba(255,255,255,0.85)", marginTop: "18px", letterSpacing: "0.02em" }}>Body. Food. Feedback.</div>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", maxWidth: "560px", margin: "20px auto 0" }}>Join the live AI body workshop. Learn the Body Food Feedback system, then get access to your BFF coach so you can start noticing patterns in your food, habits and body data.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", marginTop: "30px", fontSize: "17px", fontWeight: 700, color: BFF_COLORS.pink, background: "#fff", padding: "17px 36px", borderRadius: "999px", boxShadow: "0 16px 36px rgba(42,33,28,0.22)", border: "none", cursor: "pointer" }}>Join the waitlist →</button>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", marginTop: "16px" }}>First invites open soon.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BFF_COLORS.ink, color: "rgba(255,247,241,0.6)", padding: "44px 26px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <HeartGradient size={24} />
            <BFFWordmark size={22} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,247,241,0.45)" }}>Body Food Feedback</span>
          </div>
          <div style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(255,247,241,0.45)", maxWidth: "560px", textAlign: "right" }}>For general wellness and education only. Not medical advice, diagnosis or treatment. Personal results shared are not a promise of your results. © 2026 BFF.</div>
        </div>
      </footer>
    </main>
  );
};

export default BFFWellnessApp;
