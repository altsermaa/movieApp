import { useEffect, useState } from "react";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";
import { getUpcomingApi } from "@/hooks/GetUpcomingApi";
import { GetTopRatedApi } from "@/hooks/GetTopRatedApi";

type TopRatedSectionType = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
};

export const TopRatedSection = () => {
  const [topRated, setTopRated] = useState<TopRatedSectionType[]>([]);

  useEffect(() => {
    const topRatedMovie = async () => {
      const response = await GetTopRatedApi();
      const firstTen = response.results.splice(0, 10);
      setTopRated(firstTen);
    };
    topRatedMovie();
  }, []);

  return (
    <div className="my-12">
      <SectionTitle title="Top Rated" />
      <div className="w-[1277px] m-auto grid gap-4 grid-cols-5 grid-rows-2">
        {topRated.map((el, index) => {
          return (
            <div key={index}>
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
  );
};
