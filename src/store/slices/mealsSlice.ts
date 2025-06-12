import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Meal } from "../../types/Meal";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await fetch(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }
  const data: Meal[] = await response.json();
  return data;
});

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    items: [] as Meal[],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch meals";
      });
  },
});

export default mealsSlice.reducer;
