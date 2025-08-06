import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import log from "loglevel";
//import {getStoredTheme, getPreferredTheme, getCurrTheme} from "./components/ThemeToggle";

if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === "development") {
  log.setLevel("trace", true);
} else {
  log.setLevel("DEBUG", true);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
Modal.setAppElement("#root");
root.render(<App />);

/* vim: set ft=typescriptreact : */
