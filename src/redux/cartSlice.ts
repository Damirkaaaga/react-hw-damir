import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: Record<string, number>; 
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
