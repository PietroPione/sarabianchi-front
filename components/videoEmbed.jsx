"use client";
import { useEffect, useState } from "react";

export default function VimeoEmbed({ videoId, background = false }) {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      setHeight(`${window.innerHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  if (!videoId) return null;

  let vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  if (background) {
    vimeoUrl += "&background=1&muted=1";
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height }} // Altezza dinamica
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        src={vimeoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
        style={{
          objectFit: "cover",
          width: "250vw",
          height: "120vh",
          position: "absolute",
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
