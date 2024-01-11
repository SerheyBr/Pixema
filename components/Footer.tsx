"use client";
import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import UserLogo from "./UserLogo";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/redux/counterSlice";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/redux/store";

const Footer = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log(counter);
  return (
    <div className="wrapper">
      <div className=" flex items-center mt-3">
        <button
          className=" w-4 h-4 bg-orange-500 flex items-center justify-center"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <p className=" bg-white w-min mx-3">{counter}</p>
        <button
          className=" w-4 h-4 bg-orange-500 flex items-center justify-center"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="flex justify-between mt-10 items-center">
        <div className=" mr-20 hidden">
          <Image src={"pixema.svg"} alt={"img"} width={160} height={40} />
        </div>
        <div className="flex w-full items-center">
          <div className="w-full mr-10">
            <SearchInput />
          </div>

          <UserLogo img={"ewd"} email={"Email"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
