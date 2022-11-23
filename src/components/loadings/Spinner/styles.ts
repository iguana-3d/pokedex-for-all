import styled, { keyframes } from "styled-components";
import { pixelsToRemUnit } from '../../../utils/sizesCalcs';

export interface IStyledProps {
  size: number;
  color?: string;
}

const largeSpinner = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(315deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const intoSpinner = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(0.7);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(0.7);
  }
`;

export const Container = styled.div<IStyledProps>`
  position: relative;

  .large-spinner {
    ${(props) => props.theme.mixins.absoluteCenter};
    height: ${props => pixelsToRemUnit(props.size)};
    width: ${props => pixelsToRemUnit(props.size)};
    border: 2px solid;
    border-color: ${props => props.theme.pallete.colors.grey[500] || props.color} transparent ${props => props.theme.pallete.colors.grey[500] || props.color} transparent;
    border-radius: 50%;
    animation: ${largeSpinner} 1.2s ease infinite;
  }
  .into-spinner {
    ${(props) => props.theme.mixins.absoluteCenter};
    height: ${props => pixelsToRemUnit(props.size)};
    width: ${props => pixelsToRemUnit(props.size)};
    border: 3px solid;
    border-color: transparent ${props => props.theme.pallete.colors.grey[500] || props.color} transparent ${props => props.theme.pallete.colors.grey[500] || props.color};
    border-radius: 50%;
    animation: ${intoSpinner} 0.7s linear infinite;
  }
`;
