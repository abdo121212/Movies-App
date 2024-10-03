import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviesDatelis = () => {
  const [movies, setMovies] = useState(null);
  const { id } = useParams();

  const data = async () => {
    const getData = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=12167db4c254ce58b1e292964f62a2cf`
      )
      .then((res) => setMovies(res.data));
    console.log(getData);
  };

  useEffect(() => {
    data();
  });

  return (
    <>
      {movies && (
        <div className="w-full  container pt-24 mx-auto">
          <div className="flex flex-row-reverse max-md:flex-col max-md:m-10 justify-evenly items-center ">
            <div className="w-[500px] h-[700px]  flex flex-col p-6  text-white">
              <h2 className=" text-4xl font-bold">{movies.title}</h2>
              <p className="text-gray-400 py-5 text-lg">{movies.tagline}</p>
              <p className="text-5xl  font-bold">
                {movies.vote_average.toFixed(1)}
              </p>
              <div className="flex py-5 space-x-8 items-center">
                <div className="flex  flex-col justify-center items-center space-y-2">
                  <h3 className="text-2xl ">length</h3>
                  <p className="text-gray-400 text-sm">{`${movies.runtime} min`}</p>
                </div>
                <div className="flex  flex-col justify-center items-center space-y-2">
                  <h3 className="text-2xl ">date</h3>
                  <p className="text-gray-400 text-sm">{movies.release_date}</p>
                </div>

                <div className="flex  flex-col justify-center items-center space-y-2">
                  <h3 className="text-2xl ">language</h3>
                  <p className="text-gray-400 text-sm">
                    {movies.spoken_languages[0].english_name}
                  </p>
                </div>

                <div className="flex  flex-col justify-center items-center space-y-2">
                  <h3 className="text-2xl ">status</h3>
                  <p className="text-gray-400 text-sm">{movies.status}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold  text-3xl">Genres</h3>
                {
                  <div className="flex space-x-10 py-5 ">
                    {movies.genres.map((ele) => (
                      <div className="border px-4 py-2 rounded-lg shadow shadow-red-600 cursor-pointer">
                        {ele.name}
                      </div>
                    ))}
                  </div>
                }
              </div>

              <div>
                <h3 className="capitalize font-bold  text-2xl py-3">
                  synopsis
                </h3>
                <p className="text-gray-400  ">{movies.overview}</p>
              </div>

              <div className="py-5">
                <button className="border w-full shadow-red-700 shadow py-2 px-1 rounded-lg hover:bg-white hover:text-black  duration-1000">
                  <a href={movies.homepage}>WebSite</a>
                </button>
              </div>
            </div>

            <div className="w-[500px] h-[700px] ">
              <img
                className="w-full h-full rounded-lg"
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
