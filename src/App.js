import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Home />
      </CssBaseline>
    </div>
  );
}

export default App;
