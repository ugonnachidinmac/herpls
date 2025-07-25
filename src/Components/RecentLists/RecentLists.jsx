import React from "react";
import TheList from './TheList'

const RecentLists = () => {
  return (
    <section className="pt-[10px] md:pt-[20px] px-6 sm:px-8 md:px-12 bg-background mb-[30px] text-neutral">
      <div className="max-w-[1200px] mx-auto mb-[20px]">
        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] text-center font-bold text-headers mb-4">
          Recently Added Listings
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          <p className="text-[12px] sm:text-[12px] md:text-[14px] md:text-left leading-relaxed md:max-w-[70%]">
            Discover the latest properties added by trusted agents — fresh
            opportunities updated in real-time. From newly listed homes and
            rentals to commercial spaces and lands, explore what's new and act
            fast before they’re gone.
          </p>

          <div className="md:self-start">
            <button className="bg-buttons text-neutral font-bold px-6 py-3 rounded-lg hover:bg-headers hover:text-txtWhite transition w-full md:w-auto">
              View All
            </button>
          </div>
        </div>
      </div>

      <TheList />
    </section>
  );
};

export default RecentLists;
