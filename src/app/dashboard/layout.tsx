// components/Layout.tsx
import React from "react";

import styles from "@/components/Layout.module.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContextProvider>
      <div className={styles.root}>
        <main className="flex-grow ">
          <div className={styles.toolbar} />
          {children}
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default Layout;
