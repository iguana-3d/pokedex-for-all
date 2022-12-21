import React, { Dispatch, SetStateAction } from "react";
import NavBar from "../NavBar";
import FooterLayout from "../FooterLayout";
import ConfigGear from "../ConfigGear";
import { Container } from "./styles";
import ConfigGearSideBar from "../ConfigGearSideBar";

interface IProps {
  children?: React.ReactNode;
  isHideOverflowOnModal: boolean;
  setIsHideOverflowOnModal: Dispatch<SetStateAction<boolean>>;
}

const MainContainer: React.FC<IProps> = ({
  children,
  isHideOverflowOnModal,
  setIsHideOverflowOnModal,
}) => {
  return (
    <Container>
      <NavBar />
      <div className="content">{children}</div>
      <ConfigGear setIsHideOverflowOnModal={setIsHideOverflowOnModal} />
      <ConfigGearSideBar
        isHideOverflowOnModal={isHideOverflowOnModal}
        setIsHideOverflowOnModal={setIsHideOverflowOnModal}
      />
      <FooterLayout />
    </Container>
  );
};

export default MainContainer;
