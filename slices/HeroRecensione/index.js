/**
 * @typedef {import("@prismicio/client").Content.HeroRecensioneSlice} HeroRecensioneSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroRecensioneSlice>} HeroRecensioneProps
 * @type {import("react").FC<HeroRecensioneProps>}
 */
const HeroRecensione = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_recensione (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroRecensione;
