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



  return (
    <div className="container  space-y-10 py-10 overflow-hidden flex items-center flex-col">
      <div className="w-full border space-y-10 py-10">
        <div className="container text-center">

          <h1 className=" text-60 font-bold">{script.data.slices[0]?.primary?.titolo}</h1>
          <div className="text-22">{script.data.slices[0]?.primary?.tipo_script}</div>
        </div>
        <div className="flex-1 px-10 md:px-0">
          {script.data.slices[1]?.primary?.script_pdf?.url && (
            <PdfViewer pdfUrl={script.data.slices[1].primary.script_pdf.url} />
          )}
        </div>
        <div className="flex justify-center flex-col items-center space-y-4 text-center ">
          <div className="text-32 font-semibold leading-0 md:leading-1">Piaciuto? Ne ho scritti molti altri!</div>
          <div className="flex">
            <ButtonPrimary url="/#script" testo="Leggi tutto" />
          </div>
        </div>
      </div>


    </div>
  );
}