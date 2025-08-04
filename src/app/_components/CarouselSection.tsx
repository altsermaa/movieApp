import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getHeroApi } from "@/hooks/GetHeroApi";
import { Star, Play } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CarouselDesc } from "./CarouselDesc";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import YouTube from "react-youtube";

export type HeroMovie = {
  backdrop_path: string;
  id: string;
  title: string;
  overview: string;
  vote_average: number;
};

export const CarouselSection = () => {
  const [hero, setHero] = useState<HeroMovie[]>([]);

  useEffect(() => {
    const nowPlaying = async () => {
      const response = await getHeroApi();
      const firstFive = response?.results.splice(0, 5);
      setHero(firstFive);
    };
    nowPlaying();
  }, []);

  return (
    <div>
      <Carousel
        className="w-screen h-auto lg:h-[600px] mt-6"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="relative w-full h-full -ml-0">
          {hero.map((el, index) => {
            return (
              <CarouselItem key={index} className="pl-0">
                <div className="relative w-full">
        
                  <div className="relative w-full h-[375px] lg:h-[600px]">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                      fill
                      objectFit="cover"
                      alt="carouselImage"
                    />
                    
        
                    <div className="hidden lg:block lg:absolute lg:top-1/3 lg:left-32 lg:w-[404px] lg:h-[264px] lg:text-white">
                      <CarouselDesc
                        id={el.id}
                        title={el.title}
                        vote_average={el.vote_average}
                        overview={el.overview}
                      />
                    </div>
                  </div>

    
      
                  <div className="lg:hidden p-4 text-black dark:text-white">
                    <div className="flex flex-col gap-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">Now playing:</p>
                      <h1 className="font-black text-2xl">{el.title}</h1>
                      <div className="flex gap-1 items-center">
                        <Star className="text-[#f6e238] fill-yellow-300" />
                        <p className="text-black dark:text-white">{el.vote_average.toFixed(1)}</p>
                        <p className="text-gray-600 dark:text-gray-400">/10</p>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{el.overview}</p>

                      <Dialog>
                        <form>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-fit bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                              <Play className="w-4 h-4 mr-2" /> Watch trailer
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="lg:w-[997px] bg-none">
                            
                          </DialogContent>
                        </form>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-3 z-10" />
        <CarouselNext className="absolute top-1/2 right-3 z-10" />
      </Carousel>
    </div>
  );
};
