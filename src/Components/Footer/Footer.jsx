import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom"; // Make sure this is at the top

const Footer = () => {
  return (
    <footer className="bg-[#1B00CC] text-white px-6 sm:px-6 md:px-12 lg:px-20 py-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-wrap gap-12 lg:gap-24 max-w-[1440px] mx-auto">
        {/* Logo & About */}
        <div className="flex-1 min-w-[250px]">
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752431311/ChatGPT_Image_Jul_13_2025_07_21_56_PM_g0mnbk.png"
            className="rounded-[45px] w-[70px] md:w-[85px] lg:w-[90px]"
            alt="Herpls Logo"
          />
         <p className="mt-4 text-sm md:text-base lg:text-[18px] font-light max-w-[70%] lg:max-w-[480px]">

            Herpls is a modern property discovery platform that empowers anyone
            to list, find, sell, buy and secure real estate opportunities —
            from homes and estates to rooms, lands, and commercial spaces —
            across Nigeria and beyond.
          </p>
          <div className="flex gap-6 mt-5 text-accent text-xl">
            <a href="https://www.facebook.com/ugonna.chidinma.3?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/chidinma-ugonna-8b844a279/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaSquareTwitter />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col mt-4 lg:mt-0 min-w-[180px]">
          <h3 className="font-extrabold text-[20px] md:text-[22px] text-accent tracking-widest">
            Links
          </h3>
          <ul className="mt-3 text-[16px] md:text-[18px] tracking-wide font-bold space-y-3">
  <li>
    <Link to="/" className="hover:border hover:border-accent px-3 py-2 w-fit inline-block">
      Home
    </Link>
  </li>
  <li>
    <Link to="/about" className="hover:border hover:border-accent px-3 py-2 w-fit inline-block">
      About Us
    </Link>
  </li>
  <li>
    <Link to="/chart" className="hover:border hover:border-accent px-3 py-2 w-fit inline-block">
      View Chart
    </Link>
  </li>
  <li>
    <Link to="/agents" className="hover:border hover:border-accent px-3 py-2 w-fit inline-block">
      Agents
    </Link>
  </li>
</ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col mt-4 lg:mt-0 min-w-[220px]">
          <h3 className="font-extrabold text-[20px] md:text-[22px] text-accent tracking-widest">
            Resources
          </h3>
          <ul className="mt-3 text-[16px] md:text-[18px] tracking-wide font-bold space-y-3 cursor-pointer">
            <li className="hover:border hover:border-accent px-3 py-2 w-fit">Teams</li>
            <li className="hover:border hover:border-accent px-3 py-2 w-fit">Gallery</li>
            <li className="hover:border hover:border-accent px-3 py-2 w-fit">Terms & Conditions</li>
            <li className="hover:border hover:border-accent px-3 py-2 w-fit">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-accent mt-10 pt-4">
        <p className="text-accent text-sm">
          © {new Date().getFullYear()} Herpls. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
