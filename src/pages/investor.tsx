import { useLocation, useParams } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";
import useWebsocketApi from "../hooks/useWebsocketApi";
import { useEffect, useState } from "react";
import PublicInvestor from "../types/publicInvestor";

const Investor = (): JSX.Element => {
  const id = useParams().id as string;
  const location = useLocation();
  const fetchApi = useFetchApi();
  const websocketApi = useWebsocketApi();
  const [investor, setInvestor] = useState<PublicInvestor>();

  useEffect(() => {
    fetchApi(`/investor/${id}`).then(setInvestor);

    const websocket = websocketApi(`/investor/${id}`);

    websocket.addEventListener("message", (event) => {
      setInvestor(JSON.parse(event.data));
    });

    return () => websocket.close();
  }, [location]);

  return <div style={{ color: "white" }}>{JSON.stringify(investor)}</div>;
};

export default Investor;
