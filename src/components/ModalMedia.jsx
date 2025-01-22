import React from "react";
import { useEffect } from "react";

const ModalMedia = ({ open, onClose, url, description }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div
      onClick={onClose}
      className={`fixed top-0 left-0 w-screen h-screen z-50 transition ${
        open ? "visible bg-black/70" : "invisible"
      }`}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <div className="inline-block" onClick={(e) => e.stopPropagation()}>
          <img
            src={url}
            alt={description}
            className="max-w-[80vw] max-h-[90vh] object-contain"
          />
          <p className="bg-slate-900 text-slate-300 text-center py-2 rounded-b-3xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalMedia;
