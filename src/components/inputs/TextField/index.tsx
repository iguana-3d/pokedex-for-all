import React from "react";
import { Container } from "./styles";

const TextField: React.FC = () => {
  return (
    <Container>
      <input className="input" autoComplete="off" id="input" required/>
      <label className="placeholder-text" htmlFor="input">
        <div className="text">First Name</div>
      </label>
    </Container>
  );
};

export default TextField;
