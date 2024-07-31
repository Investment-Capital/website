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
      let loginData;

      try {
        loginData = await fetchApi("/auth/login", {
          method: "POST",
          headers: new Headers({
            "content-type": "Application/json",
          }),
          body: JSON.stringify({
            code,
          }),
        });
      } catch {
        window.location.href = discordLoginURL;
        return;
      }

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
      <h1>Welcome, {userData.displayName}</h1>
    </div>
  ) : (
    "Loading"
  );
};

export default Login;
