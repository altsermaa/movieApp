"use client";

import { useState } from "react";
import { CarouselSection } from "./_components/CarouselSection";
import { UpcomingSection } from "./_components/UpcomingSection";
import { TopRatedSection } from "./_components/TopRatedSection";

export default function Home() {
  const [loading, setLoading] = useState(false);
  
  // const [search, setSearch] = useState(""); 

  

  return (
    <div>
      <CarouselSection />
      <UpcomingSection />
      <TopRatedSection />
    </div>
  );
}
