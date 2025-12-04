import ReactDOM from "react-dom/client";
import App from "./app.js";
import "./global.css";
import { BrowserRouter } from "react-router";
import { setApiData } from "investmentcapital.js";
import { StocksCacheProvider } from "./hooks/cache/useStocksCache.js";
import { CurrentInvestorCacheProvider } from "./hooks/cache/useCurrentInvestorCache.tsx";
import { ModalProvider } from "./hooks/useModals.tsx";

setApiData({
  baseUrl: import.meta.env.VITE_BASE_API_LINK,
  secure: import.meta.env.VITE_SECURE.toLowerCase() == "true",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <StocksCacheProvider>
      <CurrentInvestorCacheProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CurrentInvestorCacheProvider>
    </StocksCacheProvider>
  </BrowserRouter>
);
