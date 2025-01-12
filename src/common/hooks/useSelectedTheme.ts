import { useEffect, useState } from "react";

export const useSelectedTheme = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      setIsDarkModeActive(mediaQuery.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateTheme);
    } else {
      mediaQuery.addListener(updateTheme); // Fallback für ältere Browser
    }

    updateTheme();

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateTheme);
      } else {
        mediaQuery.removeListener(updateTheme); // Fallback
      }
    };
  }, []);

  return { isDarkModeActive };
};
