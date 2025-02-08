import HeaderServer from "@/components/headerServer";
import Footer from "@/components/footer";

export default function ScriptLayout({ children }) {
  return (
    <div>
      <HeaderServer />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
