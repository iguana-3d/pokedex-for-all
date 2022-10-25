import React from 'react';
import { Container } from './styles';
import { useTheme } from 'styled-components';

interface IProps {
  label: string;
  type: string;
}

const LabelType: React.FC<IProps> = ({ label, type }) => {
  const theme = useTheme();
  
  // const colors = {
  //   "normal": theme.pallete.colors
  //   "fighting":
  //   "flying":
  //   "poison":
  //   "ground":
  //   "rock":
  //   "bug":
  //   "ghost":
  //   "steel":
  //   "fire":
  //   "water":
  //   "grass":
  //   "electric":
  //   "psychic":
  //   "ice":
  //   "dragon":
  //   "dark":
  //   "fairy":
  //   "unknown":
  //   "shadow":
  // };

  return (
    <Container>
      {label}
    </Container>
  );
}

export default LabelType;