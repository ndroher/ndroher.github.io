import React from "react";
import GithubLogo from "../assets/github.svg";
import LinkedinLogo from "../assets/linkedin.svg";
import MediumLogo from "../assets/medium.svg";
import Tilty from "react-tilty";

const About = () => {
  return (
    <section>
      <Tilty
        className="bg-slate-950/30 mx-auto w-full lg:w-3/4 2xl:w-1/2 backdrop-blur-md mt-8 md:mt-16 rounded-3xl hover:rounded-none"
        reverse
        scale={1.1}
        glare
        maxGlare={0.1}
      >
        <div
          className="p-12 md:p-24 flex flex-col gap-12 justify-between"
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-100">
              Hi, I'm{" "}
              <span className="relative group">
                <span className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-t from-gray-200 to-gray-100">
                  Leandro
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-gradient-to-r from-violet-600 to-indigo-500 transition-all group-hover:w-full"></span>
              </span>
              ,
            </h1>
            <h2 className="font-bold text-5xl text-gray-200 font-caveat">
              a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-violet-600 to-indigo-500">
                Web Developer
              </span>
              .
            </h2>
          </div>
          <div className="text-xl md:text-2xl [text-wrap:balance] text-gray-300 font-mono">
            I have worked on projects using{" "}
            <span className="text-white font-extrabold font-mono inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>TypeScript</li>
                <li>PHP</li>
                <li>WordPress</li>
                <li>REST API</li>
                <li>Sass</li>
                <li>Git</li>
                <li>Figma</li>
                <li>HTML</li>
              </ul>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-12 justify-between items-center">
            <a
              href="mailto:ndroher+work@proton.me"
              className="py-4 px-8 rounded-3xl bg-gradient-to-t from-violet-600 to-indigo-500 text-white transition hover:ring hover:ring-violet-700 hover:scale-105 z-10"
            >
              Get in touch
            </a>
            <ul className="flex gap-6">
              <li>
                <a href="https://github.com/ndroher" target="_blank">
                  <img
                    src={GithubLogo}
                    alt="GitHub Logo"
                    className="w-12 h-12 hover:scale-125 grayscale brightness-50 hover:brightness-100 transition"
                  />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@ndroher" target="_blank">
                  <img
                    src={MediumLogo}
                    alt="Medium Logo"
                    className="w-12 h-12 hover:scale-125 grayscale brightness-50 hover:brightness-100 transition"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leandroherbas/"
                  target="_blank"
                >
                  <img
                    src={LinkedinLogo}
                    alt="LinkedIn Logo"
                    className="w-12 h-12 hover:scale-125 brightness-50 grayscale hover:brightness-100 hover:grayscale-0 transition"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Tilty>
    </section>
  );
};

export default About;
