import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import { Row } from "./Row";
import { Link } from "react-router-dom";
export const Home = () => {
  const [moives, setMoives] = useState([]);

  let moive = moives[Math.floor(Math.random() * moives.length)];

  useEffect(() => {
    const getData = async () => {
      const req = await axios
        .get(requests.requestPopular)
        .then((res) => setMoives(res.data.results));
      console.log(req);
    };

    getData();
  }, []);

  return (
    <>
      {moives ? (
        <>
          <div className="w-full h-[550px] text-white">
            <div className="w-full h-full ">
              <div className="w-full h-[550px] absolute bg-gradient-to-r from-black "></div>
              <img
                src={`https://image.tmdb.org/t/p/original/${moive?.backdrop_path}`}
                alt={moive?.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-[20%] p-2 md:p-6">
                <h3 className="text-3xl md:5xl font-bold">{moive?.title}</h3>
                <div className="py-4">
                  <Link to={`moviedateils/${moive?.id}`}>
                    <button className="border-none py-2 px-5 bg-white rounded text-black capitalize mr-4">
                      play
                    </button>
                  </Link>
                  <button className="border rounded py-2 px-5 capitalize bg-transparent">
                    watch later
                  </button>
                </div>
                <p className="max-sm:text-sm text-md capitalize text-gray-500">
                  released : {moive?.release_date}
                </p>
                <div className="text-lg capitalize max-md:text-sm w-full md:max-w-[70%] text-gray-200 max-md:max-w-[35%]">
                  {moive?.overview}
                </div>
              </div>
            </div>
          </div>

          <Row
            RowId={"1"}
            title={"upComing"}
            fetchUrl={requests.requestUpcoming}
          />
          <Row
            RowId={"2"}
            title={"popular"}
            fetchUrl={requests.requestPopular}
          />
          <Row
            RowId={"3"}
            title={"topRated"}
            fetchUrl={requests.requestTopRated}
          />

          <Row RowId={"4"} title={"horror"} fetchUrl={requests.requestHorror} />
        </>
      ) : (
        <div className="text-white flex items-center justify-center absolute w-full h-screen loading">
          <span className="text-8xl absolute ">LOADING</span>
        </div>
      )}
    </>
  );
};
