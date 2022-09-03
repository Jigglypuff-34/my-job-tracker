import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import CancelIcon from "@mui/icons-material/Cancel";
import { InfoContext } from "../containers/MainContainer.jsx";
import axios from "axios";

const Container = styled.div`
  background: ${(props) => {
    return props.isDragging ? "lightblue" : "white";
  }};
`;

export function Job(props) {
  const [userInfo, setUserInfo, setDeleteJob, setDeleteId] =
    useContext(InfoContext);
  async function deleteJob() {
    const result = await axios.post("/delete", {
      _id: props.job.id,
    });
    setDeleteJob(true);
    setDeleteId(props.job.id);
  }

  return (
    <Draggable draggableId={props.job.id + ""} index={props.index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          {...provided.dragHandleProps}
          data-test-id={props.job.id}
          className="kanban-card"
        >
          <div className="kanban-card-company">{props.job.content}</div>
          <div className="kanban-card-position">{props.job.position}</div>
          <div className="kanban-card-utility">
            <CancelIcon
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: "red",
                  transition: "color 0.3s ease",
                },
                color: "white",
                fontSize: "1.1em",
              }}
              onClick={deleteJob}
            ></CancelIcon>
          </div>
        </Container>
      )}
    </Draggable>
  );
}
