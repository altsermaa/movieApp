"use client";

import { useState } from "react";
import { CarouselSection } from "./_components/CarouselSection";
import { Section } from "./_components/Section";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <CarouselSection
        movieName="Wicked"
        movieRating={6.9}
        movieDescription="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
      />
      <Section title="Upcoming" />
    </div>
  );
}
