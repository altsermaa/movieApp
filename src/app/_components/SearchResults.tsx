import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

type DetailsPropsType = {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  id: number;
  setFoundData: () => void;
  setSearch: () => void;
  onClick: () => void;
};

export const SearchResults = ({
  poster_path,
  title,
  vote_average,
  release_date,
  id,
  setFoundData,
  onClick
}: DetailsPropsType) => {
  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div onClick={onClick}>

    
    <div className="flex" onClick={() => routerHandler(`/details/${id}`)}>
      <div className="relative lg:w-[67px] lg:h-[100px]">
        <Image
          src={`https://image.tmdb.org/t/p/w92${poster_path}`}
          objectFit="cover"
          fill
          alt="posterImage"
        />
      </div>
      <div className="flex flex-col">
        <h1>{title}</h1>
        <div className="flex gap-1">
          <Star className="text-[#f6e238] fill-yellow-300" />
          <p
            className={`${
              resolvedTheme === "light" ? "text-black" : "text-white"
            }`}
          >
            {vote_average.toFixed(1)}
          </p>
          <p className="text-gray-400">/10</p>
        </div>
        <div className="lg:w-[454px] m-auto lg:mb-8 flex justify-between">
          <h1 className="font-bold text-2xl">{release_date}</h1>
          <Button variant="link">
            See more <ArrowRight />
          </Button>
        </div>
      </div>
      <div></div>
    </div>
    </div>
  );
};
