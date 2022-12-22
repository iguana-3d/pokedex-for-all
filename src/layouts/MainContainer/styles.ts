import styled from "styled-components";

export const Container = styled.div`
  ${(props) => props.theme.mixins.containerGridDefault}
  min-height: 100vh;
  background-color: ${props => props.theme.pallete.colors.backgrounds.default};

  .content {
    grid-column: center-start/center-end;
    padding: 12rem 0 4rem;
  }
`;
