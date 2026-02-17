import TimeAgo from "react-timeago";
import Number from "../components/number";
import { useStocksCache } from "../hooks/cache/useStocksCache";
import { useCurrentInvestorCache } from "../hooks/cache/useCurrentInvestorCache";
import Button from "../components/button";
import { Stocks } from "investmentcapital.js";
import useAuthorization from "../hooks/useAuthorization";

const MarketPage = () => {
  const stocksCache = useStocksCache();
  const currentInvestor = useCurrentInvestorCache();
  const [authorization] = useAuthorization();
  if (!stocksCache) return <div>loading</div>;

  return (
    <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
      {Object.entries(stocksCache).map(([id, data]) => (
        <div key={id}>
          <p>ID: {id}</p>
          <p>Name: {data.config?.name}</p>
          <p>Prestige Required: {data.config?.prestigeRequirement}</p>
          {data.market && (
            <>
              <p>
                Price: <Number value={data.market.price} currency />
              </p>
              <p>
                Last Updated: <TimeAgo date={data.market.date} />
              </p>
            </>
          )}
          {currentInvestor && authorization && (
            <>
              <p>
                Owned: <Number value={currentInvestor.stocks[id] ?? 0} />
              </p>
              <Button
                text="buy one"
                onClick={() => Stocks.buy(id, 1, authorization)}
              />
              <Button
                text="sell one"
                onClick={() => Stocks.sell(id, 1, authorization)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MarketPage;
