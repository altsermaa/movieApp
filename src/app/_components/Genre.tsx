import { Badge } from "@/components/ui/badge";
import { getGenreApi } from "@/hooks/GetGenreApi";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type GenreProps = {
  onClickOutside: () => void;
  position: string;
  width: string; 
  border: string;
};

type GenreType = {
  id: number;
  name: string;
};

export const Genre = ({ onClickOutside, position, width, border }: GenreProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClickOutside);
  const { setTheme, resolvedTheme } = useTheme();

  const [genres, setGenre] = useState<GenreType[]>([]);

  useEffect(() => {
    const genreList = async () => {
      const result = await getGenreApi();
      setGenre(result?.genres);
    };
    genreList();
  }, []);

  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div
      ref={ref}
      className={`${width} ${border} rounded-xl border-[#e4e3e6] p-5 z-10 ${position} ${
        resolvedTheme === "light"
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
    >
      <h1 className="text-bold">Genres</h1>
      <h6>See lists of movies by genre</h6>
      <div className="border border-b-[#e4e3e6] my-4"></div>

      <div className={`w-full h-fit flex flex-wrap items-center cursor-pointer ${
        resolvedTheme === "light"
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}>
        {genres.map((el, index) => {
          return (
            <div key={index} onClick={() => routerHandler(`/genres/${el.id}`)}>
              <Badge variant="outline">
                {el.name} <ChevronRight className="w-[16px] h-[16px]" />
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};
