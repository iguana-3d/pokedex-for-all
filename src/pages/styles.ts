import styled from "styled-components";
import { ITypes } from "../services/pokemon.types";

interface ICardTypeProps {
  backgroundColor: {
    gradient: string;
    primary: string;
  };
}

export const Container = styled.div`
  grid-column: center-start/center-end;

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing(3)};
  }
`;

export const Card = styled.div<ICardTypeProps>`
  display: flex;
  flex-direction: column;
  width: 30rem;
  min-height: 25rem;
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: ${(props) => props.theme.spacing(1)};
  background-image: ${(props) => props.backgroundColor.gradient};
  box-shadow: inset 0.5rem 0.5rem 0.5rem
      rgba(${(props) => props.backgroundColor.primary}, 0.05),
    inset -0.5rem -0.5rem 0.5rem
      rgba(${(props) => props.backgroundColor.primary}, 0.5),
    0.5rem 0.5rem 0.5rem rgba(${(props) => props.backgroundColor.primary}, 0.05),
    -0.5rem -0.5rem 0.5rem
      rgba(${(props) => props.backgroundColor.primary}, 0.5);

  .card-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing(1)};
    width: 100%;
    background-color: ${(props) => props.theme.pallete.colors.common.white};
    height: inherit;
    border-radius: inherit;
    box-shadow: 0 1rem 2rem ${(props) => props.backgroundColor.primary};
    padding: ${(props) => props.theme.spacing(2)};
  }

  .card-image-content {
    width: 100%;
    height: 16rem;
    position: relative;
  }

  .card-number {
  }

  .card-pokemon-name {
    font-size: 2.4rem;
    font-weight: ${(props) => props.theme.typeFaceWeight.medium};
  }

  .card-types-box {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing(1)};
  }
`;
// ${props => props.theme.shadows.custom.light.n8}, ${props => props.theme.shadows.custom.light.n12},

export const CardType = styled.div<ICardTypeProps>`
  color: ${(props) => props.theme.pallete.colors.common.white};
  background-image: ${(props) => props.backgroundColor.gradient};
  border-radius: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(0, 3)};
`;
