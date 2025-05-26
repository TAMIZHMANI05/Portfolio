import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full z-[60] relative bg-black/70 text-white border-t border-fuchsia-400/40 py-6 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Left: Designed and Developed by */}
        <div className="flex-1 flex justify-start">
          <span className="text-sm md:text-base text-gray-300">
            Designed & Developed by TamizhMani
          </span>
        </div>
        {/* Center: Copyright */}
        <div className="flex-1 flex justify-center">
          <span className="text-lg font-semibold tracking-wide">
            <span className="font-normal">Copyright </span>
            &copy; {new Date().getFullYear()} TM
          </span>
        </div>
        {/* Right: Social Icons */}
        <div className="flex-1 flex justify-end gap-4">
          <a
            href="https://github.com/TAMIZHMANI05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/tamizhmani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:tamizhmani13270@gmail.com"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.instagram.com/tm.exe___/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
