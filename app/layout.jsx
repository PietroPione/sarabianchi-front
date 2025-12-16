import { Courier_Prime } from "next/font/google";
import "./globals.css";
import CookiePopup from "@/components/CookiePopup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarabianchi.it";

// Carica Courier Prime con i pesi desiderati
const CourierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sara Bianchi",
  url: siteUrl,
  jobTitle: "Sceneggiatrice, story editor e script consultant",
  description:
    "Sceneggiatrice di cinema e audiovisivo con base a Torino, specializzata in sviluppo progetti e consulenza narrativa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Torino",
    addressRegion: "Piemonte",
    addressCountry: "IT",
  },
  knowsAbout: [
    "sceneggiatura cinematografica",
    "story editing",
    "script consulting",
    "serialità TV",
    "Torino Film Industry",
  ],
};

export const metadata = {
  icons: {
    icon: '/FaviconSara.png',
  },
  metadataBase: new URL(siteUrl),
  title: "Sara Bianchi | Sceneggiatrice e story editor a Torino",
  description:
    "Portfolio di Sara Bianchi, sceneggiatrice e story editor a Torino. Sceneggiature originali, consulenza narrativa e sviluppo progetti per cinema, serie TV e branded content.",
  keywords: [
    "sceneggiatrice Torino",
    "story editor Torino",
    "script consultant",
    "sceneggiatura film",
    "scrittrice audiovisivo",
    "short film Torino",
    "screenwriter Italy",
    "script doctor",
  ],
  authors: [{ name: "Sara Bianchi", url: siteUrl }],
  creator: "Sara Bianchi",
  publisher: "Sara Bianchi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sara Bianchi",
    title: "Sara Bianchi | Sceneggiatrice e story editor a Torino",
    description:
      "Sceneggiature, consulenza narrativa e sviluppo progetti audiovisivi firmati da Sara Bianchi.",
    images: ["/FaviconSara.png"],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sara Bianchi | Sceneggiatrice e story editor a Torino",
    description:
      "Portfolio e servizi di sceneggiatura e script consulting curati da Sara Bianchi.",
    images: ["/FaviconSara.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={CourierPrime.className}>
        <CookiePopup />
        <main>{children}</main>
      </body>
    </html>
  );
}
