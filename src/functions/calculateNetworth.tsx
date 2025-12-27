import { Investor } from "investmentcapital.js";
import StocksCache from "../types/cache/stocksCache";

const calculateNetworth = (investor: Investor, stockCache?: StocksCache) => {
  let networth = investor.cash;

  for (const [id, data] of Object.entries(stockCache ?? {})) {
    const price = data.market?.price;
    const owned = investor.stocks[id];

    if (!price || !owned) continue;
    networth += price * owned;
  }

  return networth;
};

export default calculateNetworth;
