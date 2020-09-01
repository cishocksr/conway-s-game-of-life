import React from "react";
import { Route } from "react-router-dom";

import Game from "./components/Game";
import Rules from "./components/Rules";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/">
        <Game />
      </Route>
      <Route path="/rules">
        <Rules />
      </Route>
    </div>
  );
};

export default App;
