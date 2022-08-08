// Import React Library
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
// Render Page to index.html
const page = ReactDOM.createRoot(document.querySelector("#root"));

page.render(<App />);
