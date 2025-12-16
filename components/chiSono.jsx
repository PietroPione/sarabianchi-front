import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

export default async function ChiSono() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const bioSlice = page.data.slices.find((slice) => slice.slice_type === "bio");
  const bioImages = [
    bioSlice.primary.immagine_bio,
    bioSlice.primary.immagine_bio_2,
    bioSlice.primary.immagine_bio_3,
  ].filter((image) => image?.url && image.url.trim() !== "");

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
        {bioImages.map((image, index) => (
          <img
            key={image.url + index}
            src={image.url}
            alt={
              image.alt ||
              "Ritratto di Sara Bianchi, sceneggiatrice e story editor a Torino"
            }
            loading="lazy"
            className="md:w-[20vw] lg:w-[15vw] w-full max-w-[260px] aspect-square object-cover"
          />
        ))}
      </div>
    </div>
  );
}
