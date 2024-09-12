import { Poppins, Tenor_Sans } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-poppins',
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-tenor-sans',
});

export const metadata = {
  title: "Portfolio Magda Rzepa",
  description: "Portfolio Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl-PL">
      <body className={`${poppins.variable} ${tenorSans.variable}`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
