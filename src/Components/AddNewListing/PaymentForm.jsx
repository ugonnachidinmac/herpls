import React from "react";
import TopRightSide from "../Dashboard/TopRightSide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PaymentForm = () => {
  return (
    <> 
    <section>
 <TopRightSide />
    <div className="w-full max-w-5xl mx-auto bg-background border-4 border-primaryDarkest p-4 rounded-xl mb-8 shadow-md">
<div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      {/* Caption Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Get unlimited listing uploads for just ₦30,000/year
        </h1>
        <p className="text-gray-600 mt-2">
          No extra fees. Boost your visibility and connect with more property seekers!
        </p>
        <div className="mt-3 inline-block bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-semibold">
          🎉 Enjoy a 7-day free trial – no payment required upfront!
        </div>
      </div>

      {/* Payment Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Payment Action */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primaryDark transition font-semibold text-lg"
        >
          Start Free Trial & Continue to Payment
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-5">
        You can cancel anytime before your trial ends.
      </p>
    </div>

    </div>
<ToastContainer position="top-center" />

    </section>
    </>
  );
};

export default PaymentForm;
