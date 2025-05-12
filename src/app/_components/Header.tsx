"use client";

import { Moon, Search, Sun, Film } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Genre } from "./Genre";

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(resolvedTheme === "light" ? "dark" : "light");

  const [clicked, setClicked] = useState(false);

  const genreHandler = () => {
    setClicked(!clicked);
  };

  const [mobileSearchClicked, setMobileSearchClicked] = useState(false);

  const mobileSearch = () => {
    setMobileSearchClicked(!mobileSearchClicked);
  };

  return (
    <div className="flex justify-between h-[59px] px-5 lg:w-[1440px] m-auto lg:py-3">
      <div className="flex justify-start">
        <div
          className={` flex gap-2 font-black items-center ${
            resolvedTheme === "light" ? "text-[#4339c7]" : "text-white-900"
          }`}
        >
          <Film />
          <h1>Movie Z</h1>
        </div>
      </div>

      <div className="justify-end flex items-center gap-3">
        <div className="relative flex gap-3">
          <div className="hidden lg:contents">
            <Button variant="outline" onClick={genreHandler}>
              <ChevronDown />
              Genre
            </Button>
            {clicked && <Genre />}
          </div>

          <div className="relative flex justify-center w-fit lg:w-[200px] m-auto">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <Input
              type="search"
              className="w-[36px] lg:hidden"
              onClick={mobileSearch}
            />
            {mobileSearchClicked && (
              <div className="flex">
                <Button variant="outline" onClick={genreHandler}>
                  <ChevronDown />
                </Button>
                {clicked && <Genre />}
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 w-[379px]"
                />
              </div>
            )}
            <Input
              type="search"
              placeholder="Search"
              className="hidden lg:pl-10 lg:w-[379px]"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {resolvedTheme === "light" ? <Moon /> : <Sun />}
          </Button>
        </div>
      </div>
    </div>
  );
};
