import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-2 font-bold text-xl">GM Builder</span>
      </div>
      <div>
      <div className="flex space-x-4">
        <Link href="/services" className="px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
          Services
        </Link>
        <Link href="/about" className="px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
          About Us
        </Link>
        <Link href="/contact" className="px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
          Contact
        </Link>
              </div>
              </div>
      </nav>
  );
}

export default Navbar;
