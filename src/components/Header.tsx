import React from "react";
import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "./Header.css";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : "")
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              "nav-item" + (isActive ? " active" : "")
            }
          >
            Company
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              "nav-item login" + (isActive ? " active" : "")
            }
          >
            {user ? user : "Login"}
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) => "cart" + (isActive ? " active" : "")}
          >
            <img
              src="src/public/Vector.svg"
              alt="basket"
              className="cart-icon"
            />
            <span className="cart-badge">{totalItems}</span>
          </NavLink>
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
