import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav className="sticky top-4 flex justify-center z-20">
      <ul className="flex gap-8 text-gray-300 bg-slate-950/30 backdrop-blur-lg rounded-3xl py-5 px-6">
        <li className="mx-auto text-center">
          <HashLink to="/#about" className="group relative mx-auto text-center">
            <span className="hover:text-white transition">About</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </HashLink>
        </li>
        <li className="mx-auto text-center">
          <HashLink
            to="/#projects"
            className="group relative mx-auto text-center"
          >
            <span className="hover:text-white transition">Projects</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </HashLink>
        </li>
        <li className="mx-auto text-center">
          <a
            href="mailto:ndroher+work@proton.me"
            className="group relative mx-auto text-center"
          >
            <span className="hover:text-white transition">Contact</span>
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
