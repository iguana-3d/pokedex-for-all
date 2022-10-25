import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-column: center-start/center-end;
`;

const List: React.FC = () => {
  return <Container>list</Container>;
};

export default List;
