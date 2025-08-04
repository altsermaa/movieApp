"use client";

import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { PaginationDemo } from "./Pagination";

type Result = {
  resultSimilar: {
    results: results[];
  };
};

type results = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
};

export const Similar = ({ resultSimilar }: Result) => {
  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
        {resultSimilar?.results?.map((el, index) => {
          return (
            <div key={index} onClick={() => routerHandler(`/details/${el.id.toString()}`)}>
              <Card
                movieImage={el.poster_path}
                movieName={el.title}
                movieRating={el.vote_average.toString()}
              />
            </div>
          );
        })}
      </div>
      <PaginationDemo />
    </div>
  );
};
