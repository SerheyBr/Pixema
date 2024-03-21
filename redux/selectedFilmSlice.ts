import { IMovie } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSelectedFilms = createAsyncThunk(
  "selectedFilm/fetchSelectedFilms",
  async (id: string | number) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=9baeb1f7&`
    );
    const data = await response.json();

    return data;
  }
);

interface IInitialState {
  film: null | IMovie;
}

const initialState: IInitialState = {
  film: null,
};

export const selectedFilmSlice = createSlice({
  name: "selectedFilm",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSelectedFilms.fulfilled, (state, action) => {
      state.film = action.payload;
    });
  },
});

export default selectedFilmSlice.reducer;
