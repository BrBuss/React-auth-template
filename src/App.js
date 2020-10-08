import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SquaresAnimation from "./SquaresAnimation";

function App() {
  return (
    <Router>
      <div className="App__container">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
        <SquaresAnimation />
      </div>
    </Router>
  );
}

export default App;
