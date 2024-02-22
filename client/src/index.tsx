import "bootstrap/dist/css/bootstrap-reboot.css"
import React from "react"
import { createRoot } from "react-dom/client"
import Modal from "react-modal"
import App from "./components/App"
import { toast } from "react-toastify"
import log from "loglevel"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

Modal.setAppElement("#root");

toast.configure({
    autoClose: 10000,
    position: "top-center",
    toastStyle: {"borderRadius": "10px", "marginTop": "10px", "marginBottom": "5px","border": "1px solid #000", "fontFamily": "system-ui,sans-serif", "minWidth":"50vw", "maxWidth": "90vw"},
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    log.setLevel("debug")
}

root.render(
    <App />
);
