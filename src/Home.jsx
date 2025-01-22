import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import "aos/dist/aos.css";

function Home() {
  return (
    <>
      <div className="absolute top-0" id="about" />
      <div className="xl:h-[80vh]">
        <About />
      </div>
      <Projects />
    </>
  );
}

export default Home;
