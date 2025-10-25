import ReactDOM from "react-dom/client";
import App from "./app.js";
import "./global.css";
import { BrowserRouter } from "react-router";
import { setApiData } from "investmentcapital.js";

setApiData({
  baseUrl: import.meta.env.VITE_BASE_API_LINK,
  secure: import.meta.env.VITE_SECURE.toLowerCase() == "true",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
