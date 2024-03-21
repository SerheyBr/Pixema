import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface IInitialState {
  favorites: any[];
}

const initialState: IInitialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFilm: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFilm: (state, action) => {
      state.favorites = state.favorites.filter(
        (el) => !(el.imdbID === action.payload)
      );
    },
  },
});

export const { addFilm, removeFilm } = favoritesSlice.actions;
export default favoritesSlice.reducer;
