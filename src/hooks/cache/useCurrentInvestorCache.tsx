import { createContext, useContext, useEffect, useState } from "react";
import { Auth, Investor, Investors } from "investmentcapital.js";
import Container from "../../types/container";
import useAuthorization from "../useAuthorization";

const CurrentInvestorContext = createContext<Investor | null | undefined>(null);

export const CurrentInvestorCacheProvider = ({ children }: Container) => {
  const [data, setData] = useState<Investor | null | undefined>();
  const [authorization] = useAuthorization();

  useEffect(() => {
    if (!authorization) return setData(undefined);
    setData(null);

    const id = Auth.investorId(authorization);
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
