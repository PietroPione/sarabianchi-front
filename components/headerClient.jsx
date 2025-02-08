// components/HeaderClient.jsx
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Importa ToggleMenu dinamicamente in un componente client
const ToggleMenu = dynamic(() => import("./ToggleMenu"), { ssr: false });

export default function HeaderClient({ headerData }) {
  return (
    <header className="container py-10 flex justify-between items-center">
      <Link href="/">
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
