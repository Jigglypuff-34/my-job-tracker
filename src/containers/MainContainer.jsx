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
import GoogleIcon from "@mui/icons-material/Google";
import "../styles.css";
import axios from "axios";

export const InfoContext = createContext();

function MainContainer() {
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalLogin, setModalLogin] = useState(true);

  const [openModal, setOpenModal] = useState(true);
  const [userInfo, setUserInfo] = useState({
    logged_in: false,
    user_name: "",
    user_id: "",
    application_data: {
      // default data structure to transform data from backend
      jobs: {},
      columns: {
        "column-1": {
          id: "column-1",
          title: "Wish List",
          companyIds: [],
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

  // to register all the jobs
  function updateJobs() {
    // axios to post backend

    // have to update according to the id of the backend
    const tempInfo = userInfo;
    const ranNum = Math.floor(Math.random() * 100);
    tempInfo.application_data.jobs[`company-${ranNum}`] = {
      id: `company-${ranNum}`,
      content: company,
    };

    for (let col in tempInfo.application_data.columns) {
      if (tempInfo.application_data.columns[col].title === status) {
        tempInfo.application_data.columns[col].companyIds.push(
          `company-${ranNum}`
        );
      }
    }
    setOpenModal(false);
  }

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function updatePassword(event) {
    setPassword(event.target.value);
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

  async function addJob() {
    const result = await axios.post("/add", {
      position: position,
      company: company,
      status: status,
    });

    if (result) {
      const { _id, company, position, note, status } = result.data;
      let targetColumn = "";
      console.log(status);

      if (status === "Wish List") {
        targetColumn = "column-1";
      } else if (status === "Applied") {
        targetColumn = "column-2";
      } else if (status === "Interview") {
        targetColumn = "column-3";
      } else if (status === "Offer") {
        targetColumn = "column-4";
      } else if (status === "Rejected") {
        targetColumn = "column-5";
      }

      const tempInfo = userInfo;
      tempInfo.application_data.jobs[`${_id}`] = {
        id: `${_id}`,
        content: company,
      };
      for (let col in tempInfo.application_data.columns) {
        if (tempInfo.application_data.columns[col].title === status) {
          tempInfo.application_data.columns[col].companyIds.push(`${_id}`);
        }
      }
      setUserInfo(tempInfo);
      setOpenModal(false);
    }
  }
  async function register() {
    const result = await axios.post("/register", {
      name: name,
      email: email,
      password: password,
    });
  }
  async function login() {
    const result = await axios.post("/login", {
      email: email,
      password: password,
    });

    console.log(result);

    if (result) {
      const jobsParsed = {};
      const wishArray = [];
      const appliedArray = [];
      const interviewArray = [];
      const offerArray = [];
      const rejectedArray = [];
      result.data.forEach((jobs) => {
        const { _id, company, position, note, status } = jobs;
        jobsParsed[_id] = {
          id: _id,
          content: company,
          position: position,
          note: note,
        };

        if (status === "Wishlist") {
          wishArray.push(_id);
        } else if (status === "Applied") {
          appliedArray.push(_id);
        } else if (status === "Interview") {
          interviewArray.push(_id);
        } else if (status === "Offer") {
          offerArray.push(_id);
        } else if (status === "Rejected") {
          rejectedArray.push(_id);
        }
      });

      const tempInfo = {
        ...userInfo,
        logged_in: true,
        application_data: {
          ...userInfo.application_data,
          jobs: jobsParsed,
          columns: {
            "column-1": {
              id: "column-1",
              title: "Wish List",
              companyIds: wishArray,
            },
            "column-2": {
              id: "column-2",
              title: "Applied",
              companyIds: appliedArray,
            },
            "column-3": {
              id: "column-3",
              title: "Interview",
              companyIds: interviewArray,
            },
            "column-4": {
              id: "column-4",
              title: "Offer",
              companyIds: offerArray,
            },
            "column-5": {
              id: "column-5",
              title: "Rejected",
              companyIds: rejectedArray,
            },
          },
        },
      };

      setUserInfo(tempInfo);
      setOpenModal(false);
    }
  }

  async function checkLogin() {
    const result = await axios.get("/isLoggedIn");
    if (result.data.loggedin) {
      const result = await axios.get("/getJobs");
    }
  }

  // edge case for logging out of website
  useEffect(() => {
    // checkLogin();
  }, []);

  function updateName(event) {
    setName(event.target.value);
  }

  return (
    <InfoContext.Provider value={[userInfo, setUserInfo]}>
      {userInfo.logged_in === false ? (
        <>
          <Modal className="kanban-login-modal" open={openModal}>
            <Box className="kanban-login-box">
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
                  height: "90%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {modalLogin ? (
                  <Typography variant="h5">Login</Typography>
                ) : (
                  <Typography variant="h5">Register</Typography>
                )}

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
                  {!modalLogin && (
                    <TextField
                      sx={{
                        width: "90%",
                      }}
                      label="Name"
                      variant="outlined"
                      onChange={updateName}
                    ></TextField>
                  )}
                  <TextField
                    sx={{
                      width: "90%",
                    }}
                    label="Email"
                    variant="outlined"
                    onChange={updateEmail}
                  ></TextField>
                  <TextField
                    sx={{
                      width: "90%",
                    }}
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={updatePassword}
                  ></TextField>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "10px",
                      alignItems: "center",
                      width: "100%",
                      gap: "5px",
                    }}
                  >
                    {modalLogin ? (
                      <Button
                        variant="contained"
                        sx={{
                          width: "80%",
                          borderRadius: "20px",
                        }}
                        onClick={login}
                      >
                        Login
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          sx={{
                            width: "80%",
                            borderRadius: "20px",
                          }}
                          onClick={register}
                        >
                          Register
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            width: "80%",
                            borderRadius: "20px",
                          }}
                        >
                          <GoogleIcon></GoogleIcon>
                        </Button>
                      </>
                    )}

                    {modalLogin ? (
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "orange",
                            cursor: "pointer",
                            transition: "color 0.2s ease",
                          },
                        }}
                        onClick={() => {
                          setModalLogin(false);
                        }}
                      >
                        Don't have an account? Register
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          "&:hover": {
                            color: "orange",
                            cursor: "pointer",
                            transition: "color 0.2s ease",
                          },
                        }}
                        onClick={() => {
                          setModalLogin(true);
                        }}
                      >
                        Return to login
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Modal>
          <Grid container className="outer-container">
            <Header
              item
              userLoggedIn={userInfo.logged_in}
              setOpenModal={setOpenModal}
            />
            <Landing item />
            <Footer item />
          </Grid>
        </>
      ) : (
        <>
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
                <Button onClick={addJob}>Create</Button>
              </Box>
            </Box>
          </Modal>
          <Grid container className="outer-container">
            <Header
              item
              setOpenModal={setOpenModal}
              userLoggedIn={userInfo.logged_in}
            />
            <Kanban item />
            <Footer item />
          </Grid>
        </>
      )}
    </InfoContext.Provider>
  );
}

export default MainContainer;
