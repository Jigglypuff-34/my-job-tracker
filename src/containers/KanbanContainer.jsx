/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";
import Wishlist from "../cards/Wishlist.jsx";
import Applied from "../cards/Applied.jsx";
import Interview from "../cards/Interview.jsx";
import Offer from "../cards/Offer.jsx";
import Rejected from "../cards/Rejected.jsx";

function Kanban() {
  return (
    <Box className="kanban-container">
      <Box className="kanban-wishlist kanban-columns">
        <Wishlist />
      </Box>
      <Box className="kanban-applied kanban-columns">
        <Applied />
      </Box>
      <Box className="kanban-interview kanban-columns">
        <Interview />
      </Box>
      <Box className="kanban-offer kanban-columns">
        <Offer />
      </Box>
      <Box className="kanban-rejected kanban-columns">
        <Rejected />
      </Box>
    </Box>
  );
}

export default Kanban;
