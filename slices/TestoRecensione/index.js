/**
 * @typedef {import("@prismicio/client").Content.TestoRecensioneSlice} TestoRecensioneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestoRecensioneSlice>} TestoRecensioneProps
 * @type {import("react").FC<TestoRecensioneProps>}
 */
const TestoRecensione = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testo_recensione (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestoRecensione;
