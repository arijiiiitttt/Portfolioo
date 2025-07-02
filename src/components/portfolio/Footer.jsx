import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";



export default function Footer() {
  return (
    <footer className="py-1">
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
            href="https://www.youtube.com/@arijiiiitttt"
            target="_blank"
            className="text-white bg-red-600 p-2 rounded-full hover:scale-110 transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/thearijiiiitttt_/"
            target="_blank"
            className="text-white bg-yellow-500 p-2 rounded-full hover:scale-110 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/arijiiiitttt"
            target="_blank"
            className="text-white bg-blue-500 p-2 rounded-full hover:scale-110 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
           <a
            href="https://github.com/arijiiiitttt"
            target="_blank"
            className="text-white bg-black p-2 rounded-full hover:scale-110 transition"
            aria-label="Github"
          >
            <FiGithub  />
          </a>
        </div>

        {/* Footer Links */}
        <div className="space-y-1 text-sm text-pink-500 text-center md:text-right">
          <a href="#" className="block hover:text-pink-800 transition">Terms & Conditions</a>
          <a href="#" className="block hover:text-pink-800 transition">Back to the Top</a>
          <a href="#" className="block hover:text-pink-800 transition">Privacy Policy</a>
          <a href="#" className="block hover:text-pink-800 transition">Refund Policy</a>
          <a href="#contactPg" className="block hover:text-pink-800 transition">Contact Us</a>
          <a href="#aboutPg" className="block hover:text-pink-800 transition">About</a>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="mt-6 text-center text-sm text-gray-900">
        © {new Date().getFullYear()} Made With 💖 by arijiiiitttt
      </p>
    </footer>
  );
}
