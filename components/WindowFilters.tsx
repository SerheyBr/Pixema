"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CloseIcon from "@mui/icons-material/Close";

const WindowFilters = () => {
  const [sortTo, setSortTo] = useState("Rating");
  const [closeFilter, setCloseFilter] = useState(true);
  return (
    <div
      className={
        closeFilter
          ? " hidden"
          : "fixed top-0 right-0 px-10 py-12 h-screen w-96 bg-slate-700 flex flex-col justify-between"
      }
    >
      <button
        className=" absolute top-12 right-4 text-white"
        onClick={() => setCloseFilter(true)}
      >
        <CloseIcon />
      </button>

      <h2 className=" mb-12 text-xl font-bold text-white">Filters</h2>
      <div>
        <h3 className=" mb-3 text-base font-semibold text-white">Sort by</h3>
        {sortTo === "Rating" ? (
          <div className=" mb-6 bg-slate-400 w-full h-12 rounded-lg">
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
          <div className=" mb-6 bg-slate-400 w-full h-12 rounded-lg">
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
        <div className="w-max mb-5">
          <CustomInput
            type={"text"}
            placeholder="Your text"
            title=" Full or short muvie name"
          />
        </div>
        <div className="w-full mb-5">
          <h3 className=" mb-3 text-base font-semibold text-white">Years</h3>
          <div className="flex justify-between -mx-5">
            <div className="w-2/4 px-5">
              <CustomInput type={"number"} placeholder="From" />
            </div>
            <div className="w-2/4 px-5">
              <CustomInput type={"number"} placeholder="To" />
            </div>
          </div>
        </div>
        <div className="w-full mb-5">
          <h3 className=" mb-3 text-base font-semibold text-white">Years</h3>
          <div className="flex justify-between -mx-5">
            <div className="w-2/4 px-5">
              <CustomInput type={"number"} placeholder="From" />
            </div>
            <div className="w-2/4 px-5">
              <CustomInput type={"number"} placeholder="To" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-between">
          <button className=" px-8 py-4 rounded-xl bg-slate-600 hover:bg-slate-500 duration-150 text-white">
            Clear filter
          </button>
          <button className=" px-8 py-4 rounded-xl bg-sky-700 hover:bg-sky-600 duration-150 text-white">
            Clear filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowFilters;
