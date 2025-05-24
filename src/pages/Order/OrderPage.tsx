import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchMeals } from "../../store/slices/mealsSlice";
import "./OrderPage.css";

const OrderPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const meals = useSelector((state: RootState) => state.meals.meals);

  return (
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
                <span className="order-price">
                  ${meal.price.toFixed(2)} USD
                </span>
              </div>
              <input
                className="order-quantity"
                type="text"
                value={quantity}
                readOnly
              />
              <button className="order-remove">X</button>
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
  );
};

export default OrderPage;
