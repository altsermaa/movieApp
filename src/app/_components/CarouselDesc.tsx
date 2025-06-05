import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getVideoApi } from "@/hooks/getVideoApi";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CarouselDescProps {
  id: string;
  title: string;
  vote_average: number;
  overview: string;
}

export const CarouselDesc: React.FC<CarouselDescProps> = ({
  id,
  title,
  vote_average,
  overview,
}) => {
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const carouselTrailer = async () => {
      const response = await getVideoApi({ params: { id: id } });
      const officialTrailer = response?.results?.find(
        (el: any) => el.name === "Official Trailer"
      );

      setTrailer(officialTrailer?.key);
    };

    carouselTrailer();
  }, [id]);

  const opts = {
    height: "561",
    width: "997",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <p className="">Now playing:</p>
      <h1 className="font-black text-4xl">{title}</h1>
      <div className="flex gap-1">
        <Star className="text-[#f6e238] fill-yellow-300" />
        <p className="text-white">{vote_average.toFixed(1)}</p>
        <p className="text-gray-400">/10</p>
      </div>
      <p>{overview}</p>

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-fit bg-white text-black">
              <Play /> Watch trailer
            </Button>
          </DialogTrigger>
          <DialogContent className="lg:w-[997px] bg-none">
            <YouTube videoId={trailer} opts={opts} />
          </DialogContent>
        </form>
      </Dialog>
    </div>
    
  );
};
