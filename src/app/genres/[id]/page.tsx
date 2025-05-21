import { GenrePageShow } from "@/app/_components/GenrePageShow";
import axios from "axios";

interface ParamType {
  params: {
    id: string;
  };
}

const GenrePage = async ({ params }: ParamType) => {
  const { id } = params;

  const resultGenre = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=1`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
      },
    }
  );

  console.log(resultGenre?.data);

  return (
    <div>
      <GenrePageShow dataGenre={resultGenre?.data} />
    </div>
  );
};

export default GenrePage;
