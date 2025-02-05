"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Imposta il worker per il PDF.js
if (process.env.NODE_ENV === "development") {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js"; // Percorso locale
} else {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; // CDN in produzione
}

export default function PdfViewerSlice({ slice }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center">
      <Document
        file={slice.primary.script_pdf?.url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Pagina {pageNumber} di {numPages}
      </p>
      <div className="flex space-x-4">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className="p-2 bg-gray-300 rounded"
        >
          Indietro
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
          className="p-2 bg-gray-300 rounded"
        >
          Avanti
        </button>
      </div>
    </div>
  );
}
