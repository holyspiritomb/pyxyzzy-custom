import React, {StrictMode} from "react";
import "bootstrap/dist/css/bootstrap-reboot.css";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import { toast } from "react-toastify";
import log from "loglevel";
import {getStoredTheme, getPreferredTheme, getCurrTheme} from "./components/ThemeToggle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

Modal.setAppElement("#root");

if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === "development") {
    log.setLevel("debug")
}

root.render(
    <App/>
);
/* vim: set ft=typescriptreact : */
