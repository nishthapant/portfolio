"use client";
import { useEffect } from "react";
import ScrollablePanel from "./components/ScrollablePanel";
import StaticCard from "./components/StaticCard";
import NavBar from "./components/NavBar";

const LandingPage = () => {
  useEffect(() => {
    // safe guard for servise side rendering
    if (typeof document === "undefined") return;

    const scrollContainer = document.querySelector(
      ".right-panel-scrollable"
    ) as HTMLElement;

    // make the text scroll sensitive
    const handleScroll = () => {
      if (!scrollContainer) return;
      const texts = scrollContainer.querySelectorAll(
        ".scroll-text"
      ) as NodeListOf<HTMLElement>;
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerHeight = scrollContainer.clientHeight;

      const activeZoneTop = containerHeight * 0.15;
      const activeZoneBottom = containerHeight * 0.85;

      texts.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const locY = rect.top - containerRect.top + rect.height / 2;

        if (locY >= activeZoneTop && locY <= activeZoneBottom) {
          text.style.opacity = "1";
        } else {
          text.style.opacity = "0.35";
        }
      });
    };

    // make the text sensitive to resizing
    const handleResize = () => {
      handleScroll();
    };

    // add event listeners for scroll and resize events
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    // cleanup event listeners on unmount
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <section
        className="lg:w-1/3 w-full h-screen flex flex-col items-start justify-start pl-4 md:pl-8"
        id="staticcard"
      >
        <StaticCard />
      </section>
      <section className="lg:w-2/3 w-full h-screen flex flex-col">
        <div className="flex-none">
          <NavBar />
        </div>
        <div className="flex-1 overflow-y-auto scroll-smooth right-panel-scrollable">
          <ScrollablePanel />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
