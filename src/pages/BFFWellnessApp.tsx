import { useEffect, useState } from "react";
import debbieCollins from "@/assets/debbie-collins.jpeg";
import debbieBeach from "@/assets/debbie-beach.jpeg";
import heroCherryBlossom from "@/assets/hero-cherry-blossom.jpg";
import debbieCreamBg from "@/assets/debbie-collins-cream-bg.jpg";

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
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>AI-Powered Body Food Feedback App</span>
            </div>
            <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(44px, 6vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.035em", margin: 0, color: BFF_COLORS.ink }}>Your body changed.</h1>
            <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1, color: BFF_COLORS.pink, marginTop: "6px" }}>BFF helps you understand what's different.</div>
            <p style={{ fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "24px 0 0" }}>BFF is a Body Food Feedback app for midlife women. It helps you track your food, habits and body feedback, then uses AI to help you spot patterns and make better daily choices. Join the first live workshop and learn how to use BFF as your best friend in your back pocket.</p>
            <button onClick={handleWaitlist} style={{ fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "16px 30px", borderRadius: "999px", border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(240,80,140,0.30)", marginTop: "28px" }}>Save my spot</button>
            <span style={{ fontSize: "14px", color: BFF_COLORS["muted-gray"], display: "inline-block", marginTop: "14px", marginLeft: "12px" }}>Not a diet app. Not a meal plan. A feedback app for the body you're living in now.</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <img src={debbieCreamBg} alt="Debbie Collins" style={{ width: "100%", maxWidth: "400px", height: "480px", objectFit: "cover", borderRadius: "26px", boxShadow: "0 28px 60px rgba(42,33,28,0.18)" }} />
            <div style={{ position: "absolute", left: "-18px", bottom: "-22px", background: "#fff", borderRadius: "16px", padding: "13px 17px", boxShadow: "0 16px 34px rgba(42,33,28,0.16)", maxWidth: "228px" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "21px", lineHeight: 1.15, color: BFF_COLORS.ink }}>I built BFF because I needed to understand how my body was responding.</div>
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

      {/* THE PROBLEM */}
      <section style={{ background: BFF_COLORS.ink, color: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: BFF_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The problem</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.4vw, 50px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "22px 0 0", color: BFF_COLORS.cream }}>You're doing the right things. <span style={{ color: BFF_COLORS["coral-light"] }}>But nothing makes sense.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "24px 0 0", maxWidth: "560px" }}>You eat well. You walk. You drink water. You try to get enough protein. You go to the gym. You read the advice.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>And still, your body feels harder to understand than it used to.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>One week something works. The next week it does not.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.72)", margin: "16px 0 0", maxWidth: "560px" }}>So you keep wondering:</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))", gap: "12px", margin: "20px 0", maxWidth: "560px" }}>
            {[{ text: "Is it the food?", emoji: "🍽️" }, { text: "Is it the timing?", emoji: "⏰" }, { text: "Is it sleep?", emoji: "😴" }, { text: "Is it stress?", emoji: "😰" }, { text: "Is it hormones?", emoji: "📊" }, { text: "Is it the weekend?", emoji: "🎉" }, { text: "Is it just life?", emoji: "🤷" }].map((item) => (
              <span key={item.text} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "6px", background: "rgba(255,247,241,0.07)", border: "1px solid rgba(255,247,241,0.12)", color: BFF_COLORS.cream, fontSize: "13px", fontWeight: 600, padding: "8px 12px", borderRadius: "999px", textAlign: "center" }}>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{item.emoji}</span>{item.text}
              </span>
            ))}
          </div>
          <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.2, color: "rgba(255,247,241,0.55)" }}>You do not need more random rules.</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.15, color: BFF_COLORS.amber, marginTop: "6px" }}>You need better feedback.</div>
          </div>
        </div>
      </section>

      {/* WHAT BFF IS */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What BFF is</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "760px" }}>Not a diet app. <span style={{ color: BFF_COLORS.pink }}>A feedback app.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "24px 0 0" }}>Most food apps count, restrict or shame.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "16px 0 0" }}>BFF helps you notice what is happening.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "16px 0 0" }}>It brings together three simple pieces:</p>
          <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "22px", margin: "42px 0 32px" }}>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.15)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>💪</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: BFF_COLORS.coral, marginBottom: "12px" }}>Body</div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "0" }}>How you feel, what you notice and what changes over time.</p>
            </div>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.15)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>🍎</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: BFF_COLORS.pink, marginBottom: "12px" }}>Food</div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "0" }}>What you eat, when you eat and how your choices show up in real life.</p>
            </div>
            <div style={{ background: "#fff", border: `1.5px solid rgba(240,80,140,0.15)`, borderRadius: "20px", padding: "30px 28px", boxShadow: "0 10px 25px rgba(42,33,28,0.06)" }}>
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>📊</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "19px", color: BFF_COLORS.amber, marginBottom: "12px" }}>Feedback</div>
              <p style={{ fontSize: "16px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "0" }}>The patterns that help you make your next better choice.</p>
            </div>
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "0" }}>BFF stands for Body Food Feedback.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "720px", margin: "16px 0 0" }}>It is also the best friend in your back pocket. The one who helps you pause, notice and choose with more clarity.</p>
        </div>
      </section>

      {/* THE METHOD: BFF */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>How it works</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Track. Notice. Reflect. <span style={{ color: BFF_COLORS.pink }}>Choose.</span></h2>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "520px", margin: "20px 0 0" }}>BFF helps you build a simple daily feedback loop.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", margin: "26px 0 28px" }}>
              {[
                { step: "Track", desc: "Add quick notes about meals, habits and how you feel." },
                { step: "Notice", desc: "See what happens around energy, hunger, cravings, sleep, routines and weekends." },
                { step: "Reflect", desc: "Use AI to help connect the dots across your notes." },
                { step: "Choose", desc: "Make one better choice at a time instead of starting over every Monday." }
              ].map((item, i) => (
                <div key={item.step} style={{ display: "flex", gap: "14px" }}>
                  <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: BFF_COLORS.coral, minWidth: "70px" }}>Step {i + 1}:</div>
                  <div>
                    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "17px", color: BFF_COLORS.ink }}>{item.step}</div>
                    <p style={{ fontSize: "16px", lineHeight: 1.55, color: BFF_COLORS["body-text"], margin: "4px 0 0" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: BFF_COLORS["placeholder-gray"] }}>No perfection.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: BFF_COLORS["placeholder-gray"], marginTop: "6px" }}>No complicated tracking.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 700, fontSize: "19px", color: BFF_COLORS["placeholder-gray"], marginTop: "6px" }}>No shame spiral.</div>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", color: BFF_COLORS.ink, marginTop: "12px" }}>Just better feedback.</div>
            </div>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Save my spot</button>
          </div>
          {/* iPhone mockup with onboarding */}
          <div style={{ justifySelf: "center", width: "341px", height: "742px", background: "#0A0A0A", borderRadius: "44px", border: "12px solid #0A0A0A", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Phone screen */}
            <div style={{ flex: 1, background: "linear-gradient(135deg, #E8F4FA 0%, #F5E6F0 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "44px 20px 24px", position: "relative", overflow: "hidden" }}>
              {/* Onboarding label */}
              <div style={{ position: "absolute", top: "14px", right: "16px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BFF_COLORS["body-text"] }}>Onboarding</div>

              {/* Radiant heart */}
              <div style={{ marginBottom: "22px", display: "flex", justifyContent: "center" }}>
                <RadiantHeart size={64} />
              </div>

              {/* BFF Wordmark */}
              <div style={{ marginBottom: "28px" }}>
                <BFFWordmark size={32} />
              </div>

              {/* Body Food Feedback text */}
              <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: 1.15, margin: "0 0 20px", color: BFF_COLORS.ink }}>Body Food Feedback</h3>

              {/* Welcome message */}
              <p style={{ fontSize: "15px", lineHeight: 1.5, color: BFF_COLORS.ink, textAlign: "center", maxWidth: "280px", margin: "0 0 28px" }}>Hey, I'm your BFF ❤️, and I've been waiting for you. Tap Start whenever you're ready.</p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
                <button style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg, #0B9EFF, #0B7FFF)", border: "none", padding: "10px 20px", borderRadius: "999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Start</button>
                <button style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg, #0B9EFF, #0B7FFF)", border: "none", padding: "10px 20px", borderRadius: "999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Tell me more</button>
              </div>

              {/* Text input */}
              <div style={{ display: "flex", gap: "8px", width: "100%", maxWidth: "260px", paddingTop: "16px", borderTop: "1px solid rgba(42,33,28,0.1)" }}>
                <input type="text" placeholder="Type your answer..." style={{ flex: 1, fontSize: "13px", color: BFF_COLORS.ink, padding: "10px 14px", border: "1px solid rgba(42,33,28,0.1)", borderRadius: "999px", outline: "none", background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }} disabled />
                <button style={{ fontSize: "12px", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg, #FF6A4D, #F0508C)", border: "none", padding: "10px 14px", borderRadius: "999px", cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-LIFE MOMENTS */}
      <section style={{ background: BFF_COLORS["cream-pink"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: BFF_COLORS.pink, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Real life</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 3.8vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>BFF in <span style={{ color: BFF_COLORS.pink }}>the moments that matter.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "22px 0 0" }}>Think of BFF as your best friend in your back pocket. Not just once a week. Not after you already feel off track.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "16px 0 0" }}>It is there in the small daily moments where choices actually happen.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", margin: "28px 0 32px" }}>
            {[{ icon: "🍽️", text: "Looking at a menu." }, { icon: "👩‍🍳", text: "Standing in the kitchen at 4pm." }, { icon: "🍪", text: "Deciding if you need a snack." }, { icon: "😕", text: "Wondering why you feel off." }, { icon: "🍳", text: "Planning dinner." }, { icon: "📱", text: "Getting back on track after a busy weekend." }].map((item) => (
              <div key={item.text} style={{ background: "#fff", borderRadius: "16px", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, lineHeight: 1.4 }}>{item.text}</div>
              </div>
            ))}
          </div>
          <div style={{ background: BFF_COLORS.ink, borderRadius: "24px", padding: "40px 36px", color: BFF_COLORS.cream, marginTop: "32px" }}>
            <div className="bff-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: BFF_COLORS.amber, marginBottom: "16px" }}>Not the friend who says</div>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,247,241,0.6)", margin: "0" }}>"Just have the fries, who cares."</p>
                <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,247,241,0.6)", margin: "10px 0 0" }}>"You ruined everything."</p>
              </div>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: BFF_COLORS.amber, marginBottom: "16px" }}>The one who says</div>
                <p style={{ fontSize: "18px", fontWeight: 800, color: BFF_COLORS.cream, lineHeight: 1.4, margin: "0" }}>Let's pause. What do you actually need right now?</p>
              </div>
            </div>
            <p style={{ fontSize: "18px", fontWeight: 800, color: BFF_COLORS.cream, margin: "28px 0 0", paddingTop: "24px", borderTop: "1px solid rgba(255,247,241,0.12)" }}>Your <span style={{ color: BFF_COLORS.amber }}>BFF coach</span> helps you stay honest without being hard on yourself, every day.</p>
          </div>
        </div>
      </section>

      {/* PERSONAL PROOF */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "54px", alignItems: "center" }}>
          <img src={debbieBeach} alt="Debbie at beach" style={{ display: "block", width: "100%", height: "460px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 24px 50px rgba(42,33,28,0.16)" }} />
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42, 33, 28, 0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What changed for me</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 0" }}>At 54, I finally <span style={{ color: BFF_COLORS.pink }}>stopped guessing.</span></h2>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "20px 0 0" }}>For years I was doing the right things. Eating well. Moving. Trying. But my body still felt unpredictable. What changed was not a new diet or a harder workout. I started paying closer attention to my food, habits and body, then used AI to connect the dots.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: BFF_COLORS["body-text"], margin: "16px 0 16px" }}>In three months, after I started using AI with my food notes, habits and body composition data, I:</p>
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
            <div style={{ marginTop: "24px", paddingLeft: "18px", borderLeft: "2px solid rgba(240,80,140,0.3)" }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "26px", lineHeight: 1.25, color: BFF_COLORS.ink }}>Not as a doctor. Not as a guru. Just a woman in midlife who figured out her own patterns.</div>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.55, color: BFF_COLORS["muted-gray"], background: BFF_COLORS.mat, borderRadius: "14px", padding: "16px 18px", margin: "24px 0 0" }}>These are my personal results, not a promise. Your results will be different because your body, food, habits and data are different. That is the point. This workshop is not about copying my exact plan — it is about learning how to notice your own patterns.</p>
          </div>
        </div>
      </section>

      {/* THE WORKSHOP */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>The workshop</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "720px" }}>Inside the workshop, <span style={{ color: BFF_COLORS.pink }}>I'll show you how to use BFF.</span></h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "22px 0 0" }}>This first live workshop walks you through the Body Food Feedback app and the simple feedback loop behind it.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "16px 0 0", fontWeight: 600 }}>You'll learn how to:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "28px 0 32px" }}>
            {[
              "Set up your BFF app.",
              "Track food and habits without obsessing.",
              "Use AI feedback in a practical way.",
              "Ask better questions about your body.",
              "Spot patterns across your week.",
              "Use BFF before meals, after meals and when you feel stuck.",
            ].map((item, idx) => (
              <div key={item} style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: BFF_COLORS.coral, marginBottom: "10px" }}>{String(idx + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, lineHeight: 1.45 }}>{item}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "680px", margin: "0" }}>You'll leave knowing how to use BFF in your real life, not some perfect version of it.</p>
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", fontSize: "16px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "15px 28px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", marginTop: "28px" }}>Save my spot</button>
        </div>
      </section>

      {/* MINDSET */}
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
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <RadiantHeart size={64} />
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,247,241,0.08)", color: BFF_COLORS.amber, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>A better way</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.08, letterSpacing: "-0.02em", margin: "20px 0 0", color: BFF_COLORS.cream }}>You do not need to be perfect. You need a better way to pay attention.</h2>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "24px auto 0", maxWidth: "600px" }}>BFF is not here to judge your lunch or tell you one meal ruined everything. <span style={{ color: "rgba(255,247,241,0.95)", fontWeight: 600 }}>It is here to help you notice patterns.</span></p>
          <div style={{ margin: "22px auto 0", maxWidth: "600px" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "0" }}>One note can reveal something useful.</p>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "rgba(255,247,241,0.74)", margin: "12px 0 0" }}>One pause can change the next choice.</p>
          </div>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(19px, 2.8vw, 26px)", lineHeight: 1.16, margin: "30px auto 0", maxWidth: "660px" }}>This is not about being strict. It is about staying close enough to your habits that you can actually learn from them.</p>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: "22px", padding: "34px 32px", boxShadow: "0 10px 30px rgba(42,33,28,0.06)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>Good fit</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>This is for you if…</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You're in midlife and your body feels different than it used to",
                "You're tired of guessing",
                "You do not want another strict diet",
                "You want a practical tool you can use in real life",
                "You like the idea of using AI to support your daily choices",
                "You want to understand your patterns without obsessing",
                "You want something calm, simple and doable",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "11px", alignItems: "flex-start" }}>
                  <HeartGradient size={18} />
                  <span style={{ fontSize: "15px", color: BFF_COLORS.ink, lineHeight: 1.45 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: BFF_COLORS.mat, borderRadius: "22px", padding: "34px 32px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: BFF_COLORS["muted-gray"], fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 13px", borderRadius: "999px" }}>Not the right fit</span>
            <h3 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1.15, margin: "18px 0 20px" }}>This is not for you if…</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              {[
                "You want a prescribed meal plan",
                "You want someone to tell you exactly what to eat every day",
                "You want a quick fix",
                "You do not want to track anything",
                "You are looking for guaranteed results",
                "You need medical, nutrition or hormone advice",
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

      {/* AI EXPLAINER */}
      <section style={{ background: BFF_COLORS["cream-alt"], padding: "84px 26px" }}>
        <div className="bff-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", background: "#FFF1EB", color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Why AI helps</span>
            <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "600px" }}>AI helps <span style={{ color: BFF_COLORS.pink }}>connect the dots.</span></h2>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "600px", margin: "24px 0 0", fontWeight: 600 }}>BFF looks at your food, habits and body feedback together, so your choices stop feeling random.</p>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "600px", margin: "16px 0 0" }}>It turns scattered information into useful feedback. No tech skills required.</p>
            <p style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "24px", color: BFF_COLORS.pink, margin: "28px 0 0" }}>That is the Body Food Feedback loop.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "16px", alignItems: "center" }}>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "16px 20px", fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>What you ate</div>
              <div style={{ fontSize: "22px", color: BFF_COLORS.coral, textAlign: "center" }}>→</div>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "16px 20px", fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>What helped</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto 1fr", gap: "12px", alignItems: "center" }}>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "16px 20px", fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>How you felt</div>
              <div style={{ fontSize: "22px", color: BFF_COLORS.coral, textAlign: "center" }}>→</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <HeartGradient size={36} />
              </div>
              <div style={{ fontSize: "22px", color: BFF_COLORS.coral, textAlign: "center" }}>→</div>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "16px 20px", fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)", gridColumn: "span 1" }}>What to try next</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "16px", alignItems: "center" }}>
              <div style={{ background: "#fff", borderRadius: "12px", padding: "16px 20px", fontSize: "16px", fontWeight: 600, color: BFF_COLORS.ink, textAlign: "center", boxShadow: "0 4px 12px rgba(42,33,28,0.05)" }}>What changed</div>
              <div style={{ fontSize: "22px", color: BFF_COLORS.coral, textAlign: "center" }}>→</div>
              <div style={{ background: BFF_COLORS.coral, borderRadius: "26px", padding: "16px 24px", fontSize: "16px", fontWeight: 700, color: "#fff", textAlign: "center", boxShadow: "0 8px 20px rgba(255,106,77,0.3)" }}>Better choices</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>What's included</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "22px 0 0" }}>What you'll get</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", margin: "34px 0 26px" }}>
            {[
              { title: "Live BFF workshop", desc: "A guided session where I show you how the app works and how to use it in real life." },
              { title: "App walkthrough", desc: "You'll see how to track food, habits and body feedback inside BFF." },
              { title: "AI prompt guidance", desc: "I'll show you how to use AI feedback without making it complicated." },
              { title: "Weekly review method", desc: "A simple way to look back, spot patterns and choose your next step." },
              { title: "Real-life examples", desc: "We'll walk through meals, snacks, restaurants, weekends and \"I feel off\" moments." },
              { title: "Replay included", desc: "Rewatch the workshop and set up your BFF rhythm at your own pace." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", borderRadius: "16px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 6px 16px rgba(42,33,28,0.05)" }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: BFF_COLORS.ink }}>{item.title}</span>
                <span style={{ fontSize: "15px", color: BFF_COLORS["body-text"], lineHeight: 1.45 }}>{item.desc}</span>
              </div>
            ))}
          </div>
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

      {/* FINAL WORKSHOP CTA */}
      <section style={{ background: BFF_COLORS.cream, padding: "84px 26px" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: `1px solid rgba(42,33,28,0.08)`, color: BFF_COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Your next step</span>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "22px 0 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>This is the workshop you are looking for.</h2>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "640px", margin: "22px auto 0" }}>If you have been looking for a system that is actually simple, that works in real life, and that helps you stop guessing about your body and food, this is it.</p>
          <p style={{ fontSize: "17px", lineHeight: 1.6, color: BFF_COLORS["body-text"], maxWidth: "640px", margin: "16px auto 0" }}>The workshop is for you if you are ready to notice.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", margin: "32px auto 0", maxWidth: "540px" }}>
            <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "block", fontSize: "18px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${BFF_COLORS.coral}, ${BFF_COLORS.pink})`, padding: "18px 36px", borderRadius: "999px", boxShadow: "0 14px 30px rgba(240,80,140,0.28)", border: "none", cursor: "pointer", width: "100%" }}>Save my spot</button>
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
          <button onClick={handleWaitlist} style={{ textDecoration: "none", display: "inline-block", marginTop: "30px", fontSize: "17px", fontWeight: 700, color: BFF_COLORS.pink, background: "#fff", padding: "17px 36px", borderRadius: "999px", boxShadow: "0 16px 36px rgba(42,33,28,0.22)", border: "none", cursor: "pointer" }}>Save my spot</button>
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
