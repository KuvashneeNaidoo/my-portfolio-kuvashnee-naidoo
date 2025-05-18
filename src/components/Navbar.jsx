import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.svg";
import HamburgerMenu from "./../assets/icons/hamburger.svg";
import CloseMenu from "./../assets/icons/close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="max-w-screen-xl mx-auto p-12 mb-0">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" />
          </NavLink>
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-12 md:flex uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[rgb(95,180,162)] ${
                isActive ? "text-[rgb(95,180,162)]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `hover:text-[rgb(95,180,162)] ${
                isActive ? "text-[rgb(95,180,162)]" : ""
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-[rgb(95,180,162)] ${
                isActive ? "text-[rgb(95,180,162)]" : ""
              }`
            }
          >
            Contact Me
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          id="menu-btn"
          className={`block md:hidden focus:outline-none ${
            isMenuOpen ? "hidden" : ""
          }`}
          onClick={toggleMenu}
        >
          <img src={HamburgerMenu} alt="Hamburger Menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div
          id="menu"
          className="absolute flex flex-col items-center py-8 mt-10 space-y-8 text-white uppercase bg-[#33323d] w-56 right-13 top-15 drop-shadow-md z-50"
        >
          <NavLink to="/" className="menu-item" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className="menu-item" onClick={toggleMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="menu-item" onClick={toggleMenu}>
            Contact Me
          </NavLink>
        </div>

        {/* Close Button */}
        <button className="absolute right-13 top-15" onClick={toggleMenu}>
          <img src={CloseMenu} alt="Close Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
