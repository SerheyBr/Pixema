import React, { FC, useEffect, useState } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import Link from "next/link";
import { IMovie } from "@/types/types";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addFilm, removeFilm } from "@/redux/favoritesSlice";

interface ICardProps {
  film: IMovie;
}

const Card: FC<ICardProps> = ({ film }) => {
  const dispatch = useDispatch();
  const favoriteList: any = useSelector<RootState>(
    (state) => state.favorites.favorites
  );

  //   const isFavorite = false;
  const [isFavorite, setIsFavorites] = useState(false);

  const checkPresence = (arr: any[], id: string | number) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].imdbID === id) {
        setIsFavorites(false);
        dispatch(removeFilm(id));
        return;
      }
    }
    setIsFavorites(true);
    dispatch(addFilm(film));
  };

  useEffect(() => {
    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].imdbID === film.imdbID) {
        setIsFavorites(true);
      }
    }
  }, []);

  //   useEffect(() => {
  //     //  if (favoriteList.length) {
  //     //    for (let i = 0; i < favoriteList.length; i++) {
  //     //      if (favoriteList[i].imdbID === film.imdbID) {
  //     //        setIsFavorite(true);
  //     //      }
  //     //    }
  //     //  }
  //     if (favoriteList.indexOf(film) >= 0) {
  //       setIsFavorite(true);
  //       console.log(favoriteList);
  //     } else {
  //       setIsFavorite(false);
  //       console.log(favoriteList);
  //     }
  //   }, [favoriteList]);

  //   console.log(isFavorite);

  return (
    <Link className=" w-full " href={`/movies/${film.imdbID}`}>
      <div className=" mb-6 relative h-96 rounded-xl bg-zinc-500">
        <img
          className="rounded-xl object-cover w-full h-full "
          src={film.Poster}
          alt="img"
        />

        {isFavorite ? (
          <button
            className="absolute top-0 left-0 text-orange-500 "
            onClick={(event) => {
              event.preventDefault();
              //   dispatch(removeFilm(film.imdbID));
              checkPresence(favoriteList, film.imdbID);
            }}
          >
            <BookmarkIcon className=" text-5xl"></BookmarkIcon>
          </button>
        ) : (
          <button
            className="absolute top-0 left-0 text-zinc-800"
            onClick={(event) => {
              event.preventDefault();
              //   dispatch(addFilm(film));
              checkPresence(favoriteList, film.imdbID);
            }}
          >
            <BookmarkIcon className=" text-5xl"></BookmarkIcon>
          </button>
        )}

        {/* <button
          className="absolute top-0 left-0 text-orange-500"
          onClick={(event) => event.preventDefault()}
        >
          <BookmarkIcon className=" text-5xl"></BookmarkIcon>
        </button> */}
      </div>
      <p className=" mb-1 text-white font-bold">{film.Title}</p>
      <p className=" text-gray-400">{film.Genre}</p>
    </Link>
  );
};

export default Card;
