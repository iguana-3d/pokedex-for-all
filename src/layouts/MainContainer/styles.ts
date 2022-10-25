import styled from "styled-components";

export const Container = styled.div`
  ${(props) => props.theme.mixins.containerGridDefault}
  min-height: 100vh;

  .content {
    grid-column: center-start/center-end;
    padding: 12rem 0 4rem;
  }
`;
