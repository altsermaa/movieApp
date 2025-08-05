"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Search, Loader2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { SearchResults } from "./SearchResults";
import axios from "axios";
import Link from "next/link";

export type DataType = {
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  id: number;
};

type handleMobileSearchType = {
  handleMobileSearch: () => void;
};

export const MobileSearch = ({
  handleMobileSearch,
}: handleMobileSearchType) => {
  const [search, setSearch] = useState("");
  const [foundData, setFoundData] = useState<DataType[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const clear = () => {
    setFoundData([]);
    setSearch("");
  };

  useEffect(() => {
    const finalResult = async () => {
      if (search.trim() === "") {
        setFoundData([]);
        return;
      }

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
    <div className="flex justify-between items-center h-[59px] px-5 relative">
      <Button variant="outline" size="icon">
        <ChevronDown />
      </Button>

      <div className="relative flex items-center">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="pl-10 w-[250px] outline-none shadow-none border border-none"
        />
        
        {search !== "" && foundData.length > 0 && (
          <div className="absolute w-[250px] border border-[#e4e3e6] p-5 bg-white z-10 flex rounded-xl top-10 flex-col m-auto">
            {foundData.slice(0, 5).map((el, index) => {
              return (
                <SearchResults
                  key={index}
                  title={el.title}
                  poster_path={el.poster_path}
                  vote_average={el.vote_average}
                  release_date={el.release_date}
                  id={el.id}
                  setFoundData={() => setFoundData([])}
                  setSearch={() => setSearch("")}
                  onClick={clear}
                />
              );
            })}
            <div className="border-t-1 py-2">
              <Link href={`/searchResult?search=${search}`} onClick={clear}>
                <p className="px-4 py-2">
                  See more results of "{search}"
                </p>
              </Link>
            </div>
          </div>
        )}
        
        {search !== "" && foundData.length === 0 && (
          <div onClick={clear} className="absolute w-[250px] h-[128px] border border-[#e4e3e6] p-5 bg-white z-10 flex rounded-xl top-10 justify-center items-center m-auto">
            <Loader2Icon className="animate-spin" />
          </div>
        )}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleMobileSearch}
        className="outline-none"
      >
        X
      </Button>
    </div>
  );
};
