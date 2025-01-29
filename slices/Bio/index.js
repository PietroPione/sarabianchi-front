/**
 * @typedef {import("@prismicio/client").Content.BioSlice} BioSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BioSlice>} BioProps
 * @type {import("react").FC<BioProps>}
 */
const Bio = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bio (variation: {slice.variation}) Slices
    </section>
  );
};

export default Bio;
