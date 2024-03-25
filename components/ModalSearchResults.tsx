import { IMovie } from "@/types/types";
import Link from "next/link";
import React, { FC } from "react";
import {
  openModalSearchResults,
  closeModalSearchResults,
} from "@/redux/toggleModalSearchResults";
import { setValueSearch } from "@/redux/serchResultSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

interface IModalSearchResults {
  searchList: [IMovie];
}

const ModalSearchResults: FC<IModalSearchResults> = ({ searchList }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpenSerachModal: any = useSelector<RootState>(
    (state) => state.toggleModalSearch.isOpen
  );
  return (
    <div className="relative left-0 top-28 w-4/5 ml-6 sm:w-3/6 sm:left-1/4 md:left-2/4 md:m-0 md:w-2/5 pr-5 bg-white">
      <ul>
        {searchList.map((el: IMovie) => (
          <li
            key={el.imdbID}
            className=" flex mb-1 border-b-2 border-slate-300 border-gray-800 border-solid transition-all cursor-pointer hover:bg-zinc-600"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              className="flex items-center w-full"
              href={`/movies/${el.imdbID}`}
              onClick={(event) => {
                event.stopPropagation();
                dispatch(closeModalSearchResults());
                dispatch(setValueSearch(""));
              }}
            >
              <div className=" mr-3 w-10 h-10">
                <img
                  className=" w-full h-full object-cover"
                  src={el.Poster}
                  alt="poster"
                />
              </div>
              <p>{el.Title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalSearchResults;
