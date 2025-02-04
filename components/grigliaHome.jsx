import { createClient } from "@/prismicio";
import CardHome from "@/components/card/cardHome";

export default async function GrigliaHome({ sliceType, titolo }) {
  const client = createClient();

  const response = await client.getByType(sliceType);

  if (!response.results.length) {
    console.log(`Nessun documento trovato per type: ${sliceType}`);
    return <p>Nessun contenuto disponibile</p>;
  }

  // Inverti l'array di risultati prima di renderizzarlo
  const invertedResults = [...response.results].reverse();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <h2 className="text-secondary text-75 font-bold col-span-3">{titolo}</h2>
      {invertedResults.map((doc, index) => (
        <CardHome
          key={index}
          titolo={doc.data.slices[0]?.primary.titolo}
          genere={doc.data.slices[0]?.primary.genere}
          background={doc.data.slices[0].primary.background_image.url}
          tipovideo={doc.data.slices[0].primary.tipovideo}
          className="w-full h-full aspect-square flex flex-col items-center justify-center"
          slug={doc.uid}
        />
      ))}
    </div>
  );
}
