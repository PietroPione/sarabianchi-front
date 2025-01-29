/**
 * @typedef {import("@prismicio/client").Content.HeroVideoSlice} HeroVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroVideoSlice>} HeroVideoProps
 * @type {import("react").FC<HeroVideoProps>}
 */
const HeroVideo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_video (variation: {slice.variation}) Slices
    </section>
  );
};

export default HeroVideo;
