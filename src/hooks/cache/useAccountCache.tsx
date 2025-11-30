import { createContext, useContext, useEffect, useState } from "react";
import AccountCache from "../../types/cache/accountCache";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Investors } from "investmentcapital.js";
import Container from "../../types/container";

const AccountCacheContext = createContext<AccountCache | null | undefined>(
  null
);

export const AccountCacheProvider = ({ children }: Container) => {
  const [data, setData] = useState<AccountCache | null | undefined>();
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
    <AccountCacheContext.Provider value={data}>
      {children}
    </AccountCacheContext.Provider>
  );
};

export const useAccountCache = () => {
  return useContext(AccountCacheContext);
};
