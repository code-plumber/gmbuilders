import Image from "next/image";


export default function Home() {
  return (
    <>
          <div style={{}}>
              <Image
          src="/background.jpeg"
          alt="Background image"
          width={800}
          height={100}
          quality={100}
        />
    </div>
    </>
  );
}
