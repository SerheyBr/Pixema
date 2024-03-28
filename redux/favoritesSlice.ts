import { createSlice } from "@reduxjs/toolkit";

const localStorageFavorites: any = JSON.parse(
  localStorage.getItem("favorites")
);

interface IInitialState {
  favorites: any[];
}

const initialState: IInitialState = localStorageFavorites.length
  ? { favorites: localStorageFavorites }
  : { favorites: [] };

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFilm: (state, action) => {
      state.favorites = [...state.favorites, action.payload];

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFilm: (state, action) => {
      state.favorites = state.favorites.filter(
        (el) => !(el.imdbID === action.payload)
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFilm, removeFilm } = favoritesSlice.actions;
export default favoritesSlice.reducer;
