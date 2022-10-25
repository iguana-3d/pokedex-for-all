import React from "react";
import { Container } from "./styles";
import NavBar from "../NavBar";
import FooterLayout from "../FooterLayout";

interface IProps {
  children?: React.ReactNode;
}

const MainContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <div className="content">{children}</div>
      <FooterLayout />
    </Container>
  );
};

export default MainContainer;
