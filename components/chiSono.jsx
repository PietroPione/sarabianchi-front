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
    <div className="flex flex-col gap-x-40 lg:flex-row">
      <div className="order-2 lg:order-1">
        <h2 className="text-secondary text-46 md:text-60 lg:text-75 font-bold">
          {bioSlice.primary.titolo}
        </h2>
        <div>
          <PrismicRichText field={bioSlice.primary.testo_bio} />
        </div>
      </div>
      <div className="order-1 lg:order-2  flex justify-end">
        <Image
          src={bioSlice.primary.immagine_bio.url}
          alt="Immagine Bio"
          width={1000}
          height={1000}
          className="max-w-full md:max-w-[50vw] lg:max-w-[33vw] max-w-auto object-contain"
        />
      </div>
    </div>
  );
}