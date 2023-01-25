import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="flex flex-col gap-y-3">
        <div className="">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            // fill={true}
            // placeholder="blur"
            width={2000}
            height={3000}
            className="rounded-xl"
            // style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          {/* <div className="text-sm text-slate-50">{movie.title}</div> */}
          {/* <div className="text-xs text-slate-400">{movie.release_date}</div> */}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
