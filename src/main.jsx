import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
if (!window.history.pushState) {
 ReactDOM.hydrateRoot(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById("root")
 );
} else {
 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
 );
}
