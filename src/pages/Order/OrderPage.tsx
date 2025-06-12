import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchMeals } from "../../store/slices/mealsSlice";
import { removeFromCart } from "../../store/slices/cartSlice";
import "./OrderPage.css";

const OrderPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const meals = useSelector((state: RootState) => state.meals.items);

  return (
    <div className="order-container">
      <div className="background-angle"></div>{" "}
      <div className="order-page">
        <h2 className="order-title">Finish your order</h2>

        <div className="order-list">
          {Object.entries(cartItems).map(([id, quantity]) => {
            const meal = meals.find((item) => item.id === id);
            if (!meal) return null;

            return (
              <div className="order-item" key={id}>
                <img src={meal.img} alt={meal.meal} className="order-image" />
                <div className="order-info">
                  <span className="order-name">{meal.meal}</span>
                </div>

                <div className="order-controls">
                  <span className="order-price">
                    ${meal.price.toFixed(2)} USD
                  </span>
                  <input
                    className="order-quantity"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                </div>

                <button
                  className="order-remove"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>

        <div className="order-form">
          <div className="order-form-row">
            <label htmlFor="street">Street</label>
            <input id="street" className="order-input" type="text" />
          </div>
          <div className="order-form-row">
            <label htmlFor="house">House</label>
            <input id="house" className="order-input" type="text" />
          </div>
          <button className="order-submit">Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
