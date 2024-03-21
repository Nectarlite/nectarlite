import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Needhelp from "@/components/NeedHelp/Needhelp";


export const metadata = {
  title: "Nectarlite Technology",
  description: "Leading Technology to the Future...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-10 xl:mt-0">
          {children}
        </div>
        <Needhelp />
        <Footer />
      </body>
    </html>
  );
}
