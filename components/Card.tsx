import React, { FC } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";

interface ICardProps {
  img: string;
  title: string;
  rating: string | number;
  gengres: any;
  trends?: boolean;
}

const Card: FC<ICardProps> = ({ img, title, rating, gengres, trends }) => {
  return (
    <div className=" w-full ">
      <div className=" mb-6 relative h-96 rounded-xl bg-zinc-500">
        <img
          className="rounded-xl object-cover w-full h-full "
          src={img}
          alt="img"
        />
        {trends ? (
          <div className=" absolute top-3 left-3 flex items-center w-min p-2 bg-blue-900 rounded-md text-white text-lg">
            <WhatshotIcon /> {rating}
          </div>
        ) : (
          <div className=" absolute top-3 left-3 w-min p-4 bg-green-600 rounded-md text-white">
            {rating}
          </div>
        )}
      </div>
      <p className=" mb-1 text-white font-bold">{title}</p>
      <p className=" text-gray-400">{gengres}</p>
    </div>
  );
};

export default Card;
