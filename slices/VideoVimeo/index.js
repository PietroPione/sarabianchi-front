/**
 * @typedef {import("@prismicio/client").Content.VideoVimeoSlice} VideoVimeoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoVimeoSlice>} VideoVimeoProps
 * @type {import("react").FC<VideoVimeoProps>}
 */
const VideoVimeo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_vimeo (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VideoVimeo;
