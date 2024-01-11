import { IMovie } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoritesSlice {
  favorites: [];
}

const initialState: IFavoritesSlice = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<IMovie>) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { addMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
