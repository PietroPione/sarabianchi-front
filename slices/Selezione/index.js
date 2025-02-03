/**
 * @typedef {import("@prismicio/client").Content.SelezioneSlice} SelezioneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SelezioneSlice>} SelezioneProps
 * @type {import("react").FC<SelezioneProps>}
 */
const Selezione = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for selezione (variation: {slice.variation}) Slices
    </section>
  );
};

export default Selezione;
