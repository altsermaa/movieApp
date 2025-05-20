"use client";

import { Star, Dot, Play } from "lucide-react";
import { minutesToHours } from "date-fns";
import { format } from "date-fns";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DetailsImage } from "./DetailsImage";
import { ProductionTeam } from "./ProductionTeam";
import { SimilarOffers } from "./SimilarOffers";

export type Details = {
  data: {
    runtime: number;
    title: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    belongs_to_collection: { backdrop_path: string; poster_path: string };
    poster_path: string;
    backdrop_path: string;
    genres: GenresType[];
    overview: string;
  };
  dataCrew: {
    id: number; 
    cast: Casttype[]; 
    crew: CrewType[];
  };
  dataSimilar: {
    results: ResultsType[]
  }
}


type GenresType = {
  id: number;
  name: string;
};

type Casttype = {
  name: string; 
  popularity: number; 
  order: number; 
}

type CrewType = {
  name: string; 
  job: string;
}

type ResultsType ={
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
}

export const DetailPageShow = ({ data, dataCrew, dataSimilar }: Details) => {
  const convertMinutesToHours = (runtime: number) => {
    const hours = minutesToHours(runtime);
    const minutesLeft = runtime - hours * 60;
    return minutesLeft !== 0 ? `${hours}h ${minutesLeft}m` : `${hours}h`;
  };

  const duration = data.runtime ? convertMinutesToHours(data.runtime) : "N/A";

  const date = format(data.release_date, "yyyy.MM.dd");

  const { setTheme, resolvedTheme } = useTheme();
 

  return (
    <div className="flex flex-col px-5 my-8 mx-auto lg:w-[1080px] lg:mt-14 lg:mb-28 lg:p-0">
      <div className="flex justify-between gap-10">
        <div className="flex-2/3">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="flex">
            <p>{date}</p>
            <Dot />
            <p>PG</p>
            <Dot />
            <p>{duration}</p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start">
          <div className="h-[16px]"></div>
          <div className="flex items-center gap-2.5">
            <Star className="text-[#f6e238] fill-yellow-300" />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <p
                  className={`${
                    resolvedTheme === "light"
                      ? "text-black font-black "
                      : "text-white"
                  }`}
                >
                  {data.vote_average.toFixed(1)}
                </p>
                <p className="text-gray-400">/10</p>
              </div>
              <p className="text-gray-400">
                {data.vote_count ? data.vote_count : "No vote counted"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <DetailsImage data={data} />
      <div className="relative w-screen h-[211px] mt-4 mb-8 lg:hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          fill
          objectFit="cover"
          alt="videoImage"
        />
        <div className="absolute top-3/4 left-3 z-10 flex items-center gap-3">
          <Button className="bg-white rounded-4xl text-black" size="icon">
            <Play />
          </Button>
          <p className="text-white">Play trailer</p>
          <p className="text-white">2:35</p>
        </div>
      </div>
      <div className="flex gap-8 lg:hidden">
        <div className="relative w-[100px] h-[148px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            fill
            objectFit="cover"
            alt="videoImage"
          />
        </div>
        <div className="flex-2/3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-1">
              {data.genres.map((el, index) => {
                return (
                  <div key={index} className="flex">
                    <Badge variant="outline">{el.name}</Badge>
                  </div>
                );
              })}
            </div>
            <p className="text-base">{data.overview}</p>
          </div>
        </div>
      </div>
      <ProductionTeam dataCrew={dataCrew}/>
      <SimilarOffers dataSimilar={dataSimilar}/>
    </div>
  );
};
