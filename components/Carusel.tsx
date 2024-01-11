"use client";
import { IMovie } from "@/types/types";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const getFilms = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Gar`
  );
  return response;
};

const Carusel = () => {
  const [films, setFilm] = useState<null | IMovie[]>(null);

  useEffect(() => {
    getFilms()
      .then((res) => res.json())
      .then((data) => setFilm(data.Search));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className=" overflow-hidden">
      {films ? (
        <div>
          <div className=" max-w-4xl overflow-hidden">
            <Slider {...settings}>
              {films.map((movie) => (
                <div className=" px-2" key={movie.imdbID}>
                  <Card film={movie} trends={false} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div>Laoding...</div>
      )}
    </div>
  );
};

export default Carusel;
