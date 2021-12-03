import React from "react";
import { HashRouter } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Main />
      </div>
    </HashRouter>
  );
};

export default App;
