import ButtonPrimary from "@/components/buttonPrimary";
import PdfViewer from "@/components/PdfViewer";
import { createClient } from "@/prismicio";

export async function generateStaticParams() {
  const client = createClient();
  const response = await client.getByType("script");

  return response.results.map((script) => ({
    slug: script.uid,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // Aggiungi await qui
  const client = createClient();
  const script = await client.getByUID("script", slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarabianchi.it";
  const canonicalUrl = `${siteUrl}/script/${slug}`;

  if (!script) {
    return {
      title: 'Script | Il tuo sito',
      description: 'Leggi i nostri script',
    };
  }

  const titoloScript = script.data.slices[0]?.primary?.titolo;
  const tipoScript = script.data.slices[0]?.primary?.tipo_script;
  const imageUrl = script?.data?.meta_image?.url;
  const title = script?.data?.meta_title || titoloScript || 'Script';
  const description =
    script?.data?.meta_description || tipoScript || 'Leggi questo script';

  return {
    title,
    description,
    keywords: [
      "sceneggiatura originale",
      "script cinema Torino",
      "script consulting",
      "sceneggiatrice Sara Bianchi",
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

export default async function PdfPage({ params }) {
  const { slug } = await params;
  const client = createClient();

  const script = await client.getByUID("script", slug);

  if (!script) {
    return <p>Documento non trovato</p>;
  }

  // Recupera i dati dal documento settings
  const settings = await client.getSingle("settings");
  const variousOptionsSlice = settings.data.slices.find(
    (slice) => slice.slice_type === "various_options"
  );

  const testoAltriScript = variousOptionsSlice?.primary?.testo_leggi_altri_script;
  const linkAltriScript = variousOptionsSlice?.primary?.link_tasto_altri_script;

  return (
    <div className="container space-y-10 py-10 overflow-hidden flex items-center flex-col">
      <div className="w-full border space-y-10 py-10">
        <div className="container text-center">
          <h1 className="text-60 font-bold">
            {script.data.slices[0]?.primary?.titolo}
          </h1>
          <div className="text-22">
            {script.data.slices[0]?.primary?.tipo_script}
          </div>
        </div>
        <div className="flex-1 px-10 lg:px-0">
          {script.data.slices[1]?.primary?.script_pdf?.url && (
            <PdfViewer pdfUrl={script.data.slices[1].primary.script_pdf.url} />
          )}
        </div>
        <div className="flex justify-center flex-col items-center space-y-6 md:space-y-10 text-center ">
          <div className="text-26 leading-none md:text-32 mx-10 font-semibold md:leading-1">
            {testoAltriScript}
          </div>
          <div className="flex">
            <ButtonPrimary url={linkAltriScript?.url} testo="Leggi tutto" />
          </div>
        </div>
      </div>
    </div>
  );
}
