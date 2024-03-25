"use client";
import React, { useEffect } from "react";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  fetchSearchFilms,
  showSearchList,
  dontShowSearchList,
  setValueSearch,
  setPageSearchValue,
} from "@/redux/serchResultSlice";
import { setPage } from "@/redux/filmsSlice";
import { IMovie } from "@/types/types";
import {
  openModalSearchResults,
  closeModalSearchResults,
} from "@/redux/toggleModalSearchResults";
import ModalSearchResults from "./ModalSearchResults";

const SearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchResult: any = useSelector<RootState>(
    (state) => state.searchResult.searchFilmsList
  );
  const argumentsSearch: any = useSelector<RootState>(
    (state) => state.searchResult.parametrsSearch
  );
  const isOpenSerachModal: any = useSelector<RootState>(
    (state) => state.toggleModalSearch.isOpen
  );

  let searchValue = argumentsSearch.searchValue;
  let searchPage = argumentsSearch.page;

  useEffect(() => {
    dispatch(fetchSearchFilms(argumentsSearch));
    dispatch(openModalSearchResults());

    if (searchValue === "") {
      dispatch(dontShowSearchList());
      dispatch(setPageSearchValue(1));
      dispatch(setPage(1));
    }
  }, [searchValue]);

  useEffect(() => {
    dispatch(fetchSearchFilms(argumentsSearch));
  }, [searchPage]);

  const onClickBthSearch = () => {
    if (searchResult?.length) {
      dispatch(showSearchList());
    }
    dispatch(closeModalSearchResults());
  };

  const focusInputSearch = (): void => {
    searchResult
      ? dispatch(openModalSearchResults())
      : dispatch(closeModalSearchResults());
  };

  return (
    <div className="max-w-full">
      <label className="relative w-full z-30">
        <input
          value={argumentsSearch.searchValue}
          onChange={(event) => dispatch(setValueSearch(event.target.value))}
          onFocus={() => focusInputSearch()}
          type="text"
          placeholder="Search"
          className="w-full px-5 h-14 font-medium bg-gray-600 text-white rounded-lg border-2 border-solid border-gray-600 focus:border-violet-600"
        />
        <div className="absolute right-4 top-2/4 -translate-y-2/4">
          <Link href={"/"} onClick={onClickBthSearch}>
            <SearchIcon className="text-gray-400" />
          </Link>
        </div>
      </label>
      {searchResult && isOpenSerachModal ? (
        <div className=" absolute top-0 left-0 w-full h-full z-20">
          <div className=" absolute top-0 left-0 w-full h-full z-5 bg-gray-800 opacity-70"></div>
          <div
            className=" absolute top-0 left-0 w-full h-full"
            onClick={() => {
              dispatch(closeModalSearchResults());
            }}
          >
            <ModalSearchResults searchList={searchResult}></ModalSearchResults>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchInput;
