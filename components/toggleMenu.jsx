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
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={nodeRef} className="relative">
      {/* Bottone per aprire/chiudere il menu */}
      <button
        onClick={toggleNav}
        role="button"
        aria-expanded={isOpen}
        aria-label="Toggle Navigation Menu"
        tabIndex="0"
        className="p-2 bg-gray-800 text-white rounded"
      >
        Menu
      </button>

      {/* Overlay a tutta pagina con pulsante di chiusura */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-primary bg-opacity-90 text-secondary flex flex-col items-center justify-center">
          {/* Pulsante di chiusura nell'angolo in alto a destra */}
          <button
            onClick={toggleNav}
            aria-label="Close Navigation Menu"
            className="absolute top-8 right-16 text-white text-60 p-2"
          >
            x
          </button>
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
      )}
    </div>
  );
};

export default ToggleMenu;
