/**
 * @typedef {import("@prismicio/client").Content.ScriptSlice} ScriptSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScriptSlice>} ScriptProps
 * @type {import("react").FC<ScriptProps>}
 */
const Script = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for script (variation: {slice.variation}) Slices
    </section>
  );
};

export default Script;
