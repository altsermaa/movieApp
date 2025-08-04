"use client";

import { Card } from "../_components/Card";
import { DataType } from "../_components/Header";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Genre } from "../_components/Genre";

const SearchResultContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [foundData, setFoundData] = useState<DataType[]>([]);

  useEffect(() => {
    const finalResult = async () => {
      const searchResult = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
          },
        }
      );

      const data = searchResult?.data?.results?.map(
        ({ title, poster_path, vote_average, release_date, id }: DataType) => {
          return {
            title: title,
            poster_path: poster_path,
            vote_average: vote_average,
            release_date: release_date,
            id: id,
          };
        }
      );
      setFoundData(data);
    };

    finalResult();
  }, [search]);

  return (
    <div className="w-[335px] lg:w-[1280px] m-auto my-12">
      <h1 className="font-bold text-2xl">See results</h1>
      <div className="flex">
        <div>
          <p className="font-black">
            {foundData.length} results for "{search}""
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 h-fit gap-5 lg:gap-8 m-auto">
            {foundData?.map((el, index) => {
              return (
                <Link key={index} href={`/details/${el.id}`}>
                  <Card
                    key={index}
                    movieImage={el.poster_path}
                    movieName={el.title}
                    movieRating={el.vote_average.toFixed(1)}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex-1/4 border-l-1 border-gray-300 ml-4">
          <Genre position="relative" width="w-full" border="border-0" onClickOutside={() => {}} />
        </div>
      </div>
    </div>
  );
};

const SearchResultPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultContent />
    </Suspense>
  );
};

export default SearchResultPage;
