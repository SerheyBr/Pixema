import { IMovie } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTrends = createAsyncThunk(
  "trends/fetchTrends",
  async (page: number | string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=matrix&page=${page}`
    );
    const data = await response.json();
    return data;
  }
);

interface ITrendsSlise {
  trends: [] | [IMovie];
  currentPage: number | string;
  totalResult: number;
}

const initialState: ITrendsSlise = {
  trends: [],
  currentPage: 1,
  totalResult: 0,
};

export const trndsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTrends.fulfilled, (state, action) => {
      state.trends = action.payload.Search;

      state.totalResult = action.payload.totalResults;
    });
  },
});

export const { setPage } = trndsSlice.actions;
export default trndsSlice.reducer;
