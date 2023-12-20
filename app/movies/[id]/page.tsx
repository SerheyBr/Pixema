"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { IMovie } from "@/types/types";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ShareIcon from "@mui/icons-material/Share";
import Carusel from "@/components/Carusel";

const getFilm = async (id: string) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=9baeb1f7&`
  );
  return response;
};

const Muvie = () => {
  const [movie, setMovie] = useState<null | IMovie>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getFilm(id)
      .then((res) => res.json())
      .then((data) => setMovie(data));
    console.log("id", id);
  }, []);

  console.log(movie);
  return (
    <div className="wrapper">
      {movie ? (
        <div className="flex">
          <div className=" w-72 mr-11">
            <div className=" mb-8 rounded-lg overflow-hidden">
              <img src={movie.Poster} alt="poster" />
            </div>
            <div className=" flex text-white">
              <button className="w-2/4 bg-gray-600 py-4 text-center hover:bg-gray-700 duration-150 border-black border-r rounded-l-lg ">
                <TurnedInIcon />
              </button>
              <button className="w-2/4 bg-gray-600 py-4 text-center hover:bg-gray-700 duration-150 border-black border-l rounded-r-lg">
                <ShareIcon />
              </button>
            </div>
          </div>
          <div>
            <p className=" text-base text-gray-500 mb-3">{movie.Genre}</p>
            <h3 className=" text-5xl text-white font-semibold mb-6">
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
            <ul className=" mb-14 text-white text-base">
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
            <Carusel />
          </div>
        </div>
      ) : (
        "laoding..."
      )}
    </div>
  );
};

export default Muvie;
