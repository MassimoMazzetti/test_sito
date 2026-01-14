import "@mantine/core/styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";

import App from "./app.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
