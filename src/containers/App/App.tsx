import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage"

const AppContainer = () => (
  <Router>
  <Switch>
    <Route path="/" component={MainPage} />
  </Switch>
  </Router>
);

export default AppContainer;
