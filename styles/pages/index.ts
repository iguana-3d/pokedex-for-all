import styled from "styled-components";
import { ITypes } from "../../src/services/pokemon.types";
import { lighten } from "polished";

interface ICardTypeProps {
  backgroundColor: {
    gradient: string;
    primary: string;
  };
}

export const Container = styled.div`
  grid-column: center-start/center-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};

  .cards-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing(3)};
  }

  .cards-loading-more {
    display: flex;
    justify-content: center;
    margin: ${(props) => props.theme.spacing(5, 0)};
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
  /* box-shadow: inset 0.5rem 0.5rem 0.5rem
      rgba(${(props) => props.theme.functions.parseToRgb(props.backgroundColor.primary)}, 0.05),
    inset -0.5rem -0.5rem 0.5rem
      rgba(${(props) => (props) => props.theme.functions.parseToRgb(props.backgroundColor.primary)}, 0.5),
    0.5rem 0.5rem 0.5rem rgba(${(props) => (props) => props.theme.functions.parseToRgb(props.backgroundColor.primary)}, 0.05),
    -0.5rem -0.5rem 0.5rem
      rgba(${(props) => (props) => props.theme.functions.parseToRgb(props.backgroundColor.primary)}, 0.5); */
  transition: ${(props) => props.theme.transitions("default", 0.15)};
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px 0
      ${(props) => lighten(0.16, props.backgroundColor.primary)};
  }

  img {
    transition: ${(props) => props.theme.transitions("default", 0.15)};
  }

  &:hover img {
    filter: saturate(1.25);
  }

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
    text-transform: capitalize;
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
