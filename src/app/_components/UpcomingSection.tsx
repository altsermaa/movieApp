import { useEffect, useState } from "react";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";
import { getUpcomingApi } from "@/hooks/GetUpcomingApi";
import Link from "next/link";

export type UpcomingMovie = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
};

export const UpcomingSection = () => {
  const [upcoming, setUpcoming] = useState<UpcomingMovie[]>([]);

  useEffect(() => {
    const upcomingMovie = async () => {
      const response = await getUpcomingApi();
      const firstTen = response?.results.splice(0, 10);
      setUpcoming(firstTen);
    };
    upcomingMovie();
  }, []);

  return (
    <div className="w-[335px] lg:w-[1277px] m-auto my-12">
      <Link href="/upcoming">
        <SectionTitle title="Upcoming" />
      </Link>

      <div className="grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
        {upcoming.map((el, index) => {
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
