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
    <div className="px-5 h-[40-vh]">
      <h2 className="text-white font-medium mb-2">{title}</h2>
      <ScrollAreaDemo>
        <div className="flex [&_div]:w-56 gap-x-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key="movie.id" />
          ))}
        </div>
      </ScrollAreaDemo>
    </div>
  );
}

export default Row;