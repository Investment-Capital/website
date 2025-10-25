import { useEffect, useState } from "react";
import AccountCache from "../../types/accountCache";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Investors } from "investmentcapital.js";

const useAccountCache = () => {
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

  return data;
};

export default useAccountCache;
