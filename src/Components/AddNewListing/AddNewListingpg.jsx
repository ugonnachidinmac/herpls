
import React, { useState } from "react";
import AddNewListing from './AddNewListing'
import LeftDashboard from '../../Components/Dashboard/LeftDashboard'
import { FaBars } from "react-icons/fa";

const AddNewListingpg = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
      const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
      const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
 <section className="relative flex flex-col lg:flex-row w-full min-h-screen bg-background overflow-x-hidden">
      {/* Mobile Header with Hamburger */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 shadow  sticky top-0 z-50">
        <button onClick={toggleSidebar}>
          <FaBars className="text-xl text-primary" />
        </button>
        {/* <h1 className="text-lg font-semibold text-primary">Dashboard</h1> */}
        <div /> {/* Spacer for symmetry */}
      </div>

      {/* Sidebar */}
      <LeftDashboard isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

            {/* Right Content Area */}
             
                  <div className="flex-1 w-full p-4 lg:p-6">
                              <AddNewListing />
                      </div>
                  
    

    </section>
    </>
  )
}

export default AddNewListingpg