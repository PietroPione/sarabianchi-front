import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

export default async function ChiSono() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const bioSlice = page.data.slices.find((slice) => slice.slice_type === "bio");

  return (
    <div className="space-y-20">
      <div className="space-y-10 flex flex-col items-center">
        <h2 className="text-tertiary text-40 md:text-60 uppercase font-bold">
          {bioSlice.primary.titolo}
        </h2>
        <div className="text-justify md:max-w-[66vw] lg:max-w-[50vw]">
          <PrismicRichText field={bioSlice.primary.testo_bio} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0  justify-between md:justify-center md:space-x-8">
        {bioSlice.primary.immagine_bio.url && bioSlice.primary.immagine_bio.url.trim() !== "" && (
          <div
            className="md:w-[20vw] lg:w-[15vw] h-auto aspect-square bg-cover bg-center"
            style={{ backgroundImage: `url(${bioSlice.primary.immagine_bio.url})` }}
          ></div>
        )}
        {bioSlice.primary.immagine_bio_2.url && bioSlice.primary.immagine_bio_2.url.trim() !== "" && (
          <div
            className="md:w-[20vw] lg:w-[15vw] h-auto aspect-square bg-cover bg-center"
            style={{ backgroundImage: `url(${bioSlice.primary.immagine_bio_2.url})` }}
          ></div>
        )}
        {bioSlice.primary.immagine_bio_3.url && bioSlice.primary.immagine_bio_3.url.trim() !== "" && (
          <div
            className="md:w-[20vw] lg:w-[15vw] h-auto aspect-square bg-cover bg-center"
            style={{ backgroundImage: `url(${bioSlice.primary.immagine_bio_3.url})` }}
          ></div>
        )}
      </div>
    </div>
  );
}