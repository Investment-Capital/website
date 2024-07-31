import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../buttons/button";
import useFetchApi from "../../hooks/useFetchApi";
import SavedUser from "../../types/savedUser";
import useDeviceWidth from "../../hooks/useDeviceWidth";

const UserIcon = () => {
  const [authorization] = useLocalStorage("authorization", null);
  const mobile = useDeviceWidth((width) => width <= 1400);
  const [user, setUser] = useState<SavedUser | null>(null);
  const navigate = useNavigate();
  const fetchApi = useFetchApi();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      if (!authorization) return;

      setUser(
        await fetchApi("/account/user", {
          headers: new Headers({
            authorization,
          }),
        })
      );
    })();
  }, [authorization]);

  return !authorization ? (
    <Button
      text="Login"
      onClick={() =>
        location.pathname !== "auth/login" && navigate("/auth/login")
      }
      color="rgb(80,80,80, 0.6)"
      styles={{
        margin: mobile ? "10px 0" : "0 10px",
      }}
      hoveredStyles={{
        backgroundColor: "rgb(80,80,80, 0.9)",
      }}
    />
  ) : user ? (
    <img
      src={user.avatar}
      style={{
        backgroundColor: "rgb(80,80,80, 0.6)",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        cursor: "pointer",
        margin: mobile ? "10px 0" : "0 10px",
      }}
    />
  ) : (
    <div
      style={{
        backgroundColor: "rgb(80,80,80, 0.6)",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        cursor: "pointer",
        margin: mobile ? "10px 0" : "0 10px",
      }}
    />
  );
};

export default UserIcon;
