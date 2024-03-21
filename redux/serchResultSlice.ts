import { IMovie } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export const fetchSearchFilms = createAsyncThunk(
  "searchResult/fetchSearchFilms",
  async (params: IParametrsSearch) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=${params.searchValue}&page=${params.page}`
    );
    const data = await response.json();

    return data;
  }
);

interface IParametrsSearch {
  page: string | number;
  searchValue: string;
}

interface IFilmsSlise {
  searchFilmsList: any | [IMovie];
  parametrsSearch: IParametrsSearch;
  totalResult: number;
  isShowFullListResultSearch: boolean;
}

const initialState: IFilmsSlise = {
  searchFilmsList: [],
  totalResult: 0,
  isShowFullListResultSearch: false,
  parametrsSearch: {
    page: 1,
    searchValue: "",
  },
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    showSearchList: (state) => {
      state.isShowFullListResultSearch = true;
    },
    dontShowSearchList: (state) => {
      state.isShowFullListResultSearch = false;
    },
    setPageSearchValue: (state, action) => {
      state.parametrsSearch.page = action.payload;
    },
    setValueSearch: (state, action) => {
      state.parametrsSearch.searchValue = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
      state.searchFilmsList = action.payload.Search;
      state.totalResult = action.payload.totalResults;
    });
  },
});

export const {
  showSearchList,
  dontShowSearchList,
  setPageSearchValue,
  setValueSearch,
} = searchResultSlice.actions;
export default searchResultSlice.reducer;
