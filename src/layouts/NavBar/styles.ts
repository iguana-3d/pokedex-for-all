import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${(props) => props.theme.spacing(2)};
  width: 100%;
  height: 8rem;
  background-color: ${(props) => props.theme.pallete.colors.grey[100]};
  box-shadow: ${(props) => props.theme.shadows.custom.light.n8};
`;
