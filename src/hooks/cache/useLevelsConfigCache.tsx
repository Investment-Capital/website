import { createContext, useContext, useEffect, useState } from "react";
import { Levels } from "investmentcapital.js";
import Container from "../../types/container";
import LevelConfig from "investmentcapital.js/dist/types/levelConfig";

const LevelsConfigCacheContext = createContext<LevelConfig[] | null>(null);

export const LevelsConfigCacheProvider = ({ children }: Container) => {
  const [data, setData] = useState<LevelConfig[] | null>(null);
  console.log(data);

  useEffect(() => {
    Levels.config().then(setData);

    Levels.webSocket().onMessage((message) => {
      setData((data) => {
        if (!data) return null;
        const previous = data.find((config) => config.level == message.level);

        if (!previous) return [...data, message];
        return data.map((config) =>
          config.level == message.level ? message : config,
        );
      });
    });
  }, []);

  return (
    <LevelsConfigCacheContext.Provider value={data}>
      {children}
    </LevelsConfigCacheContext.Provider>
  );
};

export const useLevelsConfigCache = () => {
  return useContext(LevelsConfigCacheContext);
};
