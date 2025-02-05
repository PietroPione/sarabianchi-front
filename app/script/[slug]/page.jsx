import { createClient } from "@/prismicio";
import PdfViewerSlice from "@/components/pdfViewerSlice";

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
    <div className="container py-10">
      {script.data.slices.map((slice, index) => (
        <div key={index} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{slice.slice_type}</h2>
          <PdfViewerSlice slice={slice} />
          {slice.slice_type === "pdf_viewer" ? (
            <PdfViewerSlice slice={slice} />
          ) : (
            <pre className="text-sm bg-gray-100 p-2 rounded">
              {JSON.stringify(slice.primary, null, 2)}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
}
