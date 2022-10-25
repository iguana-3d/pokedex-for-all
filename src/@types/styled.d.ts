import { theme } from "../../styles/theme";
import "styled-components";

export type ThemeType = typeof theme; // This is the type definition for our theme object.

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
