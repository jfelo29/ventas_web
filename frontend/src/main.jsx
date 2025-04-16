import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../vendor/index.css";
import App from "./App.jsx";
//import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>

        <App />

    </StrictMode>
);