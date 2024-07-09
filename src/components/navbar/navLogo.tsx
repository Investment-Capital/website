import { useNavigate } from "react-router-dom";
import icon from "../../public/icon.webp";
import useDeviceWidth from "../../hooks/useDeviceWidth";

const NavLogo = (): JSX.Element => {
  const navigate = useNavigate();
  const mobile = useDeviceWidth((width) => width <= 1400);

  return (
    <img
      alt="Investment Capital Logo"
      src={icon}
      onClick={() => location.pathname !== "/" && navigate("/")}
      style={{
        borderRadius: "50%",
        cursor: "pointer",
        margin: mobile ? "10px 0" : "0 10px",
        height: "50px",
        width: "50px",
      }}
    />
  );
};

export default NavLogo;
