import React from "react";
import { Container } from "./styles";
import { cardTypeColor } from "../../utils/cardTypeColor";

interface IProps {
  label: string;
  type: string;
}

const CardType: React.FC<IProps> = ({ type, label }) => {
  return <Container backgroundColor={cardTypeColor(type)}>{label}</Container>;
};

export default CardType;
