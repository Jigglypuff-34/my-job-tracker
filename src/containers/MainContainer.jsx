/* eslint-disable linebreak-style */
import React, { useState, useEffect, createContext } from "react";
import {
  Grid,
  Modal,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Landing from "../components/Landing.jsx";
import Kanban from "../containers/KanbanContainer.jsx";
import "../styles.css";

export const InfoContext = createContext();

function MainContainer() {
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const [openModal, setOpenModal] = useState(false);
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

  function updateJobs() {
    const tempInfo = userInfo;
    tempInfo.application_data.jobs["company-3"] = {
      id: "company-3",
      content: company,
    };

    for (let col in tempInfo.application_data.columns) {
      if (tempInfo.application_data.columns[col].title === status) {
        tempInfo.application_data.columns[col].companyIds.push("company-3");
      }
    }
  }

  function updateSelection(event) {
    setStatus(event.target.value);
  }

  function updateCompany(event) {
    setCompany(event.target.value);
  }

  function updatePosition(event) {
    setPosition(event.target.value);
  }

  return (
    <InfoContext.Provider value={[userInfo, setUserInfo]}>
      <Modal className="kanban-add-job-modal" open={openModal}>
        <Box className="kanban-add-job-box">
          <Box
            sx={{
              height: "10%",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <CancelIcon
              sx={{
                marginRight: "10px",
                marginTop: "10px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                setOpenModal(false);
              }}
            ></CancelIcon>
          </Box>
          <Box
            sx={{
              height: "85%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Add Application</Typography>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <TextField
                sx={{
                  width: "90%",
                }}
                label="Company"
                variant="outlined"
                onChange={updateCompany}
              ></TextField>
              <TextField
                sx={{
                  width: "90%",
                }}
                label="Position"
                variant="outlined"
                onChange={updatePosition}
              ></TextField>
              <Select
                sx={{
                  width: "90%",
                }}
                value={status}
                onChange={updateSelection}
              >
                <MenuItem value="Wish List">Wish List</MenuItem>
                <MenuItem value="Applied">Applied</MenuItem>
                <MenuItem value="Interview">Interview</MenuItem>
                <MenuItem value="Offer">Offer</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box
            sx={{
              height: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={updateJobs}>Create</Button>
          </Box>
        </Box>
      </Modal>
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
            <Header item setOpenModal={setOpenModal} />
            <Kanban item />
            <Footer item />
          </Grid>
        </>
      )}
    </InfoContext.Provider>
  );
}

export default MainContainer;
