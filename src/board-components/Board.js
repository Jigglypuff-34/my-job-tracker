import { initalData } from "./data";
import React, { useState, useEffect } from "react";
import { Column } from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export function Board() {
  const [data, setData] = useState(initalData);
  const [columnArray, setColumnArray] = useState([]);

  useEffect(() => {
    const tempArray = [];
    const update = data.columnOrder.map((columnId) => {
      const column = data.columns[columnId];
      const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
      tempArray.push(
        <Column key={column.id} column={column} tasks={tasks}></Column>
      );
    });
    setData(update);
    setColumnArray(tempArray);
  }, []);

  // responsibility of ondragend to synchronously update the state
  function onDragEnd(result) {
    // reorder our column
    
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>{columnArray}</DragDropContext>
    </>
  );
}
