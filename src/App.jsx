import React from "react";
import "./App.css";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import ThemeWrapper from "./ThemeWrapper";

const red = {
  prinary: "red"
};

function App() {
  return (
    <ThemeWrapper>
      <Router />
    </ThemeWrapper>
  );
}

export default App;
