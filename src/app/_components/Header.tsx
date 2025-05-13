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

      <div className="flex-1 flex justify-center lg:mx-auto items-center">
        {/* // Genre + Search */}
        <div className="hidden lg:block">
          <Button variant="outline" onClick={genreHandler}>
            <ChevronDown />
            Genre
          </Button>
          {clicked && <Genre />}
        </div>
        <div className="relative flex items-center">
          {" "}
          {/* // Search */}
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type="search"
            className="w-[36px] lg:hidden"
            // onClick={mobileSearch}
          />
          <Input
            type="search"
            placeholder="Search"
            className="hidden lg:block lg:pl-10 lg:w-[379px]"
          />
        </div>
      </div>

      <div className="flex items-center lg:justify-end lg:mx-0 lg:absolute lg:right-4">
        {" "}
        {/* // toggle */}{" "}
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {resolvedTheme === "light" ? <Moon /> : <Sun />}
        </Button>
      </div>
    </div>
  );
};
