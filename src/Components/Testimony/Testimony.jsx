import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const testimonies = [
  {
    id: 1,
    name: "Sarah O.",
    role: "Homeowner",
    city: "Enugu",
    country: "Nigeria",
    message:
      "Herpls helped me find the perfect home for my family. It was seamless, secure, and stress-free. Highly recommended!",
  },
  {
    id: 2,
    name: "Emeka D.",
    role: "Landlord",
    city: "Port Harcourt",
    country: "Nigeria",
    message:
      "I listed my property on Herpls and got serious buyers in days. The support team was very responsive too!",
  },
  {
    id: 3,
    name: "Grace A.",
    role: "Real Estate Agent",
    city: "Lagos",
    country: "Nigeria",
    message:
      "Herpls has become my go-to platform to connect with clients. Their platform is smart, simple, and effective.",
  },
];

const Testimony = () => {
  const [openTestimony, setOpenTestimony] = useState(
    testimonies.length > 0 ? testimonies[0].id : null
  );
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    city: "",
    country: "",
    message: "",
  });

  const toggleTestimony = (id) => {
    setOpenTestimony(openTestimony === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Testimony:", formData);
    // Display toast notification
    toast.success("Thank you for your testimony!");
    // Close form and reset
    setShowForm(false);
    setFormData({
      name: "",
      role: "",
      city: "",
      country: "",
      message: "",
    });
  };

  return (
   <>
    <section className="ml-[24px] mr-[24px] mt-[50px] lg:mr-[80px] mb-[20px] lg:ml-[80px] relative">
  
          
      <h3 className="text-[26px] md:text-[34px] font-extrabold text-primary mb-6 text-center">
        What Clients Say
      </h3>

      {testimonies.map((item) => (
        <div
          key={item.id}
          className="bg-softAccent text-neutral pt-[25px] pr-[25px] pb-[5px] pl-[25px] rounded-[10px] mb-[20px] hover:bg-accent"
        >
          <div
            className="flex justify-between items-center cursor-pointer pb-[20px]"
            onClick={() => toggleTestimony(item.id)}
          >
            <div>
              <p className="text-[22px] font-bold">{item.name}</p>
              <p className="text-[16px] font-medium">{item.role}</p>
              <p className="text-[16px] italic text-gray-600">
                {item.city}, {item.country}
              </p>
            </div>
            {openTestimony === item.id ? <FaArrowUp /> : <FaArrowDown />}
          </div>

          {openTestimony === item.id && (
            <div className="border-t border-neutral pt-[20px]">
              <p className="text-[16px] leading-relaxed">{item.message}</p>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-accent text-neutral px-6 py-3 rounded-lg font-bold hover:bg-primaryDark hover:text-background transition"
        >
          Create Testimony
        </button>
        <button className="bg-accent text-neutral px-6 py-3 font-bold hover:bg-primaryDark hover:text-background transition rounded-[32px]">
          See More
        </button>
      </div>

      {/* Testimony Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-xl">
            <h2 className="text-xl font-bold mb-4 text-primary">
              Submit Your Testimony
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Role (e.g., Agent, Landlord)"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded"
                rows="4"
                required
              ></textarea>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-softAccent font-bold text-black px-4 py-2 hover:text-white rounded hover:bg-accent"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primaryDark"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        
        </div>
        
      )}
       
    </section>
     <ToastContainer position="top-center" autoClose={1000} />
   </>
  );
};

export default Testimony;
