import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { link } from "framer-motion/client";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Elektronik", link: "/elektronik" },
  { id: 3, name: "Meubel", link: "/meubel" },
  { id: 4, name: "Karir", link: "/karir" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-50">
      {/* Upper Navbar */}
      <div className="bg-amber-300 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
          >
            <img src={Logo} alt="Logo" className="w-40" />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <DarkMode />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-2xl z-[9999]"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center bg-white dark:bg-gray-900">
        <ul className="flex items-center gap-6">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="inline-block px-4 py-2 hover:text-primary duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-300`}
      >
        <ul className="flex flex-col items-center py-4 gap-4 text-lg">
          {Menu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-primary duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
