/**
 * @typedef {import("@prismicio/client").Content.HeroScriptSlice} HeroScriptSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroScriptSlice>} HeroScriptProps
 * @type {import("react").FC<HeroScriptProps>}
 */
const HeroScript = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_script (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroScript;
