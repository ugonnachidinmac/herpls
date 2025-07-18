import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // ✅ REQUIRED for Tailwind to work
import { BrowserRouter } from "react-router-dom";
import { ListingProvider } from './Components/AddNewListing/ListingContext '

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ListingProvider>
        <App />
      </ListingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
