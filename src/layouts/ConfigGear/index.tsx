import React, { useContext } from "react";
import GlobalCssVariablesContext from "../../contexts/GlobalCssVariablesContext";
import { Container } from "./styles";
//Icons
import { BsGearFill } from "react-icons/bs";

const ConfigGear: React.FC = () => {
  const { handleConfigOpen } = useContext(GlobalCssVariablesContext);

  return (
    <Container onClick={handleConfigOpen}>
      <BsGearFill size={25}  />
    </Container>
  );
};

export default ConfigGear;
