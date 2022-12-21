const grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const primary = {
  lighter: "#e2e6e9",
  light: "#a8b3bd",
  main: "#919EAB",
  dark: "#424d57",
  darker: "#161a1d",
};

const secondary = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};

const info = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const success = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const warning = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const error = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const common = {
  black: "#000000",
  white: "#FFFFFF",
};

const text = {
  primary: "#121828",
  secondary: "#65748B",
  disabled: "rgba(55, 65, 81, 0.48)",
};

const others = {
  normal: "#aca974",
  fighting: "#800b11",
  flying: "#085764",
  poison: "#611380",
  ground: "#bfac21",
  rock: "#474026",
  bug: "#91ba2e",
  ghost: "#472b53",
  steel: "#454545",
  fire: "#fc0c0b",
  water: "#08517a",
  grass: "#204000",
  electric: "#fffa24",
  psychic: "#8a0532",
  ice: "#1995a1",
  dragon: "#29036a",
  dark: "#2d221c",
  fairy: "#f87ea7",
};

const gradients = {
  normal: "linear-gradient(135deg, #aca974, #ccc9aa, #eaeade)",
  fighting: "linear-gradient(135deg, #800b11, #e81319, #d36063, #d36063)",
  flying: "linear-gradient(135deg, #085764, #5eb9b2)",
  poison: "linear-gradient(135deg, #611380, #a819d7, #ca72ec)",
  ground: "linear-gradient(135deg, #bfac21, #e1d158, #ede293)",
  rock: "linear-gradient(135deg, #474026, #776a3e, #94834f, #b4a270)",
  bug: "linear-gradient(135deg, #91ba2e, #bddd6e, #d9fe9e)",
  ghost: "linear-gradient(135deg, #472b53, #8e55a4, #bd98cb)",
  steel: "linear-gradient(135deg, #454545, #7b8e8a, #bbc5c4)",
  fire: "linear-gradient(135deg, #fc0c0b, #f67f0b, #f8b80e)",
  water: "linear-gradient(135deg, #08517a, #0a7abc, #36aff6)",
  grass: "linear-gradient(135deg, #204000, #3e9709, #67f70a)",
  electric: "linear-gradient(135deg, #969101, #fffa24, #f7ff85)",
  psychic: "linear-gradient(135deg, #8a0532, #ec0e63, #f55792, #fcb6d0)",
  ice: "linear-gradient(135deg, #103d43, #1995a1, #66d1e5, #dcfcf7)",
  dragon: "linear-gradient(135deg, #29036a, #8a55fd, #d6b1fe)",
  dark: "linear-gradient(135deg, #2d221c, #5f4632, #916852, #4f4f4f)",
  fairy: "linear-gradient(135deg, #f87ea7, #ffa0c2, #fdd1e0)",
  gradient1:
    "linear-gradient(90deg, #7400b8ff, #6930c3ff, #5e60ceff, #5390d9ff, #4ea8deff, #48bfe3ff, #56cfe1ff, #64dfdfff, #72efddff, #80ffdbff, #5390d9ff, #5e60ceff, #6930c3ff,  #7400b8ff)",
};

const colors = {
  common: common,
  primary: primary,
  secondary: secondary,
  error: error,
  warning: warning,
  info: info,
  success: success,
  grey: grey,
  text: text,
  others: {
    types: others,
  },
  actions: {
    hover: grey[500],
    selected: grey[500],
    disabled: grey[500],
    disabledBackground: grey[500],
    focus: grey[500],
  },
  backgrounds: {
    paper: grey[100],
    default: grey[100],
    neutral: common.white,
  },
};

const light = {
  colors: colors,
  gradients: gradients,
};

export default light;
