import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaRegBell,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const TopRightSide = () => {
  const [showDropdown, setShowDropdown] = useState(false);
   const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <section className="bg-white w-full rounded-xl shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: Dashboard Heading */}
        <div className="flex items-center gap-3 text-primary font-semibold text-lg cursor-pointer hover:text-primaryDark transition">
          <FaTachometerAlt className="text-xl" />
          <p>Dashboard</p>
        </div>

        {/* Right: User and Notification */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center md:justify-end text-neutral-700">
          <p className="font-medium text-sm hover:text-primary cursor-pointer">
            Approved
          </p>

          {/* Notification Bell */}
          <div className="relative cursor-pointer text-xl hover:text-primary transition">
            <FaRegBell />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* User Info with Dropdown */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747612841/User_Icon_i71ihm.png"
                alt="User"
                className="w-8 h-8 rounded-full object-cover border border-primary"
              />
              <p className="font-medium text-sm">Chidinam</p>
              <MdKeyboardDoubleArrowDown className="text-xl text-gray-500" />
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul className="py-1 text-sm text-neutral-700">
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-primaryDark hover:text-white cursor-pointer">
                    <FaCog className="text-sm" />
                    Settings
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-primaryDark hover:text-white cursor-pointer">
                    <FaQuestionCircle className="text-sm" />
                    Help
                  </li>
                  <li className="flex items-center gap-2 px-4 py-2 hover:bg-primaryDark hover:text-white cursor-pointer" onClick={() => navigate("/")}>
                    <FaSignOutAlt className="text-sm" />
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRightSide;
