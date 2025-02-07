import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ScriptLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
