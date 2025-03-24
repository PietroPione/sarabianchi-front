import { SliceZone } from "@prismicio/react";
import PdfViewerSlice from "@/slices/PdfViewerSlice";

const components = {
  pdf_viewer: PdfViewerSlice,
};

export default function SliceZoneComponent({ slices }) {
  return <SliceZone slices={slices} components={components} />;
}
