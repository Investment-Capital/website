import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";
import { useLocation } from "react-router-dom";

const Market = (): JSX.Element => {
  const fetchApi = useFetchApi();
  const [marketData, setMarketData] = useState<any>();
  const location = useLocation();

  useEffect(() => {
    fetchApi("/market/stocks").then(setMarketData);
  }, [location]);

  return <div style={{ color: "white" }}>{JSON.stringify(marketData)}</div>;
};

export default Market;
