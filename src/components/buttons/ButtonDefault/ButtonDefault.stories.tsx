import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDefault from ".";

export default {
  title: "Buttons",
  component: ButtonDefault,
  // argTypes: {
  //   buttonSize: {
  //     description: 'tes',
  //     type: "number"
  //   }
  // },
  args: {
    buttonText: 'Write your text',
    isLoading: false,
    buttonSize: 10,
    isFullWidth: false,
    loadingSpinnerSize: 25,
    onClick: () => {}
  }
} as ComponentMeta<typeof ButtonDefault>;

export const Primary: ComponentStory<typeof ButtonDefault> = (args) => (
  <ButtonDefault {...args} />
);
