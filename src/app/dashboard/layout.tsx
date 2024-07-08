// components/Layout.tsx

import React from "react";
import { ThemeContextProvider } from "@/context/ThemeContext";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <main className="flex-grow ">
          {children}
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default DashboardLayout;
