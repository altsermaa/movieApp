import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";

type SectionProps = {
  title: string;
  //   movieImage: string;
  //   movieName: string;
  //   movieRating: number;
};

export const Section = ({ title }: SectionProps) => {
  const moviesData = [
    { movieRating: 1, movieName: "Slide 1", movieImage: "/Feature.png" },
    { movieRating: 2, movieName: "Slide 2", movieImage: "/Logo.png" },
    { movieRating: 3, movieName: "Slide 3", movieImage: "/next.svg" },
    { movieRating: 4, movieName: "Slide 4", movieImage: "/Feature.png" },
    { movieRating: 5, movieName: "Slide 5", movieImage: "/Logo.png" },
    { movieRating: 6, movieName: "Slide 6", movieImage: "/next.svg" },
    { movieRating: 7, movieName: "Slide 7", movieImage: "/next.svg" },
    { movieRating: 8, movieName: "Slide 8", movieImage: "/Feature.png" },
    { movieRating: 9, movieName: "Slide 9", movieImage: "/Logo.png" },
    { movieRating: 10, movieName: "Slide 10", movieImage: "/next.svg" },
  ];

  return (
    <div className="my-12">
      <SectionTitle title={title} />
      <div className="w-[1277px] m-auto grid gap-4 grid-cols-5 grid-rows-2">
        {moviesData.map((data, index) => {
          return (
            <div key={index}>
              <Card
                movieImage={data.movieImage}
                movieName={data.movieName}
                movieRating={data.movieRating}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
