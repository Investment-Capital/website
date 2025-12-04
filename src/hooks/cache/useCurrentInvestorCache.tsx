import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Investor, Investors } from "investmentcapital.js";
import Container from "../../types/container";

const CurrentInvestorContext = createContext<Investor | null | undefined>(null);

export const CurrentInvestorCacheProvider = ({ children }: Container) => {
  const [data, setData] = useState<Investor | null | undefined>();
  const [authorization] = useLocalStorage<string>("authorization");

  useEffect(() => {
    if (!authorization) return setData(undefined);
    setData(null);

    const [id] = authorization.split(" ");
    const websocket = Investors.webSocket(id);

    Investors.lookup(id).then(setData);
    websocket.onMessage(setData);

    return websocket.close;
  }, [authorization]);

  return (
    <CurrentInvestorContext.Provider value={data}>
      {children}
    </CurrentInvestorContext.Provider>
  );
};

export const useCurrentInvestorCache = () => {
  return useContext(CurrentInvestorContext);
};
