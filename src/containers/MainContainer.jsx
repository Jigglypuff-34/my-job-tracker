/* eslint-disable linebreak-style */
import React, { useState, useEffect, createContext } from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Landing from "../components/Landing.jsx";
import Kanban from "../containers/KanbanContainer.jsx";
import "../styles.css";

export const InfoContext = createContext();

function MainContainer() {

  const [userInfo, setUserInfo] = useState({
    logged_in: false,
    user_name: "",
    user_id: "",
    jobs: [
      {
        details: {
          job_id: 1,
          company: "Google",
          position: "L7",
          date: "8/29",
        },
        status: {
          wishlist: false,
          applied: true,
          interview: false,
          offer: false,
          rejected: false
        }
      },
      {
        details: {
          job_id: 2,
          company: "Amazon",
          position: "L6",
          date: "8/23",
        },
        status: {
          wishlist: false,
          applied: false,
          interview: false,
          offer: true,
          rejected: false
        }
      }
    ]
  });

  useEffect(() => console.log("Current State", userInfo), [userInfo]);

  return (
    <InfoContext.Provider value={[userInfo, setUserInfo]}>
      {userInfo.loggedIn === true ? (
        <>
          <Grid container className="outer-container">
            <Header item />
            <Landing item />
            <Footer item />
          </Grid>
        </>
      ) : (
        <>
          <Grid container className="outer-container">
            <Header item />
            <Kanban item />
            <Footer item />
          </Grid>
        </>
      )}
    </InfoContext.Provider>
  );
}

export default MainContainer;
