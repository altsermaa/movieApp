"use client";

import { useRouter } from "next/navigation";
import { Card } from "./Card";

type GenreType = {
  results: Genre[];
};

type Genre = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
};

export const GenrePageShow = ({ dataGenre }: GenreType) => {
  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      {dataGenre?.results?.map((el, index) => {
        return (
          <div key={index} onClick={() => routerHandler(`/details/${el.id}`)}>
            <Card
              movieImage={el.poster_path}
              movieName={el.title}
              movieRating={el.vote_average}
            />
          </div>
        );
      })}
    </div>
  );
};
