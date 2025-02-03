import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ChiSono from "@/components/chiSono";
import GrigliaHome from "@/components/grigliaHome";

export default async function Page() {
  return (
    <div className="container space-y-20">
      <ChiSono></ChiSono>
      {/* <div className="text-32 text-tertiary text-75 py-10">Pio</div> */}
      <GrigliaHome sliceType="video" titolo="Video" />
    </div>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("sara");

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
