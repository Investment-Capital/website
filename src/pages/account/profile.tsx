import { useEffect, useState } from "react";
import useFetchApi from "../../hooks/useFetchApi";
import { useLocalStorage } from "@uidotdev/usehooks";
import Investor from "../../types/investor";

const AccountProfile = () => {
  const [data, setData] = useState<Investor | null>(null);
  const [authorization] = useLocalStorage("authorization", null);
  const fetchApi = useFetchApi();

  useEffect(() => {
    fetchApi("/account/data").then(setData);
  }, [authorization]);

  return (
    data && (
      <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>{data.user.username}</h1>
        <img src={data.user.avatar} style={{ height: "100px" }} />
        {Object.entries(data).map(([key, data]) => {
          if (typeof data !== "string" && typeof data !== "number") return;

          return (
            <p>
              {key}: {data}
            </p>
          );
        })}
      </div>
    )
  );
};

export default AccountProfile;
