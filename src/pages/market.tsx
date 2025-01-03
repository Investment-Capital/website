import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { useLocation } from "react-router";
import useWebsocketApi from "../hooks/useWebsocketApi";
import Chart from "../components/chart";
import MarketType from "../types/markets/market";

const Market = (): React.ReactNode => {
  const [marketData, setMarketData] = useState<{ [key: string]: MarketType }>(
    {}
  );
  const fetchApi = useFetchApi();
  const websocketApi = useWebsocketApi();
  const location = useLocation();
  const marketType = location.pathname.split("/")[2] as any;

  useEffect(() => {
    fetchApi(`/market/${marketType}`).then((data) =>
      setMarketData((value) => {
        const newData = { ...value };
        newData[marketType] = data;
        return newData;
      })
    );
  }, [location]);

  useEffect(() => {
    const websocket = websocketApi("/markets");

    websocket.addEventListener("message", (event) => {
      const json = JSON.parse(event.data);

      setMarketData((value) => {
        const newData = { ...value };
        newData[json.market] = json.data;

        return newData;
      });
    });

    return () => websocket.close();
  }, []);

  return (
    <div style={{ color: "white" }}>
      <Chart
        width={1300}
        height={600}
        data={Object.entries(marketData[marketType] ?? []).reduce(
          (prev, current) => {
            (prev as any)[current[0]] = current[1].history;
            return prev;
          },
          {}
        )}
      />
    </div>
  );
};

export default Market;
