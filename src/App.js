import React from "react";
import { Button } from "@mui/material";
import { Board } from "./board-components/Board";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Board />
      </>
    );
  }
}

export default App;
