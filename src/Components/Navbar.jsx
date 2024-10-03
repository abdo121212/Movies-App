import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between w-full bg-transparent absolute z-[1000] p-4 items-center select-none">
        <Link to={"/"}>
          <h3 className="text-4xl text-red-600 font-bold cursor-pointer">
            NETFLIX
          </h3>
        </Link>
        <div>
          <Link to={"/signup"}>
            <button className="text-white cursor-pointer pr-4">Sign In </button>
          </Link>

          <Link to={"/login"}>
            <button className="bg-red-600 text-white py-2 px-6 rounded cursor-pointer">
              Sgin Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
