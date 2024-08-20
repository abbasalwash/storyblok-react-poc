import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { BrowserRouter } from "react-router-dom";

console.log(process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN);

storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {},
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