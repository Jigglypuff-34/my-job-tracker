import React, { useState, useEffect, useContext } from "react";
import { Column } from "./Column.jsx";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { Box } from "@mui/material";
import { InfoContext } from "../containers/MainContainer.jsx";

const Container = styled.div``;

const COLUMN_NAMES = [
  "kanban-wishlist",
  "kanban-applied",
  "kanban-interview",
  "kanban-offer",
  "kanban-rejected",
];

export function Board() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const [data, setData] = useState(userInfo.application_data);

  // update order once dragging ends
  function onDragEnd(result) {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.companyIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        companyIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newData);
    } else {
      const startTaskIds = Array.from(start.companyIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        companyIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.companyIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        companyIds: finishTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setData(newData);
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container className="kanban-container">
          {data.columnOrder.map((columnId, index) => {
            const column = data.columns[columnId];
            const jobs = column.companyIds.map((taskId) => data.jobs[taskId]);
            return (
              <Box className={`${COLUMN_NAMES[index]} kanban-columns`}>
                <Column key={column.id} column={column} jobs={jobs}></Column>
              </Box>
            );
          })}
        </Container>
      </DragDropContext>
    </>
  );
}
