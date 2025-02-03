/**
 * @typedef {import("@prismicio/client").Content.SinossiSlice} SinossiSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SinossiSlice>} SinossiProps
 * @type {import("react").FC<SinossiProps>}
 */
const Sinossi = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sinossi (variation: {slice.variation}) Slices
    </section>
  );
};

export default Sinossi;
