import CardHome from "@/components/card/cardHome";

export default function GrigliaHome({ sliceType, titolo, dati }) {
  // Se 'dati' non è passato o è vuoto, mostra un messaggio di fallback
  if (!dati || dati.length === 0) {
    return <p>Nessun contenuto disponibile</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <h2 className="text-secondary text-75 font-bold col-span-3">{titolo}</h2>
      {dati.map((doc, index) => (
        <CardHome
          key={index}
          titolo={doc.titolo}
          genere={doc.genere}
          background={doc.background}
          tipovideo={doc.tipovideo}
          className="w-full h-full aspect-square flex flex-col items-center justify-center"
          slug={doc.slug}
        />
      ))}
    </div>
  );
}
