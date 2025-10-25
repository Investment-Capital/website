import { useEffect, useState } from "react";
import StocksCache from "../../types/stocksCache";
import { Stocks } from "investmentcapital.js";

const useStocksCache = () => {
  const [data, setData] = useState<StocksCache>();

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
        if (!data) return;

        const newData = { ...data };
        newData[message.data.id] = {
          ...data[message.data.id],
          [message.type]: message.data,
        };

        return newData;
      });
    });
  }, []);

  return data;
};

export default useStocksCache;
