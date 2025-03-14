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

  // Recupera il documento specifico in base allo slug
  const response = await client.getByType("script");
  const script = response.results.find((doc) => doc.uid === slug);

  if (!script) {
    return <p>Documento non trovato</p>;
  }

  return (
    <div className="container py-10" style={{ overflow: 'hidden' }}> {/* Blocca lo scorrimento della pagina */}
      <div style={{ height: '80vh', overflowY: 'auto' }}> {/* Contenitore del PDF con scorrimento interno */}
        {/* Visualizzazione del PDF */}
        {script.data.slices[1]?.primary?.script_pdf?.url && (
          <PdfViewer pdfUrl={script.data.slices[1].primary.script_pdf.url} />
        )}
      </div>
      {script.data.slices.map((slice, index) => (
        <div key={index} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{slice.slice_type}</h2>
          {/* Altri contenuti delle slice */}
        </div>
      ))}
    </div>
  );
}