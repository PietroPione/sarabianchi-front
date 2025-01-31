import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function ChiSono() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const bioSlice = page.data.slices.find((slice) => slice.slice_type === "bio");

  // Usa asImageSrc per ottenere un URL ottimizzato
  const imageUrl = asImageSrc(bioSlice.primary.immagine_bio);

  return (
    <div className="flex">
      <div>
        <h2 className="text-secondary text-75 font-bold">
          {bioSlice.primary.titolo}
        </h2>
        <div>
          <PrismicRichText field={bioSlice.primary.testo_bio} />
        </div>
      </div>
      <div>
        <img
          src={bioSlice.primary.immagine_bio.url}
          alt="Immagine Bio"
          className="max-w-full"
        />
      </div>
    </div>
  );
}
