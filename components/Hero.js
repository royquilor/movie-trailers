"use client";

import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import Image from "next/image";

function Hero() {
  const [heroMovie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(heroMovie);
  // console.log(heroMovie.id);
  return (
    <div className="relative flex h-[60vh] md:h-[65vh] xh-[40vh]">
      <div className="top-0 h-full ">
        <div className="flex relative w-full md:w-3/4 md:left-1/4">
          <Image
            src={`https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path}`}
            alt=""
            // fill={true}
            width={3840}
            height={2160}
            // placeholder="blur"
            className="w-full h-full"
            // style={{ objectFit: "cover" }}
          />
          <div className="h-full w-3/4 absolute bottom-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="h-[30vh] w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 flex flex-col h-full xbg-red-500 justify-end z-10 gap-y-4 px-5 lg:pl-16 xpy-10 max-w-xl ">
        <h1 className="text-4xl lg:text-7xl text-slate-50">
          {heroMovie?.title || heroMovie?.name || heroMovie?.original_name}
        </h1>
        <div className="text-base text-slate-300 line-clamp-2">
          {heroMovie?.overview}
        </div>
      </div>
      {/* <div className="h-full xw-full absolute top-0 left-0 bg-gradient-to-r from-black to-transparent"></div> */}
    </div>
  );
}

export default Hero;
