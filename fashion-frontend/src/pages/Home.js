import React, { useEffect } from "react";
import Hero from "../components/Hero";
import GalleryTeaser from "../components/GalleryTeaser";
import Contact from "../components/Contact";
import About from "../components/About";
import Staff from "../components/Staff";
import Reviews from "../components/Reviews";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <Hero />
      <GalleryTeaser />
      <About />
      <Staff />
      <Reviews />
      <Contact />
    </main>
  );
};

export default Home;
