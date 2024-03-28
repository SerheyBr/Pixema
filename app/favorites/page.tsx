"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Favorites = () => {
  const favorites: any = useSelector<RootState>(
    (state) => state.favorites.favorites
  );

  return (
    <div className="wrapper">
      {favorites.length > 0 ? (
        <div className="  -mx-1 flex flex-wrap sm:-mx-2 md:-mx-3 lg:-mx-4">
          {favorites.map((film: any) => (
            <div
              className=" w-full px-1 sm:w-1/4 sm:px-2 md:w-1/3 md:px-3 lg:w-1/5 lg:px-4"
              key={film.imdbID}
            >
              <Card film={film} />
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
