import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 flex justify-between items-center">
      <div className="flex items-center">
      <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Link>
          
      </div>
      <div>
      <div className="flex space-x-4">
        <Link href="/services" className="px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
          Services
        </Link>
        <Link href="/about" className="px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
          About Us
        </Link>
        <Link href="/contact" className="px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
          Contact
        </Link>
              </div>
              </div>
      </nav>
  );
}

export default Navbar;
