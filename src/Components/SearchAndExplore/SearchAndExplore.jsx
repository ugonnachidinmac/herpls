// SearchAndExplore.jsx
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchAndExplore = ({ inputRef }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
    } else {
      toast.success('Submitted successfully!');
      setSearchTerm('');
    }
  };

  return (
    <section className="bg-background px-4 py-10 md:px-12 lg:px-10">
      <h3 className="text-[24px] md:text-[32px] font-bold text-primary mb-6 text-center">
        Search and Explore
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for estate, location, type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-accent text-neutral font-bold px-6 py-3  rounded-lg hover:bg-primaryDark hover:text-background transition"
        >
          Search
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </section>
  );
};

export default SearchAndExplore;
