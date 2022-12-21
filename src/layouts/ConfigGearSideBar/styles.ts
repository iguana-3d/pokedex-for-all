import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface IConfigGearOpenProps {
  isConfigGearOpen: boolean;
}

export const Container = styled.div<IConfigGearOpenProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: ${props => props.isConfigGearOpen ? 'block' : 'none'};

  .sidebar-content {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 60rem;
    background-color: ${(props) =>
      props.theme.pallete.colors.backgrounds.paper};
    padding: ${(props) => props.theme.spacing(3)};
    z-index: 3000;
  }

  .sidebar-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
  }

  .close-box {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;

    svg {
      cursor: pointer;
    }
  }

  .color-scheme-boxes {
    display: flex;
    gap: ${props => props.theme.spacing(3)};
  }

  .color-scheme-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${props => props.theme.spacing(1)};

    width: 100%;

    justify-content: center;
  }

  .color-scheme-container-image {
    width: 100%;
    border: 2px solid ${props => props.theme.pallete.colors.grey[400]};
    border-radius: ${props => props.theme.spacing(1)};
    padding: ${props => props.theme.spacing(1)};
  }

  .color-scheme-content-image {
    position: relative;
    height: 12rem;
    width: 100%;
    border-radius: ${props => props.theme.spacing(1)};
    overflow: hidden;
  }

  .languages-flags {
    display: flex;
    gap: ${props => props.theme.spacing(3)};
  }

  .language-flag {
    position: relative;
    width: 4rem;
    height: 4rem;
  }

  .social-medias {
    display: flex;
    gap: ${props => props.theme.spacing(1.5)};
    align-items: center;
    position: absolute;
    bottom: 2rem;
    left: 3rem;

    svg {
      transition: ${(props) => props.theme.transitions("default", 0.15)};
      fill: ${props => props.theme.pallete.colors.grey[500]};
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
