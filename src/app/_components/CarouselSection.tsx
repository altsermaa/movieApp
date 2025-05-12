import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Play } from "lucide-react";
import Image from "next/image";

type CarouselProps = {
  movieName: string;
  movieRating: number;
  movieDescription: string;
};

export const CarouselSection = ({
  movieName,
  movieRating,
  movieDescription,
}: CarouselProps) => {
  const slides = [
    { id: 1, content: "Slide 1", src: "/Feature.png" },
    { id: 2, content: "Slide 2", src: "/Logo.png" },
    { id: 3, content: "Slide 3", src: "/next.svg" },
  ];

  return (
    <div>
      <Carousel className="w-screen h-[600px] mt-6 ">
        <CarouselContent className="relative w-full h-full">
          {slides.map((slide) => {
            return (
              <CarouselItem key={slide.id}>
                <div className="relative w-full h-[600px] p-0">
                  <Image
                    src={slide.src}
                    fill
                    objectFit="cover"
                    alt="carouselImage"
                  />
                  {slide.content}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-3 z-2" />
        <CarouselNext className="absolute top-1/2 right-3 z-2" />
      </Carousel>
      <div className="absolute top-1/3 left-32 w-[404px] h-[264px] text-white flex flex-col gap-4">
        <div>
          <p className="">Now playing:</p>
          <h1 className="font-black text-4xl">{movieName}</h1>
          <div className="flex gap-1">
            <Star className="text-[#f6e238] fill-yellow-300" />
            <p className="text-white">{movieRating}</p>
            <p className="text-gray-400">/10</p>
          </div>
        </div>
        <p>{movieDescription}</p>
        <Button variant={"outline"} className="w-fit bg-white text-black">
          <Play /> Watch trailer
        </Button>
        <div></div>
      </div>
    </div>
  );
};
