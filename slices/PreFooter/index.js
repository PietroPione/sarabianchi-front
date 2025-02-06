/**
 * @typedef {import("@prismicio/client").Content.PreFooterSlice} PreFooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PreFooterSlice>} PreFooterProps
 * @type {import("react").FC<PreFooterProps>}
 */
const PreFooter = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pre_footer (variation: {slice.variation}) Slices
    </section>
  );
};

export default PreFooter;
