import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalProvider } from "./GlobalContext/GlobalProvider.tsx";
import "./index.css";
import i18n from "./Features/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
