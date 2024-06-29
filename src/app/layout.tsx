"use client";
import "./globals.css";
import { useState } from "react";
import { Inter } from "next/font/google";
import { metadata } from "@/context/metadata";
import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import { ThemeContextProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <div className="flex flex-col w-full h-screen m-0">
            {/* Topbar */}
            <Topbar />

            <div className="flex flex-row flex-1">
              {/* Sidebar */}
              <div
                className={`fixed h-full bg-gray-200 dark:bg-gray-900 ${
                  isSidebarExpanded ? "w-40" : "w-14"
                } transition-width duration-300`}
              >
                <Sidebar
                  toggleSidebar={toggleSidebar}
                  isExpanded={isSidebarExpanded}
                />
              </div>

              {/* Main content area */}
              <div
                className={`flex-1 ml-14 ${
                  isSidebarExpanded && "md:ml-40"
                } overflow-y-auto bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white transition-margin duration-300`}
              >
                {children}
              </div>
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
