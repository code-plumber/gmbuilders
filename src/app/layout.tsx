
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GM Builders",
  description: "Building at affordable prices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}