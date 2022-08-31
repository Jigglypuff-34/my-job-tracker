import React from "react";
import styled from "styled-components";
import { Job } from "./Job.jsx";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8x;
  border-radius: 2px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  font-family: Roboto;
`;
const CompanyList = styled.div`
  transition: background-color 0.3s ease;
  background-color: ${(props) => {
    return props.isDraggingOver ? "#D3D3D3" : "white";
  }};
  flex-grow: 1;
  min-height: 100px;
  height: 100%;
`;

export function Column(props) {
  return (
    <Container>
      <Title className="kanban-column-title">
        {props.column.title.toUpperCase()}
      </Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <CompanyList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.jobs.map((job, index) => (
              <Job key={job.id} job={job} index={index}></Job>
            ))}
            {provided.placeholder}
          </CompanyList>
        )}
      </Droppable>
    </Container>
  );
}
