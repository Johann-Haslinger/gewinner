import { useEffect } from "react";

export const useThemeColorSwitcher = () => {
  useEffect(() => {
    const handleThemeChange = () => {
      const themeColorMeta = document.querySelector("meta[name='theme-color']");
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (themeColorMeta) {
        themeColorMeta.setAttribute("content", isDarkMode ? "#000000" : "#FFFFFF");
      }
    };

    // Set the initial theme color
    handleThemeChange();

    // Listen for changes to the system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);
};
