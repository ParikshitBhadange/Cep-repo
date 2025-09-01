import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaHome,
  FaComments,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/logo.png";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white shadow-md px-6 h-20">
        {/* Left: Logo + Name */}
        {/* Logo + Career Catalyst Name */}
         <div className="flex flex-col sm:flex-row items-center gap-2">
                  {/* Logo Image */}
             <img
            src={Logo} // replace with your actual logo path
             alt="Career Catalyst Logo"
             className="w-10 h-10 sm:w-12 sm:h-12"
          />

            {/* Career Catalyst Text */}
           <span className="text-lg sm:text-xl font-bold text-gray-800">
                Career Catalyst
            </span>
        </div>


        {/* Middle: Search Bar (always visible, adjusts size) */}
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/2 sm:w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-gray-700 text-sm"
          />
        </div>

        {/* Right: Nav Links (Desktop only) */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/HomePage" className="flex items-center hover:text-blue-600">
            <FaHome className="mr-1" /> Home
          </Link>
          <Link to="/communication" className="flex items-center hover:text-blue-600">
            <FaComments className="mr-1" /> Communication
          </Link>
          <Link to="/Connections" className="flex items-center hover:text-blue-600">
            <FaUsers className="mr-1" /> Connections
          </Link>

          {/* Profile Image */}
          <Link to="/profile" className="flex items-center">
            <div className="w-12 h-12 rounded-full border-4 bg-black border-[#282828] shadow-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-white">Pr.</span>
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 p-6 text-gray-700 font-medium">
          <Link
            to= "/Homepage"
            className="flex items-center hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/communication"
            className="flex items-center hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaComments className="mr-2" /> Communication
          </Link>
          <Link
            to="/connection"
            className="flex items-center hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaUsers className="mr-2" /> Connection
          </Link>

          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-full border-4 bg-black border-[#282828] shadow-lg flex items-center justify-center">
              <span className="text-xs font-semibold text-white">Pr.</span>
            </div>
            <span className="ml-2">Profile</span>
          </Link>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Career Catalyst</h1>
        <p className="text-gray-600 mt-2">Your journey starts here...</p>
      </div>
    </div>
  );
};

export default HomePage;
