export type IKindOfTransition = "default" | "easeInOutBack";

export type IShadows = [
  "none",
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export interface ICustomShadowOptions {
  n1: string;
  n4: string;
  n8: string;
  n12: string;
  n16: string;
  n20: string;
  n24: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}