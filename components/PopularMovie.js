import { ReactNode } from "react";
import MovieCard from "./MovieCard";
import ScrollAreaDemo from "./Scroll";

const PopularMovie = ({ movies }) => {
  return (
    <div className="px-5 h-[50-vh]">
      <h2 className="text-lg text-slate-50 font-medium mb-5">Popular</h2>
      <ScrollAreaDemo>
        <div className="flex [&_div]:w-56 gap-x-5">
          {movies.map((movie) => (
            <MovieCard movie={movie} key="movie.id" />
          ))}
        </div>
      </ScrollAreaDemo>
    </div>
  );
};

export default PopularMovie;
