function Header() {
  return (
    <header style={{ backgroundColor: "white" }}>
      <div
        style={{
          maxWidth: "1200px",
          height: "100px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div>
          <img
            src="src/public/Logo.svg"
            alt="Logo"
            style={{
              width: "35.72px",
              height: "45.86px",
              objectFit: "contain",
            }}
          />
        </div>

        <nav style={{ display: "flex", alignItems: "center" }}>
          <span style={navItemStyle}>Home</span>
          <span style={{ ...navItemStyle, color: "#35B8BE" }}>Menu</span>
          <span style={navItemStyle}>Company</span>
          <span
            style={{
              ...navItemStyle,
              width: "94px",
              fontSize: "16px",
              marginRight: "102px",
            }}
          >
            Login
          </span>

          <div style={cartStyle}>
            <img
              src="src/public/Vector.svg"
              alt="basket"
              style={{ width: "25px", height: "17px", objectFit: "contain" }}
            />
            <span style={cartBadgeStyle}>0</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

const navItemStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "76px",
  height: "60px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: "400",
  lineHeight: "20px",
  color: "#28224B",
};

const cartStyle = {
  width: "55px",
  height: "55px",
  backgroundColor: "#35B8BE",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

const cartBadgeStyle = {
  width: "25px",
  height: "25px",
  background: "#fff",
  color: "#35B8BE",
  fontFamily: "Inter, sans-serif",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "25px",
  textAlign: "center",
  borderRadius: "100px",
  position: "absolute",
  top: "-8px",
  right: "-8px",
  boxShadow: "7px 7px 25px rgba(126, 130, 143, 0.27)",
};

export default Header;
