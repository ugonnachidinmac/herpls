// context/ListingContext.jsx
import React, { createContext, useContext, useState } from "react";

const ListingContext = createContext();

export const ListingProvider = ({ children }) => {
  const [listingData, setListingData] = useState(null);

  return (
    <ListingContext.Provider value={{ listingData, setListingData }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListing = () => useContext(ListingContext);
