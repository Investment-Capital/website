import { createContext, useContext, useEffect, useState } from "react";
import AccountCache from "../../types/cache/accountCache";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Investors } from "investmentcapital.js";
import Container from "../../types/container";

export const AccountCacheContext = createContext<AccountCache | undefined>(
  undefined
);

export const AccountCacheProvider = ({ children }: Container) => {
  const [data, setData] = useState<AccountCache>();
  const [authorization] = useLocalStorage<string>("authorization");

  useEffect(() => {
    setData(undefined);
    if (!authorization) return;

    const [id] = authorization.split(" ");
    const websocket = Investors.webSocket(id);

    Investors.lookup(id).then(setData);
    websocket.onMessage(setData);

    return websocket.close;
  }, [authorization]);

  return (
    <AccountCacheContext.Provider value={data}>
      {children}
    </AccountCacheContext.Provider>
  );
};

export const useAccountCache = () => {
  return useContext(AccountCacheContext);
};
