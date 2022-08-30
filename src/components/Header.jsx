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
        {props.userLoggedIn && (
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                borderRadius: "50px",
              }}
              onClick={() => {
                props.setOpenModal(true);
              }}
            >
              Add Job
            </Button>
            <Button
              sx={{
                borderRadius: "50px",
              }}
            >
              Logout
            </Button>
          </Box>
        )}

        {!props.userLoggedIn && (
          <Box
            sx={{
              display: "flex",
              width: "max-content",
            }}
          >
            <Button
              sx={{
                borderRadius: "50px",
              }}
              onClick={() => {
                props.setOpenModal(true);
              }}
            >
              Login
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;
