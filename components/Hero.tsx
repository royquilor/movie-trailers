"use client";

import axios from "../axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import Image from "next/image";

function Hero() {
  const [movie, setMovie] = useState([]);
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

  console.log(movie);
  return (
    <div
      className="relative flex flex-1 flex-col px-5 justify-end h-[60vh] xmix-blend-overlay"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="flex flex-col relative z-10 gap-y-4 py-10">
        <h1 className="text-4xl text-slate-50">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="text-base text-slate-300 max-w-xl">{movie?.overview}</p>
      </div>
      <div className="h-[30vh] w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}

export default Hero;
