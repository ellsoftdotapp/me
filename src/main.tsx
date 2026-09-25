import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

const root = window.document.documentElement

root.classList.remove("light", "dark")

const savedTheme = window.localStorage.getItem("me-theme")
const systemTheme =
  savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

root.classList.add(systemTheme)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
