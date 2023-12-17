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

const getFilms = async (page: number) => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Gary&page=${page}`
  );
  return response;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [films, setFilm] = useState([]);
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  useEffect(() => {
    getFilms(page)
      .then((res) => res.json())
      .then((data) => setFilm(data.Search));
  }, [page]);

  console.log(films);
  console.log(isOpenBurger);
  return (
    <div className="container">
      <div className="relative overflow-hidden">
        <div className=" -mx-5 flex flex-wrap">
          {films
            ? films.map((film: any) => (
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
        <button
          className="block mt-5 mx-auto px-6 py-2 bg-slate-600 rounded-full text-base text-white hover:bg-slate-400 duration-150"
          onClick={() => setPage((prev) => prev + 1)}
        >
          show more
        </button>
      </div>
    </div>
  );
}
