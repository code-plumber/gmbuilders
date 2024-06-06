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
        <Link href="/portfolio" className="px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
          Projects
        </Link>
        <Link href="/contact" className="px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
          Contact
        </Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

              </div>
              </div>
      </nav>
  );
}

export default Navbar;
