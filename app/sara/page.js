import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("sara");

  console.log("Page Data:", page.data.slices);

  // Trova il slice "bio"
  const bioSlice = page.data.slices.find((slice) => slice.slice_type === "bio");

  return (
    <div>
      <SliceZone slices={page.data.slices} components={components} />
      {bioSlice && (
        <div>
          <h2>{bioSlice.primary.titolo}</h2>
          <PrismicRichText field={bioSlice.primary.testo_bio} />
        </div>
      )}
    </div>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("sara");

  console.log("\ud83d\udce6 Page Data:", page);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: isFilled.keyText(page.data.meta_title)
        ? page.data.meta_title
        : undefined,
      description: isFilled.keyText(page.data.meta_description)
        ? page.data.meta_description
        : undefined,
      images: isFilled.image(page.data.meta_image)
        ? [asImageSrc(page.data.meta_image)]
        : undefined,
    },
  };
}
