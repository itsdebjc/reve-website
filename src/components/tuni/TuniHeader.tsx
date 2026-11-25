import { Link, NavLink } from "react-router-dom";
import { RadiantHeart, TuniWordmark, StrikePrice, TUNI_COLORS } from "./TuniShared";

const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
  fontSize: "14px",
  fontWeight: 700,
  color: isActive ? TUNI_COLORS.pink : TUNI_COLORS.ink,
  textDecoration: "none",
});

const TuniHeader = () => (
  <header style={{ position: "sticky", top: 0, zIndex: 50, background: TUNI_COLORS.cream, borderBottom: "1px solid rgba(42,33,28,0.07)" }}>
    <div style={{ maxWidth: "1480px", margin: "0 auto", padding: "13px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
      <Link to="/bff-coach" style={{ display: "flex", alignItems: "center", gap: "11px", textDecoration: "none" }}>
        <RadiantHeart size={30} />
        <TuniWordmark size={23} />
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: "22px" }}>
        <NavLink to="/bff-coach/story" style={({ isActive }) => navLinkStyle(isActive)}>Our Story</NavLink>
        <NavLink to="/bff-coach/faq" style={({ isActive }) => navLinkStyle(isActive)}>FAQ</NavLink>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <a href="https://itstuni.com/login" className="bff-hide-mobile" style={{ fontSize: "13px", fontWeight: 600, color: TUNI_COLORS["muted-gray"], textDecoration: "none" }}>Log In</a>
        <Link
          to="/bff-coach/join"
          className="bff-header-button"
          style={{ fontSize: "14px", fontWeight: 700, color: "#fff", background: `linear-gradient(135deg, ${TUNI_COLORS.coral}, ${TUNI_COLORS.pink})`, padding: "11px 20px", borderRadius: "999px", textDecoration: "none", boxShadow: "0 8px 18px rgba(240,80,140,0.26)", whiteSpace: "nowrap" }}
        >
          <StrikePrice was="$15" size={12} color="rgba(255,255,255,0.75)" />Start Tuni for $8.99 →
        </Link>
      </div>
    </div>
  </header>
);

export default TuniHeader;
