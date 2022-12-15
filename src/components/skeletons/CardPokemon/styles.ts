import styled, { keyframes } from 'styled-components';

const animateSkeleton = keyframes`
0% {
  transform: translateX(-150%) skewX(-20deg);
}
75% {
  transform: translateX(-140%) skewX(-20deg);
}
100% {
  transform: translateX(250%) skewX(-20deg);
}
`

export const Container = styled.div`
  width: 30rem;
  min-height: 35rem;
  background-color: ${props => props.theme.pallete.colors.grey[300]};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: rgba(255,255,255,0.5);
    transform: skewX(-20deg);
    animation-name: ${animateSkeleton};
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    filter: blur(20px);
  }
`;