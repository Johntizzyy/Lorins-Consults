import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Force scroll to top on initial load
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
