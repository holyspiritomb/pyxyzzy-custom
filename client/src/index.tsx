import "bootstrap/dist/css/bootstrap-reboot.css"
import React from "react"
import ReactDOM from "react-dom"
import Modal from "react-modal"
import App from "./components/App"
import { toast } from "react-toastify"
import log from "loglevel"
/* import {
    auto as followSystemColorScheme,
    setFetchMethod as darkreaderFetchMethod,
} from 'darkreader'; */

Modal.setAppElement("#root")

toast.configure({
    autoClose: 10000,
    position: "top-center",
    toastStyle: {"borderRadius": "10px", "marginTop": "10px", "marginBottom": "5px","border": "1px solid #000", "fontFamily": "system-ui,sans-serif", "minWidth":"50vw", "maxWidth": "90vw"},
})

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    log.setLevel("debug")
}

ReactDOM.render(<App />, document.getElementById("root"))

/* darkreaderFetchMethod(window.fetch);

followSystemColorScheme(
    {
        brightness: 100,
        contrast: 100,
        darkSchemeBackgroundColor: "#191724",
        darkSchemeTextColor: "#e0def4",
        lightSchemeTextColor: "#191724",
        lightSchemeBackgroundColor: "#e0def4",
        scrollbarColor: "auto",
        selectionColor: "#8981d5",
    },
    {
        invert: [""],
        css: `
            .card.white {
                background-color:#e0def4 !important;
                color:#191724 !important;
                border:1px solid #191724 !important;
            }
            .card.white.placeholder {background-color:#e0def4 !important;}
            .card.black {border:1px solid #e0def4 !important;}
            .cards .group.selected .white.card,
            .card.white.placeholder.selected {background-color: #bab6e7 !important;}
            .in-game .players .player {border-color: #bab6e7 !important;}
            .Toastify__toast--info{background-color: #bab6e7 !important;}
            .Toastify__toast--info > div[role="alert"]{color: #000 !important;}
            .Toastify__toast--info > .Toastify__close-button > svg{fill: #000 !important;}
            .Toastify__toast--error{background-color: #fb3e6f !important;}
            .card .draw-pick .number{color:#000 !important; background-color:#fff !important;}
            `,
        ignoreInlineStyle: [""],
        ignoreImageAnalysis: [""],
        disableStyleSheetsProxy: false,
    }
); */
