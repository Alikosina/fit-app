import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App/App";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
