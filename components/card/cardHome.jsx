export default function CardHome({ titolo, tipovideo, background, className }) {
  const isValidUrl =
    typeof background === "string" && background.startsWith("http");

  return (
    <div
      className={`${className}`}
      style={{
        backgroundImage: isValidUrl
          ? `url(${background})`
          : "url(https://via.placeholder.com/150)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <h3>{titolo}</h3>
      <div>{tipovideo}</div>
    </div>
  );
}
