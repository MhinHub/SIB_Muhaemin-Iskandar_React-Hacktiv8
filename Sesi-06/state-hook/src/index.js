import { createRoot } from "react-dom/client";

import AppState from "./AppState";
import AppHook from "./AppHook";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <AppState />
    <AppHook />
  </>
);
