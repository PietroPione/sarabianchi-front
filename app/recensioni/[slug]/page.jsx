import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import ButtonPrimary from "@/components/buttonPrimary";

export async function generateStaticParams() {
  const client = createClient();
  const response = await client.getByType("recensione");

  return response.results.map((recensione) => ({
    slug: recensione.uid,
  }));
}

export default async function RecensionePage({ params }) {
  const { slug } = await params;
  const client = createClient();

  // Recupera il documento specifico in base allo slug
  const response = await client.getByType("recensione");
  const recensione = response.results.find((doc) => doc.uid === slug);

  if (!recensione) {
    return <p>Documento non trovato</p>;
  }

  // Estrai i dati delle slice
  const mappedSlices = recensione.data.slices.map((slice) => ({
    type: slice.slice_type,
    primary: slice.primary,
  }));

  const backgroundImageUrl = mappedSlices.find(
    (slice) => slice.type === "hero_recensione"
  )?.primary?.background?.url;

  const heroRecensioneSlice = mappedSlices.find(
    (slice) => slice.type === "hero_recensione"
  );

  const testoRecensioneSlice = mappedSlices.find(
    (slice) => slice.type === "testo_recensione"
  );

  const preFooterSlice = mappedSlices.find(
    (slice) => slice.type === "pre_footer"
  );

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl || "https://via.placeholder.com/150"})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container bg-primary border-secndary border-2 max-w-[60%] mx-auto my-40 py-20 px-24 space-y-10 backdrop-blur-md bg-opacity-70">
        <div className="space-y-6">
          <h1 className="text-secondary text-32 font-bold leading-10">
            {heroRecensioneSlice.primary?.titolo}
          </h1>
          <h2 className="text-secondary text-22">
            {heroRecensioneSlice.primary?.specs}
          </h2>
          <div className="text-secondary text-15">
            {heroRecensioneSlice.primary?.pubblicazione}
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-white font-bold text-22">
            {heroRecensioneSlice.primary?.titolo_articolo}
          </div>
          <div>
            <PrismicRichText
              field={testoRecensioneSlice?.primary?.testorecensione}
            />
          </div>
        </div>
      </div>
      {/* info pubblicazione */}
      <div className="pb-20">
        <div className="container flex flex-col items-center space-y-10">
          <div className="text-32 text-bold text-center flex flex-col">
            <div>Pubblicato originariamente su</div>
            <div>{preFooterSlice.primary?.originale}</div>
          </div>
          <ButtonPrimary url={preFooterSlice.primary.link[0].url} />
        </div>
      </div>
    </div>
  );
}
