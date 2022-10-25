import React from "react";
import { Container } from "./styles";
import NavBar from "../NavBar";

interface IProps {
  children?: React.ReactNode;
}

const MainContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
};

export default MainContainer;
