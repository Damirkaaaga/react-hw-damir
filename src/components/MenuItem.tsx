import React from "react";
import "./MenuItem.css";

type Meal = {
  id: string;
  meal: string;
  img: string;
  price: number;
  area?: string;
  category: string;
};

type MenuItemProps = {
  meal: Meal;
  quantity: number;
  onAddToCart: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({ meal, quantity, onAddToCart }) => {
  return (
    <div className="menu-item">
      <img src={meal.img} alt={meal.meal} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{meal.meal}</h3>
          <span className="menu-item-price">${meal.price.toFixed(2)} USD</span>
        </div>

        <p className="menu-item-description">
          {meal.area && meal.category
            ? `${meal.area} ${meal.category}`
            : meal.category || meal.area || "Meal"}
        </p>

        <div className="menu-item-bottom">
          <div className="menu-item-actions">
            <input
              className="menu-item-quantity"
              type="text"
              value={quantity}
              readOnly
            />
            <button className="menu-item-button" onClick={onAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
