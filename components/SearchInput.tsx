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

const SearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchResult: any = useSelector<RootState>(
    (state) => state.searchResult.searchFilmsList
  );
  const argumentsSearch: any = useSelector<RootState>(
    (state) => state.searchResult.parametrsSearch
  );
  const [openListSearchPreview, setOpenListSearchPreview] = useState<boolean>(
    false
  );

  let searchValue = argumentsSearch.searchValue;
  let searchPage = argumentsSearch.page;

  useEffect(() => {
    dispatch(fetchSearchFilms(argumentsSearch));

    setOpenListSearchPreview(true);

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
    setOpenListSearchPreview(false);
  };

  const focusInputSearch = (): void => {
    searchResult
      ? setOpenListSearchPreview(true)
      : setOpenListSearchPreview(false);
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
          <button
            className="relative ml-2"
            onClick={() => console.log("open modal sort")}
          >
            <SortIcon className="text-gray-400 -scale-x-100" />
            <span className="w-2 h-2 rounded-full bg-indigo-300 absolute left-0 bottom-0"></span>
          </button>
        </div>
      </label>
      {searchResult && openListSearchPreview ? (
        <div
          className=" absolute top-0 left-0  bg-gray-800 w-full h-full opacity-70 z-20"
          onClick={() => setOpenListSearchPreview(false)}
        >
          <div className="relative top-28 left-2/4 w-96 h-mi pr-5 bg-white">
            <ul className="">
              {searchResult.map((el: IMovie) => (
                <li
                  key={el.imdbID}
                  className=" flex border-gray-800 border-solid transition-all cursor-pointer hover:bg-zinc-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    className="w-full"
                    href={`/movies/${el.imdbID}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenListSearchPreview(false);
                      dispatch(setValueSearch(""));
                    }}
                  >
                    <div className=" w-10 h-10">
                      <img
                        className=" w-full h-full object-cover"
                        src={el.Poster}
                        alt="poster"
                      />
                    </div>
                    <p>{el.Title}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className=" absolute top-0 right-0 text-red bg-amber-700"
              onClick={() => setOpenListSearchPreview(false)}
            >
              закрыть
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchInput;
