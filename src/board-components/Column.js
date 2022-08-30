import React from "react";
import styled from "styled-components";
import { Task } from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8x;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.3s ease;
  background-color: ${(props) => {
    return props.isDraggingOver ? "skyblue" : "white";
  }};
  flex-grow: 1;
  min-height: 100px;
`;

export function Column(props) {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
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
