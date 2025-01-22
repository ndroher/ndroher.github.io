import React from "react";
import Head from "./Head";
import About from "./components/About";
import Projects from "./components/Projects";
import "aos/dist/aos.css";

function Home() {
  return (
    <>
      <Head title={""} />
      <div className="absolute top-0" id="about" />
      <div className="xl:h-[80vh]">
        <About />
      </div>
      <Projects />
    </>
  );
}

export default Home;
