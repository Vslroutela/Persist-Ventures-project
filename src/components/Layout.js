import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Sidebar from "./Sidebar";
import "./Sidebar.css"; // Import sidebar styles

function Layout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="layout">
      <NavBar toggleSidebar={toggleSidebar} />
      <div className="content">
        {isSidebarVisible && <Sidebar />}
      </div>
      <div className="content">
        {/* Other content can go here */}
      </div>
    </div>
  );
}

export default Layout;
