"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "white", padding: 10 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
});

// Componente che crea il PDF
const MyDocument = ({ pdfUrl }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>PDF URL: {pdfUrl}</Text> {/* Qui mostri il pdfUrl */}
        <Text>Hello, this is a PDF document created with React PDF!</Text>
      </View>
    </Page>
  </Document>
);

// Componente PdfViewerSlice che riceve pdfUrl come prop
const PdfViewerSlice = ({ pdfUrl }) => {
  const [isClient, setIsClient] = useState(false);

  // Imposta isClient su true quando il componente è montato nel client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Non renderizzare il PDFDownloadLink sul server
  if (!isClient || !pdfUrl) {
    return null;
  }

  return (
    <div>
      <PDFDownloadLink
        document={<MyDocument pdfUrl={pdfUrl} />} // Passa pdfUrl a MyDocument
        fileName="document.pdf"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default PdfViewerSlice;
