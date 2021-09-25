// Core
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Root
import { App } from "./App";

// Store
import { store } from "./app/store";

// Style
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
