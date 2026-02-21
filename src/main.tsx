import ReactDOM from "react-dom/client";
import App from "./app.js";
import { BrowserRouter } from "react-router";
import { setApiData } from "investmentcapital.js";
import { StocksCacheProvider } from "./hooks/cache/useStocksCache.js";
import { CurrentInvestorCacheProvider } from "./hooks/cache/useCurrentInvestorCache.tsx";
import { ModalProvider } from "./hooks/useModals.tsx";

import "@fontsource/poppins/400";
import "@fontsource/poppins/500";
import "@fontsource/poppins/600";
import "./global.css";
import { LevelsConfigCacheProvider } from "./hooks/cache/useLevelsConfigCache.tsx";

setApiData({
  baseUrl: import.meta.env.VITE_BASE_API_LINK,
  secure: import.meta.env.VITE_SECURE.toLowerCase() == "true",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <LevelsConfigCacheProvider>
      <StocksCacheProvider>
        <CurrentInvestorCacheProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </CurrentInvestorCacheProvider>
      </StocksCacheProvider>
    </LevelsConfigCacheProvider>
  </BrowserRouter>,
);
