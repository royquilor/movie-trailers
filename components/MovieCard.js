"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="hover:scale-105 outline outline-2 outline-transparent hover:outline-white rounded-md overflow-hidden transition-all"
    >
      <div className="flex flex-col gap-y-3">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          exit={{ opacity: 0, x: 20 }}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            // fill={true}
            // placeholder="blur"
            width={500}
            height={750}
            className=""
            // style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </Link>
  );
};

export default MovieCard;
