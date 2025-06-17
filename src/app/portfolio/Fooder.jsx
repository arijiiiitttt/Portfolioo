import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="./logos/arijit.png"
            alt="Logo"
            className="w-20 h-auto sm:w-20 md:w-22 lg:w-28 xl:w-40 max-w-none" // Responsive image sizing
            style={{ maxWidth: 'none' }} // Override any potential max-width from parent
          />
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-1 text-3xl">
          <a
            href="#"
            className="text-white bg-red-600 p-2 rounded-full hover:scale-110 transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="text-white bg-yellow-500 p-2 rounded-full hover:scale-110 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white bg-blue-500 p-2 rounded-full hover:scale-110 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Footer Links */}
        <div className="space-y-1 text-sm text-pink-500 text-center md:text-right">
          <a href="#" className="block hover:text-white transition">Terms & Conditions</a>
          <a href="#" className="block hover:text-white transition">Privacy Policy</a>
          <a href="#" className="block hover:text-white transition">Refund Policy</a>
          <a href="#contactPg" className="block hover:text-white transition">Contact Us</a>
          <a href="#aboutPg" className="block hover:text-white transition">About</a>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="mt-6 text-center text-sm text-gray-900">
        © {new Date().getFullYear()} Made With 💖 by arijiiiitttt
      </p>
    </footer>
  );
}
