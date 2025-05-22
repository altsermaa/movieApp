import { useEffect, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { useRouter } from "next/navigation";
import { Card } from "./Card";
import Link from "next/link";

type ResultsType = {
  dataSimilar: {
    results: Results[];
  };
  movieId: string;
};

type Results = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
};

export const SimilarOffers = ({ dataSimilar, movieId }: ResultsType) => {
  const [similarMovies, setSimilarMovies] = useState<Results[]>([]);

  useEffect(() => {
    const getSimilarMovie = async () => {
      const firstFive = dataSimilar?.results?.slice(0, 5);
      setSimilarMovies(firstFive);
    };
    getSimilarMovie();
  }, []);

  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-[335px] lg:w-[1277px] m-auto my-12">
      <Link href={`/similar/${movieId}`}>
        <SectionTitle
          title="More like this"
          movieId={movieId}
          dataSimilar={dataSimilar}
        />
      </Link>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
        {similarMovies.map((el, index) => {
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
      <div className="grid grid-cols-2 h-fit gap-5 m-auto lg:hidden">
        {similarMovies.slice(0, 2).map((el, index) => {
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
