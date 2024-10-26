import getApiURL from "../functions/getApiURL";
import { useLocalStorage } from "@uidotdev/usehooks";
import websocketApi from "../functions/websocketApi";

const useWebsocketApi = () => {
  const [authorization] = useLocalStorage<string | null>("authorization", null);

  return (path: string) =>
    websocketApi(
      getApiURL(path, true) +
        (path.includes("?") ? "&" : "?") +
        `authorization=${authorization}`
    );
};

export default useWebsocketApi;
