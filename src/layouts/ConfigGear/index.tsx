import React from 'react';
import { Container } from './styles';
//Icons
import { BsGearFill } from 'react-icons/bs';

const ConfigGear: React.FC = () => {
  return (
    <Container>
      <BsGearFill size={25}/>
    </Container>
  );
}

export default ConfigGear;