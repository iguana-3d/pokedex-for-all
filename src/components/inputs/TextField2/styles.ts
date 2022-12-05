import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .fieldset {
    width: 100%;
    height: 1.6rem;
    border-radius: 0.5rem;
    outline: 0;
    display: block;
    background: none;
    box-sizing: content-box;
    font-size: inherit;
    border: 1px solid;
    padding: 0 .8rem;
    font-family: inherit;

    inset: -5px 0px 0px ;
    /* position: absolute;
    top: 0;
    left: 0; */
  }

  .legend {
    /* position: absolute; */
    visibility: hidden;
    width: 0.001%;
  }

  .input:focus ~ .fieldset .legend {
    width: initial;
    background-color: rebeccapurple;
  }

  .legend-span-text {

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
    border: 1px solid;
    padding: 1.6rem 1.4rem;
    font-family: inherit;

    /* position: absolute;
    top: 0;
    left: 0; */
  }
`;
