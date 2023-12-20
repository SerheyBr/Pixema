"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";

const getFilms = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Favorites`
  );
  return response;
};

const Favorites = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    getFilms()
      .then((res) => res.json())
      .then((data) => setFilms(data.Search));
  }, []);

  return (
    <div className="wrapper">
      {films ? (
        <div className=" -mx-5 flex flex-wrap">
          {films.map((film: any) => (
            <div className="w-1/5 px-5">
              <Card
                img={film.Poster}
                title={film.Title}
                rating={"0.0"}
                gengres={"none"}
              />
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
