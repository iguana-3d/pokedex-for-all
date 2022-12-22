import themes from "../../styles/theme";

export const cardTypeColor = (type: string) => {
  switch (type) {
    case "normal":
      return {
        gradient: themes.themeLight.pallete.gradients.normal,
        primary: themes.themeLight.pallete.colors.others.types.normal,
      };
    case "fighting":
      return {
        gradient: themes.themeLight.pallete.gradients.fighting,
        primary: themes.themeLight.pallete.colors.others.types.fighting,
      };
    case "flying":
      return {
        gradient: themes.themeLight.pallete.gradients.flying,
        primary: themes.themeLight.pallete.colors.others.types.flying,
      };
    case "poison":
      return {
        gradient: themes.themeLight.pallete.gradients.poison,
        primary: themes.themeLight.pallete.colors.others.types.poison,
      };
    case "ground":
      return {
        gradient: themes.themeLight.pallete.gradients.ground,
        primary: themes.themeLight.pallete.colors.others.types.ground,
      };
    case "rock":
      return {
        gradient: themes.themeLight.pallete.gradients.rock,
        primary: themes.themeLight.pallete.colors.others.types.rock,
      };
    case "bug":
      return {
        gradient: themes.themeLight.pallete.gradients.bug,
        primary: themes.themeLight.pallete.colors.others.types.bug,
      };
    case "ghost":
      return {
        gradient: themes.themeLight.pallete.gradients.ghost,
        primary: themes.themeLight.pallete.colors.others.types.ghost,
      };
    case "steel":
      return {
        gradient: themes.themeLight.pallete.gradients.steel,
        primary: themes.themeLight.pallete.colors.others.types.steel,
      };
    case "fire":
      return {
        gradient: themes.themeLight.pallete.gradients.fire,
        primary: themes.themeLight.pallete.colors.others.types.fire,
      };
    case "water":
      return {
        gradient: themes.themeLight.pallete.gradients.water,
        primary: themes.themeLight.pallete.colors.others.types.water,
      };
    case "grass":
      return {
        gradient: themes.themeLight.pallete.gradients.grass,
        primary: themes.themeLight.pallete.colors.others.types.grass,
      };
    case "electric":
      return {
        gradient: themes.themeLight.pallete.gradients.electric,
        primary: themes.themeLight.pallete.colors.others.types.electric,
      };
    case "psychic":
      return {
        gradient: themes.themeLight.pallete.gradients.psychic,
        primary: themes.themeLight.pallete.colors.others.types.psychic,
      };
    case "ice":
      return {
        gradient: themes.themeLight.pallete.gradients.ice,
        primary: themes.themeLight.pallete.colors.others.types.ice,
      };
    case "dragon":
      return {
        gradient: themes.themeLight.pallete.gradients.dragon,
        primary: themes.themeLight.pallete.colors.others.types.dragon,
      };
    case "dark":
      return {
        gradient: themes.themeLight.pallete.gradients.dark,
        primary: themes.themeLight.pallete.colors.others.types.dark,
      };
    case "fairy":
      return {
        gradient: themes.themeLight.pallete.gradients.fairy,
        primary: themes.themeLight.pallete.colors.others.types.fairy,
      };
    default:
      return {
        gradient: themes.themeLight.pallete.colors.common.white,
        primary: themes.themeLight.pallete.colors.common.white,
      };
  }
};
