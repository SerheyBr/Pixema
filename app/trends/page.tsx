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
  const [trends, setTrends] = useState<null | any>(null);

  useEffect(() => {
    getFilms()
      .then((res) => res.json())
      .then((data) => setTrends(data.Search));
  }, []);

  return (
    <div className="wrapper">
      {trends ? (
        <div className=" -mx-5 flex flex-wrap">
          {trends.map((film: any) => (
            <div className="w-1/5 px-5" key={film.imdbID}>
              <Card film={film} trends={true} />
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
