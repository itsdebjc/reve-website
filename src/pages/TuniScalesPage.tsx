import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setCanonical } from "@/lib/seo";
import renpho50plus from "@/assets/scales/renpho-50plus.jpg";
import renphoMidtier from "@/assets/scales/renpho-midtier.jpg";
import renphoElis1 from "@/assets/scales/renpho-elis1.jpg";
import loftillaFull from "@/assets/scales/loftilla-full.jpg";
import loftillaBudget from "@/assets/scales/loftilla-budget.jpg";
import wyzeScaleX from "@/assets/scales/wyze-scale-x.jpg";

const COLORS = {
  cream: "#FFF7F1",
  "cream-alt": "#FFFCFA",
  "cream-pink": "#FCEEF2",
  ink: "#2A211C",
  coral: "#FF6A4D",
  pink: "#F0508C",
  amber: "#FFA13E",
  "body-text": "#6E5F57",
  "muted-gray": "#9a8b82",
};

const TuniWordmark = ({ size = 23 }: { size?: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
      fontFamily: "'Bricolage Grotesque', sans-serif",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: "-0.03em",
      lineHeight: 1,
    }}
  >
    <span style={{ color: COLORS.coral }}>T</span>
    <span style={{ color: COLORS.pink }}>u</span>
    <span style={{ color: COLORS.amber }}>n</span>
    <span style={{ color: COLORS.coral }}>i</span>
  </div>
);

type ScaleEntry = {
  name: string;
  tier: string;
  why: string;
  amazonUrl?: string;
  image?: string;
  price?: string;
  badge?: string;
};

// Prices pulled live from amazon.ca on 2026-10-23 (CAD). They will drift, shown with a date so that's clear.
const PRICE_DATE = "Oct 23, 2026";

const RECOMMENDED: ScaleEntry[] = [
  {
    name: "RENPHO 50+ Metrics",
    tier: "Recommended",
    badge: "★ Deb's pick",
    why: "Tracks the widest range of metrics. Best if you want to see body fat, muscle and trunk fat trends over time, not just weight.",
    amazonUrl: "https://link.amazon/B01Sok1g4",
    image: renpho50plus,
    price: "$169.99",
  },
  {
    name: "Loftilla 50+ Metrics",
    tier: "Recommended",
    badge: "★ Best value",
    why: "8-electrode with 50+ full body composition metrics, similar depth to RENPHO.",
    amazonUrl: "https://link.amazon/B043KPh9R",
    image: loftillaFull,
    price: "$116.02",
  },
  {
    name: "RENPHO MorphoScan Lite",
    tier: "Recommended",
    why: "8-electrode scale with a handle and 50+ metrics, for a full picture of your body composition.",
    amazonUrl: "https://link.amazon/B02tJqcvF",
    image: renphoMidtier,
    price: "$152.99",
  },
];

const BUDGET: ScaleEntry[] = [
  {
    name: "RENPHO Elis 1",
    tier: "Budget pick",
    why: "The simplest, cheapest way to start. Good for weight and the basics if you are not ready to spend more.",
    amazonUrl: "https://link.amazon/B04vE2Laj",
    image: renphoElis1,
    price: "$39.89",
  },
  {
    name: "Loftilla 14 Metrics",
    tier: "Budget pick",
    why: "14 metrics instead of 50+, at under half the price of the full-feature Loftilla. A lighter option if you just want the basics.",
    amazonUrl: "https://link.amazon/B0eUJ95t4",
    image: loftillaBudget,
    price: "$49.99",
  },
];

const OTHER: ScaleEntry[] = [
  {
    name: "Wyze Scale X",
    tier: "Also compatible",
    why: "Wi-Fi and Bluetooth body composition scale with segmental measurement. Works with Tuni.",
    amazonUrl: "https://link.amazon/B074mIEOi",
    image: wyzeScaleX,
    price: "$199.98",
  },
];

const TuniScalesPage = () => {
  useEffect(() => {
    document.title = "Scale Guide | Tuni";
    const desc = "Which body composition scale works with Tuni, and which one is right for you.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    setCanonical("/bff-coach/scales");
  }, []);

  return (
    <main style={{ background: COLORS.cream, color: COLORS.ink, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>

      <header style={{ position: "sticky", top: 0, zIndex: 50, background: COLORS.cream, borderBottom: "1px solid rgba(42,33,28,0.07)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "16px 26px", display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to="/bff-coach" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <TuniWordmark size={22} />
          </Link>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: COLORS["muted-gray"] }}>Scale Guide</span>
        </div>
      </header>

      <section style={{ padding: "64px 26px 40px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <span style={{ display: "inline-flex", alignItems: "center", background: "#fff", border: "1px solid rgba(42,33,28,0.08)", color: COLORS.coral, fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 14px", borderRadius: "999px" }}>Optional, but helpful</span>
          <h1 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "18px 0 0" }}>Which scale should you get?</h1>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: COLORS["body-text"], margin: "18px 0 0" }}>Tuni works without one. A weekly body composition scan just adds another layer, tracking changes in body fat and muscle alongside your habits.</p>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: COLORS["body-text"], margin: "12px 0 0" }}>Here are the scales Tuni can read from, grouped by whether you want the most detail or the lowest price.</p>
        </div>
      </section>

      <section style={{ padding: "0 26px 80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", margin: "0 0 4px" }}>Recommended</h2>
          <p style={{ fontSize: "14px", color: COLORS["muted-gray"], margin: "0 0 18px" }}>These are full-feature scales that track all areas of your body.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {RECOMMENDED.map((s) => (
              <ScaleCard key={s.name} s={s} />
            ))}
          </div>

          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", margin: "40px 0 4px" }}>Budget picks</h2>
          <p style={{ fontSize: "14px", color: COLORS["muted-gray"], margin: "0 0 18px" }}>Lighter features, easier on price.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {BUDGET.map((s) => (
              <ScaleCard key={s.name} s={s} />
            ))}
          </div>

          <h2 style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", margin: "40px 0 18px" }}>Also compatible</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {OTHER.map((s) => (
              <ScaleCard key={s.name} s={s} />
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "20px", padding: "26px 30px", marginTop: "32px", textAlign: "center" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.5, color: COLORS["body-text"], margin: 0 }}>Have a body composition scale that is not on this list?</p>
            <p style={{ fontSize: "15px", lineHeight: 1.5, color: COLORS["body-text"], margin: "4px 0 0" }}>Email <a href="mailto:hi@itstuni.com" style={{ color: COLORS.coral, textDecoration: "underline" }}>hi@itstuni.com</a> and Deb will check compatibility for you.</p>
          </div>
          <p style={{ fontSize: "13px", color: COLORS["muted-gray"], marginTop: "4px" }}>As an Amazon Associate, I earn from qualifying purchases.</p>
        </div>
      </section>
    </main>
  );
};

const ScaleCard = ({ s }: { s: ScaleEntry }) => (
  <div style={{ background: "#fff", borderRadius: "20px", padding: "28px 30px", boxShadow: "0 8px 20px rgba(42,33,28,0.06)", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
    {s.image && (
      <div style={{ flexShrink: 0, textAlign: "center" }}>
        <img src={s.image} alt={s.name} style={{ width: "88px", height: "88px", objectFit: "contain", background: COLORS["cream-alt"], borderRadius: "14px", padding: "8px" }} />
        {s.badge && (
          <div style={{ marginTop: "6px", fontSize: "11px", fontWeight: 700, color: COLORS.coral }}>{s.badge}</div>
        )}
      </div>
    )}
    <div style={{ flex: "1 1 280px" }}>
      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: COLORS.pink }}>{s.tier}</span>
      <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: "22px", margin: "6px 0 8px" }}>{s.name}</div>
      <p style={{ fontSize: "15px", lineHeight: 1.5, color: COLORS["body-text"], margin: 0, maxWidth: "440px" }}>{s.why}</p>
      {s.price && <p style={{ fontSize: "12.5px", color: COLORS["muted-gray"], margin: "8px 0 0", fontStyle: "italic" }}>{s.price} CAD as of {PRICE_DATE}, check Amazon for the current price.</p>}
    </div>
    {s.amazonUrl ? (
      <a href={s.amazonUrl} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, fontSize: "15px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${COLORS.coral}, ${COLORS.pink})`, padding: "13px 24px", borderRadius: "999px", textDecoration: "none" }}>View on Amazon →</a>
    ) : (
      <span style={{ flexShrink: 0, fontSize: "13px", fontWeight: 700, color: COLORS["muted-gray"], border: "1.5px dashed rgba(42,33,28,0.2)", padding: "12px 20px", borderRadius: "999px" }}>Link needed</span>
    )}
  </div>
);

export default TuniScalesPage;
