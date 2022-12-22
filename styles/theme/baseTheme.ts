import { lighten, parseToRgb } from "polished";
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
// THEME
//***********************************************

const baseTheme = {
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
  functions: {
    parseToRgb: (color: string) => {
      const rgb = parseToRgb(color);
      return `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
    },
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
    absoluteCenter: () => css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
  },
  transitions: (
    kindOfTransition: IKindOfTransition,
    timeInSeconds?: number,
    propertyCss?: string
  ) => {
    const transitionObject = {
      default: `${propertyCss || "all"} ${
        timeInSeconds || 0.3
      }s cubic-bezier(1, 0, 0, 1)`,
      easeInOutBack: `${propertyCss || "all"} ${
        timeInSeconds || 0.3
      } cubic-bezier(0.68, -0.6, 0.32, 1.6);`,
    };
    return transitionObject[kindOfTransition];
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

export default baseTheme;