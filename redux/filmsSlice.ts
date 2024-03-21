import { IMovie } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (page: number | string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Foot&page=${page}`
    );
    const data = await response.json();

    return data;
  }
);

interface ICurrentPage {
  page: string | number;
}

interface IFilmsSlise {
  films: [] | [IMovie];
  currentPage: ICurrentPage;
  totalResult: number;
  favoritesFilms: [];
}

const initialState: IFilmsSlise = {
  films: [],
  currentPage: {
    page: 1,
  },
  totalResult: 0,
  favoritesFilms: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.Search;
      state.totalResult = action.payload.totalResults;
    });
  },
});

export const { setPage } = filmsSlice.actions;
export default filmsSlice.reducer;
