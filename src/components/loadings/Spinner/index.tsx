import React from "react";
import { Container, IStyledProps } from "./styles";

const Spinner: React.FC<IStyledProps> = ({ size, color }) => {
  return (
    <Container size={size} color={color}>
      &nbsp;
      <div className="large-spinner" />
      <div className="into-spinner" />
    </Container>
  );
};

export default Spinner;
