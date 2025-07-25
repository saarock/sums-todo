import { useEffect, useState } from "react";

/**
 * Custom hook to manage dark/light mode based on localStorage.
 * It checks the saved theme on initial mount and updates the document class accordingly.
 */
const useMode = () => {
  // State to track whether dark mode is active
  const [isDark, setIsDark] = useState(false);

  // On component mount, check if the theme is set to dark in localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    
    if (theme === "dark") {
      // Add 'dark' class to the root HTML element to apply dark theme globally
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Return the current theme state and a setter to allow theme toggling
  return {
    isDark,
    setIsDark,
  };
};

export default useMode;
