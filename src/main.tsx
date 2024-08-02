import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // wrap with <React.StrictMode> make react rendered twice
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
