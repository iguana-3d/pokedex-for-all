import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  border: 1px solid
      ${(props) => props.theme.components.inputs.textField.colors.border};
      transition: ${props => props.theme.transitions("default", 0.15)};

  &:hover {
    /* box-shadow: inset 0 0 0 3px rebeccapurple; */
  }

  .input {
    width: 100%;
    height: 1.6rem;
    border-radius: 0.5rem;
    outline: 0;
    display: block;
    background: none;
    box-sizing: content-box;
    font-size: inherit;
    border: none;
    /* border: 1px solid
      ${(props) => props.theme.components.inputs.textField.colors.border};
      transition: ${props => props.theme.transitions("default", 0.15)}; */
  }

  .input,
  .label {
    padding: 1.6rem 1.4rem;
    font-family: inherit;
  }

  .input:focus {
    outline: none;
        /* box-shadow: inset 0 0 0 3px rebeccapurple; */
  }
/*   
  .input:hover {
box-shadow: inset 0 0 0 3px black;
  } */

  .input:focus + .placeholder-text .text {
    background-color: white;
    font-size: 1.1rem;
    color: black;
    transform: translate(0, -150%);
    border-color: blueviolet;
    color: blueviolet;
  }

  .input:valid ~ .placeholder-text .text {
    /* background-color: white; */
    font-size: 1.1rem;
    color: black;
    transform: translate(0, -150%);
    color: aqua;
  }

  .placeholder-text {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.5rem;
    right: 0;
    border: 3px solid transparent;
    background-color: transparent;
    display: flex;
    align-items: center;
    pointer-events: none;
    z-index: 1;
  }

  .text {
    font-size: 1.4rem;
    padding: 0 0.5rem;
    background-color: transparent;
    color: black;
    transform: translate(0);
    transition: transform 0.15s ease-out, font-size 0.15s ease-out,
      background-color 0.2s ease-out, color 0.15s ease-out;
  }
`;
