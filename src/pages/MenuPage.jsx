import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
import Tooltip from "../components/Tooltip";
import "./menu.css";

const MenuPage = () => {
  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);

        const availableCategories = [
          ...new Set(data.map((item) => item.category)),
        ];

        if (availableCategories.includes("Dessert")) {
          setSelectedCategory("Dessert");
        } else {
          setSelectedCategory(availableCategories[0] || "");
        }
      });
  }, []);

  const handleAddToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const filteredMeals = meals.filter(
    (item) => item.category === selectedCategory
  );

  const visibleItems = filteredMeals.slice(0, visibleCount);
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <>
      <Header totalItems={totalItems} />
      <main className="menu-wrapper">
        <div className="menu-container">
          <div className="menu-inner">
            <h2 className="menu-title">Browse our menu</h2>
            <p className="menu-subtitle">
              Use our menu to place an order online, or{" "}
              <Tooltip tooltipText="+375-44-457-61-57">
                <span style={{ color: "#35B8BE" }}>phone</span>
              </Tooltip>{" "}
              our store <br /> to place a pickup order.
            </p>

            <div className="menu-buttons">
              <button
                className={`menu-btn ${
                  selectedCategory === "Dessert" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Dessert");
                  setVisibleCount(6);
                }}
              >
                Dessert
              </button>
              <button
                className={`menu-btn ${
                  selectedCategory === "Dinner" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Dinner");
                  setVisibleCount(6);
                }}
              >
                Dinner
              </button>
              <button
                className={`menu-btn ${
                  selectedCategory === "Breakfast" ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory("Breakfast");
                  setVisibleCount(6);
                }}
              >
                Breakfast
              </button>
            </div>

            <div className="menu-items">
              {visibleItems.map((item) => (
                <MenuItem
                  key={item.id}
                  title={item.meal}
                  image={item.img}
                  price={item.price}
                  area={item.area}
                  category={item.category}
                  quantity={cart[item.id] || 0}
                  onAddToCart={() => handleAddToCart(item.id)}
                />
              ))}
            </div>

            {visibleCount < filteredMeals.length && (
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
                  onClick={handleSeeMore}
                >
                  See more
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
