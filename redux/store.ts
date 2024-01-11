import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import favoritesSlice from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
