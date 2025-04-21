import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
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
              <span className="cart-badge">{this.props.totalItems}</span>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
