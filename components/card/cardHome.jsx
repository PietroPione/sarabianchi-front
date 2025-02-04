import Link from "next/link";

export default function CardHome({
  titolo,
  tipovideo,
  background,
  className,
  slug,
}) {
  const isValidUrl =
    typeof background === "string" && background.startsWith("http");

  return (
    <Link href={`/video/${slug}`}>
      <div
        className={`${className} relative`}
        style={{
          backgroundImage: isValidUrl
            ? `url(${background})`
            : "url(https://via.placeholder.com/150)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <h3 className="text-26 break-words px-4 leading-6 text-center">
          {titolo}
        </h3>
        <div>{tipovideo}</div>
      </div>
    </Link>
  );
}
