import Image from "next/image";
import { Star } from "lucide-react";
import { useTheme } from "next-themes";

type Card = {
  movieImage: string;
  movieName: string;
  movieRating: number;
};

export const Card = ({ movieImage, movieName, movieRating }: Card) => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="w-full h-fit bg-muted">
      <div className="relative w-[157px] h-[233px] lg:w-[230px] lg:h-[340px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieImage}`}
          alt="movie"
          objectFit="cover"
          fill
        />
      </div>
      <div>
        <h1 className="font-black text-xs">{movieName}</h1>
        <div className="flex gap-1">
          <Star className="text-[#f6e238] fill-yellow-300" />
          <p
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            {movieRating}
          </p>
          <p className="text-gray-400">/10</p>
        </div>
      </div>
    </div>
  );
};
