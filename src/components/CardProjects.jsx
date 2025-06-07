import React from "react";
import { Link } from "react-router-dom";

const CardProjects = ({
  icon,
  title,
  technologies,
  description,
  image,
  url,
  deployURL,
}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative w-screen">
      <div className="bg-slate-900 w-full sm:w-3/4 2xl:w-1/2 mx-auto rounded-lg grid grid-cols-5 items-start relative overflow-hidden z-10 border border-slate-800 p-[1.5px]">
        <div className="flex flex-col gap-6 col-span-full items-start bg-slate-900 rounded-lg p-12 z-20">
          <div className="w-full xl:max-w-[50%]">
            <div className="flex gap-4 items-center">
              <img
                src={icon}
                alt={`${title} icon`}
                className="w-11 h-11 rounded-2xl"
              />
              <h3 className="text-3xl font-bold text-gray-200">{title}</h3>
            </div>
            <div className="py-4 flex gap-2 overflow-x-auto text-nowrap xl:flex-wrap">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-slate-400 bg-slate-900 py-2 px-4 rounded-full border border-slate-950 ring-2 ring-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300">{description}</p>
          </div>
          <div className="flex gap-4 text-nowrap">
            <Link
              onClick={scrollToTop}
              to={url}
              className="py-4 px-8 rounded-3xl bg-gradient-to-t from-violet-600 to-indigo-500 text-white transition hover:ring hover:ring-violet-700 hover:scale-105 z-10"
            >
              Learn more
            </Link>
            {deployURL && (
              <a
                href={deployURL}
                target="_blank"
                className=" text-gray-300 py-4 px-8 rounded-3xl ring-2 hover:ring-violet-700 hover:scale-105 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#4338ca_20deg,transparent_120deg)]"></div>
      </div>
      <Link to={url} onClick={scrollToTop}>
        <img
          src={image}
          alt={`${title} image`}
          className="absolute h-full hover:scale-110 top-0 right-[7.5%] 2xl:right-[18%] transition z-20 hidden xl:block"
        />
      </Link>
    </div>
  );
};

export default CardProjects;
