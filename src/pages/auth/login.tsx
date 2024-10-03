import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";
import SavedUser from "../../types/savedUser";

const Login = () => {
  const location = useLocation();
  const naviagte = useNavigate();
  const fetchApi = useFetchApi();
  const code = new URLSearchParams(location.search).get("code");
  const error = new URLSearchParams(location.search).get("error");

  const [authorization, setAuthorization] = useLocalStorage(
    "authorization",
    null
  );
  const [userData, setUserData] = useState<SavedUser | null>(null);

  const discordLoginURL = `https://discord.com/oauth2/authorize?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=${window.location.href}&response_type=code&scope=identify`;

  useEffect(() => {
    if (error) {
      naviagte("/");
      return;
    }

    if (!code) {
      window.location.href = discordLoginURL;
      return;
    }

    (async () => {
      const loginData = await fetchApi("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          code,
        }),
      });

      setAuthorization(loginData.authorization);

      setUserData({
        displayName: loginData.displayName,
        username: loginData.username,
        id: loginData.id,
        avatar: loginData.avatar,
      });
    })();
  }, [location]);

  return userData && authorization ? (
    <div
      style={{
        width: "40rem",
        display: "flex",
        backgroundColor: "red",
      }}
    >
      <img src={userData.avatar} />
      <h1>Welcome {userData.username}</h1>
    </div>
  ) : (
    "Loading"
  );
};

export default Login;
