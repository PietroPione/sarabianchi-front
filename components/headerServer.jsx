import { createClient } from "@/prismicio";
import HeaderClient from "./headerClient";

export default async function HeaderServer() {
  const client = createClient();
  const header = await client.getByUID("header", "header");

  // Controlla che ci siano i dati necessari
  if (!header || !header.data) return null;

  const headerData = header.data.slices.find(
    (slice) => slice.slice_type === "header"
  );

  // Se non ci sono dati nel menu, restituisci null o gestisci diversamente
  if (!headerData?.primary?.menu) return null;

  return <HeaderClient headerData={headerData} />;
}
