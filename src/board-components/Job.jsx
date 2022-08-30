import React, { useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 7px;
  padding: 8px;
  margin-bottom: 8px;
  background: ${(props) => {
    return props.isDragging ? "lightblue" : "white";
  }};
  display: flex;
`;

export function Job(props) {
  return (
    <Draggable draggableId={props.job.id + ""} index={props.index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
        >
          {props.job.content}
        </Container>
      )}
    </Draggable>
  );
}
