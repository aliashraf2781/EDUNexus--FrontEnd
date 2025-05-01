import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./context/FavoriteContext";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  // </StrictMode>,
)
