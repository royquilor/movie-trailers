"use client";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ScrollAreaDemo from "./Scroll";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = React.useState([]);
  // const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);
  if (!movies) return null;

  return (
    <div className="pb-5 xpl-5 lg:pl-11 h-[40-vh] relative mt-10">
      <h2 className="pl-5 text-white font-medium mb-2">{title}</h2>
      <ScrollAreaDemo>
        <div className="flex [&_div]:w-72 gap-x-5 relative">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </ScrollAreaDemo>
      {/* <div className="absolute z-10 bg-gradient-to-r from-transparent to-black h-full w-56 right-0 bottom-0"></div> */}
    </div>
  );
}

export default Row;
