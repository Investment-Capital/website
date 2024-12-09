import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../buttons/button";
import useFetchApi from "../../hooks/useFetchApi";
import SavedUser from "../../types/savedUser";
import useDeviceWidth from "../../hooks/useDeviceWidth";

const UserIcon = (): React.ReactNode => {
  const [authorization] = useLocalStorage<null | string>("authorization", null);
  const [user, setUser] = useState<SavedUser | null>(null);
  const mobile = useDeviceWidth((width) => width <= 1400);
  const navigate = useNavigate();
  const fetchApi = useFetchApi();

  useEffect(() => {
    if (!authorization) return;

    fetchApi("/account/user").then(setUser);
  }, [authorization]);

  return !authorization ? (
    <Button
      text="Login"
      onClick={() => navigate("/auth/login")}
      color="rgb(80,80,80, 0.6)"
      styles={{
        margin: mobile ? "10px 0" : "0 10px",
        transition: "background-color 0.25s",
      }}
      hoveredStyles={{
        backgroundColor: "rgb(80,80,80, 0.9)",
      }}
    />
  ) : user ? (
    <img
      src={user.avatar}
      onClick={() => navigate("/account/portfolio")}
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
