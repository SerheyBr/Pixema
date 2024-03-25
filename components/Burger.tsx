import React, { FC } from "react";

interface IBurgerProps {
  isOpen: boolean;
  onClick: any;
}

const Burger: FC<IBurgerProps> = ({ isOpen, onClick }) => {
  return isOpen ? (
    <button
      onClick={onClick}
      className=" bg-purple-700 w-14 h-14 rounded-xl flex justify-center items-center"
    >
      <div className="w-6 h-6 relative before:block before:h-0.5 before:w-full before:bg-white before:rounded-md before:absolute before:top-2/4 before:rotate-45 after:block after:h-0.5 after:w-full after:bg-white after:rounded-md after:absolute after:top-2/4 after:-rotate-45 before:ease-in-out before:duration-500 after:ease-in-out after:duration-500"></div>
    </button>
  ) : (
    <button
      onClick={onClick}
      className=" bg-purple-700 w-14 h-14 rounded-xl flex justify-center items-center"
    >
      <div className="w-6 h-6 relative before:block before:h-0.5 before:w-full before:bg-white before:rounded-md before:absolute before:top-0 after:block after:h-0.5 after:w-full after:bg-white after:rounded-md after:absolute after:bottom-0 after:ease-in-out after:duration-500 before:ease-in-out before:duration-500">
        <span className=" block h-0.5 w-full bg-white rounded-md absolute top-2/4 -translate-y-2/4 ease-in-out duration-500"></span>
      </div>
    </button>
  );
};

export default Burger;
