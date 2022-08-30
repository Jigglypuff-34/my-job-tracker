/* eslint-disable linebreak-style */
import React from "react";
import { Box, Button } from "@mui/material";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <Box className="header">
      <img src={logo} width="100px" />
      <Box className="button-outer">
        {props.userLoggedIn && (
          <Box className="button-container">
            <Button className="button-style" onClick={() => { props.setOpenModal(true) }}>
              Add Job
            </Button>
            <Button className="button-style">
              Logout
            </Button>
          </Box>
        )}

        {!props.userLoggedIn && (
          <Box className="button-container">
            <Button className="button-style" onClick={() => { props.setOpenModal(true) }}>
              Login
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Header;
