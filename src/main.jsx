import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
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
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
//  After hosting this on github, on the live link, its just showing only the logo and the footer unless i click on the logo to see the home page instead of showing the home page straight