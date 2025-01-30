/**
 * @typedef {import("@prismicio/client").Content.ColorsSlice} ColorsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ColorsSlice>} ColorsProps
 * @type {import("react").FC<ColorsProps>}
 */
const Colors = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for colors (variation: {slice.variation}) Slices
    </section>
  );
};

export default Colors;
