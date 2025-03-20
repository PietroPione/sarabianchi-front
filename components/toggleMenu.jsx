// components/ToggleMenu.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const ToggleMenu = ({ nav }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen((prev) => !prev);
  const nodeRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div ref={nodeRef} className="relative">
      {/* Contenitore per bottone e "x" con allineamento verticale */}
      <div className="relative z-50 flex items-center">
        {/* Pulsante di chiusura "x" */}
        <button
          onClick={toggleNav}
          aria-label="Close Navigation Menu"
          className={`absolute top-0 left-0 text-white text-46 p-2 transition-opacity duration-300 ${isOpen ? "opacity-100 visible translate-y-[-25%]" : "opacity-0 invisible translate-y-0"
            }`}
        >
          x
        </button>

        {/* Bottone per aprire il menu */}
        <button
          onClick={toggleNav}
          role="button"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
          tabIndex="0"
          className={`p-2 bg-gray-800 text-white ${isOpen ? "invisible" : "visible"}`}
        >
          Menu
        </button>
      </div>

      {/* Overlay a tutta pagina */}
      <div
        className={`fixed inset-0 z-40 bg-primary bg-opacity-90 text-secondary flex flex-col items-center justify-center transition-all duration-300 ease-in-out p-8 will-change-opacity ${isOpen
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-95"
          }`}
      >
        {/* Lista dei link di navigazione */}
        <ul className="space-y-6">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.slug.text ? `#${item.slug.text}` : ""}`}
                onClick={() => setOpen(false)}
                className="hover:underline text-white text-2xl"
              >
                {item.menu_label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenu;