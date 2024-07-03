"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const Navigations = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // if (!user) {
  //   return null; // Or show a loading spinner or placeholder
  // }

  return (
    <>
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
          } overflow-y-auto bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white transition-margin duration-300 pt-24`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <div className="flex flex-col w-full h-screen m-0">
              <Navigations>{children}</Navigations>
            </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
