import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../../pages/mainPage/MainPage"
import WeightPage from "../../pages/weightPage/WeightPage"

const AppContainer = () => (
  <Router>
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/weight-form" component={WeightPage} />
  </Switch>
  </Router>
);

export default AppContainer;
