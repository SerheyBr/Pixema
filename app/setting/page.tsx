import CustomInput from "@/components/CustomInput";
import Title from "@/components/Title";
import React from "react";
import Switch from "@mui/material/Switch";

const Setting = () => {
  return (
    <div className="wrapper">
      <div className=" mb-4">
        <Title title={"Profile"} />
      </div>
      <div className=" mb-10 bg-gray-700 flex p-10 rounded-xl">
        <div className=" w-3/6 px-10">
          <CustomInput type={"text"} placeholder="Your name" title="Name" />
        </div>
        <div className=" w-3/6 px-10">
          <CustomInput type={"text"} placeholder="Your email" title="Email" />
        </div>
      </div>
      <div className=" mb-4">
        <Title title={"Color mode"} />
      </div>
      <div className=" mb-10 bg-gray-700 flex justify-between items-center p-10 rounded-xl">
        <div>
          <p className=" text-xl font-bold text-white">DARK</p>
          <p className=" text-white">use DARK theme</p>
        </div>
        <Switch />
      </div>
    </div>
  );
};

export default Setting;
