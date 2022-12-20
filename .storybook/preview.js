import { addDecorator } from "@storybook/react";
import ThemeDecorator from "../styles/ThemeDecorator";
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light
  }
};

addDecorator(ThemeDecorator);