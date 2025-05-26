import { useState, useEffect } from "react";
import {
  FaHome,
  FaFolderOpen,
  FaFileAlt,
  FaCogs,
  FaTrophy,
  FaEnvelope,
} from "react-icons/fa";


export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "#home",
      icon: <FaHome className="mr-2" />,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <FaFolderOpen className="mr-2" />,
    },
    {
      name: "Resume",
      href: "#resume",
      icon: <FaFileAlt className="mr-2" />,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: <FaCogs className="mr-2" />,
    },
    {
      name: "Achievements",
      href: "#achievements",
      icon: <FaTrophy className="mr-2" />,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <FaEnvelope className="mr-2" />,
    },
  ];

  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (name) => setActive(name);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/40 h-15 backdrop-blur-lg border-b border-fuchsia-400/40 shadow-lg"
            : "bg-transparent h-16 border-b border-fuchsia-400/40 shadow-none"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <span className="text-fuchsia-400 font-bold text-2xl tracking-widest">
          TM
        </span>
        <ul className="flex gap-4 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`relative px-3 py-1 font-medium transition-colors duration-200 flex items-center
                  ${
                    active === link.name
                      ? "text-gray-300 hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-fuchsia-400 after:rounded-full after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 border-fuchsia-400"
                      : "text-gray-300 hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.5)] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-fuchsia-400 after:rounded-full after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                  }`}
              >
                <span className="flex items-center">
                  {link.icon}
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}