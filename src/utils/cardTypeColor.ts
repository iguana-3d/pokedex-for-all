import { gradients, pallete } from "../../styles/theme";

export const cardTypeColor = (type: string) => {
  switch (type) {
    case "normal":
      return {
        gradient: gradients.normal,
        primary: pallete.colors.others.types.normal,
      };
    case "fighting":
      return {
        gradient: gradients.fighting,
        primary: pallete.colors.others.types.fighting,
      };
    case "flying":
      return {
        gradient: gradients.flying,
        primary: pallete.colors.others.types.flying,
      };
    case "poison":
      return {
        gradient: gradients.poison,
        primary: pallete.colors.others.types.poison,
      };
    case "ground":
      return {
        gradient: gradients.ground,
        primary: pallete.colors.others.types.ground,
      };
    case "rock":
      return {
        gradient: gradients.rock,
        primary: pallete.colors.others.types.rock,
      };
    case "bug":
      return {
        gradient: gradients.bug,
        primary: pallete.colors.others.types.bug,
      };
    case "ghost":
      return {
        gradient: gradients.ghost,
        primary: pallete.colors.others.types.ghost,
      };
    case "steel":
      return {
        gradient: gradients.steel,
        primary: pallete.colors.others.types.steel,
      };
    case "fire":
      return {
        gradient: gradients.fire,
        primary: pallete.colors.others.types.fire,
      };
    case "water":
      return {
        gradient: gradients.water,
        primary: pallete.colors.others.types.water,
      };
    case "grass":
      return {
        gradient: gradients.grass,
        primary: pallete.colors.others.types.grass,
      };
    case "electric":
      return {
        gradient: gradients.electric,
        primary: pallete.colors.others.types.electric,
      };
    case "psychic":
      return {
        gradient: gradients.psychic,
        primary: pallete.colors.others.types.psychic,
      };
    case "ice":
      return {
        gradient: gradients.ice,
        primary: pallete.colors.others.types.ice,
      };
    case "dragon":
      return {
        gradient: gradients.dragon,
        primary: pallete.colors.others.types.dragon,
      };
    case "dark":
      return {
        gradient: gradients.dark,
        primary: pallete.colors.others.types.dark,
      };
    case "fairy":
      return {
        gradient: gradients.fairy,
        primary: pallete.colors.others.types.fairy,
      };
    default:
      return {
        gradient: pallete.colors.common.white,
        primary: pallete.colors.common.white,
      };
  }
};
