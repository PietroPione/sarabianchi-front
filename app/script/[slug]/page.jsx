import PdfViewer from "@/components/PdfViewer";
import { createClient } from "@/prismicio";

export default async function PdfPage({ params }) {
  const { slug } = await params; // Aggiungi "await" qui
  const client = createClient();

  // Recupera il documento specifico in base allo slug
  const response = await client.getByType("script");
  const script = response.results.find((doc) => doc.uid === slug);

  if (!script) {
    return <p>Documento non trovato</p>;
  }

  return (
    <div className="container py-10" style={{ overflow: 'auto' }}>
      <div style={{ height: '80vh', overflow: 'visible' }}>
        {script.data.slices[1]?.primary?.script_pdf?.url && (
          <PdfViewer pdfUrl={script.data.slices[1].primary.script_pdf.url} />
        )}
      </div>
      {script.data.slices.map((slice, index) => (
        <div key={index} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{slice.slice_type}</h2>
        </div>
      ))}
    </div>
  );
}