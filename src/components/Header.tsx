import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "./Header.css";

const Header: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="header">
      <div className="header-container">
        <div>
          <img src="src/public/Logo.svg" alt="Logo" className="header-logo" />
        </div>

        <nav className="header-nav">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/menu" className="nav-item">
            Menu
          </NavLink>
          <NavLink to="/company" className="nav-item">
            Company
          </NavLink>

          <NavLink to="/login" className="nav-item login">
            {user ? user : "Login"}
          </NavLink>

          <NavLink to="/order" className="cart">
            <img
              src="src/public/Vector.svg"
              alt="basket"
              className="cart-icon"
            />
            <span className="cart-badge">{totalItems}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
