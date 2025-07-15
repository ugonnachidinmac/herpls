import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// Updated static data with city and country
const testimonies = [
  {
    id: 1,
    name: "Sarah O.",
    role: "Homeowner",
    city: "Enugu",
    country: "Nigeria",
    message:
      "Herpls helped me find the perfect home for my family. It was seamless, secure, and stress-free. Highly recommended! Herpls helped me find the perfect home for my family. It was seamless, secure, and stress-free. Highly recommended!",
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

  const toggleTestimony = (id) => {
    setOpenTestimony(openTestimony === id ? null : id);
  };

  return (
    <section className="ml-[24px] mr-[24px] mt-[50px] lg:mr-[80px] mb-[20px] lg:ml-[80px]">
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
      <div className="flex justify-center mt-8">
        <button className="bg-accent text-neutral px-6 py-3 rounded-lg font-bold hover:bg-primaryDark hover:text-background transition">
          Create Testimony
        </button>
      </div>
    </section>
  );
};

export default Testimony;
