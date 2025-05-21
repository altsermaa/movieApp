"use client";

import { Card } from "@/app/_components/Card";
import { useRouter } from "next/navigation";
import { GetSimilarApi } from "@/hooks/GetSimilarApi";
import { useState, useEffect } from "react";

type ResultSimilar = {
  resultSimilar: any; 
  movieId: string;
}

const SimilarPage = ({ resultSimilar}: ResultSimilar) => {
  const [similarMovies, setSimilarMovies] = useState<ResultSimilar>(); 

  useEffect(()=> {
    const result = async() => {
      const response = await GetSimilarApi({params:id}); 
      setSimilarMovies(response.results);

    }; result();
  }, [id])

  const router = useRouter();
  const routerHandler = (path: string) => {
    router.push(path);
  };

  console.log(resultSimilar?.data)

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
        {resultSimilar?.data?.results?.map((el, index) => {
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

export default SimilarPage;
