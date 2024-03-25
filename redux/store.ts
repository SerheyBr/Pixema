import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./filmsSlice";
import seachResultSclice from "./serchResultSlice";
import trendsSlice from "./trendsSlice";
import favoritesSlice from "./favoritesSlice";
import selectedFilmSlice from "./selectedFilmSlice";
import toggleModalSearchResultsSlice from "./toggleModalSearchResults";

export const store = configureStore({
  reducer: {
    films: filmsSlice,
    searchResult: seachResultSclice,
    trends: trendsSlice,
    favorites: favoritesSlice,
    selectedFilm: selectedFilmSlice,
    toggleModalSearch: toggleModalSearchResultsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
