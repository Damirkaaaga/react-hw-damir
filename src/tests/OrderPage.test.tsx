import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cartSlice";
import mealsReducer from "../store/slices/mealsSlice";
import OrderPage from "../pages/Order/OrderPage";

const mockMeal = {
  id: "1",
  meal: "Burger",
  img: "burger.jpg",
  price: 9.99,
  category: "Fast Food",
};

const renderWithStore = (cartItems: Record<string, number>) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      meals: mealsReducer,
    },
    preloadedState: {
      cart: { items: cartItems },
      meals: { items: [mockMeal], status: "idle", error: null },
    },
  });

  return render(
    <Provider store={store}>
      <OrderPage />
    </Provider>
  );
};

describe("OrderPage", () => {
  test("renders items from the cart", () => {
    renderWithStore({ "1": 2 });

    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();
    expect(screen.getByText("$9.99 USD")).toBeInTheDocument();
  });

  test("removes item from cart on X click", () => {
    renderWithStore({ "1": 1 });

    const removeButton = screen.getByRole("button", { name: "X" });
    fireEvent.click(removeButton);
  });

  test("displays address form", () => {
    renderWithStore({ "1": 1 });

    expect(screen.getByLabelText("Street")).toBeInTheDocument();
    expect(screen.getByLabelText("House")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Order" })).toBeInTheDocument();
  });

  test("renders nothing if the cart is empty", () => {
    renderWithStore({});

    expect(screen.queryByText("Burger")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "X" })).not.toBeInTheDocument();
  });
});
