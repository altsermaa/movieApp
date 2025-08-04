"use client";

import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { Genre } from "./Genre";
import { PaginationDemo } from "./Pagination";

type GenreType = {
  results: {
    title: string;
    id: number;
    poster_path: string;
    vote_average: number;
  }[];
};

export const GenrePageShow = ({ results }: GenreType) => {
  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };
  return (
    <div className="lg:w-[1280px] m-auto">
      <h1 className="font-black text-2xl w-full">Search filter</h1>
      <div className="flex mt-8">
        <div className="flex-1/4 border-r-1 border-gray-300 mr-4">
          <Genre position="relative" width="w-full" border="border-0" onClickOutside={() => {}} />
        </div>
        <div >
          <h1 className="font-black">{results?.length} results </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 h-fit gap-5 lg:gap-8 m-auto">
            {results?.map((el, index) => {
                    return (
                      <div key={index} onClick={() => routerHandler(`/details/${el.id}`)}>
                        <Card
                          movieImage={el.poster_path}
                          movieName={el.title}
                          movieRating={el.vote_average.toFixed(1)}
                        />
                      </div>
                    );
                  })}

          </div>
          <PaginationDemo />
        </div>
      </div>
      

      
    </div>
  );
};
