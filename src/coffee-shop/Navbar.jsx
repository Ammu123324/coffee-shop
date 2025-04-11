import React, { useState } from 'react';
import Logo from '../assets/img2.jpg';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';

const Menus = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Services', link: '/#Services' },
  { id: 3, name: 'About', link: '/#about' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white fixed top-0 left-0 w-full z-50">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex items-center tracking-wider font-cursive">
              <img src={Logo} alt="Logo" className="w-14" />
              Coffee Cafe
            </a>
          </div>

          {/* Toggle Button (Mobile only) */}
          <div className="sm:hidden">
            <button className="text-2xl" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>

          {/* Nav content (Desktop) */}
          <div className="hidden sm:flex items-center justify-between gap-6 ml-auto">
            <ul className="flex items-center gap-6">
              {Menus.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block text-xl py-2 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-screen bg-secondary/95 z-50 px-6 py-4 flex flex-col items-start">
          {/* Close button aligned right */}
          <div className="w-full flex justify-end">
            <button className="text-3xl text-white" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="mt-6 flex flex-col gap-6 text-left w-full">
            {Menus.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  onClick={toggleMenu}
                  className="block text-xl text-white/80 hover:text-white duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            <button className="mt-4 bg-primary/80 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2">
              Order
              <FaCoffee />
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
