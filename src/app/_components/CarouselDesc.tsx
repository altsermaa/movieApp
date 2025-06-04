import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getVideoApi } from "@/hooks/getVideoApi";

export const CarouselDesc = () => {

  const result =  getVideoApi();


  return (
    <div className="flex flex-col gap-4 relative">
      <div>
        <p className="">Now playing:</p>
        <h1 className="font-black text-4xl">{el.title}</h1>
        <div className="flex gap-1">
          <Star className="text-[#f6e238] fill-yellow-300" />
          <p className="text-white">{el.vote_average}</p>
          <p className="text-gray-400">/10</p>
        </div>
        <p>{el.overview}</p>
        <Button variant={"outline"} className="w-fit bg-white text-black">
          <Play /> Watch trailer
        </Button>
      </div>
    </div>
  );
};
