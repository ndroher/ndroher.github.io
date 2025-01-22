import React from "react";
import { useState, useEffect, useRef } from "react";
import ModalMedia from "./ModalMedia";

const ProjectPage = ({
  icon,
  title,
  releaseDate,
  banner,
  techStack,
  repositories,
  about,
  medias,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= window.innerHeight / 4);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const [modalMediaURL, setModalMediaURL] = useState(null);
  const [modalMediaDescription, setModalMediaDescription] = useState(null);

  useEffect(() => {
    if (modalMediaURL != null && modalMediaDescription != null) {
      setOpen(true);
    }
  }, [modalMediaURL, modalMediaDescription]);

  const openModal = (url, desc) => {
    if (url === modalMediaURL && desc === modalMediaDescription) {
      setOpen(true);
    } else {
      setModalMediaURL(url);
      setModalMediaDescription(desc);
    }
  };

  return (
    <>
      <div className="container mx-auto rounded-none md:rounded-3xl p-6 2xl:p-12 mt-8 bg-slate-900 relative z-10 border border-slate-800">
        <div className="flex flex-col-reverse 2xl:flex-row 2xl:items-center justify-between gap-4">
          <div className="flex gap-4 items-center" data-aos="fade-right">
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-11 h-11 rounded-2xl"
            />
            <h1 className="text-3xl font-bold text-gray-200">{title}</h1>
          </div>
          <h3 className="text-sm 2xl:text-xl text-slate-400">{releaseDate}</h3>
        </div>
        <div className="my-8" data-aos="fade-up">
          <img
            src={banner}
            className="rounded-md 2xl:rounded-3xl w-full object-cover"
            alt={title}
          />
        </div>
        <div className="flex flex-col 2xl:grid grid-cols-5 gap-4 items-start">
          <div className="col-span-4 flex flex-col gap-8">
            <div data-aos="fade-up">
              <h2 className="text-xl text-gray-200 mb-3">About</h2>
              <p className="text-slate-300">{about}</p>
            </div>
            <div className="col-span-4 grid grid-cols-2 gap-4">
              <h2 className="text-xl text-gray-200" data-aos="fade-up">
                Media
              </h2>
              {medias.map((media, index) => {
                const isFullWidth =
                  index % 3 === 0 ||
                  (index % 3 !== 0 && index === medias.length - 1);

                return isFullWidth ? (
                  <div
                    key={index}
                    className="col-span-full overflow-hidden rounded-2xl"
                    data-aos="fade-up"
                  >
                    <img
                      src={media.url}
                      alt={media.description}
                      className="rounded-2xl hover:cursor-pointer hover:scale-125 transition duration-300"
                      onClick={() => openModal(media.url, media.description)}
                    />
                  </div>
                ) : (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl"
                    data-aos={index % 3 === 1 ? "fade-right" : "fade-left"}
                  >
                    <img
                      src={media.url}
                      alt={media.description}
                      className="rounded-2xl hover:cursor-pointer hover:scale-125 transition duration-300"
                      onClick={() => openModal(media.url, media.description)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="order-first 2xl:order-none flex flex-col gap-4 2xl:sticky top-1/4 max-w-full"
            ref={stickyRef}
          >
            <div
              data-aos="fade-down"
              className={`max-2xl:hidden mb-4 transition duration-300 ${
                isSticky ? "flex gap-4 items-center" : "hidden"
              }`}
            >
              <img
                src={icon}
                alt={`${title} icon`}
                className="w-11 h-11 rounded-2xl"
              />
              <h1 className="text-lg font-bold text-gray-200">{title}</h1>
            </div>
            <div>
              <h2 className="text-xl text-gray-200">Tech Stack</h2>
              <div className="py-4 flex gap-2 overflow-x-auto text-nowrap xl:flex-wrap">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-slate-400 bg-slate-900 py-2 px-4 rounded-full border border-slate-950 ring-2 ring-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl text-gray-200">Repositories</h2>
              <div className="flex 2xl:flex-col gap-4 py-4 overflow-x-auto">
                {repositories.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    className="bg-slate-900 border border-slate-700 rounded-xl p-4 hover:outline hover:outline-slate-800 group"
                    target="_blank"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                      >
                        <path
                          fill="#9198a1"
                          d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                        ></path>
                      </svg>
                      <h3 className="text-[#4493f8] group-hover:underline text-nowrap 2xl:text-wrap">
                        {repo.user}/{" "}
                        <span className="font-bold">{repo.name}</span>
                      </h3>
                    </div>
                    <p className="text-slate-400 text-xs mt-2">
                      {repo.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalMedia
        open={open}
        onClose={() => setOpen(false)}
        url={modalMediaURL}
        description={modalMediaDescription}
      />
    </>
  );
};

export default ProjectPage;
