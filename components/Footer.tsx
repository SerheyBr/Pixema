"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Burger from "./Burger";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <div className=" wrapper">
      <div
        className={
          isOpenMenu
            ? "relative right-64 ease-in-out duration-700 flex justify-between mt-10 items-center"
            : " static right-0 ease-in-out duration-700 flex justify-between mt-10 items-center"
        }
      >
        <div className=" hidden sm:block md:hidden mr-20 ">
          <Image src={"pixema.svg"} alt={"img"} width={160} height={40} />
        </div>
        <div className="flex w-full items-center">
          <div className=" w-full mr-10">
            <SearchInput />
          </div>
          <div className=" block md:hidden">
            <Burger isOpen={isOpenMenu} onClick={() => toggleMenu()}></Burger>
          </div>
        </div>
        <ul
          className={
            isOpenMenu
              ? "absolute -top-12 left-full w-full p-5 pt-12 h-screen z-10 flex flex-col text-gray-400 bg-slate-800 "
              : "hidden"
          }
        >
          <li className="w-min mb-10">
            <Link
              href={"/"}
              className={
                pathName === "/"
                  ? " flex text-blue-700  duration-150"
                  : " flex duration-150"
              }
              onClick={() => setIsOpenMenu(false)}
            >
              <HomeIcon className=" mr-6" />
              <p className=" text-lg font-semibold">Home</p>
            </Link>
          </li>
          <li className="w-min mb-10">
            <Link
              href={"/trends"}
              className={
                pathName === "/trends"
                  ? " flex text-blue-700  duration-150"
                  : " flex  duration-150"
              }
              onClick={() => setIsOpenMenu(false)}
            >
              <WhatshotIcon className=" mr-6" />
              <p className="text-lg font-semibold">Trends</p>
            </Link>
          </li>
          <li className="w-min mb-10">
            <Link
              href={"/favorites"}
              className={
                pathName === "/favorites"
                  ? " flex text-blue-700  duration-150"
                  : " flex  duration-150"
              }
              onClick={() => setIsOpenMenu(false)}
            >
              <TurnedInIcon className=" mr-6" />
              <p className="text-lg font-semibold">Favorite</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
