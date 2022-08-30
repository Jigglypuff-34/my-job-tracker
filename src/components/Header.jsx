/* eslint-disable linebreak-style */
import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../assets/logo.png";

function Header() {
  return (
    <Box className="header">
      <img src={logo} width="100px" />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button>create</Button>
      </Box>
    </Box>
  );
}

export default Header;
