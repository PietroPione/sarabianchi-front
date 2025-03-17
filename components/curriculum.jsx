import { createClient } from "@/prismicio";
import ButtonPrimary from "./buttonPrimary";

export default async function Curriculum() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const curriculum = page.data.slices.find(
    (slice) => slice.slice_type === "curriculum"
  );

  const cvData = curriculum.primary;

  return (
    <div className="flex justify-center">
      <div className="text-center space-y-10 flex flex-col items-center">
        <div>
          <div className="text-secondary text-46 leading-none md:leading-1  md:text-75 font-bold">
            {cvData.titolo}
          </div>
          <div className="text-15">{cvData.testo}</div>
        </div>
        <ButtonPrimary url={cvData.link.url} />
      </div>
    </div>
  );
}
