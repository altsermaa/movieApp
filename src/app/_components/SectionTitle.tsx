import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type SectionTitle = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitle) => {
  return (
    <div className="w-[1277px] m-auto mb-8 flex justify-between">
      <h1 className="font-bold text-2xl">{title}</h1>
      <Button variant="link">
        See more <ArrowRight />
      </Button>
    </div>
  );
};
