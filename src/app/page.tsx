"use client";

import { useState } from "react";
import { CarouselSection } from "./_components/CarouselSection";
import { UpcomingSection } from "./_components/UpcomingSection";
import { TopRatedSection } from "./_components/TopRatedSection";
import { SkeletonMainPage } from "./_components/SkeletonMainPage";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const handleLoading = () => {
    setLoading(!loading);
  };

  if (loading) {
    return <SkeletonMainPage />;
  }

  return (
    <div>
      <CarouselSection />
      <UpcomingSection />
      <TopRatedSection />
    </div>
  );
}
