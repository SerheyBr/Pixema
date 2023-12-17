"use client";
import Image from "next/image";
import SortingBtn from "@/components/SortingBtn";
import UserLogo from "@/components/UserLogo";
import SearchInput from "@/components/SearchInput";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import Burger from "@/components/Burger";
import CustomInput from "@/components/CustomInput";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

// const getFilms = async () => {
//   const response = await fetch(
//     "https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7"
//   );
//   return response;
// };

const getFilms = async () => {
  const response = await fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Gary"
  );
  return response;
};

export default function Home() {
  const [film, setFilm] = useState(null);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  useEffect(() => {
    getFilms()
      .then((res) => res.json())
      .then((data) => setFilm(data.Search));
  }, []);

  console.log(film);
  console.log(isOpenBurger);
  return (
    <div className="container">
      <div className="relative overflow-hidden">
        <div className=" -mx-5 flex flex-wrap">
          {film
            ? film.map((film) => (
                <div className=" w-1/5 px-5">
                  <Card
                    img={film.Poster}
                    title={film.Title}
                    rating={"0.0"}
                    gengres={"none"}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
