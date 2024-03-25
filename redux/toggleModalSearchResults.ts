import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IToggleModalSearch {
  isOpen: boolean;
}

const initialState: IToggleModalSearch = {
  isOpen: false,
};

export const toggleModalSearchResultsSlice = createSlice({
  name: "toggleModalSearch",
  initialState,
  reducers: {
    openModalSearchResults: (state) => {
      state.isOpen = true;
    },
    closeModalSearchResults: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  openModalSearchResults,
  closeModalSearchResults,
} = toggleModalSearchResultsSlice.actions;
export default toggleModalSearchResultsSlice.reducer;
