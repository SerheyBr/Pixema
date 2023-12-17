import React, { FC } from "react";

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({ title }) => {
  return <h2 className=" text-2xl font-semibold text-white">{title}</h2>;
};

export default Title;
