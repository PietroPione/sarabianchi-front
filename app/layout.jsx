// import { PrismicPreview } from "@prismicio/next";
// import { repositoryName } from "@/prismicio";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

// Carica Courier Prime con i pesi desiderati
const CourierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={CourierPrime.className}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
