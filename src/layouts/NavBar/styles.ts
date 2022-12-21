import styled from "styled-components";

export const Navigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(2)};
  width: 100%;
  min-height: 8rem;
  background-color: ${(props) => props.theme.pallete.colors.grey[100]};
  box-shadow: ${(props) => props.theme.pallete.shadows.custom.n8};

  .center-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${props => props.theme.transitions("default", 0.15)};
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
