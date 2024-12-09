import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useFetchApi from "../../hooks/useFetchApi";
import SavedUser from "../../types/savedUser";

const Login = (): React.ReactNode => {
  const location = useLocation();
  const naviagte = useNavigate();
  const fetchApi = useFetchApi();
  const code = new URLSearchParams(location.search).get("code");
  const error = new URLSearchParams(location.search).get("error");

  const [authorization, setAuthorization] = useLocalStorage<string | null>(
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

    fetchApi("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        code,
      }),
    }).then(
      (
        result: SavedUser & {
          authorization: string;
        }
      ) => {
        setAuthorization(result.authorization);
        setUserData(result);
      }
    );
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
    <p>Loading</p>
  );
};

export default Login;
