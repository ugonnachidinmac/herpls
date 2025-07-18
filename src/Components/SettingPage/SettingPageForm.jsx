import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopRightSide from '../Dashboard/TopRightSide'

const SettingPageForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    otherName: "",
    surname: "",
    email: "",
    phone: "",
    homeAddress: "",
    city: "",
    state: "",
    country: "",
    companyName: "",
    officeAddress: "",
    businessCity: "",
    businessState: "",
    businessCountry: "",
    website: "",
    idNumber: "",
  });

  const [profilePhoto, setProfilePhoto] = useState(null);
  const [idDocument, setIdDocument] = useState(null);
  const navigate = useNavigate();

  const inputStyle = "w-full border-2 rounded px-3 py-2";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleIDChange = (e) => {
    const file = e.target.files[0];
    setIdDocument(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    for (const key in formData) {
      if (!formData[key]) {
        toast.error(`Please fill in your ${key.replace(/([A-Z])/g, " $1")}`);
        return;
      }
    }

    if (!profilePhoto) {
      toast.error("Please upload a profile photo");
      return;
    }

    if (!idDocument) {
      toast.error("Please upload a valid ID document");
      return;
    }

    // Success
    toast.success("Form submitted successfully!");

    console.log("Submitted:", { ...formData, profilePhoto, idDocument });

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
        <section>
 <TopRightSide />
     <div className="w-full max-w-5xl mx-auto bg-background border-4 border-primaryDarkest p-4 rounded-xl mb-8 shadow-md">
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-10">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-primary text-center">Agent Settings</h1>

      {/* Personal Info */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Personal Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["firstName", "First Name"],
            ["otherName", "Other Name"],
            ["surname", "Surname"],
            ["email", "Email Address"],
            ["phone", "Phone Number"],
            ["homeAddress", "Home Address"],
            ["city", "City"],
            ["state", "State"],
            ["country", "Country"],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Business Info */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Business Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            ["companyName", "Company Name"],
            ["officeAddress", "Office Address"],
            ["businessCity", "City"],
            ["businessState", "State"],
            ["businessCountry", "Country"],
            ["website", "Website URL"],
            ["idNumber", "ID Number"],
          ].map(([name, label]) => (
            <div key={name}>
              <label className="block mb-1 text-sm font-medium">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={inputStyle}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Profile Media */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Profile Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Upload Profile Photo <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              {profilePhoto && (
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border"
                />
              )}
              <input type="file" accept="image/*" onChange={handleProfileChange} />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Upload ID (National ID, Driver’s License, or International Passport){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              {idDocument && (
                <img
                  src={URL.createObjectURL(idDocument)}
                  alt="ID Preview"
                  className="w-24 h-24 object-cover border"
                />
              )}
              <input type="file" accept="image/*" onChange={handleIDChange} />
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-[100px] mt-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="border-2 border-primary bg-white text-primary py-2 px-6 rounded-md hover:text-primaryDark transition font-semibold"
        >
          Back to Dashboard
        </button>

        <button
          onClick={handleSubmit}
          className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primaryDark transition font-semibold"
        >
          Submit for Verification
        </button>
      </div>
    </div>
    </div>
    </section>
  );
};

export default SettingPageForm;
