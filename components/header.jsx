// components/Header.jsx
import { createClient } from "@/prismicio";
import Link from "next/link";
import dynamic from "next/dynamic";

// Importiamo ToggleMenu disabilitando il rendering lato server
const ToggleMenu = dynamic(() => import("./ToggleMenu"), { ssr: false });

export default async function Header() {
  const client = createClient();
  const header = await client.getByUID("header", "header");

  // Assicurati che il documento abbia i dati necessari
  if (!header || !header.data) return null;

  const headerData = header.data.slices.find(
    (slice) => slice.slice_type === "header"
  );

  // Verifica se il campo 'menu' è presente e ha dati
  if (!headerData?.primary?.menu) {
    return null; // Se non ci sono dati nel menu, restituisci null o una gestione alternativa
  }

  return (
    <header className="container py-10 flex justify-between items-center">
      <Link href="/" passHref>
        <div className="cursor-pointer">
          <h1 className="text-white text-32 font-bold">
            {headerData.primary.nome_sito}
          </h1>
          <h2 className="text-white text-15 font-normal">
            {headerData.primary.payoff}
          </h2>
        </div>
      </Link>

      <nav className="flex justify-center items-center">
        <ToggleMenu nav={headerData.primary.menu} />
      </nav>
    </header>
  );
}
