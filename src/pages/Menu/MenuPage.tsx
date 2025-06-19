import React, { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem.tsx";
import Tooltip from "../../components/Tooltip.tsx";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store.ts";
import { addToCart } from "../../store/slices/cartSlice.ts";
import { fetchMeals } from "../../store/slices/mealsSlice";
import { AppDispatch } from "../../store/store";
import { Meal } from "../../types/Meal";
import "./menu.css";

const MenuPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const meals = useSelector((state: RootState) => state.meals.items);
  const mealsStatus = useSelector((state: RootState) => state.meals.status);
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  useEffect(() => {
    if (mealsStatus === "idle") {
      dispatch(fetchMeals());
    }
  }, [mealsStatus, dispatch]);

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const filteredMeals = meals.filter(
    (item) => item.category === selectedCategory
  );

  const visibleItems = filteredMeals.slice(0, visibleCount);

  return (
    <>
      <main className="menu-wrapper">
        <div className="background-angle" />
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
              {Array.from(new Set(meals.map((item) => item.category))).map(
                (category) => (
                  <button
                    key={category}
                    className={`menu-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setVisibleCount(6);
                    }}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            <div className="menu-items">
              {visibleItems.map((item) => (
                <MenuItem
                  key={item.id}
                  meal={item}
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
    </>
  );
};

export default MenuPage;
