import useAuthorization from "../../hooks/useAuthorization";
import Button from "../button";
import { useModals } from "../../hooks/useModals";
import LoginModal from "../../modals/login";
import colors from "../../config/colors";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.webp";
import useLayout from "../../hooks/useLayout";
import { LogIn } from "lucide-react";
import InvestorActionsSection from "./sections/investorActions";
import SearchSection from "./sections/search/search";

const Navbar = () => {
  const [authorization] = useAuthorization();
  const layout = useLayout();
  const navigate = useNavigate();
  const modals = useModals();

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: colors.secondary(),
        width: `calc(100vw - ${layout.navbar.horizontalPadding * 2}px)`,
        padding: `${layout.navbar.verticalPadding}px ${layout.navbar.horizontalPadding}px`,
        height: layout.navbar.height,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 2,
        justifyContent: "space-between",
        gap: "24px",
      }}
    >
      <img
        src={logo}
        style={{
          height: layout.navbar.height,
          width: layout.navbar.height,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
        alt="Investment Capital Logo"
      />

      <SearchSection />

      {authorization ? (
        <InvestorActionsSection />
      ) : (
        <Button
          text="Login"
          onClick={() => modals?.add(LoginModal)}
          icon={<LogIn />}
        />
      )}
    </div>
  );
};

export default Navbar;
