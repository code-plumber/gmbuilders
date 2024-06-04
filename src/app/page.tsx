import Image from "next/image";
import Link from "next/link";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import { Black_Han_Sans } from "next/font/google";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full h-screen">
        <Image
          src="/background.jpeg"
          alt="Background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="text-white text-center">
            <h1
              className="text-4xl font-bold"
              style={{ color: "black", paddingLeft: "0" }}
            >
              GM Builders, Building your Needs
            </h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
