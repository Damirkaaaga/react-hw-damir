import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.ts";
import authReducer from "./slices/authSlice";
import mealsReducer from "./slices/mealsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
