import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { FontsType, ThemeType } from "@/types";
import MainSection from "@/components/MainSection";
import ThemeProvider from "@/provider/theme";

export default function Home() {
  const [font, setFont] = useState<FontsType>("serif");
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme]);

  const fontConfig = {
    serif: "font-serif",
    sans: "font-sans",
    mono: "font-mono",
  };

  return (
    <ThemeProvider value={theme}>
      <div className={`max-w-2xl mx-auto overflow-hidden ${fontConfig[font]}`}>
        <Navbar toggleTheme={toggleTheme} font={font} setFont={setFont} />
        <MainSection />
      </div>
    </ThemeProvider>
  );
}
