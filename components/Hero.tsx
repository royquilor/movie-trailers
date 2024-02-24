import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../Requests";
import Image from "next/image";
import YouTube from "react-youtube";
import DialogDemo from "./Dialog"; // Import the dialog component

// Define a type for the movie object
type Movie = {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
  videos?: {
    results: Array<{
      key: string;
      type: string;
    }>;
  };
};

function Hero() {
  const [heroMovie, setMovie] = useState<Movie | null>(null);
  const [showTrailer, setShowTrailer] = useState(false); // State to control trailer dialog visibility

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 0,
      iv_load_policy: 3,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      const randomIndex = Math.floor(Math.random() * request.data.results.length);
      const randomMovie = request.data.results[randomIndex];
      // Fetch additional data for the trailer
      const movieDetails = await axios.get(`${randomMovie.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`);
      setMovie(movieDetails.data);
    }
    fetchData();
  }, []);

  // Function to find the trailer
  const getTrailer = () => {
    return heroMovie?.videos?.results.find((vid) => vid.type.includes("Trailer"));
  };

  return (
    <div className="relative flex h-[60vh] md:h-[65vh]" style={{ marginTop: "-60px" }}>
      <div className="top-0 h-full w-full">
        <div className="flex relative w-full md:w-3/4 md:left-1/4">
          {heroMovie?.backdrop_path && (
            <Image
              src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
              alt={heroMovie.title || heroMovie.name || heroMovie.original_name || "Movie Image"}
              width={3840}
              height={2160}
              className="w-full h-full"
            />
          )}
          <div className="h-full w-3/4 absolute bottom-0 left-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="h-[30vh] w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 flex flex-col h-full justify-end z-10 gap-y-4 px-5 lg:pl-16 max-w-xl">
        <h1 className="text-xl lg:text-4xl font-semibold text-slate-50">
          {heroMovie?.title || heroMovie?.name || heroMovie?.original_name}
        </h1>
        <div className="text-base text-slate-300 line-clamp-2">
          {heroMovie?.overview}
        </div>
        <DialogDemo onClose={() => setShowTrailer(false)}>
          {heroMovie && getTrailer() && (
            <YouTube
              videoId={getTrailer()?.key}
              opts={opts}
              className="[&_iframe]:w-full [&_iframe]:h-full [&_iframe]:aspect-video h-[80vh]"
            />
          )}
        </DialogDemo>
      
      </div>
    </div>
  );
}

export default Hero;
