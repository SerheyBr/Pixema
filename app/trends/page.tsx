"use client";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { setPage, fetchTrends } from "@/redux/trendsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { IMovie } from "@/types/types";
import { CircularProgress, Pagination } from "@mui/material";

// const getFilms = async () => {
//   const response = await fetch(
//     `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Potter`
//   );
//   return response;
// };

const Trends = () => {
  const dispatch = useDispatch<AppDispatch>();
  const trends: any = useSelector<RootState>((state) => state.trends.trends);
  const currentPage: any = useSelector<RootState>(
    (state) => state.trends.currentPage
  );
  const totalResult: any = useSelector<RootState>(
    (state) => state.trends.totalResult
  );
  let allPages = totalResult ? Math.ceil(totalResult / 10) : 0;

  useEffect(() => {
    dispatch(fetchTrends(currentPage));
  }, [currentPage]);

  return (
    <div className="wrapper">
      {trends.length ? (
        <div className="  -mx-1 flex flex-wrap sm:-mx-2 md:-mx-3 lg:-mx-4">
          {trends.map((film: IMovie) => (
            <div
              className=" w-full px-1 sm:w-1/4 sm:px-2 md:w-1/3 md:px-3 lg:w-1/5 lg:px-4"
              key={film.imdbID}
            >
              <Card film={film} />
            </div>
          ))}
          <div className=" mt-7 w-full flex justify-center">
            <Pagination
              count={allPages}
              page={currentPage ? currentPage : 1}
              onChange={(event, page) => dispatch(setPage(page))}
            ></Pagination>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-screen">
          <div className="absolute top-1/4 left-2/4 ">
            <CircularProgress />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trends;
