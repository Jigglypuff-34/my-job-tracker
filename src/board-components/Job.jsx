import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import CancelIcon from "@mui/icons-material/Cancel";
import { InfoContext } from "../containers/MainContainer.jsx";
import axios from "axios";

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
  const [userInfo, setUserInfo, setDeleteJob, setDeleteId] = useContext(InfoContext);
  async function deleteJob() {
    const result = await axios.post("/delete", {
      _id: props.job.id,
    });
    setDeleteJob(true);
    setDeleteId(props.job.id)
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
        >
          {props.job.content}
          <CancelIcon
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={deleteJob}
          ></CancelIcon>
        </Container>
      )}
    </Draggable>
  );
}
