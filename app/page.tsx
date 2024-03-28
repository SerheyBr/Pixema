"use client";
import Card from "@/components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "@/redux/store";
import { fetchFilms, setPage } from "@/redux/filmsSlice";
import { IMovie } from "@/types/types";
import { CircularProgress, Pagination } from "@mui/material";
import { setPageSearchValue } from "@/redux/serchResultSlice";

export default function Home() {
  const dispath = useDispatch<AppDispatch>();
  const films: any = useSelector<RootState>((state) => state.films.films);
  const tottalResultMainFilms: any = useSelector<RootState>(
    (state) => state.films.totalResult
  );
  const tottalResultSearch: any = useSelector<RootState>(
    (state) => state.searchResult.totalResult
  );
  const searchResultList: any = useSelector<RootState>(
    (state) => state.searchResult.searchFilmsList
  );
  const isShowFullSearchList = useSelector<RootState>(
    (state) => state.searchResult.isShowFullListResultSearch
  );
  const searchPage: any = useSelector<RootState>(
    (state) => state.searchResult.parametrsSearch.page
  );
  const currentPage: any = useSelector<RootState>(
    (state) => state.films.currentPage.page
  );

  let allPages = tottalResultMainFilms
    ? Math.ceil(tottalResultMainFilms / 10)
    : 0;
  let allPagesResultSearch = tottalResultSearch
    ? Math.ceil(tottalResultSearch / 10)
    : 0;

  useEffect(() => {
    dispath(fetchFilms(currentPage));
  }, [currentPage]);

  return (
    <div className="wrapper">
      <div className="relative overflow-hidden">
        <div className=" -mx-1 flex flex-wrap sm:-mx-2 md:-mx-3 lg:-mx-4">
          {isShowFullSearchList
            ? searchResultList?.map((film: IMovie) => (
                <div
                  className=" w-full px-1 sm:w-1/4 sm:px-2 md:w-1/3 md:px-3 lg:w-1/5 lg:px-4"
                  key={film.imdbID}
                >
                  <div>
                    <Card film={film} />
                  </div>
                </div>
              ))
            : films?.length
            ? films.map((film: IMovie) => (
                <div
                  className=" w-full px-1 sm:w-1/4 sm:px-2 md:w-1/3 md:px-3 lg:w-1/5 lg:px-4"
                  key={film.imdbID}
                >
                  <div>
                    <Card film={film} />
                  </div>
                </div>
              ))
            : ""}
        </div>
        {isShowFullSearchList ? (
          <div className="mt-7 w-full flex justify-center">
            <Pagination
              page={searchPage ? searchPage : 1}
              count={allPagesResultSearch}
              onChange={(event, page) => dispath(setPageSearchValue(page))}
            ></Pagination>
          </div>
        ) : films.length ? (
          <div className=" mt-7 w-full flex justify-center">
            <Pagination
              count={allPages}
              page={currentPage ? currentPage : 1}
              onChange={(event, page) => dispath(setPage(page))}
            ></Pagination>
          </div>
        ) : (
          <div className="relative w-full h-screen">
            <div className="absolute top-1/4 left-2/4 ">
              <CircularProgress />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
