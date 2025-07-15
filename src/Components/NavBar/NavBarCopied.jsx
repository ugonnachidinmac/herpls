import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const redir = useNavigate();

  return (
    <nav className="bg-[#ffff] w-full h-[80px] flex items-center justify-between px-6 md:px-10 fixed z-50">
      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752431311/ChatGPT_Image_Jul_13_2025_07_21_56_PM_g0mnbk.png"
        className="rounded w-[90px]"
        alt="Logo"
      />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaRegWindowClose /> : <IoIosMenu />}
      </button>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 text-black font-extrabold">
        <li>
          <Link
            to="/"
            className="hover:text-[#1B00CC] hover:underline hover:decoration-[#1B00CC] hover:underline-offset-4 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-[#1B00CC] hover:underline hover:decoration-[#1B00CC] hover:underline-offset-4 transition duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="hover:text-[#1B00CC] hover:underline hover:decoration-[#1B00CC] hover:underline-offset-4 transition duration-300"
          >
            View Chart
          </Link>
        </li>
      </ul>

      {/* Desktop Login/Signup Buttons */}
      <div className="hidden md:flex items-center gap-4 group transition duration-300">
        {/* Login */}
        <button className="rounded-[8px] font-bold py-2 px-4 flex items-center justify-center border border-[#1B00CC] text-[#1B00CC] bg-white group-hover:bg-[#1B00CC] group-hover:text-white transition duration-500">
          Login
          <FaArrowRightToBracket className="ml-2 group-hover:text-white" />
        </button>

        {/* Sign Up */}
        <button className="bg-[#1B00CC] text-white rounded-[8px] font-bold py-2 px-4 flex items-center justify-center group-hover:bg-white group-hover:text-[#1B00CC] group-hover:border group-hover:border-[#1B00CC] transition duration-500">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black text-white flex flex-col items-center py-6 md:hidden z-50">
          <Link to="/" className="py-2" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="py-2" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link
            to="/portfolio"
            className="py-2"
            onClick={() => setMenuOpen(false)}
          >
            View Chart
          </Link>

          {/* Mobile Login/Signup */}
          <div className="flex flex-col items-center gap-4 mt-4 group transition duration-300">
            <button className="rounded-[8px] font-bold py-2 px-4 flex items-center justify-center border border-[#1B00CC] text-[#1B00CC] bg-white group-hover:bg-[#1B00CC] group-hover:text-white transition duration-300">
              Login
              <FaArrowRightToBracket className="ml-2 group-hover:text-white" />
            </button>
            <button className="bg-[#1B00CC] text-white rounded-[8px] font-bold py-2 px-4 flex items-center justify-center group-hover:bg-white group-hover:text-[#1B00CC] group-hover:border group-hover:border-[#1B00CC] transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
