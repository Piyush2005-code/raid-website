import React, { useEffect } from "react";
import Hero from "./components/Hero";
import { About } from "./components/About";
import { BouncyCardsFeatures } from "./components/Resources";
import { SwipeCarousel } from "./components/Carousal";

import Aos from "aos";
import "aos/dist/aos.css";

function Home2() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <div className="bg-[#050608] min-h-screen">
      <Hero />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <SwipeCarousel />
      </div>
      <div data-aos="fade-up">
        <BouncyCardsFeatures />
      </div>
    </div>
  );
}

export default Home2;
