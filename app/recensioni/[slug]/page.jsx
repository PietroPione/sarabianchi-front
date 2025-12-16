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

export async function generateMetadata({ params }) {
  const { slug } = await params; // Aggiungi await qui
  const client = createClient();
  const recensione = await client.getByUID("recensione", slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarabianchi.it";
  const canonicalUrl = `${siteUrl}/recensioni/${slug}`;

  if (!recensione) {
    return {
      title: 'Recensione | Il tuo sito',
      description: 'Leggi le nostre recensioni',
    };
  }

  const heroRecensioneSlice = recensione.data.slices.find(
    (slice) => slice.slice_type === "hero_recensione"
  )?.primary;
  const title =
    recensione?.data?.meta_title || heroRecensioneSlice?.titolo || 'Recensione';
  const description =
    recensione?.data?.meta_description ||
    heroRecensioneSlice?.specs ||
    'Leggi questa recensione';
  const imageUrl = recensione?.data?.meta_image?.url;

  return {
    title,
    description,
    keywords: [
      "recensioni cinema Torino",
      "critica cinematografica",
      "analisi film",
      "Sara Bianchi recensioni",
    ],
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: title || undefined,
      description: description || undefined,
      url: canonicalUrl,
      images: imageUrl ? [imageUrl] : ["/FaviconSara.png"],
      locale: "it_IT",
    },
    twitter: {
      card: "summary_large_image",
      title: title || undefined,
      description: description || undefined,
      images: imageUrl ? [imageUrl] : ["/FaviconSara.png"],
    },
  };
}

export default async function RecensionePage({ params }) {
  const { slug } = await params;
  const client = createClient();

  // Recupera il documento specifico in base allo slug
  const recensione = await client.getByUID("recensione", slug); // Modifica qui

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
  )?.primary;

  const testoRecensioneSlice = mappedSlices.find(
    (slice) => slice.type === "testo_recensione"
  )?.primary;

  const preFooterSlice = mappedSlices.find(
    (slice) => slice.type === "pre_footer"
  )?.primary;

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
      <div className="container bg-primary border-secondary border-2 max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto my-20 md:mt-40 md:mb-20 py-10 md:py-20 px-6 md:px-12 lg:px-24 space-y-10 backdrop-blur-md bg-opacity-70">
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-secondary text-32 font-bold leading-none md:leading-8 lg:leading-10">
            {heroRecensioneSlice?.titolo}
          </h1>
          <h2 className="text-secondary leading-none md:leading-6 lg:leading-8 text-22">
            {heroRecensioneSlice?.specs}
          </h2>
          <div className="text-secondary leading-none md:leading-4 lg:leading-6 text-15">
            {heroRecensioneSlice?.pubblicazione}
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-white font-bold text-22">
            {heroRecensioneSlice?.titolo_articolo}
          </div>
          <div>
            <PrismicRichText
              field={testoRecensioneSlice?.testorecensione}
            />
          </div>
        </div>
      </div>
      {/* info pubblicazione */}
      <div className="pb-20">
        <div className="container flex flex-col items-center space-y-6 md:space-y-10">
          <div className="text-22 md:text-32 text-bold text-center flex flex-col">
            <div className="text-shadow">Pubblicato originariamente su</div>
            <div className="text-shadow">{preFooterSlice?.originale}</div>
          </div>
          <ButtonPrimary url={preFooterSlice?.link?.[0]?.url} />
        </div>
      </div>
    </div>
  );
}
