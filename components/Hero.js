"use client";

import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import YouTube from "react-youtube";
import Link from "next/link";

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
    <div
      className="relative flex flex-1 flex-col px-5 justify-end h-[60vh]"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="flex flex-col relative z-10 gap-y-4 py-10 max-w-xl ">
        {/* <Link
          href={`/movie/${heroMovie.id}`}
          className="bg-white py-2 px-8 text-base lg:py-3 lg:px-10 lg:text-lg font-semibold rounded-full text-slate-900 inline-flex items-center justify-center outline-none focus:outline-none max-w-fit mb-5"
        >
          Info
        </Link> */}
        <h1 className="text-4xl lg:text-6xl text-slate-50">
          {heroMovie?.title || heroMovie?.name || heroMovie?.original_name}
        </h1>
        <div className="text-base text-slate-300 line-clamp-2">
          {heroMovie?.overview}
        </div>
      </div>

      <div className="h-[30vh] w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}

export default Hero;
