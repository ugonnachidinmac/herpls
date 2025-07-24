import React, { useState } from 'react';
import ChatSidebar from '../ChatPage/ChatSidebar';
import { FaComments } from 'react-icons/fa'; // Chat icon

const AboutUs = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section className="pt-[80px] md:pt-[100px] px-6 md:px-12 py-10 text-neutral leading-relaxed"> 
        <h2 className="text-[48px] font-bold mb-1 text-center text-primaryDark">About Us – Herpls</h2>

        <p className="mb-4">
          <span className='text-primaryDark font-bold text-[28px]'>H</span>erpls is a forward-thinking real estate platform designed to make property search, listing, and management seamless for everyone — from everyday individuals to professional real estate agents.
        </p>

        <p className="mb-4 text-justify">
          We are more than just a property listing site. We are a growing real estate ecosystem that supports users through every step of their journey — whether it’s buying a dream home, renting a safe space, or promoting premium listings as a verified agent.
        </p>

        <p className="mb-6">
          Herpls was founded on the belief that everyone deserves access to quality properties and transparent transactions — without stress, scams, or confusion.
        </p>

        <h3 className="text-2xl font-semibold mb-2">🚀 What We Do</h3>
        <ul className="list-disc list-inside mb-6">
          <li>🏘️ Connect buyers, sellers, and renters to verified property listings.</li>
          <li>🛡️ Protect user trust with verified agents and secure listing processes.</li>
          <li>🔍 Simplify searches with smart filters for estate types, locations, and budgets.</li>
          <li>📢 Support agents with tools to manage their listings, gain visibility, and build trust.</li>
          <li>🌍 Expand reach by providing a platform that grows beyond Nigeria, one city at a time.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">🌟 Why Choose Herpls?</h3>
        <ul className="list-disc list-inside mb-6">
          <li>✅ Verified Properties: Every listing goes through quality checks.</li>
          <li>✅ Agent Support: Powerful tools for both new and experienced agents.</li>
          <li>✅ User-Friendly Interface: Browse and list with ease on any device.</li>
          <li>✅ Affordable Plans: Choose between per-property or yearly subscriptions.</li>
          <li>✅ Testimonies that Speak: Hear from our community of satisfied users.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">💡 Our Mission</h3>
        <p className="mb-6">
          To simplify and secure the way people and agents interact with real estate, using technology and trust to improve every experience.
        </p>

        <h3 className="text-2xl font-semibold mb-2">🌍 Our Vision</h3>
        <p className="mb-6">
          To become Africa’s leading real estate solution — a platform where individuals and agents connect safely, listings are always real, and property goals become reality.
        </p>

        <h3 className="text-2xl font-semibold mb-2">🤝 Join the Herpls Community</h3>
        <p className="mb-2">
          Whether you're a homeowner, a first-time renter, an investor, or a real estate agent — Herpls is here for you.
        </p>
        <p>
          Our platform is built to serve your needs, support your decisions, and guide your next move.
        </p>

        <p className="mt-6 font-semibold italic">Herpls — Real Spaces, Real People, Real Possibilities.</p>
      </section>

      {/* Floating chat icon */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-6 right-6 bg-primaryDark text-white p-4 rounded-full shadow-lg hover:bg-deepAccent transition"
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Chat Sidebar */}
      {showChat && <ChatSidebar onClose={() => setShowChat(false)} />}
    </>
  );
};

export default AboutUs;
