"use client";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { setPage, fetchTrends } from "@/redux/trendsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { IMovie } from "@/types/types";
import { Pagination } from "@mui/material";

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
      {trends ? (
        <div className=" -mx-5 flex flex-wrap">
          {trends.map((film: IMovie) => (
            <div className="w-1/5 px-5" key={film.imdbID}>
              <Card film={film} trends={true} />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <Pagination
        count={allPages}
        page={currentPage ? currentPage : 1}
        onChange={(event, page) => dispatch(setPage(page))}
      ></Pagination>
    </div>
  );
};

export default Trends;
