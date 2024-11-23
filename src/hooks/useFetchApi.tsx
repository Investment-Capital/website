import { useNavigate } from "react-router";
import fetchApi from "../functions/fetchApi";
import getApiURL from "../functions/getApiURL";
import { useLocalStorage } from "@uidotdev/usehooks";

const useFetchApi = () => {
  const navigate = useNavigate();
  const [authorization, setAuthorization] = useLocalStorage<string | null>(
    "authorization",
    null
  );

  return (path: string, requestData?: RequestInit) =>
    fetchApi(
      getApiURL(path),
      {
        ...requestData,
        headers: {
          ...requestData?.headers,
          "content-type": "application/json",
          ...(authorization && { authorization }),
        },
      },
      () => {
        navigate("/auth/login");
        setAuthorization(null);
      }
    );
};

export default useFetchApi;
