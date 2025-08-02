import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.transition = "opacity 0.3s ease";
    preloader.style.opacity = 0;
    setTimeout(() => {
      preloader.remove();
    }, 300);
  }
};

window.addEventListener("load", removePreloader);
