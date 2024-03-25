"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IMovie } from "@/types/types";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import Carusel from "@/components/Carusel";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addFilm, removeFilm } from "@/redux/favoritesSlice";
import { fetchSelectedFilms } from "@/redux/selectedFilmSlice";
import CircularProgress from "@mui/material/CircularProgress";

const Muvie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const movie: IMovie | null = useSelector<RootState>(
    (state) => state.selectedFilm.film
  );
  const { id } = useParams<{ id: string }>();
  const [isFavorites, setIsFavorites] = useState(false);

  useEffect(() => {
    dispatch(fetchSelectedFilms(id));
  }, []);

  const favorites: any = useSelector<RootState>(
    (state) => state.favorites.favorites
  );

  const checkPresence = (arr: any[], id: string | number) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].imdbID === id) {
        setIsFavorites(false);
        dispatch(removeFilm(id));
        return;
      }
    }
    setIsFavorites(true);
    dispatch(addFilm(movie));
  };

  useEffect(() => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].imdbID === id) {
        setIsFavorites(true);
      }
    }
  }, []);

  return (
    <div className="wrapper">
      {movie ? (
        <div className="flex flex-col">
          <div className="w-72 mr-11">
            <div className="relative mb-8 rounded-lg overflow-hidden bg-orange-300">
              <img src={movie.Poster} alt="poster" />
              <div className="absolute right-0 bottom-0 text-white">
                {isFavorites ? (
                  <button
                    onClick={() => checkPresence(favorites, movie.imdbID)}
                    className=" py-1 px-2 text-center hover:bg-sky-700 duration-500 rounded-tl-lg bg-sky-800"
                  >
                    <TurnedInIcon />
                  </button>
                ) : (
                  <button
                    onClick={() => checkPresence(favorites, movie.imdbID)}
                    className=" bg-gray-700 py-1 px-2 text-center hover:bg-gray-600 duration-500 rounded-tl-lg "
                  >
                    <TurnedInIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <p className=" text-base text-gray-500 mb-3">{movie.Genre}</p>
            <h3 className=" text-2xl sm:text-5xl text-white font-semibold mb-6">
              {movie.Title}
            </h3>
            <div className=" mb-10 flex text-base font-bold text-white whitespace-nowrap">
              <div className="mr-5 p-2 rounded-xl bg-green-700 w-min">
                {movie.Ratings[0].Value}
              </div>
              <div className="mr-5  p-2 rounded-xl bg-gray-500 w-min">
                <p>IMDB {movie.imdbRating}</p>
              </div>
              <div className="mr-5  p-2 rounded-xl bg-gray-500 w-min">
                {movie.Runtime}
              </div>
            </div>
            <p className="mb-10 text-white">{movie.Plot}</p>
            <ul className="mb-14 text-white text-base">
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Year</p>
                <p>{movie.Year}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Relised</p>
                <p>{movie.Released}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">BoxOffice</p>
                <p>{movie.BoxOffice}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Country</p>
                <p>{movie.Country}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Production</p>
                <p>{movie.Production}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Actors</p>
                <p>{movie.Actors}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Director</p>
                <p>{movie.Director}</p>
              </li>
              <li className=" mb-5 flex">
                <p className=" w-48 text-gray-400">Writers</p>
                <p>{movie.Writer}</p>
              </li>
            </ul>
            <h4 className=" mb-10 text-white text-2xl font-semibold">
              Recommendations
            </h4>
            <div className=" w-full ">
              <Carusel />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute top-52 left-72">
            <CircularProgress />
          </div>
        </div>
      )}
    </div>
  );
};

export default Muvie;
