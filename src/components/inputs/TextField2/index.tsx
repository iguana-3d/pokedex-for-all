import React from "react";
import { Container } from "./styles";

const TextField2: React.FC = () => {
  return (
    <Container>
      <input className="input" />
      <label className="placeholder-text" htmlFor="input">
        <div className="text">First Name</div>
      </label>
      <fieldset className="fieldset">
        <legend className="legend">
          text
        </legend>
      </fieldset>
    </Container>
  );
};

export default TextField2;
