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

export default async function PdfPage({ params }) {
  const { slug } = await params;
  const client = createClient();

  const response = await client.getByType("script");
  const script = response.results.find((doc) => doc.uid === slug);

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
        <div className="flex justify-center flex-col items-center space-y-8 text-center ">
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