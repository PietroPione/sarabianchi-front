import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";

export default async function Header() {
  const client = createClient();
  const header = await client.getByUID("header", "header");

  // Assicurati che il documento abbia i dati necessari
  if (!header || !header.data) return null;

  const headerData = header.data.slices.find(
    (slice) => slice.slice_type === "header"
  );

  return (
    <header className="flex flex-row items-center justify-between">
      <h1 className="text-5xl px-12">{headerData.primary.nome_sito}</h1>
      <h2 className="font-normal">{headerData.primary.payoff}</h2>
      {/* <nav>
        <ul className="flex space-x-4">
          {menu_items.map((item, index) => (
            <li key={index}>
              <a href={item.link.url} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}
