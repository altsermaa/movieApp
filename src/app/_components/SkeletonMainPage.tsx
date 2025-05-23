import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonMainPage = () => {
  const skeletonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Skeleton className="w-screen h-[600px] mt-6" />

      <div className="w-[335px] lg:w-[1277px] m-auto my-12">
        <div className="w-[335px] lg:w-[1277px] m-auto lg:mb-8 flex justify-between">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[165px]" />
        </div>
        <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 h-fit gap-5 lg:gap-8 m-auto">
          {skeletonNumber.map((el) => (
            <Skeleton className="h-[439px] w-[165px]" />
          ))}
        </div>
      </div>

      <div className="w-[335px] lg:w-[1277px] m-auto my-12">
        <div className="w-[335px] lg:w-[1277px] m-auto lg:mb-8 flex justify-between">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[165px]" />
        </div>
        <div className="grid grid-cols-2 grid-rows-5 lg:grid-cols-5 lg:grid-rows-2 h-fit gap-5 lg:gap-8 m-auto">
          {skeletonNumber.map((el) => (
            <Skeleton className="h-[439px] w-[165px]" />
          ))}
        </div>
      </div>
    </div>
  );
};
