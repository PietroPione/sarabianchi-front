export default function VimeoEmbed({ videoId, background }) {
  if (!videoId) return null;

  // Costruisci l'URL di base
  let vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  // Aggiungi "&background=1" se la prop "background" è true
  if (background) {
    vimeoUrl += "&background=1&muted=1";
  }

  return (
    <div className="relative w-full overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={vimeoUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}
