import { lighten, parseToRgb } from "polished";
import React from "react";
import { css } from "styled-components";
import { pixelsToRemUnit } from "../../src/utils/sizesCalcs";
//TYPES
import {
  ICustomShadowOptions,
  IKindOfTransition,
  IShadows,
} from "./theme.types";
//Name color identify in: https://www.color-name.com/hex

const spacingDefault = 8;

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
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#00AB55",
  dark: "#007B55",
  darker: "#005249",
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

export const text = {
  primary: "#121828",
  secondary: "#65748B",
  disabled: "rgba(55, 65, 81, 0.48)",
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

export const pallete = {
  colors: {
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
  },
};

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
  electric: "linear-gradient(135deg, #969101, #fffa24, #f7ff85, #fff9d5)",
  psychic: "linear-gradient(135deg, #8a0532, #ec0e63, #f55792, #fcb6d0)",
  ice: "linear-gradient(135deg, #103d43, #1995a1, #66d1e5, #dcfcf7)",
  dragon: "linear-gradient(135deg, #29036a, #8a55fd, #d6b1fe)",
  dark: "linear-gradient(135deg, #2d221c, #5f4632, #916852, #4f4f4f)",
  fairy: "linear-gradient(135deg, #f87ea7, #ffa0c2, #fdd1e0)",
  // $gradient-top: linear-gradient(0deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-right: linear-gradient(90deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-bottom: linear-gradient(180deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-left: linear-gradient(270deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-top-right: linear-gradient(45deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-bottom-right: linear-gradient(135deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-top-left: linear-gradient(225deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-bottom-left: linear-gradient(315deg, #ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-radial: radial-gradient(#ffd6ffff, #e7c6ffff, #c8b6ffff, #b8c0ffff, #bbd0ffff);
  // $gradient-top: linear-gradient(0deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-right: linear-gradient(90deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-bottom: linear-gradient(180deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-left: linear-gradient(270deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-top-right: linear-gradient(45deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-bottom-right: linear-gradient(135deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-top-left: linear-gradient(225deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-bottom-left: linear-gradient(315deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-radial: radial-gradient(#7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff);
  // $gradient-top: linear-gradient(0deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-right: linear-gradient(90deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-bottom: linear-gradient(180deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-left: linear-gradient(270deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-top-right: linear-gradient(45deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-bottom-right: linear-gradient(135deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-top-left: linear-gradient(225deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-bottom-left: linear-gradient(315deg, #cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-radial: radial-gradient(#cad2c5ff, #84a98cff, #52796fff, #354f52ff, #2f3e46ff);
  // $gradient-top: linear-gradient(0deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-right: linear-gradient(90deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-bottom: linear-gradient(180deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-left: linear-gradient(270deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-top-right: linear-gradient(45deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-bottom-right: linear-gradient(135deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-top-left: linear-gradient(225deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-bottom-left: linear-gradient(315deg, #edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
  // $gradient-radial: radial-gradient(#edede9ff, #d6ccc2ff, #f5ebe0ff, #e3d5caff, #d5bdafff);
};

export const typefaceWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const sizes = {
  mobile: "37.5em", //600px
  tablet: "48em", //768px
  laptopSmall: "64em", //1024px
  laptopLarge: "90em", //1440px
  desktop: "120em", //1920px
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
    primary: `0 8px 16px 0 ${lighten(0.24, pallete.colors.primary.main)}`,
    info: `0 8px 16px 0 ${lighten(0.24, pallete.colors.info.main)}`,
    secondary: `0 8px 16px 0 ${lighten(0.24, pallete.colors.secondary.main)}`,
    success: `0 8px 16px 0 ${lighten(0.24, pallete.colors.success.main)}`,
    warning: `0 8px 16px 0 ${lighten(0.24, pallete.colors.warning.main)}`,
    error: `0 8px 16px 0 ${lighten(0.24, pallete.colors.error.main)}`,
  };
};

//***********************************************
// THEME
//***********************************************

export const theme = {
  components: {
    buttons: {},
  },
  pallete: {
    colors: pallete.colors,
    gradients: gradients,
    functions: {
      parseToRgb: (color: string) => {
        const rgb = parseToRgb(color);
        return `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
      },
    },
  },
  typeFaceWeight: typefaceWeight,
  sizes: {
    icons: {
      default: 32,
    },
  },
  medias: {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptopSmall: `(max-width: ${sizes.laptopSmall})`,
    laptopLarge: `(max-width: ${sizes.laptopLarge})`,
    desktop: `(max-width: ${sizes.desktop})`,
  },
  mixins: {
    containerGridDefault: () => css`
      display: grid;
      grid-template-columns:
        [full-start] minmax(6rem, 1fr) [center-start]
        repeat(12, [col-start] minmax(min-content, 12rem) [col-end])
        [center-end]
        minmax(6rem, 1fr)
        [full-end];
    `,
  },
  transitions: (
    kindOfTransition: IKindOfTransition,
    timeInSeconds?: number,
    property?: React.CSSProperties
  ) => {
    const transitionObject = {
      default: `${property || "all"} ${
        timeInSeconds || 0.3
      }s cubic-bezier(1, 0, 0, 1)`,
      easeInOutBack: `${property || "all"} ${
        timeInSeconds || 0.3
      } cubic-bezier(0.68, -0.6, 0.32, 1.6);`,
    };
    return transitionObject[kindOfTransition];
  },
  shadows: {
    default: {
      light: createShadow(pallete.colors.grey[500]),
      dark: createShadow(pallete.colors.common.black),
    },
    custom: {
      light: createCustomShadow(pallete.colors.grey[500]),
      dark: createCustomShadow(pallete.colors.common.black),
    },
  },
  spacing: (
    topOrFull: number,
    rightOrBoth?: number,
    bottom?: number,
    left?: number
  ) =>
    `
    ${pixelsToRemUnit(topOrFull * spacingDefault)} 
    ${!!rightOrBoth ? pixelsToRemUnit(rightOrBoth * spacingDefault) : ""}
    ${!!bottom ? pixelsToRemUnit(bottom * spacingDefault) : ""}
    ${!!left ? pixelsToRemUnit(left * spacingDefault) : ""}
      `,
};
