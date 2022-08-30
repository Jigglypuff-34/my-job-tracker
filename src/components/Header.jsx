/* eslint-disable linebreak-style */
import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <Box className="header">
      <img src={logo} width="100px" />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
          }}
        >
          <Button
            onClick={() => {
              props.setOpenModal(true);
            }}
          >
            Add Job
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
