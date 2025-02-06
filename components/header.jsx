import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const header = await client.getByUID("header", "header");

  // Assicurati che il documento abbia i dati necessari
  if (!header || !header.data) return null;

  const headerData = header.data.slices.find(
    (slice) => slice.slice_type === "header"
  );

  return (
    <header className="container py-10 flex">
      <Link href="/" passHref>
        <h1 className="text-white text-32 font-bold">
          {headerData.primary.nome_sito}
        </h1>
        <h2 className="text-white text-15 font-normal">
          {headerData.primary.payoff}
        </h2>
      </Link>
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
