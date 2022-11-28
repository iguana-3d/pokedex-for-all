import styled from "styled-components";
import { lighten } from "polished";
import { cardTypeColor } from "../../../utils/cardTypeColor";

interface IContainerProps {
  isActive: boolean;
}

export const Container = styled.div<IContainerProps>`
  margin-top: ${(props) => props.theme.spacing(3)};
  width: 100%;
  min-height: 10rem;
  box-shadow: ${(props) => props.theme.shadows.custom.light.n8};
  border-radius: 1rem 3rem;
  padding: ${(props) => props.theme.spacing(3)};

  .card-circle-boxes {
    margin-top: ${(props) => props.theme.spacing(3)};
    display: flex;
    align-items: center;
  }

  .card-circle-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 35rem;
    min-width: 25rem;
    gap: 1rem;
  }

  .image-content-circle {
    position: relative;
    width: 15rem;
    height: 15rem;
    border: 5px solid ${props => props.theme.pallete.colors.common.white};
    box-shadow: ${props => props.isActive ? `0 8px 16px 0 ${lighten(0.16, props.theme.pallete.colors.others.types.grass)}`  : props.theme.shadows.custom.light.n8};
    background-color: ${props => props.theme.pallete.colors.common.white};
    border-radius: 50%;
  }

  .image-content-circle::after {
    content: '';
    position: absolute;
    top: -1.5rem;
    right: -1.5rem;
    bottom: -1.5rem;
    left: -1.5rem;
    z-index: -1;
    box-shadow: ${props => props.theme.shadows.custom.light.n8};
    background-image: ${props => props.isActive ? props.theme.pallete.gradients.grass : props.theme.pallete.colors.common.white};
    border-radius: 50%;
  }

  .card-type {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing(1)};
  }

  .card-pokemon-name {
    font-size: 2.4rem;
    font-weight: ${(props) => props.theme.typeFaceWeight.medium};
    margin-top: 1rem;
    text-transform: capitalize;

    span {
      font-size: 2rem;
      font-weight: ${props => props.theme.typeFaceWeight.regular};
    }
  }
`;
