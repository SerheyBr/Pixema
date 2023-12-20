import React from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import UserLogo from "./UserLogo";

const Footer = () => {
  return (
    <div className="wrapper">
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
