import React, { useContext, Dispatch, SetStateAction } from "react";
import { Container } from "./styles";
//Icons
import { BsGearFill } from "react-icons/bs";

interface IConfigOpen {
  setIsHideOverflowOnModal: Dispatch<SetStateAction<boolean>>;
}

const ConfigGear: React.FC<IConfigOpen> = ({ setIsHideOverflowOnModal }) => {
  const handleConfigOpen = () => {
    setIsHideOverflowOnModal((prev) => !prev);
  };

  return (
    <Container onClick={handleConfigOpen}>
      <BsGearFill size={25} />
    </Container>
  );
};

export default ConfigGear;
