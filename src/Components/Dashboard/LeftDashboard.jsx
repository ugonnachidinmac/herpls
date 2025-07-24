import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHome,
  FaPlusCircle,
  FaEnvelope,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaMoneyBill,
} from "react-icons/fa";
// import { FaMoneyBill } from "react-icons/fa";


const menuItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard", path: "/dashboard" },
  { icon: <FaMoneyBill />, label: "Payment", path: "/payment" },
  { icon: <FaHome />, label: "My Listings", path: "/my-listings" },
  { icon: <FaPlusCircle />, label: "Add New Listing", path: "/add-listing" },
  { icon: <FaEnvelope />, label: "Inquiries", path: "/inquiries" },
  { icon: <FaUser />, label: "Profile", path: "/profile" },
  { icon: <FaCog />, label: "Settings", path: "/settingPage" },
];

const LeftDashboard = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 z-50 
          transform lg:transform-none 
          transition-transform duration-300 ease-in-out ml-[15px] mt-[25px]
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
          bg-backgroundWhite w-[260px] h-full lg:h-screen rounded-none lg:rounded-[12px] 
          p-4 sm:p-6 shadow-md flex flex-col justify-between overflow-hidden`}
      >
        {/* Logo & Menu */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752431311/ChatGPT_Image_Jul_13_2025_07_21_56_PM_g0mnbk.png"
            alt="Logo"
            className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] object-cover rounded-full border-4 border-white"
          />

          <nav className="w-full mt-6 space-y-3 text-[16px] sm:text-[17px] font-medium">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    navigate(item.path);
                    closeSidebar(); // for mobile
                  }}
                  className={`flex items-center gap-4 cursor-pointer px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-neutral-700 hover:bg-primaryDark hover:text-white"
                  }`}
                >
                  <span
                    className={`${
                      isActive ? "text-white" : "text-neutral-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="mt-4 mb-6">
          <button
            className="w-full bg-accent text-white py-2 rounded-md hover:bg-primaryDark transition font-semibold flex items-center justify-center gap-2 text-[16px]"
            onClick={() => navigate("/homePage")}
          >
            <FaSignOutAlt />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};

export default LeftDashboard;
