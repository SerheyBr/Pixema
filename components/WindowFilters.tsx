"use client";
import React, { useState } from "react";

const WindowFilters = () => {
  const [sortTo, setSortTo] = useState("Rating");
  return (
    <div className="fixed top-0 right-0 px-10 py-12 h-screen w-96 bg-slate-700">
      <h2 className=" mb-12 text-xl font-bold text-white">Filters</h2>
      <h3 className=" mb-3 text-base font-semibold text-white">Sort by</h3>
      {sortTo === "Rating" ? (
        <div className=" bg-slate-400 w-full h-12 rounded-lg">
          <button
            className=" h-full w-2/4 bg-slate-400 rounded-l-lg border-2 border-solid border-slate-400 text-gray-300"
            onClick={() => setSortTo("Rating")}
          >
            Rating
          </button>
          <button
            className=" h-full w-2/4 bg-slate-700 rounded-r-lg border-2 border-solid border-slate-400 text-white"
            onClick={() => setSortTo("Your")}
          >
            Year
          </button>
        </div>
      ) : (
        <div className=" bg-slate-400 w-full h-12 rounded-lg">
          <button
            className=" h-full w-2/4 bg-slate-700 rounded-l-lg border-2 border-solid border-slate-400 text-white"
            onClick={() => setSortTo("Rating")}
          >
            Rating
          </button>
          <button
            className=" h-full w-2/4 bg-slate-400 rounded-r-lg border-2 border-solid border-slate-400 text-gray-300"
            onClick={() => setSortTo("Your")}
          >
            Your
          </button>
        </div>
      )}
    </div>
  );
};

export default WindowFilters;
