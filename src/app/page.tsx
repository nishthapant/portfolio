"use client";
import { useEffect } from "react";
import ScrollablePanel from "./components/ScrollablePanel";
import StaticCard from "./components/StaticCard";
import NavBar from "./components/NavBar";

const LandingPage = () => {
  useEffect(() => {
    // safe guard for servise side rendering
    if (typeof document === "undefined") return;
    let viewportHeight = window.innerHeight;

    // make the text scroll sensitive
    const handleScroll = () => {
      const texts = document.querySelectorAll(
        ".scroll-text"
      ) as NodeListOf<HTMLElement>;
      const activeZoneTop = viewportHeight * 0.15;
      const activeZoneBottom = viewportHeight * 0.75;

      texts.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const locY = rect.top + rect.height / 2;

        if (locY >= activeZoneTop && locY <= activeZoneBottom) {
          text.style.opacity = "1";
        } else {
          text.style.opacity = "0.35";
        }
      });
    };

    // make the text sensitive to resizing
    const handleResize = () => {
      viewportHeight = window.innerHeight;
      handleScroll();
    };

    // add event listeners for scroll and resize events
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    // cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex h-screen">
      <section
        className="w-1/3 fixed h-screen flex flex-col items-start justify-start pl-8"
        id="staticcard"
      >
        <StaticCard />
      </section>
      <section className="ml-[33.3333%] w-2/3 h-screen grid grid-rows-[auto_1fr]">
        <div className="row-span-1">
          <NavBar />
        </div>
        <div className="row-span-1">
          <ScrollablePanel />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
