import styled, { css } from "styled-components";

interface IContainerProps {
  label?: string;
  iconRight: boolean;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  width: 100%;

  .input {
    width: 100%;
    height: 2rem;
    border-radius: 0.5rem;
    outline: 0;
    display: block;
    background: none;
    box-sizing: content-box;
    font-size: inherit;
    border: none;
    padding: 1.6rem 2rem;
    font-family: inherit;
    ${(props) =>
      props.iconRight &&
      css`
        padding-right: 6rem;
      `}
  }

  .fieldset {
    position: absolute;
    inset: -1rem 0px 0px;
    margin: 0px;
    padding: 0px 2rem;
    pointer-events: none;
    border-radius: inherit;
    border: 1px solid ${(props) => props.theme.pallete.colors[props.color].main};
    overflow: hidden;
    min-width: 0%;
    width: 100%;
    border-radius: 0.5rem;
  }

  .legend {
    visibility: hidden;
    width: 0.001%;
    font-size: 1.4rem;
    margin-left: -0.5rem;
  }

  .span-legend {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: inline-block;
    opacity: 0;
    visibility: visible;
    font-size: 1.4rem;
  }

  .label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1.4rem;
    right: 0;
    border: 0 solid transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    pointer-events: none;
    transition: all 0.15s ease;
    font-size: inherit;
    padding: 0;
    padding-left: 0.8rem;
    color: ${(props) => props.theme.pallete.colors[props.color].main};
  }

  .icon-box {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      stroke: ${(props) => props.theme.pallete.colors[props.color].main};
    }
  }

  ${(props) =>
    props.label &&
    css`
      .input:focus ~ .fieldset .legend,
      .input:valid ~ .fieldset .legend {
        width: initial;
      }
    `}

  .input:focus ~ .label,
  .input:valid ~ .label {
    font-size: 1.4rem;
    margin-top: 1px;
    color: ${(props) => props.theme.pallete.colors[props.color].main};
    transform: translateY(-50%);
  }

  .input:hover ~ .fieldset,
  .input:focus ~ .fieldset {
    border-width: 2px;
  }

  .input:focus ~ .fieldset {
    border-color: ${(props) => props.theme.pallete.colors[props.color].dark};
  }

  .input:focus ~ .label {
    color: ${(props) => props.theme.pallete.colors[props.color].dark};
  }

  .input:focus ~ .icon-box svg {
    stroke: ${(props) => props.theme.pallete.colors[props.color].dark};
    stroke-width: 3;
  }

  .input:hover ~ .icon-box svg {
    stroke-width: 3;
  }
`;
