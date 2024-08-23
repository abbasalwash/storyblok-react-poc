import React from "react";
import ReactDOM from "react-dom/client";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import FileItemComponent from "./components/FileItem";
import Page from "./components/Page";

const components = {
  "page": Page,
  "file_item": FileItemComponent
};

storyblokInit({
  accessToken: "5vz6rrGr8kRkThsJ0iSRHwtt",
  use: [apiPlugin],
  components
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
