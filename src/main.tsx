import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/main.css";
import App from "@/App";

// import state
import { StateProvider } from "@/assets/state";

// import  AOS css
import "aos/dist/aos.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </StrictMode>
);
