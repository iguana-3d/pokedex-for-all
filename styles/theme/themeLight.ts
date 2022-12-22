import { lighten } from "polished";
import baseTheme from "./baseTheme";
//TYPES
import { ICustomShadowOptions, IShadows } from "./theme.types";
//Name color identify in: https://www.color-name.com/hex

export const grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const primary = {
  lighter: "#e2e6e9",
  light: "#a8b3bd",
  main: "#919EAB",
  dark: "#424d57",
  darker: "#161a1d",
};

const secondary = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};

const info = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const success = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const warning = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const error = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const common = {
  black: "#000000",
  white: "#FFFFFF",
};

const text = {
  primary: "#121828",
  secondary: "#65748B",
  disabled: "rgba(55, 65, 81, 0.48)",
};

const background = {
  paper: grey[100],
  default: grey[100],
  neutral: common.white,
};

export const others = {
  normal: "#aca974",
  fighting: "#800b11",
  flying: "#085764",
  poison: "#611380",
  ground: "#bfac21",
  rock: "#474026",
  bug: "#91ba2e",
  ghost: "#472b53",
  steel: "#454545",
  fire: "#fc0c0b",
  water: "#08517a",
  grass: "#204000",
  electric: "#fffa24",
  psychic: "#8a0532",
  ice: "#1995a1",
  dragon: "#29036a",
  dark: "#2d221c",
  fairy: "#f87ea7",
};

//***********************************************
// SHADOWS
//***********************************************

const createShadow = (color: string): IShadows => {
  const transparent1 = lighten(0.2, color);
  const transparent2 = lighten(0.14, color);
  const transparent3 = lighten(0.12, color);
  return [
    "none",
    `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
    `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
    `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
    `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
    `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
    `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
    `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
    `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
    `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
    `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
    `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
    `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
    `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
    `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
    `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
    `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
    `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
    `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
    `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
    `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
    `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
    `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
    `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
    `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`,
  ];
};

const createCustomShadow = (color: string): ICustomShadowOptions => {
  const transparent = lighten(0.16, color);
  return {
    n1: `0 1px 2px 0 ${transparent}`,
    n4: `0 4px 8px 0 ${transparent}`,
    n8: `0 8px 16px 0 ${transparent}`,
    n12: `0 12px 24px -4px ${transparent}`,
    n16: `0 16px 32px -4px ${transparent}`,
    n20: `0 20px 40px -4px ${transparent}`,
    n24: `0 24px 48px 0 ${transparent}`,
    primary: `0 8px 16px 0 ${lighten(0.24, colors.primary.main)}`,
    info: `0 8px 16px 0 ${lighten(0.24, colors.info.main)}`,
    secondary: `0 8px 16px 0 ${lighten(0.24, colors.secondary.main)}`,
    success: `0 8px 16px 0 ${lighten(0.24, colors.success.main)}`,
    warning: `0 8px 16px 0 ${lighten(0.24, colors.warning.main)}`,
    error: `0 8px 16px 0 ${lighten(0.24, colors.error.main)}`,
  };
};

//***********************************************
// GRADIENTS
//***********************************************

export const gradients = {
  normal: "linear-gradient(135deg, #aca974, #ccc9aa, #eaeade)",
  fighting: "linear-gradient(135deg, #800b11, #e81319, #d36063, #d36063)",
  flying: "linear-gradient(135deg, #085764, #5eb9b2)",
  poison: "linear-gradient(135deg, #611380, #a819d7, #ca72ec)",
  ground: "linear-gradient(135deg, #bfac21, #e1d158, #ede293)",
  rock: "linear-gradient(135deg, #474026, #776a3e, #94834f, #b4a270)",
  bug: "linear-gradient(135deg, #91ba2e, #bddd6e, #d9fe9e)",
  ghost: "linear-gradient(135deg, #472b53, #8e55a4, #bd98cb)",
  steel: "linear-gradient(135deg, #454545, #7b8e8a, #bbc5c4)",
  fire: "linear-gradient(135deg, #fc0c0b, #f67f0b, #f8b80e)",
  water: "linear-gradient(135deg, #08517a, #0a7abc, #36aff6)",
  grass: "linear-gradient(135deg, #204000, #3e9709, #67f70a)",
  electric: "linear-gradient(135deg, #969101, #fffa24, #f7ff85)",
  psychic: "linear-gradient(135deg, #8a0532, #ec0e63, #f55792, #fcb6d0)",
  ice: "linear-gradient(135deg, #103d43, #1995a1, #66d1e5, #dcfcf7)",
  dragon: "linear-gradient(135deg, #29036a, #8a55fd, #d6b1fe)",
  dark: "linear-gradient(135deg, #2d221c, #5f4632, #916852, #4f4f4f)",
  fairy: "linear-gradient(135deg, #f87ea7, #ffa0c2, #fdd1e0)",
  // $gradient-top: linear-gradient(0deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-radial: radial-gradient(#ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  gradient1:
    "linear-gradient(90deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff, #5390d9ff, #5e60ceff, #6930c3ff,  #7400b8ff)",
  // $gradient-top: linear-gradient(0deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-top: linear-gradient(0deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
};

//***********************************************
// COLORS
//***********************************************

const colors = {
  common: common,
  primary: primary,
  secondary: secondary,
  error: error,
  warning: warning,
  info: info,
  success: success,
  grey: grey,
  text: text,
  others: {
    types: others,
  },
  actions: {
    hover: grey[500],
    selected: grey[500],
    disabled: grey[500],
    disabledBackground: grey[500],
    focus: grey[500],
  },
  backgrounds: background,
};

//***********************************************
// THEME
//***********************************************

const theme = {
  components: {
    buttons: {
      buttonDefault: {
        gradientColor: gradients.gradient1,
        background: grey[100]
      },
    },
    inputs: {
      textField: {
        colors: {
          primary: colors.primary.main,
          border: colors.grey[500],
          labelColor: colors.primary.main,
        },
      },
    },
  },
  pallete: {
    colors: colors,
    gradients: gradients,
    shadows: {
      default: createShadow(colors.grey[500]),
      custom: createCustomShadow(colors.grey[500]),
    },
  },
};

const themeLight = { ...baseTheme, ...theme };

export default themeLight;
