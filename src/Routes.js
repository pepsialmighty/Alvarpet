import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <Router>
      <NavBar>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </NavBar>
    </Router>
  );
};

export default Routes;
