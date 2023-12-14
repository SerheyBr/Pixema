import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ISortingBtnProps {
  text: string;
}

const SortingBtn: FC<ISortingBtnProps> = ({ text }) => {
  return (
    <button className="h-10 px-6 bg-gray-600 text-gray-200 flex items-center rounded-full hover:bg-gray-700 ease-in-out duration-300">
      <p className="mr-2 font-medium">{text}</p>
      <CloseIcon className="w-5 h-5" />
    </button>
  );
};

export default SortingBtn;
