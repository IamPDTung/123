import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { App, Providers } from "./app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
