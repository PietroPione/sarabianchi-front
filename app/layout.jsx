import { Courier_Prime } from "next/font/google";
import "./globals.css";
import CookiePopup from "@/components/CookiePopup";

// Carica Courier Prime con i pesi desiderati
const CourierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: '/FaviconSara.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={CourierPrime.className}>
        <CookiePopup />
        <main>{children}</main>
      </body>
    </html>
  );
}