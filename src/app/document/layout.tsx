// components/Layout.tsx
import React from "react";

import styles from "@/components/Layout.module.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <div className={styles.root}>
        <main className="flex-grow bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white">
          <div className={styles.toolbar} />
          {children}
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default Layout;
