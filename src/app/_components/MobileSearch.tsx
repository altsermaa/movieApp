import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

type handleMobileSearchType = {
  handleMobileSearch: () => void;
};

export const MobileSearch = ({
  handleMobileSearch,
}: handleMobileSearchType) => {
  return (
    <div className="flex justify-between items-center h-[59px] px-5">
      <Button variant="outline" size="icon">
        <ChevronDown />
      </Button>

      <Input
        type="search"
        placeholder="Search"
        className="pl-10 w-[379px] outline-none shadow-none border border-none"
      />

      <Button
        variant="outline"
        size="icon"
        onClick={handleMobileSearch}
        className="outline-none"
      >
        X
      </Button>
    </div>
  );
};
