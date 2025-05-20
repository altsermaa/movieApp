import { useEffect, useState } from "react"
import { SectionTitle } from "./SectionTitle"
import { useRouter } from "next/navigation"
import { Card } from "./Card"

type ResultsType = {
  dataSimilar: {
    results: Results[]
  }
}

type Results ={
    title: string;
    id: number;
    poster_path: string;
    vote_average: number;
  }

export const SimilarOffers = ({dataSimilar}:ResultsType) => {
    const [similar, setSimilar] = useState<Results[]>([]); 

    useEffect(() => {
        const similarMovie = async () => {
          const firstFive = dataSimilar?.results?.splice(0, 5);
          setSimilar(firstFive);
        };
        similarMovie();
      }, []);

      const router = useRouter();
      const routerHandler = (path: string) => {
        router.push(path);
      };

    return <div className="w-[335px] lg:w-[1277px] m-auto my-12">
        <SectionTitle title="More like this"/>
              <div className="grid grid-cols-2 lg:grid-cols-5 h-fit gap-5 lg:gap-8 m-auto">
                {similar.map((el, index) => {
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
}