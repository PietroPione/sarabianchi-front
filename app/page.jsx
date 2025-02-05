import { createClient } from "@/prismicio";
import ChiSono from "@/components/chiSono";
import GrigliaHome from "@/components/grigliaHome";

export default async function Page() {
  const client = createClient();

  // Recupera i dati da Prismic
  const videoResponse = await client.getByType("video");
  const scriptResponse = await client.getByType("script");

  // Controlla che ci siano risultati
  const videos = videoResponse.results.length
    ? videoResponse.results.reverse()
    : [];
  const scripts = scriptResponse.results.length
    ? scriptResponse.results.reverse()
    : [];

  // Mappare i dati per passare a GrigliaHome
  const mappedVideos = videos.map((doc) => ({
    titolo: doc.data.slices[0]?.primary.titolo,
    genere: doc.data.slices[0]?.primary.genere,
    background: doc.data.slices[0]?.primary.background_image?.url,
    tipovideo: doc.data.slices[0]?.primary.tipovideo,
    slug: doc.uid,
  }));

  const mappedScripts = scripts.map((doc) => ({
    titolo: doc.data.slices[0]?.primary.titolo,
    genere: doc.data.slices[0]?.primary.genere,
    background: doc.data.slices[0]?.primary.background_image?.url,
    tipovideo: doc.data.slices[0]?.primary.tipovideo,
    slug: doc.uid,
  }));

  return (
    <div className="container space-y-20">
      <ChiSono></ChiSono>
      <GrigliaHome sliceType="video" titolo="Video" dati={mappedVideos} />
      <GrigliaHome sliceType="script" titolo="Script" dati={mappedScripts} />
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
      title: page.data.meta_title || undefined,
      description: page.data.meta_description || undefined,
      images: page.data.meta_image ? [page.data.meta_image.url] : undefined,
    },
  };
}
