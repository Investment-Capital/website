import { useNavigate } from "react-router-dom";
import fetchApi from "../functions/fetchApi";
import getApiURL from "../functions/getApiURL";
import { useLocalStorage } from "@uidotdev/usehooks";

const useFetchApi = () => {
  const navigate = useNavigate();
  const [_, setAuthorization] = useLocalStorage("authorization", null);

  return (path: string, requestData?: RequestInit) =>
    fetchApi(
      getApiURL(path),
      () => {
        navigate("/auth/login");
        setAuthorization(null);
      },
      requestData
    );
};

export default useFetchApi;
