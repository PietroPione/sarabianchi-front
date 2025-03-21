import { isFilled, asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image"; // Importa il componente Image

import { createClient } from "@/prismicio";

export default async function ChiSono() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const bioSlice = page.data.slices.find((slice) => slice.slice_type === "bio");

  const imageUrl = asImageSrc(bioSlice.primary.immagine_bio);

  return (
    <div className="space-y-10">
      <div >
        <h2 className="text-tertiary text-40 md:text-60 uppercase font-bold">
          {bioSlice.primary.titolo}
        </h2>
        <div className="text-justify">
          <PrismicRichText field={bioSlice.primary.testo_bio} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between">
        <Image
          src={bioSlice.primary.immagine_bio.url}
          alt="Immagine Bio"
          width={1000}
          height={1000}
          className="max-w-full md:max-w-[20vw] lg:max-w-[20vw] max-w-auto object-contain"
        />
        <Image
          src={bioSlice.primary.immagine_bio_2.url}
          alt="Immagine Bio"
          width={1000}
          height={1000}
          className="max-w-full md:max-w-[20vw] lg:max-w-[20vw] max-w-auto object-contain"
        />
        <Image
          src={bioSlice.primary.immagine_bio_3.url}
          alt="Immagine Bio"
          width={1000}
          height={1000}
          className="max-w-full md:max-w-[20vw] lg:max-w-[20vw] max-w-auto object-contain"
        />
      </div>
    </div>
  );
}