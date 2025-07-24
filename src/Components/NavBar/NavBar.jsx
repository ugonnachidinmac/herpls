import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

function NavBar({ setShowChat }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const redir = useNavigate();

  // Dynamic button classes
  const loginBtnClass = isLoginHovered
    ? "bg-[#1B00CC] text-white border-[#1B00CC]"
    : "bg-white text-[#1B00CC] border-[#1B00CC]";

  const signupBtnClass = isLoginHovered
    ? "bg-white text-[#1B00CC] border-[#1B00CC]"
    : "bg-[#1B00CC] text-white border-[#1B00CC]";

  return (
    <nav className="bg-white w-full h-[80px] flex items-center justify-between px-6 md:px-10 fixed z-50 shadow">
      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752431311/ChatGPT_Image_Jul_13_2025_07_21_56_PM_g0mnbk.png"
        className="rounded-[45px] w-[90px]"
        alt="Logo"
      />

      {/* Mobile Menu Toggle */}
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
          <button
            onClick={() => setShowChat(true)}
            className="hover:text-[#1B00CC] hover:underline hover:decoration-[#1B00CC] hover:underline-offset-4 transition duration-300"
          >
            View Chat
          </button>
        </li>
        <li>
          <Link
            to="/agent"
            className="hover:text-[#1B00CC] hover:underline hover:decoration-[#1B00CC] hover:underline-offset-4 transition duration-300"
          >
            Agents
          </Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4 transition duration-300">
        <button
          onMouseEnter={() => setIsLoginHovered(true)}
          onMouseLeave={() => setIsLoginHovered(false)}
          className={`rounded-[8px] font-bold py-2 px-4 flex items-center justify-center border transition duration-300 ${loginBtnClass}`}
        >
          <Link to="/Login">Login</Link>

          <FaArrowRightToBracket className="ml-2" />
        </button>

        <button
          className={`rounded-[8px] font-bold py-2 px-4 flex items-center justify-center border transition duration-300 ${signupBtnClass}`}
        >
          <Link to="/SignUp">Sign up</Link>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
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
          <Link
            to="/portfolio"
            className="py-2"
            onClick={() => setMenuOpen(false)}
          >
            Agents
          </Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <button
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
              className={`rounded-[8px] font-bold py-2 px-4 w-[150px] text-center border transition duration-300 ${loginBtnClass}`}
            >
              Login
              <FaArrowRightToBracket className="ml-2 inline" />
            </button>
            <button
              className={`rounded-[8px] font-bold py-2 px-4 w-[150px] text-center border transition duration-300 ${signupBtnClass}`}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
