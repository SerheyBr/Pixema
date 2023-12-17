"use client";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

const getFilms = async () => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=9baeb1f7&s=Potter`
  );
  return response;
};

const Trends = () => {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    getFilms()
      .then((res) => res.json())
      .then((data) => setTrends(data.Search));
  }, []);
  return (
    <div className="container">
      {trends ? (
        <div className=" -mx-5 flex flex-wrap">
          {trends.map((film: any) => (
            <div className="w-1/5 px-5">
              <Card
                img={film.Poster}
                title={film.Title}
                rating={"0.0"}
                gengres={"none"}
                trends={true}
              />
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Trends;
