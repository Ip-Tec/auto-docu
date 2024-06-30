// src/components/navigation/Sidebar.tsx
"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Cog8ToothIcon,
  HomeIcon,
  UserIcon,
  PhotoIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  ArrowLeftOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarProps {
  Addclass?: string;
  toggleSidebar: () => void; // Define the prop type for toggleSidebar
  isExpanded: boolean; // Optionally receive the current state of the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({
  Addclass,
  toggleSidebar,
  isExpanded,
}) => {
  const pathname = usePathname();
  const isSidebarOpen = isExpanded;

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev) => !prev);
  // };

  if (!pathname) {
    return null; // or return a loading state
  }

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={`bg-gray-300 text-gray-800 h-screen fixed ${
        isSidebarOpen ? "w-40" : "w-14"
      } flex-shrink-0 dark:bg-gray-950 dark:text-white mt-16 transition-all duration-300`}
    >
      <div className="p-2 flex justify-between items-center">
        <h2 className={`text-lg font-bold mb-4 ${!isSidebarOpen && "hidden"}`}>
          Menu
        </h2>
        <button
          className="text-gray-800 left-0 p-2 dark:text-white hover:bg-gray-700 hover:text-blue-300 rounded-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <ArrowLeftIcon className="h-6 w-6" />
          ) : (
            <ArrowRightIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav>
        <ul>
          <li className="mb-2">
            <Link
              href="/dashboard"
              className={`block p-2 rounded ${
                isActive("/dashboard")
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-blue-300"
              }`}
            >
              <HomeIcon className="h-5 w-5 m-auto inline-block mr-4" />
              {isSidebarOpen && "Dashboard"}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/document"
              className={`block p-2 rounded ${
                isActive("/document")
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-blue-300"
              }`}
            >
              <DocumentTextIcon className="h-5 w-5 inline-block mr-4" />
              {isSidebarOpen && "Document"}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/media"
              className={`block p-2 rounded ${
                isActive("/media")
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-blue-300"
              }`}
            >
              <PhotoIcon className="h-5 w-5 inline-block mr-4" />
              {isSidebarOpen && "Media"}
            </Link>
          </li>
          <li className="mb-2">
            <Link
              title="Templates"
              href="/templates"
              className={`block p-2 rounded ${
                isActive("/templates")
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-blue-300"
              }`}
            >
              <DocumentDuplicateIcon className="h-5 w-5 inline-block mr-4" />
              {isSidebarOpen && "Templates"}
            </Link>
          </li>
          {/* <li className="mb-2">
            <Link
              href="/users"
              className={`block p-2 rounded ${
                isActive("/users")
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-blue-300"
              }`}
            >
              <UserIcon className="h-5 w-5 inline-block mr-4" />
              {isSidebarOpen && "User"}
            </Link>
          </li> */}
          <li className="mb-2">
            <Link
              href="/settings"
              className={`block p-2 rounded ${
                isActive("/settings")
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-700 hover:text-blue-300"
              }`}
            >
              <Cog8ToothIcon className="h-5 w-5 inline-block mr-4" />
              {isSidebarOpen && "Settings"}
            </Link>
          </li>
          <li className="mb-2 w-auto fixed bottom-4">
            <p
              className="block p-2 rounded hover:border bg-orange-900 text-blue-100 hover:bg-transparent hover:border-orange-900 dark:hover:text-blue-300 hover:text-orange-900 hover:scale-110 cursor-pointer
              "
            >
              <ArrowLeftOnRectangleIcon className=" h-5 w-5 inline-block mr-4" />
              {isSidebarOpen && "Logout"}
            </p>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
