import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HistoryContext from "../src/Contex/HistoryContext.jsx";
import SetUserData from "../src/Contex/UserContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HistoryContext>
      <SetUserData>
        <App />
      </SetUserData>
    </HistoryContext>
  </StrictMode>
);
