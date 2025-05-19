import Image from "next/image";
import { Details } from "./DetailPageShow";

type DetailsPropsType = {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
};

export const SearchResults = ({
  poster_path,
  title,
  vote_average,
  release_date,
}: DetailsPropsType) => {
  return (
    <div>
      <div className="w-[67px] h-[100px]">
        <Image
          src={`https://image.tmdb.org/t/p${poster_path}`}
          objectFit="cover"
          fill
          alt="posterImage"
        />
      </div>
      <div>
        {title} {vote_average} {release_date}
      </div>
      <div></div>
    </div>
  );
};
