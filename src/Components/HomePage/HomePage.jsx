import React, { useRef } from 'react';
import Hero from '../Hero/Hero';
import RecentLists from '../RecentLists/RecentLists';
import Testimony from '../Testimony/Testimony';
import SearchAndExplore from '../SearchAndExplore/SearchAndExplore';

const HomePage = () => {
  const searchRef = useRef(null);

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="bg-background">
        <div>
          <Hero onExploreClick={scrollToSearch} />
          <RecentLists />
          <Testimony />
          <div ref={searchRef}>
            <SearchAndExplore />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
