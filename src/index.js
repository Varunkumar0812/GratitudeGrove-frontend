import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./input.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
