import React, { FC } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Link from "next/link";
import { IMovie } from "@/types/types";

// interface ICardProps {
//   img: string;
//   title: string;
//   rating: string | number;
//   gengres: any;
//   trends?: boolean;
// }

const Card = ({ film, trends }: { film: IMovie; trends: boolean }) => {
  return (
    <Link className=" w-full " href={`/movies/${film.imdbID}`}>
      <div className=" mb-6 relative h-96 rounded-xl bg-zinc-500">
        <img
          className="rounded-xl object-cover w-full h-full "
          src={film.Poster}
          alt="img"
        />
        {trends ? (
          <div className=" absolute top-3 left-3 flex items-center w-min p-2 bg-blue-900 rounded-md text-white text-lg">
            <WhatshotIcon /> {"9"}
          </div>
        ) : (
          <div className=" absolute top-3 left-3 w-min p-4 bg-green-600 rounded-md text-white">
            {"9"}
          </div>
        )}
      </div>
      <p className=" mb-1 text-white font-bold">{film.Title}</p>
      <p className=" text-gray-400">{film.Genre}</p>
    </Link>
  );
};

export default Card;
