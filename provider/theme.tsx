import { ThemeType } from "@/types";
import { createContext, ReactNode } from "react";

export const ThemeContext = createContext<null | ThemeType>(null);

interface ThemeProviderProps {
  value: ThemeType;
  children: ReactNode;
}

export default function ThemeProvider({ value, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
