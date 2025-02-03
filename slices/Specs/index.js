/**
 * @typedef {import("@prismicio/client").Content.SpecsSlice} SpecsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpecsSlice>} SpecsProps
 * @type {import("react").FC<SpecsProps>}
 */
const Specs = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for specs (variation: {slice.variation}) Slices
    </section>
  );
};

export default Specs;
