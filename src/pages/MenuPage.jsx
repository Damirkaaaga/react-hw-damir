import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
import Tooltip from "../components/Tooltip";
import menuItems from "../data/menuItems";
import "./menu.css";

function MenuPage() {
  return (
    <>
      <Header />
      <main className="menu-wrapper">
        <div className="menu-container">
          <div className="menu-inner">
            <h2 className="menu-title">Browse our menu</h2>
            <p className="menu-subtitle">
              Use our menu to place an order online, or{" "}
              <Tooltip tooltipText="+375-44-457-61-57">
                <span style={{ color: "#35B8BE" }}>phone</span>
              </Tooltip>{" "}
              our store <br /> to place a pickup order. Fast and fresh food.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                marginBottom: "40.91px",
              }}
            >
              <button
                style={{
                  width: "147px",
                  height: "52px",
                  borderRadius: "6px",
                  backgroundColor: "#35B8BE",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Desert
              </button>

              <button
                style={{
                  width: "132px",
                  height: "52px",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  border: "1px solid #61728333",
                  color: "#222222",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Dinner
              </button>

              <button
                style={{
                  width: "137px",
                  height: "52px",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  border: "1px solid #61728333",
                  color: "#222222",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Breakfast
              </button>
            </div>

            <div className="menu-items">
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "65px",
                marginBottom: "148px",
              }}
            >
              <button
                style={{
                  width: "147px",
                  height: "52px",
                  borderRadius: "6px",
                  backgroundColor: "#35B8BE",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "17px",
                  lineHeight: "20px",
                  fontWeight: 400,
                  fontFamily: "Inter, sans-serif",
                  cursor: "pointer",
                }}
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MenuPage;
