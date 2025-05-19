import React from "react";
import "./MenuItem.css";

type MenuItemProps = {
  image: string;
  title: string;
  price: number;
  quantity: number;
  onAddToCart: () => void;
  area?: string;
  category?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  image,
  title,
  price,
  onAddToCart,
  quantity,
  area,
  category,
}) => {
  return (
    <div className="menu-item">
      <img src={image} alt={title} className="menu-item-image" />
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{title}</h3>
          <span className="menu-item-price">${price.toFixed(2)} USD</span>
        </div>

        <p className="menu-item-description">
          {area && category
            ? `${area} ${category}`
            : category || area || "Meal"}
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
