"use client";
import React, { useEffect, useState } from "react";
import {
  AccountCircle,
  Notifications,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ThemeContextProvider, useThemeContext } from "@/context/ThemeContext";

interface classProps {
  color?: string;
}

// ThemeToggle component
function ThemeToggle({ color }: classProps) {
  const { toggleTheme, mode } = useThemeContext();
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <ThemeContextProvider>
      <IconButton
        color="inherit"
        className={color}
        onClick={() => setDarkMode(!darkMode)}
      >
        {mode === "dark" ? (
          <Brightness7 style={{ fontSize: 40 }} />
        ) : (
          <Brightness4 style={{ fontSize: 40 }} />
        )}
      </IconButton>
    </ThemeContextProvider>
  );
}

export default ThemeToggle;
