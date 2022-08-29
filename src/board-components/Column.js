import React from "react";
import styled from "styled-components";
import { Task } from "./Task";
import { Droppable } from "react-beautiful-dnd";

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
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index}></Task>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
