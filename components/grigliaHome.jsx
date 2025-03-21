import CardHome from "@/components/card/cardHome";

export default function GrigliaHome({ sliceType, titolo, dati, textBold }) {
  // Se 'dati' non è passato o è vuoto, mostra un messaggio di fallback
  if (!dati || dati.length === 0) {
    return <p>Nessun contenuto disponibile</p>;
  }

  return (
    <div>
      <h2 className="text-tertiary text-40 md:text-60 uppercase font-bold mb-4">{titolo}</h2> {/* Titolo fuori dalla griglia */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Griglia solo per i dati */}
        {dati.map((doc, index) => (
          <CardHome
            key={index}
            titolo={doc.titolo}
            genere={doc.genere}
            background={doc.background}
            tipovideo={doc.tipovideo}
            className="w-full h-full aspect-square flex flex-col items-center justify-center"
            slug={doc.slug}
            url={doc.url}
            colore={doc.colore}
            textBold={textBold}
          />
        ))}
      </div>
    </div>
  );
}