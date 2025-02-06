import Link from "next/link";

export default function CardHome({
  titolo,
  tipovideo,
  background,
  className = "",
  slug,
  url,
  colore,
  textBold,
}) {
  const isValidUrl =
    typeof background === "string" && background.startsWith("http");

  const colorClasses = {
    secondary: "bg-secondary",
    primary: "bg-primary",
    tertiary: "bg-tertiary",
    quaternary: "bg-quaternary",
    five: "bg-five",
  };
  return (
    <Link href={url}>
      <div
        className={`relative border-primary border-2 ${className} ${!isValidUrl ? colorClasses[colore] || "" : ""} group overflow-hidden`} // Aggiunto `group` e `overflow-hidden`
        style={
          isValidUrl
            ? {
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
              }
            : undefined
        }
      >
        {/* Overlay che appare in hover */}
        <div className="absolute inset-0 bg-primary bg-opacity-0 transition-all duration-300 border-primary border-2 group-hover:bg-opacity-100 group-hover:border-secondary group-hover:border-2 flex items-center justify-center">
          <p className="text-white text-22 px-4 py-2 border border-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            Scopri
          </p>
        </div>

        {/* Contenuto della card */}
        <h3
          className={`break-words px-4 leading-6 text-center ${textBold ? "font-bold text-32" : "text-26"}`}
        >
          {titolo}
        </h3>
        <div>{tipovideo}</div>
      </div>
    </Link>
  );
}
