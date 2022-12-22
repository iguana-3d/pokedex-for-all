import React from "react"
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/baseTheme";

const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>
  {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator;