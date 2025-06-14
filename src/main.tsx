import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// import state
import { StateProvider } from "@/state";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>
);
