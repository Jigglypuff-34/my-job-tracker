const start = {
  draggableId: "task-1",
  type: "TYPE",
  source: {
    droppableId: "column-1",
    index: 0,
  },
};

const update = {
  ...start,
  destination: {
    droppableId: "column-id",
    index: 1,
  },
};

const result = {
  ...update,
  reason: "DROP",
};
