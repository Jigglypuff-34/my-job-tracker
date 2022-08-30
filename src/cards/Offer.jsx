/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import { Box } from "@mui/material";
import KanbanCard from "../cards/KanbanCard.jsx";
import { InfoContext } from "../containers/MainContainer.jsx";

export default function Offer() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const cards = [];
  userInfo.jobs.forEach(job => {
    if (job.status.offer) {
      cards.push(<KanbanCard jobDetails={job.details} />)
    }
  })
  return (
    <Box className="kanban-cards-container">
      <h2 className="kanban-title">Offer</h2>
      {!cards.length ? "Add a card" : cards}
    </Box>
  );
}