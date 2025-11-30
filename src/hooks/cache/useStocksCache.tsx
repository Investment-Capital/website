import { createContext, useContext, useEffect, useState } from "react";
import StocksCache from "../../types/cache/stocksCache";
import { Stocks } from "investmentcapital.js";
import Container from "../../types/container";

const StocksCacheContext = createContext<StocksCache | null>(null);

export const StocksCacheProvider = ({ children }: Container) => {
  const [data, setData] = useState<StocksCache | null>(null);

  useEffect(() => {
    Promise.all([Stocks.config(), Stocks.market()]).then(
      ([stockConfig, stockMarket]) => {
        const data: StocksCache = {};

        for (const config of stockConfig) {
          data[config.id] = {
            config,
            market: stockMarket.find((data) => data.id == config.id),
          };
        }

        setData(data);
      }
    );

    Stocks.webSocket().onMessage((message) => {
      setData((data) => {
        if (!data) return null;

        const newData = { ...data };
        newData[message.data.id] = {
          ...data[message.data.id],
          [message.type]: message.data,
        };

        return newData;
      });
    });
  }, []);

  return (
    <StocksCacheContext.Provider value={data}>
      {children}
    </StocksCacheContext.Provider>
  );
};

export const useStocksCache = () => {
  return useContext(StocksCacheContext);
};
