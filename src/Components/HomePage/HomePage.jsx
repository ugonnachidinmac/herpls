// src/pages/HomePage.jsx
import React, { useState, useRef } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import RecentLists from '../../Components/RecentLists/RecentLists';
import Testimony from '../../Components/Testimony/Testimony';
import SearchAndExplore from '../../Components/SearchAndExplore/SearchAndExplore';
import ChatSidebar from './HomePage';

const HomePage = () => {
  const [showChat, setShowChat] = useState(false);
  const searchInputRef = useRef(null); // 👈 ref to be passed

  const handleExploreClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // 👈 focus on the input
    }
  };

  return (
    <div className="relative">
      <NavBar setShowChat={setShowChat} />

      <div className="pt-[80px] bg-background">
        <Hero onExploreClick={handleExploreClick} />
        <RecentLists />
        <Testimony />
        <SearchAndExplore inputRef={searchInputRef} /> {/* 👈 pass ref */}
      </div>

      {showChat && <ChatSidebar onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default HomePage;
