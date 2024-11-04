import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { useLocation } from "react-router-dom";
import useWebsocketApi from "../hooks/useWebsocketApi";
import Markets from "../types/markets/markets";
import Chart from "../components/chart";

const Market = (): JSX.Element => {
  const [marketData, setMarketData] = useState<Partial<Markets>>({});
  const fetchApi = useFetchApi();
  const websocketApi = useWebsocketApi();
  const location = useLocation();
  const marketType: keyof Markets = location.pathname.split("/")[2] as any;

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
        newData[json.market as keyof Markets] = json.data;

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
        data={Object.entries(marketData.stocks ?? []).reduce(
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
