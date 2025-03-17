/**
 * @typedef {import("@prismicio/client").Content.VariousOptionsSlice} VariousOptionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VariousOptionsSlice>} VariousOptionsProps
 * @type {import("react").FC<VariousOptionsProps>}
 */
const VariousOptions = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for various_options (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VariousOptions;
