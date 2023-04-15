import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { FontsType, ThemeType } from "@/types";

export default function Home() {
  const [font, setFont] = useState<FontsType>("serif");
  const [theme, setTheme] = useState<ThemeType>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  useEffect(() => {
    document.querySelector("html")!.setAttribute("data-theme", theme);
  }, [theme]);

  const fontConfig = {
    serif: "font-serif",
    sans: "font-sans",
    mono: "font-mono",
  };

  return (
    <div className={`max-w-2xl mx-auto ${fontConfig[font]}`}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        font={font}
        setFont={setFont}
      />
    </div>
  );
}
