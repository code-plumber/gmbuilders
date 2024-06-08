const Footer = () => {
  return (
    <footer className="bg-white-800 text-black p-4 absolute bottom-0 w-full bg-white shadow dark:bg-gray-900">
      <div className="mb-2  flex justify-end font-medium text-gray-500 dark:text-gray-400">
        <a
          href="https://facebook.com"
          className="px-2 rounded hover:bg-gray-100 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          className="px-2 rounded hover:bg-gray-100 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          className="px-2 rounded hover:bg-gray-100 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <p className="flex justify-center font-medium text-gray-500 sm:mb-0 dark:text-gray-400">&copy; 2024 GM Builders. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
