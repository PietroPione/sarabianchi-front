/**
 * @typedef {import("@prismicio/client").Content.CurriculumSlice} CurriculumSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CurriculumSlice>} CurriculumProps
 * @type {import("react").FC<CurriculumProps>}
 */
const Curriculum = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for curriculum (variation: {slice.variation}) Slices
    </section>
  );
};

export default Curriculum;
