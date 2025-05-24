import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await fetch(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );
  return await response.json();
});

interface Meal {
  id: string;
  meal: string;
  img: string;
  price: number;
  area?: string;
  category: string;
}

interface MealsState {
  meals: Meal[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: MealsState = {
  meals: [],
  status: "idle",
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meals = action.payload;
      })
      .addCase(fetchMeals.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default mealsSlice.reducer;
