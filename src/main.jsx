import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoriteProvider } from "./context/FavoriteContext";
import { CartProvider } from './context/CartContext.jsx';
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <CartProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </CartProvider>
    </Provider>
  </StrictMode>
);
