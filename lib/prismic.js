import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";

// Nome del repository
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

// Token di accesso (se necessario)
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || "";

// Definizione delle rotte (opzionale)
const routes = [
  {
    type: "page",
    path: "/:uid",
  },
];

// Crea il client Prismic
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken,
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
