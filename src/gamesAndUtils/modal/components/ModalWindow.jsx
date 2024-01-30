import React, { useRef, useEffect } from "react";

import closeIcon from "./../closeMenu.svg";
import capibara from "./../capibara.jpg";

import "./../animation.css";

function Modal({ open, setOpen, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-colorBgOverly animated ${
        open ? "open" : ""
      }`}
    >
      <div
        ref={modalRef}
        className="w-400px h-400px bg-white rounded-inputRounded absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img
          className="ml-auto mt-3 mr-3 hover:cursor-pointer hover:scale-150 transition-all"
          src={closeIcon}
          alt="close modal"
          onClick={() => setOpen(false)}
        />
        <img className="w-60 mt-12 mx-auto" src={capibara} alt="capibara!!" />
      </div>
    </div>
  );
}

export default Modal;
