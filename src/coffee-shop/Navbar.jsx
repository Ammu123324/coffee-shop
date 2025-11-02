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
  const [showOrderCard, setShowOrderCard] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleOrderCard = () => setShowOrderCard(prev => !prev);

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-xl sm:text-2xl font-cursive tracking-wider">
            <img src={Logo} alt="Logo" className="w-10 sm:w-12" />
            Coffee Cafe
          </a>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <ul className="flex items-center space-x-4">
              {Menus.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className="text-white/70 hover:text-white text-lg duration-200">
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <div className="relative">
              <button
                onClick={toggleOrderCard}
                className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2"
              >
                Menu Card <FaCoffee />
              </button>

              {showOrderCard && (
                <div className="absolute top-14 right-0 p-4 bg-white text-black shadow-lg rounded-lg w-[400px] md:w-[460px]  h-[480px] z-40">
                  <h3 className="text-2xl font-bold text-center mb-2">Deviga sri Cafe</h3>
                  <hr className="border-amber-700 border-t-4 my-6" />
                  <h2 className="text-xl font-semibold text-center">Coffee</h2>
                  {[
                    ['Espresso', '12.00'],
                    ['Americano', '12.50'],
                    ['Matcha latte', '12.50'],
                    ['cold Brew', '13.50'],
                    ['chocolate', '14.50'],
                    ['Cheesecake', '12.50']
                  ].map(([item, price]) => (
                    <div key={item} className="flex justify-between py-1">
                      <span>{item}</span>
                      <span className="font-semibold">{price}</span>
                    </div>
                  ))}
                  <h2 className="text-xl font-semibold text-center mt-4">Deserts</h2>
                  {[
                    ['Muffins', '11.00'],
                    ['Blue Perry', '12.50'],
                    ['Peach Pie', '12.00']
                  ].map(([item, price]) => (
                    <div key={item} className="flex justify-between py-0">
                      <span>{item}</span>
                      <span className="font-semibold">{price}</span>
                    </div>
                  ))}
                  <hr className="border-amber-700 border-t-4 my-8" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-14 left-0 w-full h-[550px] bg-secondary/95 z-40 p-4">
          <ul className="flex flex-col gap-4 mt-4">
            {Menus.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} onClick={toggleMenu} className="text-white/80 hover:text-white text-lg">
                  {name}
                </a>
              </li>
            ))}

            {/* Order Button in Mobile */}
            <button
              onClick={toggleOrderCard}
              className=" w-[150px] bg-primary/80 px-4 py-2 rounded-full hover:scale-10 duration-200 flex items-center gap-2 mt-1"
            >
              Menu Card <FaCoffee />
            </button>

            {showOrderCard && (
              <div className="mt-2 p-4  bg-white text-black rounded-lg h-[291px] overflow-y-auto">
                <h3 className="text-xl font-bold text-center mb-2">Deviga sri Cafe</h3>
                <hr className="border-amber-700 border-t-4 my-2" />
                <h2 className="text-lg font-semibold text-center">Coffee</h2>
                {[
                  ['Espresso', '12.00'],
                  ['Americano', '12.50'],
                  ['Matcha latte', '12.50'],
                  ['cold Brew', '13.50'],
                  ['chocolate', '14.50'],
                  ['Cheesecake', '12.50']
                ].map(([item, price]) => (
                  <div key={item} className="flex justify-between py-1">
                    <span>{item}</span>
                    <span className="font-semibold">{price}</span>
                  </div>
                ))}
                <h2 className="text-lg font-semibold text-center mt-4">Deserts</h2>
                {[
                  ['Muffins', '11.00'],
                  ['Blue Perry', '12.50'],
                  ['Peach Pie', '12.00']
                ].map(([item, price]) => (
                  <div key={item} className="flex justify-between py-1">
                    <span>{item}</span>
                    <span className="font-semibold">{price}</span>
                  </div>
                ))}
                <hr className="border-amber-700 border-t-4 my-2" />
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
