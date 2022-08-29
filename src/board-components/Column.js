import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 8x;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <TaskList>Tasks go here</TaskList>
    </Container>
  );
}
