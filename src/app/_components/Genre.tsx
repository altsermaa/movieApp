import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export const Genre = () => {
  const genres: Array<string> = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <div className="absolute top-1/2 left-3 w-[577px] border rounded-xl border-[#e4e3e6] p-5 bg-white z-10">
      <h1 className="text-bold">Genres</h1>
      <h6>See lists of movies by genre</h6>
      <div className="border border-b-[#e4e3e6] my-4"></div>

      <div className="w-full h-fit flex flex-wrap items-center cursor-pointer">
        {genres.map((genre, index) => {
          return (
            <div key={index}>
              <Badge variant="outline">
                {genre} <ChevronRight className="w-[16px] h-[16px]" />{" "}
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};
