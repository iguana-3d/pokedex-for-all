export type IKindOfTransition = "default" | "easeInOutBack";

// type HexDigit =
//   | "0"
//   | "1"
//   | "2"
//   | "3"
//   | "4"
//   | "5"
//   | "6"
//   | "7"
//   | "8"
//   | "9"
//   | "a"
//   | "b"
//   | "c"
//   | "d"
//   | "e"
//   | "f"
//   | "A"
//   | "B"
//   | "C"
//   | "D"
//   | "E"
//   | "F";
// type HexColor<T extends string> =
//   T extends `#${HexDigit}${HexDigit}${HexDigit}${infer Rest1}`
//     ? Rest1 extends ``
//       ? T // three-digit hex color
//       : Rest1 extends `${HexDigit}${HexDigit}${HexDigit}`
//       ? T // six-digit hex color
//       : never
//     : never;

// function hex<T extends string>(s: HexColor<T>): T {
//   return s;
// }

export type IShadows = [
  "none",
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export interface ICustomShadowOptions {
  n1: string;
  n4: string;
  n8: string;
  n12: string;
  n16: string;
  n20: string;
  n24: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface IColorGrey {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IColorPrimary {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface IColorSecondary {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface IColorInfo {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}
export interface IColorSuccess {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}
export interface IColorWarning {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface IColorError {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface IColorCommon {
  black: string;
  white: string;
}

export interface IColorText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface IColorOthers {
  normal: string;
  fighting: string;
  flying: string;
  poison: string;
  ground: string;
  rock: string;
  bug: string;
  ghost: string;
  steel: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  psychic: string;
  ice: string;
  dragon: string;
  dark: string;
  fairy: string;
}

export interface IGradients {
  normal: string;
  fighting: string;
  flying: string;
  poison: string;
  ground: string;
  rock: string;
  bug: string;
  ghost: string;
  steel: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  psychic: string;
  ice: string;
  dragon: string;
  dark: string;
  fairy: string;
  gradient1: string;
}

export interface IBackGrounds {
  paper: string;
  default: string;
  neutral: string;
}

export interface IActions {
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
}

export interface IPallete {
  colors: {
    common: IColorCommon;
    primary: IColorPrimary;
    secondary: IColorSecondary;
    error: IColorError;
    warning: IColorWarning;
    info: IColorInfo;
    success: IColorSuccess;
    grey: IColorGrey;
    text: IColorText;
    others: {
      types: IColorOthers;
    };
    actions: IActions;
    backgrounds: IBackGrounds;
  };
}
