import styled, { keyframes }  from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;

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
  }

  .fieldset {
    position: absolute;
    inset: -1rem 0px 0px;
    margin: 0px;
    padding: 0px 2rem;
    pointer-events: none;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
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
    color: red;
  }

  .input:focus ~ .fieldset .legend,
  .input:valid ~ .fieldset .legend {
    width: initial;
  }

  .input:focus ~ .label,
  .input:valid ~ .label{
    font-size: 1.4rem;
    margin-top: 1px;
    color: black;
    transform: translateY(-50%);
  }
`;
