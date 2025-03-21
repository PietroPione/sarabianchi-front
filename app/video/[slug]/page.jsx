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
  const { slug } = await params;
  const client = createClient();


  const response = await client.getByType("video");
  const video = response.results.find((doc) => doc.uid === slug);

  if (!video) {
    return <p>Video non trovato</p>;
  }


  const slices = video.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
    items: slice.items,
  }));


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
          <h1 className="text-26 leading-none md:text-46 lg:text-60 font-bold">
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
          <div className="space-y-4 md:space-y-0">
            {specsSlice?.primary?.specs?.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:space-x-2 ">
                <div className="font-semibold text-secondary">{item.chiave}</div>
                <div>{item.valore}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-secondary text-32 font-bold">
            {sinossiSlice?.primary?.titolo}
          </h3>
          <div>
            <PrismicRichText field={sinossiSlice?.primary?.sinossi} />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-secondary text-32 font-bold leading-none md:leading-1">
            {selezioneSlice?.primary?.titolo}
          </h3>
          <div className="space-y-0">
            {selezioneSlice?.primary?.selezione?.map((item, index) => (
              <div key={index} className=" text-white">
                <div>{item.nomeselezione}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Vedi su vimeo */}
      <div className="container flex flex-col space-y-6 md:space-y-10 items-center pb-20">
        <div className="text-secondary text-32 font-bold text-center">
          Guarda su Vimeo
        </div>
        <ButtonPrimary
          url={linkVimeo?.primary?.linkvimeo?.url}
          buttonSecondary={true}
          testo="Andiamo!"
        />
      </div>
    </div>
  );
}
