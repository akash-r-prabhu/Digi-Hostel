import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateProvider>
);
