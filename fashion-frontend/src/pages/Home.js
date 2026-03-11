import React, { useEffect } from "react";
import Hero from "../components/Hero";
import GalleryTeaser from "../components/GalleryTeaser";
import Contact from "../components/Contact";
import About from "../components/About";
import Staff from "../components/Staff";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: "#ffffff" }}>
      <Hero />

      <GalleryTeaser />

      <About />

      <Staff />

      <Contact />
    </main>
  );
};

export default Home;
