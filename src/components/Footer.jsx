import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-300 flex flex-col items-center justify-between gap-8 border-t border-slate-800 w-1/2 mx-auto py-8 mt-8 xl:mt-32">
      <ul className="flex gap-8">
        <li>
          <a href="" className="hover:text-white">
            GitHub
          </a>
        </li>
        <li>
          <a href="" className="hover:text-white">
            Medium
          </a>
        </li>
        <li>
          <a href="" className="hover:text-white">
            LinkedIn
          </a>
        </li>
      </ul>
      <p>© 2025 Leandro Herbas</p>
    </div>
  );
};

export default Footer;
