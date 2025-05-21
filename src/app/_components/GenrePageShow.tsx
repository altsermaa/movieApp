"use client";

import { useRouter } from "next/navigation";
import { Card } from "./Card";
import { Genre } from "./Genre";

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
    <div className="lg:w-[1280px] m-auto">
      <h1 className="font-black text-2xl w-full">Search filter</h1>
      <div className="flex mt-8">
        <div className="flex-1/4">
          <Genre position="relative"/>
        </div>
        <div className="border-r-1 solid border-gray-300 h-full mx-1"></div>
        <div >
          <div className="grid grid-cols-2 lg:grid-cols-4 h-fit gap-5 lg:gap-8 m-auto">
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
        </div>
      </div>
      

      
    </div>
  );
};
