import React, { useState, createContext, useEffect, useCallback } from "react";
import {
  ThemeProvider as ThemeProviderStyled,
  DefaultTheme,
} from "styled-components";
import themes from "../../styles/theme";

interface IProps {
  children: React.ReactNode;
}

interface IThemeContext {
  toggleTheme: (mode: IMode) => void;
}

type IMode = "light" | "dark";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.themeLight);

  // const darkMode = () => {
  //   let modifyTheme = themeBase;
  //   modifyTheme.pallete.colors = dark.colors;
  //   modifyTheme.pallete.gradients = dark.gradients;
  //   return modifyTheme;
  // };

  const toggleTheme = (mode: IMode) => {
    setTheme(mode === "light" ? themes.themeLight : themes.themeDark);
    localStorage.setItem("mode", mode);
  };

  const loadTheme = useCallback(() => {
    const savedTheme = localStorage.getItem("mode");
    !!savedTheme && toggleTheme(savedTheme as IMode);
  }, []);

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
