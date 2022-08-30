export const initalData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
    },
    "task-2": {
      id: "task-2",
      content: "Clean the dishes",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
