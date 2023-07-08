import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState("light");

  const setTheme = (check) => {
    setMode(check);
    if (check === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";
        setTheme(check);
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setTheme(check);
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
