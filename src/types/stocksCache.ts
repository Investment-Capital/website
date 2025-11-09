import { StockConfig, StockMarketHistory } from "investmentcapital.js";

type StocksCache = {
  [id: string]: {
    config?: StockConfig;
    market?: StockMarketHistory;
  };
};

export default StocksCache;
