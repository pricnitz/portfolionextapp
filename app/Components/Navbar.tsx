"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already

const sections = ["home", "about", "experience", "project", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollY >= offsetTop - 80 && scrollY < offsetTop + offsetHeight - 80) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <div className=" transition 0.5s ease-in-out fixed top-0 left-0 right-0 z-50  bg-black/90 md:bg-transparent md:bg-gradient-to-b from-black to-transparent shadow-md">
      <div className="flex items-center justify-between py-5 px-10 md:px-20 lg:px-40">
        <p className="text-2xl font-extrabold bg-gradient-to-tr from-[#33AADD] via-gray-800 to-[#9f55ff] bg-clip-text text-transparent font-serif tracking-wide w-fit max-w-2xl">
          Nitz
        </p>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-10">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => handleClick(section)}
                className={`capitalize transition duration-300 ${
                  activeSection === section
                    ? "text-[#33AADD] font-bold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
        <div className="w-fit max-w-2xl w-100 text-gray-400">
          <a href="tel:8109653732">+91 8109653732</a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden transition-all ease-in-out delay-300  fixed z-99 h-[100vh] w-60 overflow-hidden scroll-none right-0 bg-black/90 text-white px-10 py-4 space-y-4">
          {sections.map((section) => (
            <div key={section}>
              <button
                onClick={() => handleClick(section)}
                className={`capitalize w-full text-left block ${
                  activeSection === section ? "text-[#33AADD] font-bold" : "text-white/70 hover:text-white"
                }`}
              >
                {section}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
