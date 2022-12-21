import styled from "styled-components";

export const Footer = styled.footer`
  ${(props) => props.theme.mixins.containerGridDefault};
  grid-column: full-start/full-end;
  padding: ${(props) => props.theme.spacing(2)};
  width: 100%;
  height: inherit;
  background-color: ${(props) => props.theme.pallete.colors.grey[100]};
  box-shadow: ${(props) => props.theme.pallete.shadows.custom.n8};
`;
