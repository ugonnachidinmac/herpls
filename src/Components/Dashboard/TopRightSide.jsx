import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHome,
  FaPlusCircle,
  FaEnvelope,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaRegBell,
   FaMoneyBill,
} from "react-icons/fa";
// import { FaRegBell } from "react-icons/fa";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const routeInfo = {
  "/dashboard": { name: "Dashboard", icon: <FaTachometerAlt className="text-xl" /> },
  "/payment": { name: "Payment", icon: < FaMoneyBill className="text-xl" /> },
  "/my-listings": { name: "My Listings", icon: <FaHome className="text-xl" /> },
  "/add-listing": { name: "Add New Listing", icon: <FaPlusCircle className="text-xl" /> },
  "/inquiries": { name: "Inquiries", icon: <FaEnvelope className="text-xl" /> },
  "/profile": { name: "Profile", icon: <FaUser className="text-xl" /> },
  "/settings": { name: "Settings", icon: <FaCog className="text-xl" /> },
};

const TopRightSide = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const currentRoute = routeInfo[location.pathname] || {
    name: "Dashboard",
    icon: <FaTachometerAlt className="text-xl" />,
  };

  return (
    <section className="bg-white w-full rounded-xl shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: Dynamic Heading Based on Route */}
        <div className="flex items-center gap-3 text-primary font-semibold text-lg cursor-pointer hover:text-primaryDark transition">
          {currentRoute.icon}
          <p>{currentRoute.name}</p>
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
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-primaryDark hover:text-white cursor-pointer"
                    onClick={() => navigate("/homePage")}
                  >
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
