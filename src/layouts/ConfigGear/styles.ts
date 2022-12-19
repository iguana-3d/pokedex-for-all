import styled, { keyframes } from "styled-components";

const GearRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulsate = keyframes`
100% {
  scale: 2;
  opacity: 0;
}
`;

export const Container = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.pallete.colors.grey[500]};
  background-color: ${(props) => props.theme.pallete.colors.grey[300]};
  animation-name: ${GearRotate};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.pallete.colors.grey[300]};
    opacity: 0.7;
    z-index: -1;
  }

  &::before {
    animation-name: ${pulsate};
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  &::after {
    animation-name: ${pulsate};
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }

  svg {
    fill: ${(props) => props.theme.pallete.colors.grey[500]};
  }
`;
