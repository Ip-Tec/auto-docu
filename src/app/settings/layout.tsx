// Setting/layout.tsx
import React from "react";


import { ThemeContextProvider } from "@/context/ThemeContext";
const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <div className="flex items-center justify-center">
        <main className="flex-grow bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white">
          {children}
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default SettingLayout;
