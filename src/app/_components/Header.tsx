"use client";

import { Moon, Search, Sun, Film } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Genre } from "./Genre";
import { MobileSearch } from "./MobileSearch";
import axios from "axios";
import { SearchResults } from "./SearchResults";
import Link from "next/link";

export type DataType = {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  id: number;
};

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  const [clicked, setClicked] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const genreHandler = () => {
    setClicked(!clicked);
  };

  const handleMobileSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  const [search, setSearch] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
    <div>
      {!mobileSearch ? (
        <div className="flex justify-between items-center h-[59px] px-5 lg:w-[1440px] m-auto lg:py-3">
          <div className="flex items-center">
            <Link href={`/`}>
              <div
                className={` flex gap-2 font-black items-center ${
                  resolvedTheme === "light"
                    ? "text-[#4339c7]"
                    : "text-white-900"
                }`}
              >
                <Film />
                <h1>Movie Z</h1>
              </div>
            </Link>
          </div>

          <div className="flex gap-3 lg:w-[723px] lg:justify-between">
            <div className="flex gap-3 items-center">
              <div className="hidden lg:block">
                <Button variant="outline" onClick={genreHandler}>
                  <ChevronDown />
                  Genre
                </Button>
                {clicked && (
                  <Genre onClickOutside={genreHandler} position="absolute" />
                )}
              </div>
              <div className="relative flex items-center">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hidden lg:block"
                  size={20}
                />
                <Button
                  onClick={handleMobileSearch}
                  className="w-[36px] lg:hidden"
                  variant="outline"
                >
                  <Search />
                </Button>
                <Input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                  className="hidden lg:block lg:pl-10 w-fit lg:w-[379px]"
                />
                {search !== "" && foundData.length > 0 && (
                  <div className="absolute w-[577px] border border-[#e4e3e6] p-5 bg-white z-10 flex rounded-xl top-10 flex-col">
                    {foundData.slice(0, 3).map((el, index) => {
                      return (
                        <SearchResults
                          key={index}
                          title={el.title}
                          poster_path={el.poster_path}
                          vote_average={el.vote_average}
                          release_date={el.release_date}
                          id={el.id}
                          setFoundData={setFoundData}
                          setSearch={setSearch}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                {resolvedTheme === "light" ? <Moon /> : <Sun />}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <MobileSearch handleMobileSearch={handleMobileSearch} />
      )}
    </div>
  );
};
