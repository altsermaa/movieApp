const trailers = trailerRes.data?.results || [];
  const youtubeTrailer = trailers.find(
    (video: any) => video.site === "YouTube"
  );


movie detail

{/* <div className="relative items-center w-full aspect-[3/2] max-w-[760px] max-h-[428px]">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              fill
              alt="movie"
              className="object-cover"
            />
            <div className="absolute z-1 bottom-0">
              <MovieTrailer movie={movie} trailerKey={trailerKey} />
            </div>
          </div> */}


movie trailer comp

import YouTube from "react-youtube";
import { useState } from "react";
import { MovieDetailType } from "@/app/details/[id]/page";
import Image from "next/image";
import { Play } from "lucide-react";
 
type Props = {
  movie: MovieDetailType;
  trailerKey: string; // YouTube video key, e.g. 'dQw4w9WgXcQ'
};
 
export const MovieTrailer = ({ movie, trailerKey }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const opts = {
    height: "390",
    width: "375",
    playerVars: {
      autoplay: 1,
    },
  };
 
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-transparent text-white px-4 py-2 rounded"
      >
        <div className="flex h-[40px] gap-2 items-center">
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[100%] bg-white">
            <Play color="black" />
          </div>
          <p className="text-sm leading-5 font-[400]">Play trailer</p>
        </div>
      </button>
 
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="w-full max-w-2xl aspect-video">
            <YouTube videoId={trailerKey} opts={opts} />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
};
 
 