export default function VimeoEmbed({ videoId }) {
  if (!videoId) return null;

  return (
    <div className="relative w-full overflow-hidden pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://player.vimeo.com/video/${videoId}?autoplay=0&muted=0`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}
