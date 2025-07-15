import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#1B00CC] mx-11 px-10 mb-6 text-white">
      <div className="flex flex-col lg:flex-row gap-24 pt-10 w-full">
        {/* Logo & About */}
        <div className="flex-1">
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752431311/ChatGPT_Image_Jul_13_2025_07_21_56_PM_g0mnbk.png"
            className="rounded-[45px] w-[90px]"
            alt="Herpls Logo"
          />
          <p className="mt-3 text-[18px] font-light max-w-md">
            Herpls is a modern property discovery platform that empowers anyone
            to list, find, sell, buy and secure real estate opportunities —
            from homes and estates to rooms, lands, and commercial spaces —
            across Nigeria and beyond.
          </p>
          <div className="flex gap-6 mt-5 text-accent text-xl">
            <a
              href="https://www.facebook.com/ugonna.chidinma.3?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/chidinma-ugonna-8b844a279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareTwitter />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col mt-6 w-[200px]">
          <h3 className="font-extrabold text-[22px] text-accent tracking-widest">
            Links
          </h3>
          <ul className="mt-3 text-[18px] tracking-widest font-bold  cursor-pointer">
            <li className="mb-[px] hover:border hover:border-accent w-[90px] px-[10px] py-[10px]">Home</li>
            <li className="mb-[px] hover:border hover:border-accent w-[120px] px-[10px] py-[10px]">About Us</li>
            <li className="mb-[px] hover:border hover:border-accent w-[150px] px-[10px] py-[10px]">View Chart</li>
            <li className="mb-[px] hover:border hover:border-accent w-[90px] px-[10px] py-[10px]">Agents</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col mt-6 w-[250px]">
          <h3 className="font-extrabold text-[22px] text-accent tracking-widest">
            Resources
          </h3>
          <ul className="mt-3 text-[18px] tracking-widest font-bold  cursor-pointer">
            <li className="mb-[px] hover:border hover:border-accent w-[90px] px-[10px] py-[10px]">Teams</li>
            <li className="mb-[px] hover:border hover:border-accent w-[90px] px-[10px] py-[10px]">Gallery</li>
            <li className="mb-[px] hover:border hover:border-accent w-[250px] px-[10px] py-[10px]">Terms and Conditions</li>
            <li className="mb-[px] hover:border hover:border-accent w-[180px] px-[10px] py-[10px]">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center w-full border-t border-accent pt-3 pb-4 mt-6">
        <p className="text-accent text-sm">
          © {new Date().getFullYear()} Herpls. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
