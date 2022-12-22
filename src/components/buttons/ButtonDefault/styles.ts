import styled from "styled-components";
import { pixelsToRemUnit } from "../../../utils/sizesCalcs";

interface IButtonProps {
  isLoading?: boolean;
  buttonSize?: number;
  isFullWidth?: boolean;
}

export const Button = styled.button<IButtonProps>`
  background-color: ${(props) =>
    props.isLoading ? props.theme.pallete.colors.grey[300] : props.theme.components.buttons.buttonDefault.background};
  box-shadow: ${(props) => props.theme.pallete.shadows.custom.n8};
  min-height: 5rem;
  width: ${(props) =>
    props.isFullWidth
      ? "100%"
      : !!props.buttonSize
      ? pixelsToRemUnit(props.buttonSize)
      : "max-content"};
  min-width: min-content;
  padding: 1rem 3rem;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.theme.pallete.colors.grey[500]};
  letter-spacing: 1px;
  transition: ${(props) => props.theme.transitions("default", 0.15)};
  position: relative;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.isLoading ? props.theme.pallete.colors.grey[300] : props.theme.pallete.colors.grey[500]};
    box-shadow: ${(props) => props.theme.pallete.shadows.custom.n20};
  }

  &:hover .text {
    color: ${(props) => props.theme.pallete.colors.common.white};
  }

  .text {
    color: ${(props) => props.theme.pallete.colors.grey[500]};
    font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
    text-transform: uppercase;
    border-radius: 1rem;
    font-size: 2rem;
    display: block;
    transition: ${(props) => props.theme.transitions("default", 0.15)};
    opacity: ${(props) => (props.isLoading ? 0 : 1)};
  }

  .spinner {
    ${(props) => props.theme.mixins.absoluteCenter};
    display: ${(props) => (props.isLoading ? "block" : "none")};
  }
`;
