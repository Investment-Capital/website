import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (): JSX.Element => {
  const [_, setAuthorization] = useLocalStorage("authorization", null);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthorization(null);
    navigate("/");
  }, []);

  return <div>Loading</div>;
};

export default Logout;
