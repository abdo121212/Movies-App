import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Movie = ({ ele }) => {
  return (
    <div className="inline-block ">
      <Link to={`moviedateils/${ele.id}`}>
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[400px]  relative p-4">
          {
            <img
              src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`}
              alt={ele.title}
            />
          }
          <div className="text-transparent  hover:text-white flex items-center duration-500  justify-center absolute top-0 left-0 right-0 bottom-0  hover:bg-black/80">
            {ele.original_title}
            <FaHeart
              size={30}
              className="absolute top-5 left-5 duration-500 cursor-pointer  hover:text-red-500"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
