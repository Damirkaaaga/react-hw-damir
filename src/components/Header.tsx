import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <img src="src/public/Logo.svg" alt="Logo" className="header-logo" />
        </div>

        <nav className="header-nav">
          <span className="nav-item">Home</span>
          <span className="nav-item active">Menu</span>
          <span className="nav-item">Company</span>
          <span className="nav-item login">Login</span>

          <div className="cart">
            <img
              src="src/public/Vector.svg"
              alt="basket"
              className="cart-icon"
            />
            <span className="cart-badge">{totalItems}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
