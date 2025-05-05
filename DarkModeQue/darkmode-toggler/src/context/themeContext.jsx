import { useContext, useEffect, useState } from "react";
import { createContext } from "react";


//The code is prefre to sytem 
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Initialize state with system preference or localStorage theme
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark"; // Use stored theme if available
    return window.matchMedia("(prefers-color-scheme: dark)").matches; // Fall back to system preference
  });
  // Listen for changes in system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Function to handle system preference change
    const handleSystemPreferenceChange = (e) => {
      setDarkMode(e.matches); // Update the theme according to the system preference
    };

    // Set up listener for system theme changes
    mediaQuery.addEventListener("change", handleSystemPreferenceChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleSystemPreferenceChange);
    };
  }, []);

  
  useEffect(() => {
    // Apply dark theme class to <html> based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save to localStorage
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save to localStorage
    }
  }, [darkMode]);


//   // Function to reset theme to system preference
//   const resetToSystemPreference = () => {
//     localStorage.removeItem("theme"); // Remove saved theme
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setDarkMode(systemPrefersDark); // Reset to system preference
//   };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode,  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkMode = () => useContext(ThemeContext);
