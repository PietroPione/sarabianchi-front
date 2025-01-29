/**
 * @typedef {import("@prismicio/client").Content.VideoEmbedSlice} VideoEmbedSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoEmbedSlice>} VideoEmbedProps
 * @type {import("react").FC<VideoEmbedProps>}
 */
const VideoEmbed = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_embed (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VideoEmbed;
