"use client";

import axios from "axios";
import Image from "next/image";
import React from "react";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import YouTube from "react-youtube";
import DialogDemo from "../../../components/Dialog";
import Link from "next/link";

const Movie = ({ movie }) => {
  const trailer = movie.videos.results.find((vid) =>
    vid.type.includes("Trailer")
  );
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
  return (
    <div className="bg-black min-h-screen">
      <Meta title={movie.title} />
      <Link
        href="/"
        className="bg-black/10 absolute z-10 top-5 left-5 h-12 w-12 text-xs font-semibold rounded-full text-white inline-flex items-center justify-center outline-none focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div className="absolute top-0 left-0 x-z-10 h-[96vh] w-screen bg-gradient-to-t from-black to-white/50">
      {movie.backdrop_path && (
        <Image
          className="mix-blend-overlay"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="{movie.title}"
          priority
          fill={true}
          style={{ objectFit: "cover" }}
        />
        )}
      </div>

      <div className="flex relative p-5 lg:p-10 xl:p-20 w-full min-h-screen items-end justify-center">
        <div>
          <DialogDemo>
            <YouTube
              videoId={trailer.key}
              opts={opts}
              className="[&_iframe]:w-full [&_iframe]:h-full [&_iframe]:aspect-video h-[80vh]"
            />
          </DialogDemo>

          <div className="grid lg:grid-cols-12 gap-y-4 gap-x-10">
            <div className="col-span-4">
              <h1 className="text-3xl lg:text-5xl text-white">{movie.title}</h1>
            </div>
            <div className="col-span-5 text-base lg:text-lg text-white">
              {movie.overview}
            </div>
            <div className="col-span-3 text-sm text-white font-medium">
              <div className="grid grid-cols-3 gap-x-4 mb-2">
                <div className="col-span-1 lg:text-right">Release</div>
                <div className="col-span-2">{movie.release_date}</div>
              </div>
              <div className="grid grid-cols-3 gap-x-4 mb-2">
                <div className="col-span-1 lg:text-right">Runtime</div>
                <div className="col-span-2">{movie.runtime} mins</div>
              </div>
              <div className="grid grid-cols-3 gap-x-4">
                <div className="col-span-1 lg:text-right">Genres</div>
                <div className="col-span-2">
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(
    `${server}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=videos`
  );
  const movie = res.data;
  return {
    props: { movie },
  };
}

export async function getStaticPaths() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const movies = res.data.results;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  // console.log(movies);
  return {
    paths,
    fallback: false,
  };
}

export default Movie;
