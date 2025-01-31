import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function ChiSono() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const bioSlice = page.data.slices.find((slice) => slice.slice_type === "bio");

  return (
    <div>
      <h2 className="text-primary text-3xl font-bold">
        {bioSlice.primary.titolo}
      </h2>
      <div>
        <PrismicRichText field={bioSlice.primary.testo_bio} />
      </div>
    </div>
  );
}
