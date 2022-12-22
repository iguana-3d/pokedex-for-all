import React from "react"
import { ThemeProvider } from "styled-components";
import themes from "./theme";

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={themes.themeLight}>
  {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator;