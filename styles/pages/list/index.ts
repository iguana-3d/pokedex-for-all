import styled from "styled-components";

export const Container = styled.div`
  grid-column: center-start/center-end;
  display: grid;
  grid-gap: 3rem;

  .return-page {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: max-content;
    padding: 1rem 1rem 1rem 0;
    cursor: pointer;

    span {
      transition: ${(props) => props.theme.transitions("default", 0.15)};
    }
  }

  .return-page:hover span {
    font-weight: ${(props) => props.theme.typeFaceWeight.medium};
  }

  .basic-informations {
    display: flex;
  }

  .basic-informations > * {
    flex: 1;
  }

  .image-content {
    width: 100%;
    height: inherit;
    position: relative;
  }

  .table {
    border-collapse: collapse;
    font-size: 1.6rem;
    min-width: 0.5rem;
  }

  .table-row {
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.pallete.colors.grey[300]};
    color: ${(props) => props.theme.pallete.colors.text.primary};
  }

  .table-row td {
    padding: 1.2rem 1.5rem;
  }

  .table-title {
    width: min-content;
    color: ${(props) => props.theme.pallete.colors.text.primary};
    font-weight: ${(props) => props.theme.typeFaceWeight.medium};
  }

  .table-type {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing(1)};
  }
`;
