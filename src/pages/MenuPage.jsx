import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
import Tooltip from "../components/Tooltip";
import "./menu.css";

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      visibleCount: 6,
      cart: {},
    };
  }

  componentDidMount() {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ meals: data });
      });
  }

  handleAddToCart = (id) => {
    this.setState((prevState) => {
      const currentQty = prevState.cart[id] || 0;
      return {
        cart: {
          ...prevState.cart,
          [id]: currentQty + 1,
        },
      };
    });
  };

  handleSeeMore = () => {
    this.setState((prevState) => ({
      visibleCount: prevState.visibleCount + 6,
    }));
  };

  render() {
    const { meals, visibleCount, cart } = this.state;
    const visibleItems = meals.slice(0, visibleCount);
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
                <button className="menu-btn active">Dessert</button>
                <button className="menu-btn">Dinner</button>
                <button className="menu-btn">Breakfast</button>
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
                    onAddToCart={() => this.handleAddToCart(item.id)}
                  />
                ))}
              </div>

              {visibleCount < meals.length && (
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
                    onClick={this.handleSeeMore}
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
  }
}

export default MenuPage;
