import React, { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Internships from "./components/Internships";
import SoftwareProjects from "./components/SoftwareProjects";
import HardwareProjects from "./components/HardwareProjects";
import Contact from "./components/Contact";
import Patents from "./components/Patents";

// Import all wallpaper videos
import defaultVideo from '/wallpapers/default.webm';
//import wp1 from '/wallpapers/wp1.webm';
import wp2 from '/wallpapers/wp2.webm';
import wp3 from '/wallpapers/wp3.webm';
import wp4 from '/wallpapers/wp4.webm';
import wp5 from '/wallpapers/wp5.webm';
//import wp6 from '/wallpapers/wp6.webm';
import wp7 from '/wallpapers/wp7.webm';
import wp8 from '/wallpapers/wp8.webm';
import wp9 from '/wallpapers/wp9.webm';
import wp10 from '/wallpapers/wp10.webm';
import wp11 from '/wallpapers/wp11.webm';
import wp12 from '/wallpapers/wp12.webm';
import wp13 from '/wallpapers/wp13.webm';

const wallpapers = [
  defaultVideo, /*wp1,*/ wp2, wp3, wp4, wp5, /*wp6,*/ wp7, wp8, wp9, wp10, wp11, wp12, wp13
];

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [currentWallpaper, setCurrentWallpaper] = useState(defaultVideo);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeWallpaper = () => {
    const currentIndex = wallpapers.indexOf(currentWallpaper);
    const nextIndex = (currentIndex + 1) % wallpapers.length;
    setCurrentWallpaper(wallpapers[nextIndex]);
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full overflow-hidden">
        <video
          key={currentWallpaper} // Add key to force re-render when source changes
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src={currentWallpaper} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>  
      <div className="container mx-auto px-8">
        <Navbar onChangeWallpaper={changeWallpaper} />
        <Hero />
        <About />
        <Technologies />
        <Internships />
        <SoftwareProjects />
        <HardwareProjects />
        <Patents />
        <Contact />
      </div>

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-2 z-50 p-3 text-white hover:text-purple-300 transition-colors duration-300 ease-in-out"
        >
          <IoIosArrowDropupCircle size={32} />
        </button>
      )}
    </div>
  );
};

export default App;