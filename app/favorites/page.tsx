"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const getFilms = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Favorites`
  );
  return response;
};

const Favorites = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const [films, setFilms] = useState<null | any>(null);

  useEffect(() => {
    getFilms()
      .then((res) => res.json())
      .then((data) => setFilms(data.Search));
  }, []);

  return (
    <div className="wrapper">
      {favorites.length > 0 ? (
        <div className=" -mx-5 flex flex-wrap">
          {favorites.map((film: any) => (
            <div className="w-1/5 px-5" key={film.imdbID}>
              <Card film={film} trends={false} />
            </div>
          ))}
        </div>
      ) : (
        <div className=" mt-32 w-4/5 text-gray-500">
          <div className="flex flex-col items-center">
            <Image
              src={"/card-empty.svg"}
              alt={"empty favorites"}
              width={300}
              height={300}
              className=" mb-7"
            />
            <p className=" text-xl font-semibold">Favorites emty</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
