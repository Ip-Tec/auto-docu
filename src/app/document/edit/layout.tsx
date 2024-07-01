// edit-docx

// components/Layout.tsx
import React from "react";

import styles from "@/components/Layout.module.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
const DocumentEditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <div className="flex">
        <main className="flex-grow bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-white">
          <div className={styles.toolbar} />
          {children}
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default DocumentEditLayout;
