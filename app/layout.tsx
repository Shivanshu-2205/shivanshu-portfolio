import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"] });
const dmMono = DM_Mono({ subsets: ["latin"], variable: "--font-dm-mono", weight: ["300","400","500"] });
const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument", weight: "400", style: ["normal","italic"] });

export const metadata: Metadata = {
  title: "Shivanshu Maurya ",
  description: "Architecture-First Machine Learning Engineer building production-grade intelligent systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${inter.variable} ${dmMono.variable} ${instrument.variable} font-mono`}>
        {children}
      </body>
    </html>
  );
}
