import { CgClose } from "react-icons/cg"; 
import { BiMenu } from "react-icons/bi"; 
import React from 'react'
import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Development", href: "#development" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="logo text-xl font-bold text-blue-600">ClayDev</div>
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <BiMenu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 ">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation - Fixed overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
        <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>
        <nav 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-700 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full"
              aria-label="Close menu"
            >
              <CgClose className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile menu items */}
          <div className="px-4 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-gray-700 hover:text-blue-600 text-lg py-3 border-b border-gray-100 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar 