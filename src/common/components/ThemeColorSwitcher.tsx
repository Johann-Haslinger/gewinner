import { useState, useEffect } from "react";

const ThemeColorSwitcher = () => {
  const [themeColor, setThemeColor] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "#000000" : "#FFFFFF"
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateThemeColor = () => {
      setThemeColor(mediaQuery.matches ? "#000000" : "#FFFFFF");
    };

    mediaQuery.addEventListener("change", updateThemeColor);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", updateThemeColor);
    };
  }, []);

  return <meta name="theme-color" content={themeColor} />;
};

export default ThemeColorSwitcher;
