import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import ButtonPrimary from "@/components/buttonPrimary";
import VideoEmbed from "@/components/videoEmbed";

export async function generateStaticParams() {
  const client = createClient();
  const response = await client.getByType("video");

  return response.results.map((video) => ({
    slug: video.uid,
  }));
}

export default async function VideoPage({ params }) {
  const { slug } = await params; // Aggiungi await per farlo funzionare correttamente
  const client = createClient();

  // Recupera il documento specifico in base allo slug
  const response = await client.getByType("video");
  const video = response.results.find((doc) => doc.uid === slug);

  if (!video) {
    return <p>Video non trovato</p>;
  }

  // Estrarre i dati delle slice
  const slices = video.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
    items: slice.items,
  }));

  // Trova la slice "hero_video" e prendi il titolo
  const heroVideoSlice = slices.find((slice) => slice.type === "hero_video");
  const backgroundImageUrl = heroVideoSlice?.primary?.background_image?.url;
  const isValidUrl =
    backgroundImageUrl && backgroundImageUrl.startsWith("http");
  const specsSlice = slices.find((slice) => slice.type === "specs");
  const sinossiSlice = slices.find((slice) => slice.type === "sinossi");
  const selezioneSlice = slices.find((slice) => slice.type === "selezione");
  const linkVimeo = slices.find((slice) => slice.type === "video_vimeo");
  const embedVimeo = slices.find((slice) => slice.type === "video_embed");

  return (
    <div className="space-y-20">
      <div
        className="min-h-[66vh] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${isValidUrl ? backgroundImageUrl : "https://via.placeholder.com/150"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="text-60 font-bold">
            {heroVideoSlice?.primary?.titolo}
          </h1>
          <div>{heroVideoSlice?.primary?.genere}</div>
          <div>{heroVideoSlice?.primary?.info_extra}</div>
        </div>
      </div>
      <div className="container">
        <VideoEmbed videoId={embedVimeo.primary?.video_id}></VideoEmbed>
      </div>
      {/* Griglia */}
      <div className="grid grid-cols-1 lg:grid-cols-2 container gap-10">
        <div>
          <h3 className="text-secondary text-32 font-bold">
            {specsSlice?.primary?.titolo}
          </h3>
          {specsSlice?.primary?.specs?.map((item, index) => (
            <div key={index} className="flex space-x-2 ">
              <div className="font-semibold text-secondary">{item.chiave}</div>
              <div>{item.valore}</div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-secondary text-32 font-bold">
            {sinossiSlice?.primary?.titolo}
          </h3>
          <div>
            <PrismicRichText field={sinossiSlice?.primary?.sinossi} />
          </div>
        </div>
        <div>
          <h3 className="text-secondary text-32 font-bold">
            {selezioneSlice?.primary?.titolo}
          </h3>
          {selezioneSlice?.primary?.selezione?.map((item, index) => (
            <div key={index} className=" text-secondary">
              <div>{item.nomeselezione}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Vedi su vimeo */}
      <div className="container flex flex-col items-center pb-20">
        <div className="text-secondary text-32 font-bold text-center">
          Guarda su Vimeo
        </div>
        <ButtonPrimary
          url={linkVimeo?.primary?.linkvimeo?.url}
          buttonSecondary={true}
        />
      </div>
    </div>
  );
}
