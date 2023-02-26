import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout";
import config from "./config";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = config.apiBaseUrl;
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err?.response?.status === 401 &&
      !window.location.href.includes("login")
    ) {
      window.location.href = `/login?returnUrl = ${encodeURIComponent(
        window.location.href.replace(window.location.origin, "")
      )}`;
    } else {
      throw err;
    }
  }
);

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
