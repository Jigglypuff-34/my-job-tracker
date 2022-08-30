import { initalData } from "./data";
import React, { useState, useEffect } from "react";
import { Column } from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import { result } from "./result";

export function Board() {
  const [data, setData] = useState(initalData);
  // responsibility of ondragend to synchronously update the state
  function onDragEnd(result) {
    // reorder our column
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

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };
    setData(newData);

    // can udpate backend by sending back to database after changes have been made
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return (
            <Column key={column.id} column={column} tasks={tasks}></Column>
          );
        })}
      </DragDropContext>
    </>
  );
}
