import "@plugin_css/bootstrap.min.css";
import "@css/style.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--ed-font-family",
});

export const metadata = {
  title: "CodeLab",
  description: "CodeLab App",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
