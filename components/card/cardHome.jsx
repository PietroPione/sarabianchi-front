import Link from "next/link";

export default function CardHome({
  titolo,
  tipovideo,
  background,
  className = "",
  slug,
  url,
  colore,
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
        className={`relative ${className} ${!isValidUrl ? colorClasses[colore] || "" : ""}`}
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
        <h3 className="text-26 break-words px-4 leading-6 text-center">
          {titolo}
        </h3>
        <div>{tipovideo}</div>
      </div>
    </Link>
  );
}
