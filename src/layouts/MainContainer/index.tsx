import React from "react";
import NavBar from "../NavBar";
import FooterLayout from "../FooterLayout";
import ConfigGear from "../ConfigGear";
import { Container } from "./styles";
import ConfigGearSideBar from "../ConfigGearSideBar";
import { GlobalCssVariablesProvider } from "../../contexts/GlobalCssVariablesContext";

interface IProps {
  children?: React.ReactNode;
}

const MainContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <GlobalCssVariablesProvider>
        <NavBar />
        <div className="content">{children}</div>
        <ConfigGear />
        <ConfigGearSideBar />
        <FooterLayout />
      </GlobalCssVariablesProvider>
    </Container>
  );
};

export default MainContainer;
