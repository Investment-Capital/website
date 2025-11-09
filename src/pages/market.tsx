import PageProps from "../types/pageProps";
import TimeAgo from "react-timeago";
import Number from "../components/number";

const MarketPage = ({ stocksCache }: PageProps) => {
  if (!stocksCache) return <div>loading</div>;

  return (
    <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
      {Object.entries(stocksCache).map(([id, data]) => (
        <div>
          <p>id: {id}</p>
          <p>name: {data.config?.name}</p>
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
        </div>
      ))}
    </div>
  );
};

export default MarketPage;
