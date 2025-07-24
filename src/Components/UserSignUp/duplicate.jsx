import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LuCircleArrowLeft } from "react-icons/lu";

const carouselImages = [
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752582156/Image_16_yjgau6.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752508062/Image_15_cn6p7w.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752588029/Image_wqhtue.png",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605870/herplsImage2_xc5dcw.jpg",
  "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752605868/herplsImage1_o4jq2s.jpg",
];

const fallbackImage = "/fallback.jpg";

const UserSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    location: "",
    password: "",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, email, location, password } = formData;

    if (!name || !username || !email || !location || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Signup successful! Redirecting to login...", {
      onClose: () => navigate("/userLogin"),
      autoClose: 2000,
    });
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-5xl h-[600px] overflow-hidden">
        {/* Left: Signup Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto">
          {/* <div className="mb-4">
            <LuCircleArrowLeft
              onClick={() => navigate("/")}
              className="text-2xl text-primary hover:text-primaryDark transition cursor-pointer"
            />
          </div> */}

          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Create User Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* <button className="w-full bg-gray-200 text-black py-2 rounded-md">
              Sign Up with Google Account
            </button> */}

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </div>
              <div className="w-1/2">
                <label className="block font-semibold mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Location</label>
              <input
                type="text"
                name="location"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-accent transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/userLogin")}
              className="text-accent cursor-pointer font-semibold"
            >
              Login
            </span>
          </p>

          <ToastContainer />
        </div>

        {/* Right: Carousel Image */}
        <div className="w-full md:w-1/2 bg-white mt-[90px]">
          <img
            src={carouselImages[currentIndex]}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
            alt="Signup visual"
            className="w-full  object-cover transition duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
