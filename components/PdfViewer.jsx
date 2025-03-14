"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configura il worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

function PdfViewer({ pdfUrl }) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ width: 'auto', display: 'flex', justifyContent: 'center' }}> {/* Contenitore a larghezza piena e centrato */}
            <div style={{ maxWidth: '800px', width: '100%', overflow: 'auto' }}> {/* Contenitore Document con scorrimento */}
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    containerStyle={{ width: '100%' }} // Contenitore Document a larghezza piena
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <div key={`page_${index + 1}`} style={{ width: '100%', margin: '0 auto' }}> {/* Contenitore pagina centrato */}
                            <Page
                                pageNumber={index + 1}
                                style={{ width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }} // Pagina adattabile e centrata
                            />
                        </div>
                    ))}
                </Document>
            </div>
        </div>
    );
}

export default PdfViewer;