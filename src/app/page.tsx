import Image from "next/image";

export default function Home() {
  return (   
    <div className="grid grid-flow-row-dense grid-cols-2">
      <div>
      <Image
        src="/background.jpeg"
        alt="Background image"
        width={800}
        height={10}
        className="overflow-hidden"
        />
        </div>
      <div className="text-center">
        <h1>
          Welcome to <strong>GM Builders</strong>
        </h1>
        <h2>Quality Construction, On Time, Every Time</h2>
        <br></br>
        <p>At <strong>GM Builders</strong>, we turn your construction dreams into reality. With years of experience in the industry, we specialize in delivering high-quality building work, from residential homes to commercial spaces. Our team is dedicated to providing exceptional craftsmanship, timely project completion, and unparalleled customer service.</p>
        <br></br>
        <br></br>
        <br></br>
        <h3>Why Choose Us</h3>
        <p>Choosing the right construction company is crucial for the success of your project. Here&apos;s why <strong>GM Builders</strong> stands out:</p>
        <br></br>
            <ul>
          <li><strong>Experienced Team:</strong> Our skilled professionals bring years of experience and expertise.</li>
          <br></br>
          <li><strong>Quality Assurance:</strong> We use top-grade materials and the latest construction techniques.</li>
          <br></br>
          <li><strong>Customer Focused:</strong> We prioritize your needs and strive for your complete satisfaction.</li>
          <br></br>
                <li><strong>Timely Delivery:</strong> We adhere to strict timelines to ensure your project is completed as planned.</li>
            </ul>
      </div>
    </div>
  );
}
