/* eslint-disable linebreak-style */
import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import logo from "../assets/mjt-logo.svg";
import axios from "axios";
import { InfoContext } from "../containers/MainContainer.jsx";

function Header(props) {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  async function logout() {
    const result = await axios.get("/logout");
    setUserInfo({
      ...userInfo,
      logged_in: false,
    });
  }

  return (
    <Box className="header">
      <img src={logo} width="230px" />
      <Box className="button-outer">
        {props.userLoggedIn && (
          <Box className="button-container">
            <Button
              className="button-style"
              onClick={() => {
                props.setOpenModal(true);
              }}
              sx={{
                color: "#F4F6FC",
                borderRadius: "30px",
              }}
            >
              Add Job
            </Button>

            <Button
              sx={{
                color: "#F4F6FC",
                borderRadius: "30px",
              }}
              className="button-style"
              onClick={logout}
            >
              Logout
            </Button>
          </Box>
        )}

        {!props.userLoggedIn && (
          <Box className="button-container">
            <Button
              sx={{
                color: "#F4F6FC",
                borderRadius: "30px",
              }}
              className="button-style"
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
