"use client";
import { useState } from "react";
import Sidebar from "@/components/navigation/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex w-full m-0 h-screen">
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar />}

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      {/* Sidebar toggle button */}
      {/* <button
        className="fixed bottom-4 right-4 z-10 bg-gray-800 text-white rounded-full p-2"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Hide" : "Show"}
      </button> */}
    </div>
  );
};

export default Layout;
