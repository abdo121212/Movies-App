import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />

        <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="fixed w-full  py-24 px-4">
          <div className="max-w-[450px] h-[600px] bg-black/75 m-auto text-white">
            <div className="max-w-[320px] m-auto py-16   ">
              <h1 className="font-bold text-3xl pb-8 "> Sign In</h1>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full py-3 px-4 rounded mb-5 text-black"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full py-3 px-4 rounded mb-5 text-black"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-4 rounded mb-5 text-black"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full py-3 px-4 rounded mb-5 text-black"
              />
              <button className="bg-red-600 w-full font-bold text-2xl py-2 rounded my-3 ">
                Sign In
              </button>

              <div className="flex justify-between items-center text-sm text-gray-400 my-4">
                <p>
                  <input type="checkbox" className="mr-2 " />
                  Remember me
                </p>
                <p>Need Help ?</p>
              </div>

              <p className="text-gray-600 flex justify-center items-center">
                <span className="pr-4">New To NETFILX ?</span>

                <Link to={"/login"}>
                  <p className="text-white">Sing Up</p>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
