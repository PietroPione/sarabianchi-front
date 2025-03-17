import { createClient } from "@/prismicio";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer");

  if (!footer || !footer.data) return null;

  const footerData = footer.data.slices.find(
    (slice) => slice.slice_type === "footer"
  );

  return (
    <footer className="bg-secondary py-10">
      <div className="container space-y-6">
        <div className="text-center flex flex-col">
          <div className="text-primary leading-none md:leading-1 text-60 font-bold">
            {footerData.primary.testo_primario}
          </div>
          <div className="text-primary text-15 font-normal">
            {footerData.primary.testo_secondario}
          </div>
        </div>
        <div className="text-center text-22 md:text-26 font-semibold">
          {footerData.primary.mail}
        </div>
        <div className="flex justify-center gap-x-6">
          {footerData?.primary?.social?.map((item, index) => (
            <div key={index}>
              <div className="font-semibold text-secondary">
                {item.chiave?.text || item.chiave}{" "}
              </div>
              <div>
                {item.logo_social?.url && (
                  <Link
                    href={item.link_social?.url || item.link_social}
                    target="_blank"
                  >
                    <img
                      src={item.logo_social.url}
                      alt={item.logo_social.alt || "Logo"}
                      className="w-12 h-12 hover:transform hover:scale-110 hover:duration-500"
                    />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
