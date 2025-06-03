"use client";

import { useEffect, useState } from "react";
import { getUpcomingApi } from "@/hooks/GetUpcomingApi";
import Link from "next/link";
import { Card } from "../_components/Card";
import { GetTopRatedApi } from "@/hooks/GetTopRatedApi";

export type TopRatedMovie = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
};
type Card = {
  movieImage: string;
  movieName: string;
  movieRating: number;
};

const TopRatedPage = () => {
  const [topRated, setTopRated] = useState<TopRatedMovie[]>([]);

  useEffect(() => {
    const topRatedMovie = async () => {
      const response = await GetTopRatedApi();
      const firstTwenty = response?.results.splice(0, 20);
      setTopRated(firstTwenty);
    };
    topRatedMovie();
  }, []);

  return (
    <div className="w-[335px] lg:w-[1277px] m-auto my-12">
      <h1 className="font-bold text-2xl">Top rated</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
        {topRated.map((el, index) => {
          return (
            <Link href={`/details/${el.id}`} key={index}>
              <div>
                <Card
                  movieImage={el.poster_path}
                  movieName={el.title}
                  movieRating={el.vote_average.toFixed(1)}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedPage;
