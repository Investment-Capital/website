import { useEffect, useState } from "react";
import useFetchApi from "../hooks/useFetchApi";

const API = (): React.ReactNode => {
  const fetchApi = useFetchApi();
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    fetchApi("/routes").then(setRoutes);
  }, []);

  return <div style={{ color: "white" }}>{JSON.stringify(routes)}</div>;
};

export default API;
