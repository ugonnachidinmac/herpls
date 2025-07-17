import React from "react";
import {
  FaTachometerAlt,
  FaHome,
  FaPlusCircle,
  FaEnvelope,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const LeftDashboard = () => {
  return (
    <section className="bg-backgroundWhite w-[280px] h-screen p-6 shadow-md flex flex-col justify-between">
      {/* Top: Logo and Menu */}
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752431311/ChatGPT_Image_Jul_13_2025_07_21_56_PM_g0mnbk.png"
          alt="Logo"
          className="w-[90px] h-[90px] object-cover rounded-full border-4 border-white"
        />

        <nav className="w-full mt-6 space-y-4 text-primary text-base font-medium">
          <div className="flex items-center gap-3 cursor-pointer hover:text-primaryDark transition">
            <FaTachometerAlt /> <p>Dashboard</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-primaryDark transition">
            <FaHome /> <p>My Listings</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-primaryDark transition">
            <FaPlusCircle /> <p>Add New Listing</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-primaryDark transition">
            <FaEnvelope /> <p>Inquiries</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-primaryDark transition">
            <FaUser /> <p>Profile</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-primaryDark transition">
            <FaCog /> <p>Settings</p>
          </div>
        </nav>
      </div>

      {/* Bottom: Log Out */}
      <div className="mt-8">
        <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primaryDark transition font-semibold flex items-center justify-center gap-2">
          <FaSignOutAlt />
          Log Out
        </button>
      </div>
    </section>
  );
};

export default LeftDashboard;
