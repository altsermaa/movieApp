"use client";

import { Moon, Search, Sun, Film } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Genre } from "./Genre";
import { MobileSearch } from "./MobileSearch";

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

  return (
    <div>
      {!mobileSearch ? (
        <div className="flex justify-between items-center h-[59px] px-5 lg:w-[1440px] m-auto lg:py-3">
          <div className="flex items-center">
            <div
              className={` flex gap-2 font-black items-center ${
                resolvedTheme === "light" ? "text-[#4339c7]" : "text-white-900"
              }`}
            >
              <Film />
              <h1>Movie Z</h1>
            </div>
          </div>

          <div className="flex gap-3 lg:w-[723px] lg:justify-between">
            <div className="flex gap-3 items-center">
              <div className="hidden lg:block">
                <Button variant="outline" onClick={genreHandler}>
                  <ChevronDown />
                  Genre
                </Button>
                {clicked && <Genre onClickOutside={genreHandler} />}
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
                  type="search"
                  placeholder="Search"
                  className="hidden lg:block lg:pl-10 w-fit lg:w-[379px]"
                />
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
