import styled from "styled-components";
import { darken, getLuminance } from "polished";

interface ICardTypeProps {
  backgroundColor: {
    gradient: string;
    primary: string;
  };
}

export const Container = styled.div<ICardTypeProps>`
  color: ${(props) =>
    getLuminance(props.backgroundColor.primary) > 0.7
      ? props.theme.pallete.colors.grey[800]
      : props.theme.pallete.colors.grey[100]};
  font-weight: ${(props) => props.theme.typeFaceWeight.medium};
  background-image: ${(props) => props.backgroundColor.gradient};
  border-radius: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(0, 3)};
  box-shadow: ${(props) => props.theme.pallete.shadows.custom.n4};
`;
