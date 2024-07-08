"use client";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/context/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id={`${inter.className} `}>
        <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center min-h-screen h-full">
          
          {children}
        </div>
      </body>
    </html>
  );
}
