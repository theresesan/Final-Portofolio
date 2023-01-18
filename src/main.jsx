import React from "react";
import ReactDOM from "react-dom/client";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page1 />
    <Page2 />
    <Page3 />
  </React.StrictMode>
);
