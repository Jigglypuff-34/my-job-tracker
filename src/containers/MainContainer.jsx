/* eslint-disable linebreak-style */
import React, { useState, useEffect, createContext } from "react";
import { Grid, AppBar } from "@mui/material";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Landing from "../components/Landing.jsx";
import Kanban from "../containers/KanbanContainer.jsx";
import "../styles.css";

export const InfoContext = createContext();

function MainContainer() {
  const [userInfo, setUserInfo] = useState({
    logged_in: true,
    user_name: "",
    user_id: "",
    application_data: {
      // default data structure to transform data from backend
      jobs: {
        "company-1": {
          id: "company-1",
          content: "Google",
        },
        "company-2": {
          id: "company-2",
          content: "Microsoft",
        },
      },
      columns: {
        "column-1": {
          id: "column-1",
          title: "Wish List",
          companyIds: ["company-1", "company-2"],
        },
        "column-2": {
          id: "column-2",
          title: "Applied",
          companyIds: [],
        },
        "column-3": {
          id: "column-3",
          title: "Interview",
          companyIds: [],
        },
        "column-4": {
          id: "column-4",
          title: "Offer",
          companyIds: [],
        },
        "column-5": {
          id: "column-5",
          title: "Rejected",
          companyIds: [],
        },
      },
      columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
    },
  });

  useEffect(() => console.log("Current State", userInfo), [userInfo]);

  return (
    <InfoContext.Provider value={[userInfo, setUserInfo]}>
      {userInfo.logged_in === false ? (
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
