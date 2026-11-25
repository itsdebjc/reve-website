import { Link } from "react-router-dom";
import { RadiantHeart, TuniWordmark, TUNI_COLORS } from "./TuniShared";

const footerLinkStyle: React.CSSProperties = { color: "rgba(255,247,241,0.5)", textDecoration: "none" };

const TuniFooter = () => (
  <footer style={{ background: TUNI_COLORS.ink, color: "rgba(255,247,241,0.6)", padding: "44px 26px" }}>
    <div style={{ maxWidth: "1480px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <RadiantHeart size={28} />
            <TuniWordmark size={22} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,247,241,0.45)" }}>Feedback for women</span>
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: "20px", color: TUNI_COLORS.cream, marginTop: "4px" }}>Tune in to what works.</div>
        </div>
        <p style={{ fontSize: "17px", fontWeight: 700, margin: 0, color: TUNI_COLORS.cream }}>
          Need help? Email <a href="mailto:hi@itstuni.com" style={{ color: TUNI_COLORS.cream, textDecoration: "underline" }}>hi@itstuni.com</a>.
        </p>
      </div>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginTop: "22px", paddingTop: "22px", borderTop: "1px solid rgba(255,247,241,0.1)" }}>
        <Link to="/bff-coach/story" style={footerLinkStyle}>Why I Built Tuni</Link>
        <Link to="/bff-coach/faq" style={footerLinkStyle}>FAQ</Link>
        <Link to="/bff-coach/join" style={footerLinkStyle}>Checkout</Link>
      </nav>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", marginTop: "18px" }}>
        <p style={{ fontSize: "12px", margin: 0 }}>
          <a href="https://itstuni.com/privacy" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>Privacy Policy</a>
          {" · "}
          <a href="https://itstuni.com/terms" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>Terms of Use</a>
        </p>
        <p style={{ fontSize: "12px", margin: 0 }}>
          <a href="https://www.instagram.com/itsdebj/" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>Instagram</a>
          {" · "}
          <a href="https://www.tiktok.com/@itsdigitaldeb" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>TikTok</a>
        </p>
      </div>
      <div style={{ marginTop: "22px", paddingTop: "22px", borderTop: "1px solid rgba(255,247,241,0.1)" }}>
        <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(255,247,241,0.55)", margin: 0 }}>For general wellness and education only, not medical advice. © 2026 Tuni, operated by 1236097 BC Ltd.</p>
      </div>
    </div>
  </footer>
);

export default TuniFooter;
