import React from "react";
import { Menu, Close } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="hover:text-gray-500 font-semibold">
        Home
      </NavLink>
      <NavLink to="/gallery" className="hover:text-gray-500 font-semibold">
        Gallery
      </NavLink>
      <NavLink to="/services" className="hover:text-gray-500 font-semibold">
        Services
      </NavLink>
    </>
  );
};

const MainAppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="sticky border-white border-opacity-40 border-b-2 top-0 justify-between items-center px-10 z-[10] flex flex-wrap">
        <div className="logo h-16 w-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="..."
            className="w-16"
          />
        </div>

        <div className="hidden justify-between md:flex gap-x-5">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-400 bg-opacity-30 flex flex-col items-center py-4">
            <NavLink to="/" className="hover:text-gray-500 font-semibold py-2">
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className="hover:text-gray-500 font-semibold py-2"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-gray-500 font-semibold py-2"
            >
              Services
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainAppBar;
