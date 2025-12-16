import { createClient } from "@/prismicio";
import ChiSono from "@/components/chiSono";
import GrigliaHome from "@/components/grigliaHome";
import VideoEmbedHero from "@/components/videoEmbedHero";
import Curriculum from "@/components/curriculum";
import HeaderServer from "@/components/headerServer";
import Footer from "@/components/footer";

export default async function Page() {
  const client = createClient();

  // Recupera i dati da Prismic
  const videoResponse = await client.getByType("video");
  const scriptResponse = await client.getByType("script");
  const scriptRecensione = await client.getByType("recensione");

  // Controlla che ci siano risultati
  const videos = videoResponse.results;
  const scripts = scriptResponse.results;
  const recensioni = scriptRecensione.results;

  // Mappare i dati per passare a GrigliaHome
  const mappedVideos = videos
    .map((doc) => ({
      titolo: doc.data.slices[0]?.primary.titolo,
      genere: doc.data.slices[0]?.primary.genere,
      background: doc.data.slices[0]?.primary.background_image?.url,
      tipovideo: doc.data.slices[0]?.primary.tipovideo,
      slug: doc.uid,
      numero: doc.data.numero,
      url: `/video/${doc.uid}`,
    }))
    .sort((a, b) => a.numero - b.numero);

  const mappedScripts = scripts
    .map((doc) => ({
      titolo: doc.data.slices[0]?.primary.titolo,
      colore: doc.data.slices[0]?.primary.colore,
      numero: doc.data.numero,
      slug: doc.uid,
      url: `/script/${doc.uid}`,
    }))
    .sort((a, b) => a.numero - b.numero);

  const mappedRecensioni = recensioni
    .map((doc) => ({
      titolo: doc.data.slices[0]?.primary.titolo_card,
      numero: doc.data.numero,
      background: doc.data.slices[0]?.primary.background?.url,
      slug: doc.uid,
      url: `/recensioni/${doc.uid}`,
    }))
    .sort((a, b) => a.numero - b.numero);

  return (
    <div>
      <div className="reative w-full">
        <div className="absolute z-50 w-full">
          <div>
            <HeaderServer className="container" />
          </div>
        </div>
        <div className="h-screen overflow-hidden">
          <VideoEmbedHero videoId={"807983624?h=6c046c4244"} background />
        </div>
      </div>

      <div className="container space-y-20 lg:space-y-32 md:pt-20 lg:pt-40 pb-40">
        <ChiSono></ChiSono>
        <section id="video">
          <GrigliaHome sliceType="video" titolo="Video" dati={mappedVideos} />
        </section>
        <section id="script">
          <GrigliaHome
            sliceType="script"
            titolo="Script"
            dati={mappedScripts}
            textBold={true}
          />
        </section>
        <section id="recensioni">
          <GrigliaHome
            sliceType="recensione"
            titolo="Recensioni"
            dati={mappedRecensioni}
          />
        </section>
        <section id="curriculum">
          <Curriculum />
        </section>
      </div>
      <section id="contatti">
        <div></div>
        <Footer />
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("sara");

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarabianchi.it";
  const defaultTitle = "Sara Bianchi | Sceneggiatrice e story editor a Torino";
  const defaultDescription =
    "Sceneggiature originali, consulenze di script e sviluppo progetti audiovisivi firmati da Sara Bianchi a Torino.";

  const title = page.data.meta_title || defaultTitle;
  const description = page.data.meta_description || defaultDescription;
  const imageUrl = page.data.meta_image?.url;

  return {
    title,
    description,
    keywords: [
      "sceneggiatrice Torino",
      "Sara Bianchi sceneggiatura",
      "story editor Piemonte",
      "script consultant Italia",
      "cinema indipendente Torino",
    ],
    alternates: { canonical: `${siteUrl}/` },
    robots: { index: true, follow: true },
    openGraph: {
      title: title || undefined,
      description: description || undefined,
      url: siteUrl,
      images: imageUrl ? [imageUrl] : ["/FaviconSara.png"],
      type: "website",
      locale: "it_IT",
      siteName: "Sara Bianchi",
    },
    twitter: {
      card: "summary_large_image",
      title: title || undefined,
      description: description || undefined,
      images: imageUrl ? [imageUrl] : ["/FaviconSara.png"],
    },
  };
}
