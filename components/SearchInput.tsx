import React from "react";
import SortIcon from "@mui/icons-material/Sort";

const SearchInput = () => {
  return (
    <label className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-5 h-14 font-medium bg-gray-600 text-white rounded-lg border-2 border-solid border-gray-600 focus:border-violet-600"
      />
      <button className="absolute right-4 top-2/4 -translate-y-2/4">
        <SortIcon className="text-gray-400 -scale-x-100" />
        <span className="w-2 h-2 rounded-full bg-indigo-300 absolute left-0 bottom-0"></span>
      </button>
    </label>
  );
};

export default SearchInput;
