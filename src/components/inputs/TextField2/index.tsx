import React from "react";
import { Container } from "./styles";

const TextField2: React.FC = () => {
  return (
    <Container>
      <input className="input" autoComplete="off" id="input" required/>
      <label className="label" htmlFor="input">
      text
      </label>
      <fieldset className="fieldset">
        <legend className="legend">
          <span className="span-legend">
          text
          </span>
        </legend>
      </fieldset>
    </Container>
  );
};

export default TextField2;
