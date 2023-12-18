"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SettingsIcon from "@mui/icons-material/Settings";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" mt-12 ml-16 mb-16 h-full bg-slate-800 flex flex-col justify-between text-gray-400">
      <div>
        <div className=" mb-16">
          <Image src={"pixema.svg"} alt={"img"} width={160} height={40} />
        </div>
        <nav>
          <ul>
            <li className="w-min mb-10">
              <Link
                href={"/"}
                className={
                  pathName === "/"
                    ? " flex text-blue-700 hover:text-blue-700 duration-150"
                    : " flex hover:text-gray-200 duration-150"
                }
              >
                <HomeIcon className=" mr-6" />
                <p className="text-lg font-semibold">Home</p>
              </Link>
            </li>
            <li className="w-min mb-10">
              <Link
                href={"/trends"}
                className={
                  pathName === "/trends"
                    ? " flex text-blue-700 hover:text-blue-700 duration-150"
                    : " flex hover:text-gray-200 duration-150"
                }
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
                    ? " flex text-blue-700 hover:text-blue-700 duration-150"
                    : " flex hover:text-gray-200 duration-150"
                }
              >
                <TurnedInIcon className=" mr-6" />
                <p className="text-lg font-semibold">Favorite</p>
              </Link>
            </li>
            <li className="w-min mb-10">
              <Link
                href={"/setting"}
                className={
                  pathName === "/setting"
                    ? " flex text-blue-700 hover:text-blue-700 duration-150"
                    : " flex hover:text-gray-200 duration-150"
                }
              >
                <SettingsIcon className=" mr-6" />
                <p className="text-lg font-semibold">Settings</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <p className=" whitespace-nowrap fixed bottom-0">© All Rights Reserved</p>
    </div>
  );
};

export default Sidebar;
