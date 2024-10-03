import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginSchame } from "../utils/yup.js";
export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleInput = () => {
    setShowPass(!showPass);
  };

  const { errors, handleBlur, handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema: loginSchame,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 absolute top-0 left-0 right-0 bottom-0"></div>
        <form onSubmit={handleSubmit} className="fixed w-full  py-24 px-4">
          <div className="max-w-[450px] h-[600px] bg-black/75 m-auto text-white">
            <div className="max-w-[320px] m-auto py-16">
              <h1 className="font-bold text-3xl pb-8 ">Sign Up</h1>

              <div className="flex flex-col space-y-4 py-4">
                {errors.email && (
                  <div className="text-red-500 pb-[-10px]">{errors.email}</div>
                )}
                {errors.password && (
                  <div className="text-red-500 pb-[-10px]">
                    {errors.password}
                  </div>
                )}
              </div>
              <input
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
                className="w-full py-3 px-4 rounded mb-5 relative text-black "
              />

              <div className="relative">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  placeholder="Password"
                  className="w-full py-3 px-4 rounded mb-5 text-black"
                />

                <div
                  onClick={handleInput}
                  className="absolute cursor-pointer text-black right-2 text-2xl top-2 /> "
                >
                  {showPass ? <BiShow size={30} /> : <BiHide size={30} />}
                </div>
              </div>
              <button className="bg-red-600 w-full font-bold text-2xl py-2 rounded my-3">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400 my-4">
                <p>
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help ?</p>
              </div>
              <p className="text-gray-600 flex justify-center items-center">
                <span className="pr-4">Already Subscribed To NETFILX ?</span>
                <Link to={"/signup"}>
                  <button type="button" className="text-white">
                    Sing In
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
