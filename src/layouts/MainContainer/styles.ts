import styled from "styled-components";

export const Container = styled.div`
  ${(props) => props.theme.mixins.containerGridDefault}
  min-height: 100vh;
  padding-top: 12rem;
`;
