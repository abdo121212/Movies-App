import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
export const Row = ({ title, fetchUrl, RowId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(fetchUrl).then((res) => {
        setData(res.data.results);
      });
    };

    getData();
  }, [fetchUrl]);
  const slider = document.getElementById("slider" + RowId);

  const sliderLeft = () => {
    slider.scrollLeft -= 500;
  };

  const sliderRight = () => {
    slider.scrollLeft += 500;
  };
  return (
    <>
      <h3 className="text-white font-bold p-4 md:text-xl capitalize">
        {title}
      </h3>

      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="absolute  rounded-full duration-500 left-0 cursor-pointer z-[7000]   bg-white opacity-50 hover:opacity-100 hidden group-hover:block"
        />

        <div
          id={"slider" + RowId}
          className="overflow-auto whitespace-nowrap scroll-smooth scrolling"
        >
          <div className="relative rounded-md  flex items-center justify-center">
            {data.map((ele , index) => {
              return (
                <>
                  <Movie ele={ele} key={index} />
                </>
              );
            })}
          </div>
        </div>

        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="absolute rounded-full duration-500  right-0 z-[7000]  cursor-pointer bg-white opacity-50 hover:opacity-100 hidden group-hover:block"
        />
      </div>
    </>
  );
};
