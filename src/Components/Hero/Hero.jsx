import React from "react";

const Hero = () => {
  return (
    <section className="pt-[80px] md:pt-[100px] px-6 md:px-12 bg-[#F9FAFB] mb-[30px] text-neutral">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1200px] mx-auto">
        {/* Content */}
        <div className="w-full max-w-[600px]">
          <h2 className="text-[18px] sm:text-[28px] md:text-[38px] lg:text-[45px] font-bold text-[#1B00CC] mb-4 leading-tight">
            Find Your Perfect Space, Anytime, Anywhere
          </h2>
          <p className="text-[18px] mb-3 text-justify">
            Whether you're looking to buy, sale, rent, or lease — Herpls helps you
            discover verified homes, lands, estates, and commercial spaces
            across Nigeria (and soon, beyond).
          </p>
          <p className="text-[18px] mb-3 text-justify">
            Your Dream Property Is Closer Than You Think. Herpls connects you to
            real spaces that match your life, your work, and your future.
          </p>
          <p className="text-[18px] mb-6 text-justify">
            The Smarter Way to Rent, Buy, and List Properties. Join thousands
            using Herpls to find or promote real estate—faster, safer, and with
            zero hassle.
          </p>

          <button className="bg-accent text-neutral font-bold px-6 py-3 rounded-lg hover:bg-primary hover:text-txtWhite transition">
            Explore Listings
          </button>
        </div>

        {/* Image */}
        <div className="w-full max-w-[500px]">
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1752508062/Image_15_cn6p7w.png"
            className="w-full h-auto rounded"
            alt="Hero Visual"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
