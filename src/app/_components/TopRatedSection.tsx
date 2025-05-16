import { useEffect, useState } from "react";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";
import { GetTopRatedApi } from "@/hooks/GetTopRatedApi";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-[335px] lg:w-[1277px] m-auto my-12">
      <SectionTitle title="Top Rated" />
      <div className="grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
        {topRated.map((el, index) => {
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
  );
};
