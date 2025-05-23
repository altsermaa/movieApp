import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Details } from "./DetailPageShow";
import { Badge } from "@/components/ui/badge";
import YouTube from "react-youtube";

export const DetailsImage = ({ data, dataTrailer }: Details) => {
  const trailer = dataTrailer?.results?.filter(
    (el) => el.name === "Official Trailer"
  );

  return (
    <div className="hidden lg:flex lg:flex-col">
      <div className="flex gap-8 w-full h-[428px]">
        <div className="relative flex-1/4 h-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            fill
            objectFit="cover"
            alt="videoImage"
          />
        </div>
        <div className="relative flex-3/4 h-full">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            fill
            objectFit="cover"
            alt="videoImage"
          />
          <YouTube videoId={trailer[0].key} />
          <div className="absolute top-3/4 left-3 z-10 flex items-center gap-3">
            <Button className="bg-white rounded-4xl text-black" size="icon">
              <Play />
            </Button>
            <p className="text-white">Play trailer</p>
            <p className="text-white">2:35</p>
          </div>
        </div>
      </div>
      <div className="my-8 flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {data.genres.map((el, index) => {
            return (
              <div key={index} className="flex">
                <Badge variant="outline">{el.name}</Badge>
              </div>
            );
          })}
        </div>
        <p className="text-base">{data.overview}</p>
      </div>
    </div>
  );
};
