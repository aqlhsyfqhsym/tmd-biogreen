import type { Metadata } from "next";
import { Jost, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TMD BioGreen",
  description: "TMD BG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} bg-[#F7FFFC] ${kumbhSans.variable} antialiased` } >
        <Navbar />
        <main className="bg-[#fff]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
