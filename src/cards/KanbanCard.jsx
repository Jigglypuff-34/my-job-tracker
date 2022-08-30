/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";

export default function KanbanCard({ jobDetails }) {
  return (
    <Box className="kanban-card">
      <div>Company: {jobDetails.company}</div>
      <div>Position: {jobDetails.position}</div>
      <div>Date: {jobDetails.date}</div>
    </Box>
  );
}